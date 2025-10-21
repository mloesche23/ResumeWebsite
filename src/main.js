

function scrollToSection(selector) {
  const headerGap = 80;
  const section = document.querySelector(selector);
  const sectionTop = section.getBoundingClientRect().top + window.scrollY;
  const offsetTop = sectionTop - headerGap;

  window.scrollTo({
    top: offsetTop,
    behavior: 'smooth'
  });
}

document.getElementById("experience-button").addEventListener("click", () => {
  scrollToSection(".work-experience-full");
});

document.getElementById("education-button").addEventListener("click", () => {
  scrollToSection(".education");
});

document.getElementById("projects-button").addEventListener("click", () => {
  scrollToSection(".projects");
});

document.getElementById("skills-button").addEventListener("click", () => {
  scrollToSection(".skills");
});