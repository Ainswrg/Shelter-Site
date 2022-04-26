/* eslint-disable @typescript-eslint/no-use-before-define */
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
let currentPage = 1;

const SwiperPets = () => {
  const mySwiper = new Swiper('.slider-pet__cards', {
    modules: [Navigation, Grid, Pagination],

    on: {
      init: function (sw) {
        console.log('init pets');
      },
    },

    pagination: {
      el: '.swiper-pagination',
      type: 'custom',
    },
    loop: false,
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
  const length = mySwiper.slides.length;
  let numberSlides = 0;
  resChange(mySwiper);

  btnPrev1.addEventListener('click', () => {
    mySwiper.setProgress(0, 200);
    currentPage = 1;
    mySliderAllSlides.innerHTML = currentPage;
    inActiveBtn();
  });
  btnPrev.addEventListener('click', () => {
    currentPage--;
    mySliderAllSlides.innerHTML = currentPage;
    inActiveBtn();
  });
  btnNext.addEventListener('click', () => {
    currentPage++;
    mySliderAllSlides.innerHTML = currentPage;
    inActiveBtn();
  });
  btnNext1.addEventListener('click', () => {
    currentPage = numberSlides;
    mySliderAllSlides.innerHTML = currentPage;
    mySwiper.setProgress(1, 200);
    inActiveBtn();
  });

  function inActiveBtn(number = 0) {
    if (currentPage <= 1) {
      btnPrev.classList.add('inactive');
      btnPrev1.classList.add('inactive');
    } else {
      btnPrev.classList.remove('inactive');
      btnPrev1.classList.remove('inactive');
    }
    if (currentPage == numberSlides - number) {
      btnNext.classList.add('inactive');
      btnNext1.classList.add('inactive');
    } else {
      btnNext.classList.remove('inactive');
      btnNext1.classList.remove('inactive');
    }
  }

  function resChange(sw) {
    let vw = window.innerWidth;
    if (vw <= 768) {
      //делим на кол-во рядов
      numberSlides = Math.floor(length / 3);
      //делим на кол-во столбов
      numberSlides = Math.floor(numberSlides / 1);
    }
    if (vw > 768 && vw <= 1279) {
      //делим на кол-во рядов
      numberSlides = Math.floor(length / 3);
      //делим на кол-во столбов
      numberSlides = Math.floor(numberSlides / 2);
    }
    if (vw > 1279) {
      //делим на кол-во рядов
      numberSlides = Math.floor(length / 2);
      //делим на кол-во столбов
      numberSlides = Math.floor(numberSlides / 4);
    }
  }
  mySwiper.on('slideChange', (sw) => {
    resChange(sw);
  });
};
export default SwiperPets;
