function showModal () {

    const items = document.querySelectorAll ('.our-friends__slider__list__items'), 
            modalWindow = document.querySelector ('.modal');

    items.forEach (item => {
        item.addEventListener('click', () =>{
            modalWindow.style.display = 'flex';
        });
    })

}// end function

export default showModal();