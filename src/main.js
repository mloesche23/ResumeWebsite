const experience = document.getElementById('work-experience-full');
const experienceButton = document.getElementById('experience-button');

function experienceBack() {
  experience.scrollIntoView({
    behavior: 'smooth',
  });
}

experienceButton.addEventListener('click', experienceBack);