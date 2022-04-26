/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import Swiper, { Navigation, Grid, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/grid';

const mySliderAllSlides = document.querySelector('.swiper-pagination');
const btnPrev = document.querySelector('.slider-pet__paginator-left1');
const btnPrev1 = document.querySelector('.slider-pet__paginator-left2');
const btnNext = document.querySelector('.slider-pet__paginator-right1');
const btnNext1 = document.querySelector('.slider-pet__paginator-right2');

const SwiperPets = () => {
  const mySwiper = new Swiper('.slider-pet__cards', {
    modules: [Navigation, Grid, Pagination],

    on: {
      init: function () {
        console.log('init pets');
        mySliderAllSlides.innerHTML = '1';
      },
      slideChange: function (sw) {
        const currentSlide = ++sw.realIndex;
        const isEnd = sw.isEnd;
        mySliderAllSlides.innerHTML = currentSlide;

        let vw = window.innerWidth;
        if (vw <= 768) {
          const length = sw.slides.length;
          const numberSlides = Math.floor(length / 3);
          btnNext1.addEventListener('click', () => {
            sw.slideTo(numberSlides, 200);
          });
        }
        if (vw <= 1279) {
          const length = sw.slides.length;
          const numberSlides = Math.floor(length / 2);
          btnNext1.addEventListener('click', () => {
            sw.slideTo(numberSlides, 200);
          });
        }

        if (currentSlide > 1) {
          btnPrev.classList.remove('inactive');
          btnPrev1.classList.remove('inactive');
        } else {
          btnPrev.classList.add('inactive');
          btnPrev1.classList.add('inactive');
        }
        if (!isEnd) {
          btnNext.classList.remove('inactive');
          btnNext1.classList.remove('inactive');
        } else {
          btnNext.classList.add('inactive');
          btnNext1.classList.add('inactive');
        }
      },
    },

    pagination: {
      el: '.swiper-pagination',
      type: 'custom',
    },
    loop: true,
    navigation: {
      nextEl: '.slider-pet__paginator-right1',
      prevEl: '.slider-pet__paginator-left1',
    },
    observer: true,
    observeSlideChildren: true,
    updateOnWindowResize: true,
    breakpoints: {
      1280: {
        grid: {
          fill: 'column',
          rows: 2,
        },
        slidesPerView: 4,
        slidesPerGroup: 4,
        spaceBetween: 25,
      },
      768: {
        grid: {
          fill: 'column',
          rows: 3,
        },
        slidesPerView: 2,
        slidesPerGroup: 2,
      },
      320: {
        grid: {
          fill: 'column',
          rows: 3,
        },
        slidesPerView: 1,
        slidesPerGroup: 1,
      },
    },
  });

  btnPrev1.addEventListener('click', () => {
    mySwiper.slideTo(1, 200);
  });
  // btnNext1.addEventListener('click', () => {
  //   mySwiper.slideTo(1, 200);
  // });
};
export default SwiperPets;

// swiperMain.on('slideChange', function () {
//   console.log('slide changed');
// });
// const mySliderAllSlides = document.querySelector('.swiper-pagination');
// console.log('woork', mySliderAllSlides);
// const mySliderCurrentSlide = document.querySelector('.pagination-menu__current');

// mySliderAllSlides.innerHTML = '0' + (swiperMain.slides.length - 2);
// mySliderAllSlides.innerHTML = '1';

// eslint-disable-next-line prefer-arrow-callback
// swiperMain.on('slideChange', () => {
//   const currentSlide = ++swiperMain.realIndex;
//   mySliderAllSlides.innerHTML = '1' + currentSlide;
// });
