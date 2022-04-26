/* eslint-disable @typescript-eslint/no-use-before-define */
import 'normalize.css';
import './index.scss';
import './pages/main/index';
import './js';
import { SwiperMain, SwiperPets } from './js';
import getData from './js/carouselData';
// import { Modal } from './js/Modal';
import { Card } from './js/Card';
import { CardModule } from './js/CardModule';

const dataCards = getData();
const mainPage = document.querySelector('#main-page');
const petsPage = document.querySelector('#pets-page');

window.onload = () => {
  console.log('Complete');
  //render card
  if (dataCards) {
    renderDataToDom();
    console.log(dataCards);
  }
  if (mainPage) {
    console.log(mainPage);
    SwiperMain();
    addCardClickerHandler();
  }
  if (petsPage) {
    console.log(petsPage);
    SwiperPets();
    addCardClickerHandler();
  }

  // generate Base Modal from Modal Class
  // addToolsClickHandler();
};

function renderDataToDom() {
  const cardsWrapper = getCardsWrapper();
  generateCards(dataCards).forEach((card) => {
    cardsWrapper.append(card.generateCard());
    console.log('generate');
  });
}

function getCardsWrapper() {
  const cardsContainer = document.querySelector('.cards-wrapper');
  console.log(cardsContainer, 'asda');
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

// function addToolsClickHandler() {
//   document.querySelectorAll('.card').forEach((card) => {
//     card.addEventListener('click', () => {
//       generateToolsModal();
//     });
//   });
// }

// function generateToolsModal() {
//   renderModalWindow('content');
// }

// function renderModalWindow(content) {
//   const modal = new Modal('tools-modal');
//   modal.buildModal(content);
// }

function addCardClickerHandler() {
  document.querySelector('.cards-wrapper').addEventListener('click', (e) => {
    console.log(e.target.className);
    if (e.target.closest('.card')) {
      const clickedCardName = e.target.closest('.card').getAttribute('data-id');
      const clickedCardData = getClickedData(clickedCardName);

      renderCardModalWindow(clickedCardData);
    }
  });
}

function getClickedData(name) {
  return dataCards.find((card) => card.name == name);
}

function renderCardModalWindow(card) {
  const modal = new CardModule('card-modal', card);
  modal.renderModal();
}
