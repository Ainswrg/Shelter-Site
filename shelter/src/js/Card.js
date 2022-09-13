/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-expressions */
export class Card {
  constructor({ name, img, ...rest }) {
    this.name = name;
    this.img = img;
  }

  generateCard() {
    let template = '';
    let card = document.createElement('div');
    card.className = 'swiper-slide card';
    card.setAttribute('data-id', this.name);

    if (this.name) {
      template += `<div class="card__container">`;
      template += `<figure>`;
      template += `<img src=${this.img} alt=${this.name}>`;
      template += `<figcaption>${this.name}</figcaption>`;
      template += `</figure>`;
      template += `<button class="card__button">Learn more</button>`;
      template += `</div>`;
    }

    card.innerHTML = template;
    return card;
  }
}
