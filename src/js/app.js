import modalWindow from './modal.js';
import burgerMenu from './burger.js';
import slider from "./slider.js";
import showModal from './showModal';

burgerMenu();

// MODAL WINDOW
fetch('../pets.json')
.then(data => data.json())
.then (res => {
    let y = '';
    for (let i = 0; i< res.length; i++) {
        y = y + res[i].name;
    }
    console.log (y);
});



modalWindow();
showModal();