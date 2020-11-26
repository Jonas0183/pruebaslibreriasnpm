import './css/style.scss';
import jedliSlider from 'jedlislider/src-webpack/jedlislider.js';
import cookieNoticeJS from "cookie-notice/dist/cookie.notice.min.js";
import 'jedlislider/src-webpack/jedlislider.scss';
import Darkmode from '../../node_modules/darkmode-js/src/darkmode.js';

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
cookies = () =>{
    new cookieNoticeJS({
        'messageLocales': {
            'es': 'Pasa si te apetece ¡¡Tenemos galletas!!',
            'en': 'Come in if you wanna do it, we have cookies!!'
        },
        'buttonLocales': {
            'es': 'Estoy a dieta',
            'en': "I'm on a diet"
        },
        'cookieNoticePosition': 'top',
        'learnMoreLinkEnabled': true,
        'learnMoreLinkHref': './learnMore.html',
        'learnMoreLinkText':{
            'en':'tell me more',
            'es':'dime mas'
        }
    });
}
window.addEventListener('load', cookies);
//  document.querySelector("cookies").addEventListener('beforeInit', () => {
//      console.log("beforeInit");
//  })
//const darkmode = new Darkmode();
//document.querySelector("darkmode.showWidget").addEventListener('beforeInit', () => {
//    console.log("beforeInit");
//})

addDarkmodeWidget = () => {
    new Darkmode().showWidget();
}
window.addEventListener('load', addDarkmodeWidget);