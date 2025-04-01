// Carousel buttons
document.addEventListener("DOMContentLoaded", function () {
    const prevBtns = document.querySelectorAll(".carousel-btn.prev");
    const nextBtns = document.querySelectorAll(".carousel-btn.next");
    const carousels = document.querySelectorAll(".carousel-container");
  
    carousels.forEach((carousel, index) => {
      const prevBtn = prevBtns[index];
      const nextBtn = nextBtns[index];
  
      if (prevBtn && nextBtn) {
        prevBtn.addEventListener("click", () => {
          carousel.scrollBy({
            left: -300,
            behavior: "smooth"
          });
        });
  
        nextBtn.addEventListener("click", () => {
          carousel.scrollBy({
            left: 300,
            behavior: "smooth"
          });
        });
      }
    });
  });
  