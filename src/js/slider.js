function slider () {
  const buttonLeft = document.querySelector('.our-friends__slider__button--left'), 
        buttonRight = document.querySelector('.our-friends__slider__button--right'), 
        sliderItems = document.querySelectorAll ('.our-friends__slider__list__items');
    let slideIndex = 1;

        function showSlide (n) {
            if (n > sliderItems.length) {
                slideIndex = 1;
            }
            if (n<1) {
                slideIndex = sliderItems.length;
            }
            sliderItems.forEach (item => item.style.display = 'none');

            sliderItems[slideIndex-1].style.display = '';
        }// end function 'showSlide'

        function plusSlides(n) {
            showSlide(slideIndex +=n);
           } // end function 'plusSlides'


           buttonLeft.addEventListener ('click', () => {
              plusSlides(-1);
           });
           buttonRight.addEventListener ('click', () => {
             plusSlides(1);
           });


}// end function 'slider'

export default slider();