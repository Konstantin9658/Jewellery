'use strict';
(function () {

  const hideList = (item, className) => {
    item.classList.remove(className);
  }

  const showList = (item, className) => {
    item.classList.add(className);
  }

  // MENU

  const body = document.querySelector('.page__body');
  const header = document.querySelector('.header');
  const intro = header.querySelector('.header__intro');
  const btnMenu = header.querySelector('.button');
  const headerWrap = header.querySelector('.header__wrapper');
  const menu = header.querySelector('.header__nav-menu');
  const overlay = document.querySelector('.overlay');
  const accordionMain = document.querySelector('.accordion');
  const accordionFilter = document.querySelector('.accordion-filter');
  const login = menu.querySelector('#login')

  headerWrap.classList.remove('header__wrapper--no-js');
  menu.classList.remove('header__nav-menu--no-js');
  intro.classList.remove('header__intro--no-js');

  if (!accordionFilter) {
    accordionMain.classList.remove('accordion--no-js');
  } else {
    accordionFilter.classList.remove('accordion-filter--no-js');
  }

  const isEscEvent = (evt) => evt.key === 'Escape' || evt.key === 'Esc';

  document.addEventListener('keydown', (evt) => {
    if (isEscEvent(evt)) {
      evt.preventDefault();
      hideMenu(btnMenu, headerWrap, menu);
      setOverlayHide(overlay);
    }
  });

  btnMenu.addEventListener('click', () => {
    if (btnMenu.classList.contains('button--burger')) {
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
    btn.classList.remove('button--burger');
    btn.classList.add('button--closed');
    wrapper.classList.add('header__wrapper--open-menu');
    menu.classList.add('header__nav-menu--show');
  }

  function hideMenu(btn, wrapper, menu) {
    btn.classList.add('button--burger');
    btn.classList.remove('button--closed');
    wrapper.classList.remove('header__wrapper--open-menu');
    menu.classList.remove('header__nav-menu--show');
  }

  // POPUP

  const formTemplate = document.querySelector('#popup').content.querySelector('.modal-login');
  const btnLogin = document.querySelector('.header__login');

  const closePopup = (popup) => {
    popup.remove();
    setOverlayHide(overlay);
  }

  const showFormLogin = (template) => {
    const btnFormClose = template.querySelector('.modal-login__button');

    document.body.insertAdjacentElement('beforeend', template);
    setOverlayVisible(overlay);

    btnFormClose.addEventListener('click', () => closePopup(template), {once: true});
    overlay.addEventListener('click', () => closePopup(template), {once: true});

    document.addEventListener('keydown', (evt) => {
      if (isEscEvent(evt)) {
        evt.preventDefault();
        closePopup(template);
      }
    }, {once: true});
  };

  const showPopup = (evt) => {
    evt.preventDefault();
    showFormLogin(formTemplate.cloneNode(true));
  }

  btnLogin.addEventListener('click', showPopup);

  login.addEventListener('click', (evt) => {
    setOverlayVisible(overlay);
    hideMenu(btnMenu, headerWrap, menu);
    showPopup(evt);
  });

  // = = = = = = = = = = = = = = = = = = = = = = = = = = = //

  // ACCORDION

  if (accordionMain) {
    const accordionBtn = accordionMain.querySelectorAll('.accordion__toggle');
    const accordionItem = accordionMain.querySelectorAll('.accordion__item');

    for (let i = 0; i < accordionBtn.length; i++) {
      accordionBtn[i].addEventListener('click', toggleItem, false);
    }

    function toggleItem() {
      let item = this.parentElement;

      if (!item.classList.contains('accordion__item--show')) {
        accordionItem.forEach(item => hideList(item, 'accordion__item--show'));
        showList(item, 'accordion__item--show');
      } else {
        hideList(item, 'accordion__item--show');
      }
    }
  } else if (accordionFilter) {
    const accordionFilterBtn = accordionFilter.querySelectorAll('.accordion-filter__btn');

    for (let i = 0; i < accordionFilterBtn.length; i++) {
      accordionFilterBtn[i].addEventListener('click', toggleItem, false);
    }

    function toggleItem() {
      let item = this.parentElement;

      if (!item.classList.contains('accordion-filter__item--show')) {
        showList(item, 'accordion-filter__item--show');
      } else {
        hideList(item, 'accordion-filter__item--show');
      }
    }
  }




  // ACCORDION CATALOG


})();
