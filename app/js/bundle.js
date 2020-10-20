(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var _modal = _interopRequireDefault(require("./modal"));

var _burger = _interopRequireDefault(require("./burger"));

var _slider = _interopRequireDefault(require("./slider"));

var _showModal = _interopRequireDefault(require("./showModal"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

window.addEventListener('DOMContentLoaded', function () {
  (0, _burger["default"])();
  (0, _modal["default"])();
  (0, _showModal["default"])();
});

},{"./burger":2,"./modal":3,"./showModal":4,"./slider":5}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function burgerMenu() {
  var burgerButton = document.querySelector('.header__burger');
  var content = document.querySelector('.not-only__content');
  var menu = document.querySelector('.header__nav');
  var menuItem = document.querySelectorAll('.header__nav__item');
  var menuItemLink = document.querySelectorAll('.header__nav__item__link');
  burgerButton.addEventListener('click', function () {
    var contentStyle = window.getComputedStyle(content, null);

    if (contentStyle.display === 'none') {
      content.style.display = 'flex';
    } else {
      content.style.display = 'none';
    }

    menu.classList.toggle('header__nav--for_mobile');
    menuItem.forEach(function (item) {
      item.classList.toggle('header__nav--for_mobile__item');
    });
    menuItemLink.forEach(function (item) {
      item.classList.toggle('header__nav--for_mobile__item__link');
    });
    var burgerButtonStyle = window.getComputedStyle(burgerButton, null);

    if (burgerButtonStyle.transform === 'none') {
      burgerButton.style.transform = 'rotate(90deg)';
    } else {
      burgerButton.style.transform = 'none';
    }
  }); // end burger menu
}

var _default = burgerMenu();

exports["default"] = _default;

},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function modalWindow() {
  var modalImg = document.querySelector('.modal__img'),
      modalTitle = document.querySelector('.modal__title'),
      modalSubTitle = document.querySelector('.modal__subtitle'),
      modalText = document.querySelector('.modal__text'),
      modalListItem = document.querySelectorAll('.modal__list-about__value'),
      modalBtn = document.querySelector('.modal__btn-close'),
      modal = document.querySelector('.modal');
  modalBtn.addEventListener('click', function () {
    modal.style.display = 'none';
  });
  modalImg.src = '../../img/pets-jennifer.png'; // path to img

  modalTitle.textContent = 'Woodie'; // title 

  modalSubTitle.textContent = 'Dog-Labrador'; // sutitle 

  modalText.textContent = "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.";
  modalListItem.forEach(function (item) {
    item.textContent = 'Hello';
  });
  modal.addEventListener('click', function (e) {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });
}

var _default = modalWindow();

exports["default"] = _default;

},{}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function showModal() {
  var items = document.querySelectorAll('.our-friends__slider__list__items'),
      modalWindow = document.querySelector('.modal');
  items.forEach(function (item) {
    item.addEventListener('click', function () {
      modalWindow.style.display = 'flex';
    });
  });
} // end function


var _default = showModal();

exports["default"] = _default;

},{}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function slider() {
  var buttonLeft = document.querySelector('.our-friends__slider__button--left'),
      buttonRight = document.querySelector('.our-friends__slider__button--right'),
      sliderItems = document.querySelectorAll('.our-friends__slider__list__items');
  var slideIndex = 1;

  function showSlide(n) {
    if (n > sliderItems.length) {
      slideIndex = 1;
    }

    if (n < 1) {
      slideIndex = sliderItems.length;
    }

    sliderItems.forEach(function (item) {
      return item.style.display = 'none';
    });
    sliderItems[slideIndex - 1].style.display = '';
  } // end function 'showSlide'


  function plusSlides(n) {
    showSlide(slideIndex += n);
  } // end function 'plusSlides'


  buttonLeft.addEventListener('click', function () {
    plusSlides(-1);
  });
  buttonRight.addEventListener('click', function () {
    plusSlides(1);
  });
} // end function 'slider'


var _default = slider();

exports["default"] = _default;

},{}]},{},[1])

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJwcm9qZWN0cy9zaGVsdGVyL3NyYy9qcy9hcHAuanMiLCJwcm9qZWN0cy9zaGVsdGVyL3NyYy9qcy9idXJnZXIuanMiLCJwcm9qZWN0cy9zaGVsdGVyL3NyYy9qcy9tb2RhbC5qcyIsInByb2plY3RzL3NoZWx0ZXIvc3JjL2pzL3Nob3dNb2RhbC5qcyIsInByb2plY3RzL3NoZWx0ZXIvc3JjL2pzL3NsaWRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFFQSxNQUFNLENBQUMsZ0JBQVAsQ0FBeUIsa0JBQXpCLEVBQTZDLFlBQU07QUFDbEQ7QUFDQTtBQUNBO0FBQ0EsQ0FKRDs7Ozs7Ozs7OztBQ0xBLFNBQVMsVUFBVCxHQUF1QjtBQUN2QixNQUFNLFlBQVksR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF3QixpQkFBeEIsQ0FBckI7QUFDQSxNQUFNLE9BQU8sR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF3QixvQkFBeEIsQ0FBaEI7QUFDQSxNQUFNLElBQUksR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF3QixjQUF4QixDQUFiO0FBQ0EsTUFBTSxRQUFRLEdBQUcsUUFBUSxDQUFDLGdCQUFULENBQTJCLG9CQUEzQixDQUFqQjtBQUNBLE1BQU0sWUFBWSxHQUFHLFFBQVEsQ0FBQyxnQkFBVCxDQUEyQiwwQkFBM0IsQ0FBckI7QUFFQSxFQUFBLFlBQVksQ0FBQyxnQkFBYixDQUErQixPQUEvQixFQUF3QyxZQUFNO0FBRTFDLFFBQU0sWUFBWSxHQUFHLE1BQU0sQ0FBQyxnQkFBUCxDQUF3QixPQUF4QixFQUFpQyxJQUFqQyxDQUFyQjs7QUFDQSxRQUFJLFlBQVksQ0FBQyxPQUFiLEtBQXlCLE1BQTdCLEVBQXFDO0FBQ2pDLE1BQUEsT0FBTyxDQUFDLEtBQVIsQ0FBYyxPQUFkLEdBQXdCLE1BQXhCO0FBQ0gsS0FGRCxNQUVPO0FBQ0gs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QUMsZ0JBQVosQ0FBOEIsT0FBOUIsRUFBdUMsWUFBTTtBQUMzQyxJQUFBLFVBQVUsQ0FBQyxDQUFELENBQVY7QUFDRCxHQUZEO0FBS1YsQyxDQUFBOzs7ZUFFYyxNQUFNLEUiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImltcG9ydCBtb2RhbFdpbmRvdyBmcm9tICcuL21vZGFsJztcclxuaW1wb3J0IGJ1cmdlck1lbnUgZnJvbSAnLi9idXJnZXInO1xyXG5pbXBvcnQgc2xpZGVyIGZyb20gXCIuL3NsaWRlclwiO1xyXG5pbXBvcnQgc2hvd01vZGFsIGZyb20gJy4vc2hvd01vZGFsJztcclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyICgnRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcclxuIGJ1cmdlck1lbnUoKTtcclxuIG1vZGFsV2luZG93KCk7XHJcbiBzaG93TW9kYWwoKTtcclxufSk7XHJcblxyXG4iLCJmdW5jdGlvbiBidXJnZXJNZW51ICgpIHtcclxuY29uc3QgYnVyZ2VyQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvciAoJy5oZWFkZXJfX2J1cmdlcicpO1xyXG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvciAoJy5ub3Qtb25seV9fY29udGVudCcpO1xyXG5jb25zdCBtZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvciAoJy5oZWFkZXJfX25hdicpO1xyXG5jb25zdCBtZW51SXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwgKCcuaGVhZGVyX19uYXZfX2l0ZW0nKTtcclxuY29uc3QgbWVudUl0ZW1MaW5rID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCAoJy5oZWFkZXJfX25hdl9faXRlbV9fbGluaycpO1xyXG5cclxuYnVyZ2VyQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIgKCdjbGljaycsICgpID0+IHtcclxuICAgIFxyXG4gICAgY29uc3QgY29udGVudFN0eWxlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoY29udGVudCwgbnVsbCk7XHJcbiAgICBpZiAoY29udGVudFN0eWxlLmRpc3BsYXkgPT09ICdub25lJykge1xyXG4gICAgICAgIGNvbnRlbnQuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29udGVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgfVxyXG4gICAgbWVudS5jbGFzc0xpc3QudG9nZ2xlICgnaGVhZGVyX19uYXYtLWZvcl9tb2JpbGUnKTtcclxuICAgIG1lbnVJdGVtLmZvckVhY2ggKGl0ZW0gPT57XHJcbiAgICAgICAgaXRlbS5jbGFzc0xpc3QudG9nZ2xlKCdoZWFkZXJfX25hdi0tZm9yX21vYmlsZV9faXRlbScpO1xyXG4gICAgfSk7XHJcbiAgICBtZW51SXRlbUxpbmsuZm9yRWFjaCAoaXRlbSA9PntcclxuICAgICAgICBpdGVtLmNsYXNzTGlzdC50b2dnbGUgKCdoZWFkZXJfX25hdi0tZm9yX21vYmlsZV9faXRlbV9fbGluaycpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgYnVyZ2VyQnV0dG9uU3R5bGUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShidXJnZXJCdXR0b24sIG51bGwpO1xyXG5cclxuICAgIGlmIChidXJnZXJCdXR0b25TdHlsZS50cmFuc2Zvcm0gPT09ICdub25lJykge1xyXG4gICAgICAgIGJ1cmdlckJ1dHRvbi5zdHlsZS50cmFuc2Zvcm0gPSAncm90YXRlKDkwZGVnKSc7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGJ1cmdlckJ1dHRvbi5zdHlsZS50cmFuc2Zvcm0gPSAnbm9uZSc7XHJcbiAgICB9XHJcbiAgICBcclxufSk7XHJcbi8vIGVuZCBidXJnZXIgbWVudVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBidXJnZXJNZW51KCk7IiwiZnVuY3Rpb24gbW9kYWxXaW5kb3cgKCkge1xyXG4gICAgY29uc3QgICBtb2RhbEltZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IgKCcubW9kYWxfX2ltZycpLCBcclxuICAgICAgICBtb2RhbFRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvciAoJy5tb2RhbF9fdGl0bGUnKSwgXHJcbiAgICAgICAgbW9kYWxTdWJUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IgKCcubW9kYWxfX3N1YnRpdGxlJyksIFxyXG4gICAgICAgIG1vZGFsVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IgKCcubW9kYWxfX3RleHQnKSxcclxuICAgICAgICBtb2RhbExpc3RJdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCAoJy5tb2RhbF9fbGlzdC1hYm91dF9fdmFsdWUnKSwgXHJcbiAgICAgICAgbW9kYWxCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yICgnLm1vZGFsX19idG4tY2xvc2UnKSwgXHJcbiAgICAgICAgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yICgnLm1vZGFsJyk7IFxyXG5cclxuICAgICAgICBtb2RhbEJ0bi5hZGRFdmVudExpc3RlbmVyICgnY2xpY2snLCAoKSA9PntcclxuICAgICAgICAgICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgbW9kYWxJbWcuc3JjID0gJy4uLy4uL2ltZy9wZXRzLWplbm5pZmVyLnBuZyc7IC8vIHBhdGggdG8gaW1nXHJcbiAgICAgICAgbW9kYWxUaXRsZS50ZXh0Q29udGVudCA9ICdXb29kaWUnOyAvLyB0aXRsZSBcclxuICAgICAgICBtb2RhbFN1YlRpdGxlLnRleHRDb250ZW50ID0gJ0RvZy1MYWJyYWRvcic7IC8vIHN1dGl0bGUgXHJcbiAgICAgICAgbW9kYWxUZXh0LnRleHRDb250ZW50ID0gXCJKZW5uaWZlciBpcyBhIHN3ZWV0IDIgbW9udGhzIG9sZCBMYWJyYWRvciB0aGF0IGlzIHBhdGllbnRseSB3YWl0aW5nIHRvIGZpbmQgYSBuZXcgZm9yZXZlciBob21lLiBUaGlzIGdpcmwgcmVhbGx5IGVuam95cyBiZWluZyBhYmxlIHRvIGdvIG91dHNpZGUgdG8gcnVuIGFuZCBwbGF5LCBidXQgd29uJ3QgaGVzaXRhdGUgdG8gcGxheSB1cCBhIHN0b3JtIGluIHRoZSBob3VzZSBpZiBzaGUgaGFzIGFsbCBvZiBoZXIgZmF2b3JpdGUgdG95cy5cIjtcclxuXHJcblxyXG5tb2RhbExpc3RJdGVtLmZvckVhY2goIGl0ZW0gPT4ge1xyXG4gICAgaXRlbS50ZXh0Q29udGVudCA9ICdIZWxsbyc7XHJcbn0pO1xyXG5cclxubW9kYWwuYWRkRXZlbnRMaXN0ZW5lciAoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICBpZiAoZS50YXJnZXQgPT09IG1vZGFsKSB7XHJcbiAgICAgICAgICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgfVxyXG59KTtcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG1vZGFsV2luZG93KCk7ICIsImZ1bmN0aW9uIHNob3dNb2RhbCAoKSB7XHJcblxyXG4gICAgY29uc3QgaXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsICgnLm91ci1mcmllbmRzX19zbGlkZXJfX2xpc3RfX2l0ZW1zJyksIFxyXG4gICAgICAgICAgICBtb2RhbFdpbmRvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IgKCcubW9kYWwnKTtcclxuXHJcbiAgICBpdGVtcy5mb3JFYWNoIChpdGVtID0+IHtcclxuICAgICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT57XHJcbiAgICAgICAgICAgIG1vZGFsV2luZG93LnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KVxyXG5cclxufS8vIGVuZCBmdW5jdGlvblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgc2hvd01vZGFsKCk7IiwiZnVuY3Rpb24gc2xpZGVyICgpIHtcclxuICBjb25zdCBidXR0b25MZWZ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm91ci1mcmllbmRzX19zbGlkZXJfX2J1dHRvbi0tbGVmdCcpLCBcclxuICAgICAgICBidXR0b25SaWdodCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vdXItZnJpZW5kc19fc2xpZGVyX19idXR0b24tLXJpZ2h0JyksIFxyXG4gICAgICAgIHNsaWRlckl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCAoJy5vdXItZnJpZW5kc19fc2xpZGVyX19saXN0X19pdGVtcycpO1xyXG4gICAgbGV0IHNsaWRlSW5kZXggPSAxO1xyXG5cclxuICAgICAgICBmdW5jdGlvbiBzaG93U2xpZGUgKG4pIHtcclxuICAgICAgICAgICAgaWYgKG4gPiBzbGlkZXJJdGVtcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIHNsaWRlSW5kZXggPSAxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChuPDEpIHtcclxuICAgICAgICAgICAgICAgIHNsaWRlSW5kZXggPSBzbGlkZXJJdGVtcy5sZW5ndGg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2xpZGVySXRlbXMuZm9yRWFjaCAoaXRlbSA9PiBpdGVtLnN0eWxlLmRpc3BsYXkgPSAnbm9uZScpO1xyXG5cclxuICAgICAgICAgICAgc2xpZGVySXRlbXNbc2xpZGVJbmRleC0xXS5zdHlsZS5kaXNwbGF5ID0gJyc7XHJcbiAgICAgICAgfS8vIGVuZCBmdW5jdGlvbiAnc2hvd1NsaWRlJ1xyXG5cclxuICAgICAgICBmdW5jdGlvbiBwbHVzU2xpZGVzKG4pIHtcclxuICAgICAgICAgICAgc2hvd1NsaWRlKHNsaWRlSW5kZXggKz1uKTtcclxuICAgICAgICAgICB9IC8vIGVuZCBmdW5jdGlvbiAncGx1c1NsaWRlcydcclxuXHJcblxyXG4gICAgICAgICAgIGJ1dHRvbkxlZnQuYWRkRXZlbnRMaXN0ZW5lciAoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgIHBsdXNTbGlkZXMoLTEpO1xyXG4gICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgIGJ1dHRvblJpZ2h0LmFkZEV2ZW50TGlzdGVuZXIgKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgIHBsdXNTbGlkZXMoMSk7XHJcbiAgICAgICAgICAgfSk7XHJcblxyXG5cclxufS8vIGVuZCBmdW5jdGlvbiAnc2xpZGVyJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgc2xpZGVyKCk7Il0sInByZUV4aXN0aW5nQ29tbWVudCI6Ii8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkltNXZaR1ZmYlc5a2RXeGxjeTlpY205M2MyVnlMWEJoWTJzdlgzQnlaV3gxWkdVdWFuTWlMQ0p3Y205cVpXTjBjeTl6YUdWc2RHVnlMM055WXk5cWN5OWhjSEF1YW5NaUxDSndjbTlxWldOMGN5OXphR1ZzZEdWeUwzTnlZeTlxY3k5aWRYSm5aWEl1YW5NaUxDSndjbTlxWldOMGN5OXphR1ZzZEdWeUwzTnlZeTlxY3k5dGIyUmhiQzVxY3lJc0luQnliMnBsWTNSekwzTm9aV3gwWlhJdmMzSmpMMnB6TDNOb2IzZE5iMlJoYkM1cWN5SXNJbkJ5YjJwbFkzUnpMM05vWld4MFpYSXZjM0pqTDJwekwzTnNhV1JsY2k1cWN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaVFVRkJRVHM3TzBGRFFVRTdPMEZCUTBFN08wRkJRMEU3TzBGQlEwRTdPenM3UVVGRlFTeE5RVUZOTEVOQlFVTXNaMEpCUVZBc1EwRkJlVUlzYTBKQlFYcENMRVZCUVRaRExGbEJRVTA3UVVGRGJFUTdRVUZEUVR0QlFVTkJPMEZCUTBFc1EwRktSRHM3T3pzN096czdPenRCUTB4QkxGTkJRVk1zVlVGQlZDeEhRVUYxUWp0QlFVTjJRaXhOUVVGTkxGbEJRVmtzUjBGQlJ5eFJRVUZSTEVOQlFVTXNZVUZCVkN4RFFVRjNRaXhwUWtGQmVFSXNRMEZCY2tJN1FVRkRRU3hOUVVGTkxFOUJRVThzUjBGQlJ5eFJRVUZSTEVOQlFVTXNZVUZCVkN4RFFVRjNRaXh2UWtGQmVFSXNRMEZCYUVJN1FVRkRRU3hOUVVGTkxFbEJRVWtzUjBGQlJ5eFJRVUZSTEVOQlFVTXNZVUZCVkN4RFFVRjNRaXhqUVVGNFFpeERRVUZpTzBGQlEwRXNUVUZCVFN4UlFVRlJMRWRCUVVjc1VVRkJVU3hEUVVGRExHZENRVUZVTEVOQlFUSkNMRzlDUVVFelFpeERRVUZxUWp0QlFVTkJMRTFCUVUwc1dVRkJXU3hIUVVGSExGRkJRVkVzUTBGQlF5eG5Ra0ZCVkN4RFFVRXlRaXd3UWtGQk0wSXNRMEZCY2tJN1FVRkZRU3hGUVVGQkxGbEJRVmtzUTBGQlF5eG5Ra0ZCWWl4RFFVRXJRaXhQUVVFdlFpeEZRVUYzUXl4WlFVRk5PMEZCUlRGRExGRkJRVTBzV1VGQldTeEhRVUZITEUxQlFVMHNRMEZCUXl4blFrRkJVQ3hEUVVGM1FpeFBRVUY0UWl4RlFVRnBReXhKUVVGcVF5eERRVUZ5UWpzN1FVRkRRU3hSUVVGSkxGbEJRVmtzUTBGQlF5eFBRVUZpTEV0QlFYbENMRTFCUVRkQ0xFVkJRWEZETzBGQlEycERMRTFCUVVFc1QwRkJUeXhEUVVGRExFdEJRVklzUTBGQll5eFBRVUZrTEVkQlFYZENMRTFCUVhoQ08wRkJRMGdzUzBGR1JDeE5RVVZQTzBGQlEwZ3NUVUZCUVN4UFFVRlBMRU5CUVVNc1MwRkJVaXhEUVVGakxFOUJRV1FzUjBGQmQwSXNUVUZCZUVJN1FVRkRTRHM3UVVGRFJDeEpRVUZCTEVsQlFVa3NRMEZCUXl4VFFVRk1MRU5CUVdVc1RVRkJaaXhEUVVGMVFpeDVRa0ZCZGtJN1FVRkRRU3hKUVVGQkxGRkJRVkVzUTBGQlF5eFBRVUZVTEVOQlFXdENMRlZCUVVFc1NVRkJTU3hGUVVGSE8wRkJRM0pDTEUxQlFVRXNTVUZCU1N4RFFVRkRMRk5CUVV3c1EwRkJaU3hOUVVGbUxFTkJRWE5DTEN0Q1FVRjBRanRCUVVOSUxFdEJSa1E3UVVGSFFTeEpRVUZCTEZsQlFWa3NRMEZCUXl4UFFVRmlMRU5CUVhOQ0xGVkJRVUVzU1VGQlNTeEZRVUZITzBGQlEzcENMRTFCUVVFc1NVRkJTU3hEUVVGRExGTkJRVXdzUTBGQlpTeE5RVUZtTEVOQlFYVkNMSEZEUVVGMlFqdEJRVU5JTEV0QlJrUTdRVUZKUVN4UlFVRk5MR2xDUVVGcFFpeEhRVUZITEUxQlFVMHNRMEZCUXl4blFrRkJVQ3hEUVVGM1FpeFpRVUY0UWl4RlFVRnpReXhKUVVGMFF5eERRVUV4UWpzN1FVRkZRU3hSUVVGSkxHbENRVUZwUWl4RFFVRkRMRk5CUVd4Q0xFdEJRV2RETEUxQlFYQkRMRVZCUVRSRE8wRkJRM2hETEUxQlFVRXNXVUZCV1N4RFFVRkRMRXRCUVdJc1EwRkJiVUlzVTBGQmJrSXNSMEZCSzBJc1pVRkJMMEk3UVVGRFNDeExRVVpFTEUxQlJVODdRVUZEU0N4TlFVRkJMRmxCUVZrc1EwRkJReXhMUVVGaUxFTkJRVzFDTEZOQlFXNUNMRWRCUVN0Q0xFMUJRUzlDTzBGQlEwZzdRVUZGU2l4SFFYaENSQ3hGUVZCMVFpeERRV2REZGtJN1FVRkRRenM3WlVGRll5eFZRVUZWTEVVN096czdPenM3T3pzN096dEJRMjVEZWtJc1UwRkJVeXhYUVVGVUxFZEJRWGRDTzBGQlEzQkNMRTFCUVZFc1VVRkJVU3hIUVVGSExGRkJRVkVzUTBGQlF5eGhRVUZVTEVOQlFYZENMR0ZCUVhoQ0xFTkJRVzVDTzBGQlFVRXNUVUZEU1N4VlFVRlZMRWRCUVVjc1VVRkJVU3hEUVVGRExHRkJRVlFzUTBGQmQwSXNaVUZCZUVJc1EwRkVha0k3UVVGQlFTeE5RVVZKTEdGQlFXRXNSMEZCUnl4UlFVRlJMRU5CUVVNc1lVRkJWQ3hEUVVGM1FpeHJRa0ZCZUVJc1EwRkdjRUk3UVVGQlFTeE5RVWRKTEZOQlFWTXNSMEZCUnl4UlFVRlJMRU5CUVVNc1lVRkJWQ3hEUVVGM1FpeGpRVUY0UWl4RFFVaG9RanRCUVVGQkxFMUJTVWtzWVVGQllTeEhRVUZITEZGQlFWRXNRMEZCUXl4blFrRkJWQ3hEUVVFeVFpd3lRa0ZCTTBJc1EwRktjRUk3UVVGQlFTeE5RVXRKTEZGQlFWRXNSMEZCUnl4UlFVRlJMRU5CUVVNc1lVRkJWQ3hEUVVGM1FpeHRRa0ZCZUVJc1EwRk1aanRCUVVGQkxFMUJUVWtzUzBGQlN5eEhRVUZITEZGQlFWRXNRMEZCUXl4aFFVRlVMRU5CUVhkQ0xGRkJRWGhDTEVOQlRsbzdRVUZSU1N4RlFVRkJMRkZCUVZFc1EwRkJReXhuUWtGQlZDeERRVUV5UWl4UFFVRXpRaXhGUVVGdlF5eFpRVUZMTzBGQlEzSkRMRWxCUVVFc1MwRkJTeXhEUVVGRExFdEJRVTRzUTBGQldTeFBRVUZhTEVkQlFYTkNMRTFCUVhSQ08wRkJRMGdzUjBGR1JEdEJRVWxCTEVWQlFVRXNVVUZCVVN4RFFVRkRMRWRCUVZRc1IwRkJaU3cyUWtGQlppeERRV0puUWl4RFFXRTRRanM3UVVGRE9VTXNSVUZCUVN4VlFVRlZMRU5CUVVNc1YwRkJXQ3hIUVVGNVFpeFJRVUY2UWl4RFFXUm5RaXhEUVdOdFFqczdRVUZEYmtNc1JVRkJRU3hoUVVGaExFTkJRVU1zVjBGQlpDeEhRVUUwUWl4alFVRTFRaXhEUVdablFpeERRV1UwUWpzN1FVRkROVU1zUlVGQlFTeFRRVUZUTEVOQlFVTXNWMEZCVml4SFFVRjNRaXd5VUVGQmVFSTdRVUZIVWl4RlFVRkJMR0ZCUVdFc1EwRkJReXhQUVVGa0xFTkJRWFZDTEZWQlFVRXNTVUZCU1N4RlFVRkpPMEZCUXpOQ0xFbEJRVUVzU1VGQlNTeERRVUZETEZkQlFVd3NSMEZCYlVJc1QwRkJia0k3UVVGRFNDeEhRVVpFTzBGQlNVRXNSVUZCUVN4TFFVRkxMRU5CUVVNc1owSkJRVTRzUTBGQmQwSXNUMEZCZUVJc1JVRkJhVU1zVlVGQlF5eERRVUZFTEVWQlFVODdRVUZEYUVNc1VVRkJTU3hEUVVGRExFTkJRVU1zVFVGQlJpeExRVUZoTEV0QlFXcENMRVZCUVhkQ08wRkJRM0JDTEUxQlFVRXNTMEZCU3l4RFFVRkRMRXRCUVU0c1EwRkJXU3hQUVVGYUxFZEJRWE5DTEUxQlFYUkNPMEZCUTBnN1FVRkRVaXhIUVVwRU8wRkJUVU03TzJWQlJXTXNWMEZCVnl4Rk96czdPenM3T3pzN096czdRVU12UWpGQ0xGTkJRVk1zVTBGQlZDeEhRVUZ6UWp0QlFVVnNRaXhOUVVGTkxFdEJRVXNzUjBGQlJ5eFJRVUZSTEVOQlFVTXNaMEpCUVZRc1EwRkJNa0lzYlVOQlFUTkNMRU5CUVdRN1FVRkJRU3hOUVVOUkxGZEJRVmNzUjBGQlJ5eFJRVUZSTEVOQlFVTXNZVUZCVkN4RFFVRjNRaXhSUVVGNFFpeERRVVIwUWp0QlFVZEJMRVZCUVVFc1MwRkJTeXhEUVVGRExFOUJRVTRzUTBGQlpTeFZRVUZCTEVsQlFVa3NSVUZCU1R0QlFVTnVRaXhKUVVGQkxFbEJRVWtzUTBGQlF5eG5Ra0ZCVEN4RFFVRnpRaXhQUVVGMFFpeEZRVUVyUWl4WlFVRkxPMEZCUTJoRExFMUJRVUVzVjBGQlZ5eERRVUZETEV0QlFWb3NRMEZCYTBJc1QwRkJiRUlzUjBGQk5FSXNUVUZCTlVJN1FVRkRTQ3hMUVVaRU8wRkJSMGdzUjBGS1JEdEJRVTFJTEVNc1EwRkJRVHM3TzJWQlJXTXNVMEZCVXl4Rk96czdPenM3T3pzN096czdRVU5pZUVJc1UwRkJVeXhOUVVGVUxFZEJRVzFDTzBGQlEycENMRTFCUVUwc1ZVRkJWU3hIUVVGSExGRkJRVkVzUTBGQlF5eGhRVUZVTEVOQlFYVkNMRzlEUVVGMlFpeERRVUZ1UWp0QlFVRkJMRTFCUTAwc1YwRkJWeXhIUVVGSExGRkJRVkVzUTBGQlF5eGhRVUZVTEVOQlFYVkNMSEZEUVVGMlFpeERRVVJ3UWp0QlFVRkJMRTFCUlUwc1YwRkJWeXhIUVVGSExGRkJRVkVzUTBGQlF5eG5Ra0ZCVkN4RFFVRXlRaXh0UTBGQk0wSXNRMEZHY0VJN1FVRkhSU3hOUVVGSkxGVkJRVlVzUjBGQlJ5eERRVUZxUWpzN1FVRkZTU3hYUVVGVExGTkJRVlFzUTBGQmIwSXNRMEZCY0VJc1JVRkJkVUk3UVVGRGJrSXNVVUZCU1N4RFFVRkRMRWRCUVVjc1YwRkJWeXhEUVVGRExFMUJRWEJDTEVWQlFUUkNPMEZCUTNoQ0xFMUJRVUVzVlVGQlZTeEhRVUZITEVOQlFXSTdRVUZEU0RzN1FVRkRSQ3hSUVVGSkxFTkJRVU1zUjBGQlF5eERRVUZPTEVWQlFWTTdRVUZEVEN4TlFVRkJMRlZCUVZVc1IwRkJSeXhYUVVGWExFTkJRVU1zVFVGQmVrSTdRVUZEU0RzN1FVRkRSQ3hKUVVGQkxGZEJRVmNzUTBGQlF5eFBRVUZhTEVOQlFYRkNMRlZCUVVFc1NVRkJTVHRCUVVGQkxHRkJRVWtzU1VGQlNTeERRVUZETEV0QlFVd3NRMEZCVnl4UFFVRllMRWRCUVhGQ0xFMUJRWHBDTzBGQlFVRXNTMEZCZWtJN1FVRkZRU3hKUVVGQkxGZEJRVmNzUTBGQlF5eFZRVUZWTEVkQlFVTXNRMEZCV2l4RFFVRllMRU5CUVRCQ0xFdEJRVEZDTEVOQlFXZERMRTlCUVdoRExFZEJRVEJETEVWQlFURkRPMEZCUTBnc1IwRm9RbFVzUTBGblFsWTdPenRCUVVWRUxGZEJRVk1zVlVGQlZDeERRVUZ2UWl4RFFVRndRaXhGUVVGMVFqdEJRVU51UWl4SlFVRkJMRk5CUVZNc1EwRkJReXhWUVVGVkxFbEJRVWNzUTBGQlpDeERRVUZVTzBGQlEwRXNSMEZ3UWs4c1EwRnZRazQ3T3p0QlFVZEdMRVZCUVVFc1ZVRkJWU3hEUVVGRExHZENRVUZZTEVOQlFUWkNMRTlCUVRkQ0xFVkJRWE5ETEZsQlFVMDdRVUZEZWtNc1NVRkJRU3hWUVVGVkxFTkJRVU1zUTBGQlF5eERRVUZHTEVOQlFWWTdRVUZEUml4SFFVWkVPMEZCUjBFc1JVRkJRU3hYUVVGWExFTkJRVU1zWjBKQlFWb3NRMEZCT0VJc1QwRkJPVUlzUlVGQmRVTXNXVUZCVFR0QlFVTXpReXhKUVVGQkxGVkJRVlVzUTBGQlF5eERRVUZFTEVOQlFWWTdRVUZEUkN4SFFVWkVPMEZCUzFZc1F5eERRVUZCT3pzN1pVRkZZeXhOUVVGTkxFVWlMQ0ptYVd4bElqb2laMlZ1WlhKaGRHVmtMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSWlobWRXNWpkR2x2YmlncGUyWjFibU4wYVc5dUlISW9aU3h1TEhRcGUyWjFibU4wYVc5dUlHOG9hU3htS1h0cFppZ2hibHRwWFNsN2FXWW9JV1ZiYVYwcGUzWmhjaUJqUFZ3aVpuVnVZM1JwYjI1Y0lqMDlkSGx3Wlc5bUlISmxjWFZwY21VbUpuSmxjWFZwY21VN2FXWW9JV1ltSm1NcGNtVjBkWEp1SUdNb2FTd2hNQ2s3YVdZb2RTbHlaWFIxY200Z2RTaHBMQ0V3S1R0MllYSWdZVDF1WlhjZ1JYSnliM0lvWENKRFlXNXViM1FnWm1sdVpDQnRiMlIxYkdVZ0oxd2lLMmtyWENJblhDSXBPM1JvY205M0lHRXVZMjlrWlQxY0lrMVBSRlZNUlY5T1QxUmZSazlWVGtSY0lpeGhmWFpoY2lCd1BXNWJhVjA5ZTJWNGNHOXlkSE02ZTMxOU8yVmJhVjFiTUYwdVkyRnNiQ2h3TG1WNGNHOXlkSE1zWm5WdVkzUnBiMjRvY2lsN2RtRnlJRzQ5WlZ0cFhWc3hYVnR5WFR0eVpYUjFjbTRnYnlodWZIeHlLWDBzY0N4d0xtVjRjRzl5ZEhNc2NpeGxMRzRzZENsOWNtVjBkWEp1SUc1YmFWMHVaWGh3YjNKMGMzMW1iM0lvZG1GeUlIVTlYQ0ptZFc1amRHbHZibHdpUFQxMGVYQmxiMllnY21WeGRXbHlaU1ltY21WeGRXbHlaU3hwUFRBN2FUeDBMbXhsYm1kMGFEdHBLeXNwYnloMFcybGRLVHR5WlhSMWNtNGdiMzF5WlhSMWNtNGdjbjBwS0NraUxDSnBiWEJ2Y25RZ2JXOWtZV3hYYVc1a2IzY2dabkp2YlNBbkxpOXRiMlJoYkNjN1hISmNibWx0Y0c5eWRDQmlkWEpuWlhKTlpXNTFJR1p5YjIwZ0p5NHZZblZ5WjJWeUp6dGNjbHh1YVcxd2IzSjBJSE5zYVdSbGNpQm1jbTl0SUZ3aUxpOXpiR2xrWlhKY0lqdGNjbHh1YVcxd2IzSjBJSE5vYjNkTmIyUmhiQ0JtY205dElDY3VMM05vYjNkTmIyUmhiQ2M3WEhKY2JseHlYRzUzYVc1a2IzY3VZV1JrUlhabGJuUk1hWE4wWlc1bGNpQW9KMFJQVFVOdmJuUmxiblJNYjJGa1pXUW5MQ0FvS1NBOVBpQjdYSEpjYmlCaWRYSm5aWEpOWlc1MUtDazdYSEpjYmlCdGIyUmhiRmRwYm1SdmR5Z3BPMXh5WEc0Z2MyaHZkMDF2WkdGc0tDazdYSEpjYm4wcE8xeHlYRzVjY2x4dUlpd2lablZ1WTNScGIyNGdZblZ5WjJWeVRXVnVkU0FvS1NCN1hISmNibU52Ym5OMElHSjFjbWRsY2tKMWRIUnZiaUE5SUdSdlkzVnRaVzUwTG5GMVpYSjVVMlZzWldOMGIzSWdLQ2N1YUdWaFpHVnlYMTlpZFhKblpYSW5LVHRjY2x4dVkyOXVjM1FnWTI5dWRHVnVkQ0E5SUdSdlkzVnRaVzUwTG5GMVpYSjVVMlZzWldOMGIzSWdLQ2N1Ym05MExXOXViSGxmWDJOdmJuUmxiblFuS1R0Y2NseHVZMjl1YzNRZ2JXVnVkU0E5SUdSdlkzVnRaVzUwTG5GMVpYSjVVMlZzWldOMGIzSWdLQ2N1YUdWaFpHVnlYMTl1WVhZbktUdGNjbHh1WTI5dWMzUWdiV1Z1ZFVsMFpXMGdQU0JrYjJOMWJXVnVkQzV4ZFdWeWVWTmxiR1ZqZEc5eVFXeHNJQ2duTG1obFlXUmxjbDlmYm1GMlgxOXBkR1Z0SnlrN1hISmNibU52Ym5OMElHMWxiblZKZEdWdFRHbHVheUE5SUdSdlkzVnRaVzUwTG5GMVpYSjVVMlZzWldOMGIzSkJiR3dnS0NjdWFHVmhaR1Z5WDE5dVlYWmZYMmwwWlcxZlgyeHBibXNuS1R0Y2NseHVYSEpjYm1KMWNtZGxja0oxZEhSdmJpNWhaR1JGZG1WdWRFeHBjM1JsYm1WeUlDZ25ZMnhwWTJzbkxDQW9LU0E5UGlCN1hISmNiaUFnSUNCY2NseHVJQ0FnSUdOdmJuTjBJR052Ym5SbGJuUlRkSGxzWlNBOUlIZHBibVJ2ZHk1blpYUkRiMjF3ZFhSbFpGTjBlV3hsS0dOdmJuUmxiblFzSUc1MWJHd3BPMXh5WEc0Z0lDQWdhV1lnS0dOdmJuUmxiblJUZEhsc1pTNWthWE53YkdGNUlEMDlQU0FuYm05dVpTY3BJSHRjY2x4dUlDQWdJQ0FnSUNCamIyNTBaVzUwTG5OMGVXeGxMbVJwYzNCc1lYa2dQU0FuWm14bGVDYzdYSEpjYmlBZ0lDQjlJR1ZzYzJVZ2UxeHlYRzRnSUNBZ0lDQWdJR052Ym5SbGJuUXVjM1I1YkdVdVpHbHpjR3hoZVNBOUlDZHViMjVsSnp0Y2NseHVJQ0FnSUgxY2NseHVJQ0FnSUcxbGJuVXVZMnhoYzNOTWFYTjBMblJ2WjJkc1pTQW9KMmhsWVdSbGNsOWZibUYyTFMxbWIzSmZiVzlpYVd4bEp5azdYSEpjYmlBZ0lDQnRaVzUxU1hSbGJTNW1iM0pGWVdOb0lDaHBkR1Z0SUQwK2UxeHlYRzRnSUNBZ0lDQWdJR2wwWlcwdVkyeGhjM05NYVhOMExuUnZaMmRzWlNnbmFHVmhaR1Z5WDE5dVlYWXRMV1p2Y2w5dGIySnBiR1ZmWDJsMFpXMG5LVHRjY2x4dUlDQWdJSDBwTzF4eVhHNGdJQ0FnYldWdWRVbDBaVzFNYVc1ckxtWnZja1ZoWTJnZ0tHbDBaVzBnUFQ1N1hISmNiaUFnSUNBZ0lDQWdhWFJsYlM1amJHRnpjMHhwYzNRdWRHOW5aMnhsSUNnbmFHVmhaR1Z5WDE5dVlYWXRMV1p2Y2w5dGIySnBiR1ZmWDJsMFpXMWZYMnhwYm1zbktUdGNjbHh1SUNBZ0lIMHBPMXh5WEc1Y2NseHVJQ0FnSUdOdmJuTjBJR0oxY21kbGNrSjFkSFJ2YmxOMGVXeGxJRDBnZDJsdVpHOTNMbWRsZEVOdmJYQjFkR1ZrVTNSNWJHVW9ZblZ5WjJWeVFuVjBkRzl1TENCdWRXeHNLVHRjY2x4dVhISmNiaUFnSUNCcFppQW9ZblZ5WjJWeVFuVjBkRzl1VTNSNWJHVXVkSEpoYm5ObWIzSnRJRDA5UFNBbmJtOXVaU2NwSUh0Y2NseHVJQ0FnSUNBZ0lDQmlkWEpuWlhKQ2RYUjBiMjR1YzNSNWJHVXVkSEpoYm5ObWIzSnRJRDBnSjNKdmRHRjBaU2c1TUdSbFp5a25PMXh5WEc0Z0lDQWdmU0JsYkhObElIdGNjbHh1SUNBZ0lDQWdJQ0JpZFhKblpYSkNkWFIwYjI0dWMzUjViR1V1ZEhKaGJuTm1iM0p0SUQwZ0oyNXZibVVuTzF4eVhHNGdJQ0FnZlZ4eVhHNGdJQ0FnWEhKY2JuMHBPMXh5WEc0dkx5QmxibVFnWW5WeVoyVnlJRzFsYm5WY2NseHVmVnh5WEc1Y2NseHVaWGh3YjNKMElHUmxabUYxYkhRZ1luVnlaMlZ5VFdWdWRTZ3BPeUlzSW1aMWJtTjBhVzl1SUcxdlpHRnNWMmx1Wkc5M0lDZ3BJSHRjY2x4dUlDQWdJR052Ym5OMElDQWdiVzlrWVd4SmJXY2dQU0JrYjJOMWJXVnVkQzV4ZFdWeWVWTmxiR1ZqZEc5eUlDZ25MbTF2WkdGc1gxOXBiV2NuS1N3Z1hISmNiaUFnSUNBZ0lDQWdiVzlrWVd4VWFYUnNaU0E5SUdSdlkzVnRaVzUwTG5GMVpYSjVVMlZzWldOMGIzSWdLQ2N1Ylc5a1lXeGZYM1JwZEd4bEp5a3NJRnh5WEc0Z0lDQWdJQ0FnSUcxdlpHRnNVM1ZpVkdsMGJHVWdQU0JrYjJOMWJXVnVkQzV4ZFdWeWVWTmxiR1ZqZEc5eUlDZ25MbTF2WkdGc1gxOXpkV0owYVhSc1pTY3BMQ0JjY2x4dUlDQWdJQ0FnSUNCdGIyUmhiRlJsZUhRZ1BTQmtiMk4xYldWdWRDNXhkV1Z5ZVZObGJHVmpkRzl5SUNnbkxtMXZaR0ZzWDE5MFpYaDBKeWtzWEhKY2JpQWdJQ0FnSUNBZ2JXOWtZV3hNYVhOMFNYUmxiU0E5SUdSdlkzVnRaVzUwTG5GMVpYSjVVMlZzWldOMGIzSkJiR3dnS0NjdWJXOWtZV3hmWDJ4cGMzUXRZV0p2ZFhSZlgzWmhiSFZsSnlrc0lGeHlYRzRnSUNBZ0lDQWdJRzF2WkdGc1FuUnVJRDBnWkc5amRXMWxiblF1Y1hWbGNubFRaV3hsWTNSdmNpQW9KeTV0YjJSaGJGOWZZblJ1TFdOc2IzTmxKeWtzSUZ4eVhHNGdJQ0FnSUNBZ0lHMXZaR0ZzSUQwZ1pHOWpkVzFsYm5RdWNYVmxjbmxUWld4bFkzUnZjaUFvSnk1dGIyUmhiQ2NwT3lCY2NseHVYSEpjYmlBZ0lDQWdJQ0FnYlc5a1lXeENkRzR1WVdSa1JYWmxiblJNYVhOMFpXNWxjaUFvSjJOc2FXTnJKeXdnS0NrZ1BUNTdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lHMXZaR0ZzTG5OMGVXeGxMbVJwYzNCc1lYa2dQU0FuYm05dVpTYzdYSEpjYmlBZ0lDQWdJQ0FnZlNrN1hISmNibHh5WEc0Z0lDQWdJQ0FnSUcxdlpHRnNTVzFuTG5OeVl5QTlJQ2N1TGk4dUxpOXBiV2N2Y0dWMGN5MXFaVzV1YVdabGNpNXdibWNuT3lBdkx5QndZWFJvSUhSdklHbHRaMXh5WEc0Z0lDQWdJQ0FnSUcxdlpHRnNWR2wwYkdVdWRHVjRkRU52Ym5SbGJuUWdQU0FuVjI5dlpHbGxKenNnTHk4Z2RHbDBiR1VnWEhKY2JpQWdJQ0FnSUNBZ2JXOWtZV3hUZFdKVWFYUnNaUzUwWlhoMFEyOXVkR1Z1ZENBOUlDZEViMmN0VEdGaWNtRmtiM0luT3lBdkx5QnpkWFJwZEd4bElGeHlYRzRnSUNBZ0lDQWdJRzF2WkdGc1ZHVjRkQzUwWlhoMFEyOXVkR1Z1ZENBOUlGd2lTbVZ1Ym1sbVpYSWdhWE1nWVNCemQyVmxkQ0F5SUcxdmJuUm9jeUJ2YkdRZ1RHRmljbUZrYjNJZ2RHaGhkQ0JwY3lCd1lYUnBaVzUwYkhrZ2QyRnBkR2x1WnlCMGJ5Qm1hVzVrSUdFZ2JtVjNJR1p2Y21WMlpYSWdhRzl0WlM0Z1ZHaHBjeUJuYVhKc0lISmxZV3hzZVNCbGJtcHZlWE1nWW1WcGJtY2dZV0pzWlNCMGJ5Qm5ieUJ2ZFhSemFXUmxJSFJ2SUhKMWJpQmhibVFnY0d4aGVTd2dZblYwSUhkdmJpZDBJR2hsYzJsMFlYUmxJSFJ2SUhCc1lYa2dkWEFnWVNCemRHOXliU0JwYmlCMGFHVWdhRzkxYzJVZ2FXWWdjMmhsSUdoaGN5QmhiR3dnYjJZZ2FHVnlJR1poZG05eWFYUmxJSFJ2ZVhNdVhDSTdYSEpjYmx4eVhHNWNjbHh1Ylc5a1lXeE1hWE4wU1hSbGJTNW1iM0pGWVdOb0tDQnBkR1Z0SUQwK0lIdGNjbHh1SUNBZ0lHbDBaVzB1ZEdWNGRFTnZiblJsYm5RZ1BTQW5TR1ZzYkc4bk8xeHlYRzU5S1R0Y2NseHVYSEpjYm0xdlpHRnNMbUZrWkVWMlpXNTBUR2x6ZEdWdVpYSWdLQ2RqYkdsamF5Y3NJQ2hsS1NBOVBpQjdYSEpjYmlBZ0lDQWdJQ0FnYVdZZ0tHVXVkR0Z5WjJWMElEMDlQU0J0YjJSaGJDa2dlMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQnRiMlJoYkM1emRIbHNaUzVrYVhOd2JHRjVJRDBnSjI1dmJtVW5PMXh5WEc0Z0lDQWdJQ0FnSUgxY2NseHVmU2s3WEhKY2JseHlYRzU5WEhKY2JseHlYRzVsZUhCdmNuUWdaR1ZtWVhWc2RDQnRiMlJoYkZkcGJtUnZkeWdwT3lBaUxDSm1kVzVqZEdsdmJpQnphRzkzVFc5a1lXd2dLQ2tnZTF4eVhHNWNjbHh1SUNBZ0lHTnZibk4wSUdsMFpXMXpJRDBnWkc5amRXMWxiblF1Y1hWbGNubFRaV3hsWTNSdmNrRnNiQ0FvSnk1dmRYSXRabkpwWlc1a2MxOWZjMnhwWkdWeVgxOXNhWE4wWDE5cGRHVnRjeWNwTENCY2NseHVJQ0FnSUNBZ0lDQWdJQ0FnYlc5a1lXeFhhVzVrYjNjZ1BTQmtiMk4xYldWdWRDNXhkV1Z5ZVZObGJHVmpkRzl5SUNnbkxtMXZaR0ZzSnlrN1hISmNibHh5WEc0Z0lDQWdhWFJsYlhNdVptOXlSV0ZqYUNBb2FYUmxiU0E5UGlCN1hISmNiaUFnSUNBZ0lDQWdhWFJsYlM1aFpHUkZkbVZ1ZEV4cGMzUmxibVZ5S0NkamJHbGpheWNzSUNncElEMCtlMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQnRiMlJoYkZkcGJtUnZkeTV6ZEhsc1pTNWthWE53YkdGNUlEMGdKMlpzWlhnbk8xeHlYRzRnSUNBZ0lDQWdJSDBwTzF4eVhHNGdJQ0FnZlNsY2NseHVYSEpjYm4wdkx5QmxibVFnWm5WdVkzUnBiMjVjY2x4dVhISmNibVY0Y0c5eWRDQmtaV1poZFd4MElITm9iM2ROYjJSaGJDZ3BPeUlzSW1aMWJtTjBhVzl1SUhOc2FXUmxjaUFvS1NCN1hISmNiaUFnWTI5dWMzUWdZblYwZEc5dVRHVm1kQ0E5SUdSdlkzVnRaVzUwTG5GMVpYSjVVMlZzWldOMGIzSW9KeTV2ZFhJdFpuSnBaVzVrYzE5ZmMyeHBaR1Z5WDE5aWRYUjBiMjR0TFd4bFpuUW5LU3dnWEhKY2JpQWdJQ0FnSUNBZ1luVjBkRzl1VW1sbmFIUWdQU0JrYjJOMWJXVnVkQzV4ZFdWeWVWTmxiR1ZqZEc5eUtDY3ViM1Z5TFdaeWFXVnVaSE5mWDNOc2FXUmxjbDlmWW5WMGRHOXVMUzF5YVdkb2RDY3BMQ0JjY2x4dUlDQWdJQ0FnSUNCemJHbGtaWEpKZEdWdGN5QTlJR1J2WTNWdFpXNTBMbkYxWlhKNVUyVnNaV04wYjNKQmJHd2dLQ2N1YjNWeUxXWnlhV1Z1WkhOZlgzTnNhV1JsY2w5ZmJHbHpkRjlmYVhSbGJYTW5LVHRjY2x4dUlDQWdJR3hsZENCemJHbGtaVWx1WkdWNElEMGdNVHRjY2x4dVhISmNiaUFnSUNBZ0lDQWdablZ1WTNScGIyNGdjMmh2ZDFOc2FXUmxJQ2h1S1NCN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUdsbUlDaHVJRDRnYzJ4cFpHVnlTWFJsYlhNdWJHVnVaM1JvS1NCN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnpiR2xrWlVsdVpHVjRJRDBnTVR0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnZlZ4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0JwWmlBb2Jqd3hLU0I3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCemJHbGtaVWx1WkdWNElEMGdjMnhwWkdWeVNYUmxiWE11YkdWdVozUm9PMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lITnNhV1JsY2tsMFpXMXpMbVp2Y2tWaFkyZ2dLR2wwWlcwZ1BUNGdhWFJsYlM1emRIbHNaUzVrYVhOd2JHRjVJRDBnSjI1dmJtVW5LVHRjY2x4dVhISmNiaUFnSUNBZ0lDQWdJQ0FnSUhOc2FXUmxja2wwWlcxelczTnNhV1JsU1c1a1pYZ3RNVjB1YzNSNWJHVXVaR2x6Y0d4aGVTQTlJQ2NuTzF4eVhHNGdJQ0FnSUNBZ0lIMHZMeUJsYm1RZ1puVnVZM1JwYjI0Z0ozTm9iM2RUYkdsa1pTZGNjbHh1WEhKY2JpQWdJQ0FnSUNBZ1puVnVZM1JwYjI0Z2NHeDFjMU5zYVdSbGN5aHVLU0I3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJSE5vYjNkVGJHbGtaU2h6Ykdsa1pVbHVaR1Y0SUNzOWJpazdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ2ZTQXZMeUJsYm1RZ1puVnVZM1JwYjI0Z0ozQnNkWE5UYkdsa1pYTW5YSEpjYmx4eVhHNWNjbHh1SUNBZ0lDQWdJQ0FnSUNCaWRYUjBiMjVNWldaMExtRmtaRVYyWlc1MFRHbHpkR1Z1WlhJZ0tDZGpiR2xqYXljc0lDZ3BJRDArSUh0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNCd2JIVnpVMnhwWkdWektDMHhLVHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQjlLVHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQmlkWFIwYjI1U2FXZG9kQzVoWkdSRmRtVnVkRXhwYzNSbGJtVnlJQ2duWTJ4cFkyc25MQ0FvS1NBOVBpQjdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQndiSFZ6VTJ4cFpHVnpLREVwTzF4eVhHNGdJQ0FnSUNBZ0lDQWdJSDBwTzF4eVhHNWNjbHh1WEhKY2JuMHZMeUJsYm1RZ1puVnVZM1JwYjI0Z0ozTnNhV1JsY2lkY2NseHVYSEpjYm1WNGNHOXlkQ0JrWldaaGRXeDBJSE5zYVdSbGNpZ3BPeUpkZlE9PSJ9
