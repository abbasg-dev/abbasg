const toggle = document.querySelector(".nav__wrapper__toggle");
const ul = document.querySelector(".nav__wrapper__ul");
const navLinks = document.querySelectorAll(".nav__wrapper__ul__li a");

// Toggle menu on button click
toggle.addEventListener("click", () => {
  ul.classList.toggle("nav__active");
});

// Close menu when clicking on a nav link
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    ul.classList.remove("nav__active");
  });
});

document.addEventListener("DOMContentLoaded", () => {
  document
    .querySelectorAll(".experience__details__description")
    .forEach((desc) => {
      desc.style.height = "0px";
    });

  document.querySelectorAll(".questions__content__answer").forEach((answer) => {
    answer.style.height = "0px";
    answer.style.overflow = "hidden";
    answer.style.transition =
      "height 0.2s ease-in-out, visibility 0s linear 0.2s";
    answer.style.visibility = "hidden";
  });
});

const toggleDescription = (event) => {
  const experience = event.target.closest(".experience"); // Get the parent experience
  const description = experience.querySelector(
    ".experience__details__description"
  );
  const arrowIcon = experience.querySelector(".arrow");

  if (description.classList.contains("open")) {
    // Close only this experience
    description.style.transition =
      "height 0.2s ease-in, visibility 0s linear 0.2s";
    description.style.height = "0px";
    description.style.visibility = "hidden";
    description.classList.remove("open");
    arrowIcon.classList.remove("bi-chevron-down");
    arrowIcon.classList.add("bi-chevron-up");
  } else {
    // Open only this experience
    description.style.height = description.scrollHeight + "px";
    description.style.visibility = "visible";
    description.classList.add("open");
    arrowIcon.classList.remove("bi-chevron-up");
    arrowIcon.classList.add("bi-chevron-down");
  }
};

const toggleAboutMe = (event) => {
  const aboutMeSection = event.target.closest(".questions__content");
  const answer = aboutMeSection.querySelector(".questions__content__answer");
  const arrowIcon = aboutMeSection.querySelector(".arrow");

  if (answer.classList.contains("open")) {
    // Collapse answer
    answer.style.height = "0px";
    answer.style.visibility = "hidden";
    answer.classList.remove("open");
    arrowIcon.classList.remove("bi-chevron-down");
    arrowIcon.classList.add("bi-chevron-up");
  } else {
    // Expand answer
    answer.style.height = answer.scrollHeight + "px";
    answer.style.visibility = "visible";
    answer.classList.add("open");
    arrowIcon.classList.remove("bi-chevron-up");
    arrowIcon.classList.add("bi-chevron-down");
  }
};
