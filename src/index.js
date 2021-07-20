import cards from './cards.hbs';
import menu from './menu.json';

const listMenuEl = document.querySelector('.js-menu');
const btnThem = document.querySelector('#theme-switch-toggle');
const bodyEl = document.querySelector('body');


const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
    
if (localStorage.getItem('Them') === Theme.DARK) {
    bodyEl.classList.add(Theme.DARK);
} else {
    bodyEl.classList.add(Theme.LIGHT);
}
if (bodyEl.classList.contains(Theme.DARK)) {
    btnThem.setAttribute('checked', true)
} else {
    btnThem.removeAttribute('checked');
}
menu.forEach(element => {
    listMenuEl.insertAdjacentHTML('beforeend',cards(element));
});

const themPage = () => {
    if (bodyEl.classList.contains(Theme.DARK)) {
        bodyEl.classList.remove(Theme.DARK)
        bodyEl.classList.add(Theme.LIGHT);
        localStorage.setItem('Them', Theme.LIGHT)
        return
    }
    bodyEl.classList.remove(Theme.LIGHT);
    bodyEl.classList.add(Theme.DARK);
    localStorage.setItem('Them', Theme.DARK)
}

btnThem.addEventListener('change', themPage)