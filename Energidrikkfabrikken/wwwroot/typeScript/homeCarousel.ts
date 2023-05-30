const carousel = document.getElementById("carousel");
const carouselImg1 = document.getElementById("carouselImg1");
const carouselLeftBtn = document.getElementById("carouselLeftBtn");
const carouselRightBtn = document.getElementById("carouselRightBtn");

carouselRightBtn.addEventListener("click", () => {
    const slideWidth = carouselImg1.clientWidth;
    carousel.scrollLeft += slideWidth + (carousel.clientWidth*0.02);
});

carouselLeftBtn.addEventListener("click", () => {
    const slideWidth = carouselImg1.clientWidth;
    carousel.scrollLeft -= slideWidth + (carousel.clientWidth*0.02);
});