# ai-text-summarizer
An AI-powered web application that automatically summarizes long texts and documents into concise, meaningful summaries. Built using Streamlit and Hugging Face Transformers, this project demonstrates how modern NLP models like facebook/bart-large-cnn can be applied to real-world tasks.

for running this projects make sure these libraries are installed and are up to date
import streamlit as st 
from transformers import pipeline
import docx2txt
import PyPDF2

after these are installed and code is written make sure u save the file in your IDE 

then use this command in terminal

streamlit run textsummarization.py
if u change the file name make sure u write correct file name while hosting not it will throw error
