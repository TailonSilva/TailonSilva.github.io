window.onload = function() {
    const carousel = document.querySelector('.carousel');
    let index = 0;

    function showNextImage() {
        index = (index + 1) % carousel.children.length;
        carousel.style.transform = `translateX(-${index * 100}%)`;
    }

    setInterval(showNextImage, 3000);
};