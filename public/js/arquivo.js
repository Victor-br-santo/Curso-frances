const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.next');
const prevButton = document.querySelector('.prev');
let currentIndex = 0;

function updateSlide(position) {
  track.style.transform = `translateX(-${position * 100}%)`;
}

nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % slides.length;
  updateSlide(currentIndex);
});

prevButton.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateSlide(currentIndex);
});

// Avanço automático
setInterval(() => {
  currentIndex = (currentIndex + 1) % slides.length;
  updateSlide(currentIndex);
}, 5000);

document.addEventListener("scroll", function () {
  const card = document.querySelector(".fade-in");
  const pos = card.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  if (pos < windowHeight - 100) {
    card.classList.add("show");
  }
});

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {
  item.querySelector(".faq-question").addEventListener("click", () => {

    // fecha os outros itens
    faqItems.forEach(other => {
      if (other !== item) other.classList.remove("active");
    });

    // alterna o clicado
    item.classList.toggle("active");
  });
});

const hint = document.querySelector('.swipe-hint');
const carousel = document.querySelector('.itens-carousel');

let removed = false;

carousel.addEventListener('scroll', () => {
  if (!removed && carousel.scrollLeft > 10) {
    hint.style.display = "none";
    removed = true;
  }
});