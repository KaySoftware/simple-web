import {Swiper, SwiperOptions, Autoplay, Pagination, Navigation, EffectFade} from 'swiper'

Swiper.use([Autoplay, Pagination, Navigation, EffectFade])

export function mainSlider() {
    const params: SwiperOptions = {
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
            renderBullet: (index, className) => {
                return `<span class="${className}"></span>`
            }
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        }
    }

    return new Swiper('.main-slider', params)
}

export function carouselSlider() {
    const params: SwiperOptions = {
        loop:true,
        slidesPerView: 1,
        spaceBetween: 30,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        },
        breakpoints: {
            768: {
               slidesPerView: 3,
                spaceBetween: 30,
            }
        }
    }
    return new Swiper('.main-carousel', params)
}

