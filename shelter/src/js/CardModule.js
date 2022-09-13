/* eslint-disable @typescript-eslint/no-unused-expressions */
import { Modal } from './Modal';

export class CardModule extends Modal {
  constructor(classes, { name, img, type, breed, description, age, inoculations, diseases, parasites }) {
    super(classes);
    this.name = name;
    this.img = img;
    this.type = type;
    this.breed = breed;
    this.description = description;
    this.age = age;
    this.inoculations = inoculations;
    this.diseases = diseases;
    this.parasites = parasites;
  }

  generateContent() {
    let template = '';
    let content = document.createElement('div');
    content.className = 'modal__content';
    content.setAttribute('data-id', this.name);

    this.img && (template += `<div class="pet"><img src=${this.img} alt=${this.name}></div>`);

    if (this.name) {
      template += `<div class="information">`;
      template += `<h3 class="name">${this.name}</h3>`;
      template += `<h4 class="breed-type">${this.type} - ${this.breed}</h4>`;
      template += `<h5 class="description">${this.description}</h5>`;
      template += `<ul class="list-info">`;
      template += `<li class="list-info__item"><span>Age: </span>${this.age}</li>`;
      template += `<li class="list-info__item"><span>Inoculations: </span>${this.inoculations}</li>`;
      template += `<li class="list-info__item"><span>Diseases: </span>${this.diseases}</li>`;
      template += `<li class="list-info__item"><span>Parasites: </span>${this.parasites}</li>`;
      template += `</ul>`;
      template += `</figure>`;
      template += `</div>`;
    }

    content.innerHTML = template;
    return content;
  }

  renderModal() {
    let content = this.generateContent();
    super.buildModal(content);
  }
}
