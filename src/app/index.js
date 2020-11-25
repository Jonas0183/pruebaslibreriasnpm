import './css/style.scss';
import jedliSlider from 'jedlislider/src-webpack/jedlislider.js';
import 'jedlislider/src-webpack/jedlislider.scss';

let sliderMain = new jedliSlider(document.querySelector("[data-item='slider-main']"), {
    "mode": "continuous",
    "slidesWidth": "equal",
    "visibleSlides": "2",
    "speed": "5",
    "direction": "left",
    "pauseOnHover": "true"
})
document.querySelector("sliderMain").addEventListener('beforeInit', () => {
    console.log("beforeInit");
})