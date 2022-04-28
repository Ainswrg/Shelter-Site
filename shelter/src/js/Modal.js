export class Modal {
  constructor(classes) {
    this.classes = classes;
    this.modal = '';
    this.modalContainer = '';
    this.modalCloseBtn = '';
    this.overlay = '';
  }

  buildModal(content) {
    //overlay
    this.overlay = this.createDomNode(this.overlay, 'div', 'overlay');

    //modal
    this.modal = this.createDomNode(this.modal, 'div', 'modal', this.classes);

    //modal content
    this.modalContainer = this.createDomNode(this.modalContainer, 'div', 'modal__container');

    //close button
    this.modalCloseBtn = this.createDomNode(this.modalCloseBtn, 'span', 'modal__close-icon');
    this.modalCloseBtn.innerHTML = `<svg class="svg-icon" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path class="svg-icon" fill-rule="evenodd" clip-rule="evenodd" d="M7.42618 6.00003L11.7046 1.72158C12.0985 1.32775 12.0985 0.689213 11.7046 0.295433C11.3108 -0.0984027 10.6723 -0.0984027 10.2785 0.295433L5.99998 4.57394L1.72148 0.295377C1.32765 -0.098459 0.68917 -0.098459 0.295334 0.295377C-0.0984448 0.689213 -0.0984448 1.32775 0.295334 1.72153L4.57383 5.99997L0.295334 10.2785C-0.0984448 10.6723 -0.0984448 11.3108 0.295334 11.7046C0.68917 12.0985 1.32765 12.0985 1.72148 11.7046L5.99998 7.42612L10.2785 11.7046C10.6723 12.0985 11.3108 12.0985 11.7046 11.7046C12.0985 11.3108 12.0985 10.6723 11.7046 10.2785L7.42618 6.00003Z" fill="#292929"/>
    </svg>`;

    this.setContent(content);

    this.appendModalElements();

    //bind events
    this.bindEvents();

    //open modal
    this.openModal();
  }

  createDomNode(node, element, ...classes) {
    node = document.createElement(element);
    node.classList.add(...classes);
    return node;
  }

  setContent(content) {
    if (typeof content === 'string') {
      this.modalContainer.innerHTML = content;
    } else {
      this.modalContainer.innerHTML = '';
      this.modalContainer.appendChild(content);
    }
  }

  appendModalElements() {
    this.modal.append(this.modalCloseBtn);
    this.modal.append(this.modalContainer);
    this.overlay.append(this.modal);
  }

  bindEvents() {
    this.modalCloseBtn.addEventListener('click', this.closeModal);
    this.overlay.addEventListener('click', this.closeModal);
  }

  openModal() {
    document.body.append(this.overlay);
    document.body.style.overflow = 'hidden';
    setTimeout(() => this.modal.classList.add('_active'), 100);
  }

  closeModal(e) {
    const classes = e.target.classList;
    if (classes.contains('overlay') || classes.contains('modal__close-icon') || classes.contains('svg-icon')) {
      if (document.querySelector('.overlay')) {
        document.querySelector('.overlay').remove();
      }

      document.body.style.overflow = 'visible';
    }
  }
}
