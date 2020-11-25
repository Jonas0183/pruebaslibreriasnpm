import './css/style.scss';
import jedliSlider from 'jedlislider/src-webpack/jedlislider.js';
import cookieNoticeJS from "cookie-notice/dist/cookie.notice.min.js";
import 'jedlislider/src-webpack/jedlislider.scss';

const sliderMain = new jedliSlider(document.querySelector("[data-item='slider-main']"), {
    "mode": "continuous",
    "slidesWidth": "equal",
    "visibleSlides": "2",
    "speed": "5",
    "direction": "left",
    "pauseOnHover": "true"
})
// //comentado el codigo para pasar manualmente los elementos del slider
// const sliderMain = new jedliSlider(document.querySelector("[data-item='slider-main']"), {
//     "mode": "default",
//     "slidesWidth": "equal",
//     "infinite": "true",
//     "visibleSlides": 1,
//     "easing": "ease-out",
//     "slidesToScroll": 1,
//     "speed": "600",
//     "preventOverScroll": "false",
//     "animationChange": "fade"

// })
document.querySelector("sliderMain").addEventListener('beforeInit', () => {
    console.log("beforeInit");
})
// document.querySelector("[data-action='slider-prev']").addEventListener("click", () => {
//     sliderCustomEasing.slidePrev();
// })
// document.querySelector("[data-action='slider-next']").addEventListener("click", () => {
//     sliderCustomEasing.slideNext();
// })

const cookies = new cookieNoticeJS();

document.querySelector("cookies").addEventListener('beforeInit', () => {
    console.log("beforeInit");
})
