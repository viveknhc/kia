const imgElement = document.querySelector('.fade-img');
const images = [
    'assets/images/counter-img1.png',
    'assets/images/counter-img2.png',
    'assets/images/counter-img3.png',
    'assets/images/counter-img4.png',
   
];
let index = 0;

setInterval(() => {
    imgElement.classList.add('hide');

    setTimeout(() => {
        index = (index + 1) % images.length; 
        imgElement.src = images[index];
        imgElement.classList.remove('hide');
    }, 300);
}, 3000); 



// slider

var swiper = new Swiper(".mySwiper", {
    // centeredSlides: true,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    speed: 1500,
    grabCursor: true,
    spaceBetween: 5,

    breakpoints: {
        640: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 2,
        },
        999: {
            slidesPerView: 3,
        },
        1024: {
            slidesPerView: 2,
            spaceBetween: 40
        }
    },
    navigation: {
        nextEl: ".custom-next",
        prevEl: ".custom-prev",
    },
});

jQuery(document).ready(function($) {
    "use strict";
    //  TESTIMONIALS CAROUSEL HOOK
    $('#customers-testimonials').owlCarousel({
        loop: true,
        center: true,
        items: 3,
        margin: 0,
        autoplay: true,
        dots:true,
        autoplayTimeout: 8500,
        smartSpeed: 450,
        responsive: {
          0: {
            items: 1
          },
          768: {
            items: 2
          },
          1170: {
            items: 3
          }
        }
    });
});
