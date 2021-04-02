const scrollBtn = document.querySelectorAll(".scroll");
const allSections = document.querySelectorAll(".section");
const scrollToHeader = document.querySelector("#header");
const portfolioScrollBtn = document.querySelector(".porfolio-scroll");

// Section Scroll Reveal

const sectionReveal = function (entries, observer) {
  const [entry] = entries;
  console.log(entry);

  if (!entry.isIntersecting) return;
  entry.target.classList.remove("hide-section");
};

const sectionObserver = new IntersectionObserver(sectionReveal, {
  root: null,
  threshold: 0.2,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add("hide-section");
});

// Button Smooth Scroll

scrollBtn.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const id = this.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  });
});

//Portfolio Button Smooth Scroll

portfolioScrollBtn.addEventListener("click", function (e) {
  e.preventDefault();
  scrollToHeader.scrollIntoView({ behavior: "smooth" });
});
