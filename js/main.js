document.addEventListener("DOMContentLoaded", function () {
  const slideContainer = document.querySelector(".slides");
  const slides = document.querySelectorAll(".slide");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  let currentIndex = 0;
  const slideWidth = slides[0].clientWidth;
  function goToSlide(index) {
    currentIndex = index;
    slideContainer.style.transform = `translateX(-${
      slideWidth * currentIndex
    }px)`;

    slides.forEach((slide) => slide.classList.remove("active"));
    slides[currentIndex].classList.add("active");
  }

  function goToNextSlide() {
    if (currentIndex < slides.length - 1) {
      currentIndex++;
    } else {
      currentIndex = 0;
    }
    goToSlide(currentIndex);
  }
function goToPreviousSlide() {
    if (currentIndex > 0) {
      currentIndex--;
    } else {
      currentIndex = slides.length - 1;
    }
    goToSlide(currentIndex);
  }

  prevBtn.addEventListener("click", goToPreviousSlide);
  nextBtn.addEventListener("click", goToNextSlide);

  goToSlide(currentIndex);
});
