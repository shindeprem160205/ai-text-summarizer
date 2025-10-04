// =======================
// Typing Effect (Inline with | separator)
// =======================
const roles = [
  "Python Developer",
  "Data Science Enthusiast",
  "Business Analyst",
  "Problem Solver"
];
let roleIndex = 0;
let charIndex = 0;
const typedText = document.getElementById("typed-text");

function typeEffect() {
  if (charIndex < roles[roleIndex].length) {
    let htmlContent = "";

    // Completed roles with separator
    for (let i = 0; i < roleIndex; i++) {
      htmlContent += roles[i];
      htmlContent += ' <span class="separator">|</span> ';
    }

    // Current role in typing
    htmlContent += roles[roleIndex].substring(0, charIndex + 1);

    typedText.innerHTML = htmlContent;

    charIndex++;
    setTimeout(typeEffect, 100);
  } else {
    roleIndex++;
    charIndex = 0;
    if (roleIndex < roles.length) {
      setTimeout(typeEffect, 800); // next role thoda delay se
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  typeEffect();
});



// =======================
// Back to Top Button
// =======================
const backToTopBtn = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTopBtn.style.display = 'flex';
  } else {
    backToTopBtn.style.display = 'none';
  }
});
backToTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});


// =======================
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let current = "";
  const offset = 120; // navbar ke height ke hisaab se

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - offset;
    const sectionHeight = section.offsetHeight;

    if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});


// particles.js


tsParticles.load("tsparticles", {
  particles: {
    number: { value: 80 },
    color: { value: "#ffffff" },
    shape: { type: "circle" },
    opacity: { value: 0.5 },
    size: { value: 3 },
    move: { enable: true, speed: 2, direction: "none", random: true, straight: false },
    links: { enable: true, color: "#ffffff",opacity: 0.1, distance: 100, width: 0.7 }
  },
  interactivity: {
    events: {
      onHover: { enable: true, mode: "repulse" }, 
      onClick: { enable: true, mode: "push" }
    }
  },
    detectRetina: true,
  background: { color: "transparent" }
});

