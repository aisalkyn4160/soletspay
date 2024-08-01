const swiper = new Swiper('.banner.swiper', {
    loop: true,
    effect: 'cube',
    pagination: {
    el: '.swiper-pagination',
    },
    autoplay: {
        delay: 5000,
    }
});

const bullets = document.querySelectorAll(".swiper-pagination-bullet");
bullets.forEach((bullet, index) => {
    bullet.addEventListener("click", () => {
        swiper.slideTo(index);
    })
})