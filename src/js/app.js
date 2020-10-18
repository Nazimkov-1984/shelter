import modalWindow from 'modal.js';
import burgerMenu from 'burger.js';

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
})



modalWindow();