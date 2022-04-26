/* eslint-disable @typescript-eslint/no-use-before-define */
import 'normalize.css';
import './index.scss';
import './pages/main/index';
import './js';
import { SwiperMain, SwiperPets } from './js';
import getData from './js/data';
import { random } from './js/random';
// import { Modal } from './js/Modal';
import { Card } from './js/Card';
import { CardModule } from './js/CardModule';

const dataCards = getData();
let dataArr = '';
const mediaQuery = window.matchMedia('(min-width: 1280px)');
const mediaQuery1 = window.matchMedia('(max-width: 1279px)');
const mediaQuery2 = window.matchMedia('(max-width: 767px)');

if (mediaQuery.matches) {
  dataArr = random(dataCards, 6, 0);
}
if (mediaQuery1.matches) {
  dataArr = random(dataCards, 8, 2);
}
if (mediaQuery2.matches) {
  dataArr = random(dataCards, 16, 5);
}

const mainPage = document.querySelector('#main-page');
const petsPage = document.querySelector('#pets-page');

window.onload = () => {
  //render card

  if (dataArr) {
    renderDataToDom();
  }
  if (mainPage) {
    SwiperMain();
    addCardClickerHandler();
  }
  if (petsPage) {
    SwiperPets();
    addCardClickerHandler();
  }

  // generate Base Modal from Modal Class
  // addToolsClickHandler();
};

function renderDataToDom() {
  const cardsWrapper = getCardsWrapper();
  generateCards(dataArr).forEach((card) => {
    cardsWrapper.append(card.generateCard());
  });
}

function getCardsWrapper() {
  const cardsContainer = document.querySelector('.cards-wrapper');
  cardsContainer.innerHTML = '';
  return cardsContainer;
}

function generateCards(data) {
  const cards = [];
  data.forEach((card) => {
    cards.push(new Card(card));
  });
  return cards;
}

function addCardClickerHandler() {
  document.querySelector('.cards-wrapper').addEventListener('click', (e) => {
    if (e.target.closest('.card')) {
      const clickedCardName = e.target.closest('.card').getAttribute('data-id');
      const clickedCardData = getClickedData(clickedCardName);

      renderCardModalWindow(clickedCardData);
    }
  });
}

function getClickedData(name) {
  return dataArr.find((card) => card.name == name);
}

function renderCardModalWindow(card) {
  const modal = new CardModule('card-modal', card);
  modal.renderModal();
}
