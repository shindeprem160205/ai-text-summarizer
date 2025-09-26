import streamlit as st
from transformers import pipeline
import docx2txt
import PyPDF2

# Cache the model so it's loaded only once
st.set_page_config(page_title="AI Text Summarizer", layout="wide")
@st.cache_resource
def load_model():
    return pipeline("summarization", model="facebook/bart-large-cnn")

model = load_model()


st.sidebar.title(" AI POWERED TEXT SUMMARIZER")
st.sidebar.subheader("Summarize your text or upload a file")

# File upload
uploaded_file = st.file_uploader("Upload a TXT, DOCX, or PDF file", type=["txt", "docx", "pdf"])
input_text = ""

# Read uploaded file
if uploaded_file:
    file_type = uploaded_file.name.split('.')[-1]
    if file_type == "txt":
        input_text = str(uploaded_file.read(), "utf-8")
    elif file_type == "docx":
        input_text = docx2txt.process(uploaded_file)
    elif file_type == "pdf":
        reader = PyPDF2.PdfReader(uploaded_file)
        input_text = ''.join([page.extract_text() for page in reader.pages])

# Or manual text input
if not input_text:
    input_text = st.text_area("Or enter text manually", "Paste your text here", height=200)

# Slider for summary length (percentage of original text)
summary_ratio = st.slider("Summary length ratio", min_value=10, max_value=100, value=30, step=5)

# Summarize button
if st.button("📄 Summarize"):
    if input_text.strip():
        # Run summarization
        result = model(input_text, max_length=int(len(input_text.split()) * summary_ratio / 100), min_length=20, do_sample=False)
        summary = result[0]['summary_text']

        # Display summary
        st.success("✅ Summary Generated")
        st.write("### Original Text")
        st.write(input_text)
        st.write("### Summary")
        st.write(summary)

        # Download button
        st.download_button("Download Summary", summary, file_name="summary.txt", mime="text/plain")
    else:
        st.warning("Please provide input text or upload a valid file.")
