import Swiper from "swiper";
import {
    Navigation,
    Autoplay,
    Pagination,
    EffectCreative,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-creative";

export default function initTestimonialSwiper() {
    new Swiper(".swiper", {
        modules: [Navigation, Autoplay, Pagination, EffectCreative],
        loop: true,
        slidesPerView: 1,
        spaceBetween: 30,
        speed: 2000,
        grabCursor: true,

        // Creative 3D sliding effect
        effect: "creative",
        creativeEffect: {
            prev: {
                translate: ["-120%", 0, -500],
                opacity: 0.5,
                scale: 0.85,
            },
            next: {
                translate: ["120%", 0, -500],
                opacity: 0.5,
                scale: 0.85,
            },
        },

        autoplay: {
            delay: 1000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true, // pauses on hover
        },

        navigation: {
            nextEl: ".nav-next-layout",
            prevEl: ".nav-prev-layout",
        },

        pagination: {
            el: ".swiper-pagination",
            clickable: true,
            dynamicBullets: true,
        },
    });
}
