let currentSlide = 0;
const topics = [
  { id: 1, image: "images/topic1.jpg", title: "Topic 1" },
  { id: 2, image: "images/topic2.jpg", title: "Topic 2" },
  { id: 3, image: "images/topic3.jpg", title: "Topic 3" },
  { id: 4, image: "images/topic4.jpg", title: "Topic 4" },
];

// スライドの自動切り替え
function startAutoSlide() {
  setInterval(() => {
    currentSlide = (currentSlide + 1) % topics.length;
    updateSlide();
  }, 5000); // 5秒ごとにスライドを切り替え
}

// ドットクリックでスライド変更
document.addEventListener("DOMContentLoaded", () => {
  const dots = document.querySelectorAll(".dots .dot");
  dots.forEach((dot) => {
    dot.addEventListener("click", (event) => {
      currentSlide = parseInt(event.target.getAttribute("data-index"), 10);
      updateSlide();
    });
  });
});

// スライドの更新
function updateSlide() {
  const slideElement = document.querySelector(".hero-section .slide");
  const slideImage = slideElement.querySelector("img");
  const slideTitle = slideElement.querySelector("h2");

  slideImage.src = topics[currentSlide].image;
  slideTitle.textContent = topics[currentSlide].title;

  // ドットの更新
  const dots = document.querySelectorAll(".dots .dot");
  dots.forEach((dot, index) => {
    dot.classList.toggle("active", index === currentSlide);
  });
}

// 初期化
startAutoSlide();
