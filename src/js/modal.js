function modalWindow () {
    const   modalImg = document.querySelector ('.modal__img'), 
        modalTitle = document.querySelector ('.modal__title'), 
        modalSubTitle = document.querySelector ('.modal__subtitle'), 
        modalText = document.querySelector ('.modal__text'),
        modalListItem = document.querySelectorAll ('.modal__list-about__value'), 
        modalBtn = document.querySelector ('.modal__btn-close'), 
        modal = document.querySelector ('.modal'); 

        modalBtn.addEventListener ('click', () =>{
            modal.style.display = 'none';
        });

        modalImg.src = '../../img/pets-jennifer.png'; // path to img
        modalTitle.textContent = 'Woodie'; // title 
        modalSubTitle.textContent = 'Dog-Labrador'; // sutitle 
        modalText.textContent = "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.";


modalListItem.forEach( item => {
    item.textContent = 'Hello';
});

modal.addEventListener ('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
});

}

export default modalWindow(); 