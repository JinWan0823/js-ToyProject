// do something!
const TOGGLE_NAV_KEY = 'toggle-nav';

const toggleButton = document.getElementsByClassName('toggle')[0];
const navi = document.getElementsByTagName('nav')[0];
const body = document.getElementsByTagName('body')[0];

const setBrowser = () => {
    const activeNavi = localStorage.getItem(TOGGLE_NAV_KEY);
    if (activeNavi === 'on') {
        toggleButton.classList.add('active');
        navi.classList.add('active');
    } else {
        toggleButton.classList.remove('active');
        navi.classList.remove('active');
    }
};

const toggleNavi = () => {
    toggleButton.onclick = (event) => {
        if (event.target.classList.contains('active')) {
            localStorage.setItem(TOGGLE_NAV_KEY, 'off');
            toggleButton.classList.remove('active');
        } else {
            toggleButton.classList.add('active');
            localStorage.setItem(TOGGLE_NAV_KEY, 'on');
        }
        setBrowser();
    };
};

toggleNavi();
setBrowser();

window.addEventListener('load', () => {
    body.classList.remove('preload');
    body.style.visibility = 'inherit';
});
