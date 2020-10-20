

function slider () {

    const generateRandomPets = () => {

        const 
                slider = document.querySelector ('.our-friends__slider__list');
                let card = document.createElement('li'),
            img = document.createElement('img'),
            title = document.createElement('h3'),
            button = document.createElement('a');
            card.className = 'our-friends__slider__list__items animate__animated animate__backInLeft';
            img.className = 'our-friends__slider__list__items__img';
            title.className = 'our-friends__slider__list__items__title';
            button.className = 'our-friends__slider__list__items__button';
            
    
    fetch('../assets/libs/pets.json')
    .then(data => data.json())
    .then (res => {
    
            const  rand = Math.floor(Math.random() * (7 - 3 + 1) ) + 3;
    
            img.src = res[rand].img;
            title.textContent = res[rand].name;
    
    });
    
            button.textContent = 'Learn more';
            slider.append(card);
            card.append(img);
            card.append(title);
            card.append(button);

            return card;
    
    } // end function 
  const buttonLeft = document.querySelector('.our-friends__slider__button--left'), 
        buttonRight = document.querySelector('.our-friends__slider__button--right');
        

    buttonLeft.addEventListener ('click', () => {
        let sliderItems = document.querySelectorAll ('.our-friends__slider__list__items');
        sliderItems.forEach (item =>{
            item.remove();
        });
        for (let i = 0; i < 3 ; i++){
            generateRandomPets();
        }
    });
    buttonRight.addEventListener ('click', () => {
        let sliderItems = document.querySelectorAll ('.our-friends__slider__list__items');
        sliderItems.forEach (item =>{
            item.remove();
        });
        for (let i = 0; i < 3 ; i++){
            generateRandomPets();
        }
    })


}// end function 'slider'

export default slider();