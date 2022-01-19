'use strict';
(function () {

  // MENU

  const body = document.querySelector('.page__body');
  const header = document.querySelector('.header');
  const intro = header.querySelector('.header__intro');
  const btnMenu = header.querySelector('.header__nav-btn');
  const headerWrap = header.querySelector('.header__wrapper');
  const menu = header.querySelector('.header__nav-menu');
  const overlay = document.querySelector('.overlay');
  const accordion = document.querySelector('.accordion');

  headerWrap.classList.remove('header__wrapper--no-js');
  menu.classList.remove('header__nav-menu--no-js');
  intro.classList.remove('header__intro--no-js');
  accordion.classList.remove('accordion--no-js');

  const isEscEvent = (evt) => evt.key === 'Escape' || evt.key === 'Esc';

  document.addEventListener('keydown', (evt) => {
    if (isEscEvent(evt)) {
      evt.preventDefault();
      hideMenu(btnMenu, headerWrap, menu);
      setOverlayHide(overlay);
    }
  });

  btnMenu.addEventListener('click', () => {
    if (btnMenu.classList.contains('header__nav-btn--burger')) {
      showMenu(btnMenu, headerWrap, menu);
      setOverlayVisible(overlay);
    } else {
      hideMenu(btnMenu, headerWrap, menu);
      setOverlayHide(overlay);
    }
  })

  function setOverlayVisible(overlay) {
    body.style.overflow = 'hidden';
    overlay.classList.remove('overlay--hidden');
  }

  function setOverlayHide(overlay) {
    body.style.overflow = '';
    overlay.classList.add('overlay--hidden');
  }

  function showMenu(btn, wrapper, menu) {
    btn.classList.remove('header__nav-btn--burger');
    btn.classList.add('header__nav-btn--closed');
    wrapper.classList.add('header__wrapper--open-menu');
    menu.classList.add('header__nav-menu--show');
  }

  function hideMenu(btn, wrapper, menu) {
    btn.classList.add('header__nav-btn--burger');
    btn.classList.remove('header__nav-btn--closed');
    wrapper.classList.remove('header__wrapper--open-menu');
    menu.classList.remove('header__nav-menu--show');
  }

  // POPUP

  // const formTemplate = document.querySelector('#popup').content.querySelector('.modal');
  // const btnCallback = document.querySelector('.button--callback');
  // const overlay = document.querySelector('.overlay');

  // const isEscEvent = (evt) => evt.key === 'Escape' || evt.key === 'Esc';

  // const closePopup = (popup) => {
  //   popup.remove();
  //   document.body.style.overflow = '';
  //   overlay.classList.add('overlay--hidden');
  // }

  // const showFormCallback = (formTemplate) => {
  //   const btnFormClose = formTemplate.querySelector('.modal__btn');
  //   const inputPhoneForm = formTemplate.querySelector('[name="modal-phone"]');
  //   const btnFormSubmit = formTemplate.querySelector('.button--modal');

  //   document.body.insertAdjacentElement('beforeend', formTemplate);
  //   document.body.style.overflow = 'hidden';

  //   overlay.classList.remove('overlay--hidden');

  //   let name = formTemplate.querySelector('#modal-name-id');
  //   let phone = formTemplate.querySelector('#modal-phone-id');
  //   let message = formTemplate.querySelector('#modal-question-id');
  //   name.focus();

  //   let isStorageSupport = true;
  //   let storageName = '';
  //   let storagePhone = '';
  //   let storageMessage = '';

  //   try {
  //     storageName = localStorage.getItem('name');
  //     storagePhone = localStorage.getItem('phone');
  //     storageMessage = localStorage.getItem('message');
  //   } catch (err) {
  //     isStorageSupport = false;
  //   }

  //   if (storageName) {
  //     name.value = storageName;
  //     phone.focus();
  //   }
  //   if (storagePhone) {
  //     phone.value = storagePhone;
  //     message.focus();
  //   }
  //   if (storageMessage) {
  //     message.innerText = storageMessage;
  //   } else {
  //     name.focus();
  //   }

  //   btnFormSubmit.addEventListener('submit', function (evt) {
  //     if (!name.value || !phone.value || !message.value) {
  //       evt.preventDefault();
  //     } else {
  //       if (isStorageSupport) {
  //         localStorage.setItem('name', name.value);
  //         localStorage.setItem('phone', phone.value);
  //         localStorage.setItem('message', message.value);
  //       }
  //     }
  //   });
  //   btnFormClose.addEventListener('click', () => closePopup(formTemplate), {once: true});
  //   overlay.addEventListener('click', () => closePopup(formTemplate), {once: true});

  //   validatePhone(inputPhoneForm);

  //   document.addEventListener('keydown', (evt) => {
  //     if (isEscEvent(evt)) {
  //       evt.preventDefault();
  //       closePopup(formTemplate);
  //     }
  //   }, {once: true});
  // };

  // // const showPopup = () => showFormCallback(formTemplate.cloneNode(true));
  // // btnCallback.addEventListener('click', showPopup);

  // = = = = = = = = = = = = = = = = = = = = = = = = = = = //

  // ACCORDION

  const accordionBtn = accordion.querySelectorAll('.accordion__toggle');
  const accordionItem = accordion.querySelectorAll('.accordion__item');

  for (let i = 0; i < accordionBtn.length; i++) {
    accordionBtn[i].addEventListener('click', toggleItem, false);
  }

  const hideList = (item) => {
    item.classList.remove('accordion__item--show');
  }

  const showList = (item) => {
    item.classList.add('accordion__item--show');
  }

  function toggleItem() {
    let item = this.parentElement;


    if (!item.classList.contains('accordion__item--show')) {
      accordionItem.forEach(item => hideList(item));
      showList(item);
    } else {
      hideList(item);
    }
  }
})();
