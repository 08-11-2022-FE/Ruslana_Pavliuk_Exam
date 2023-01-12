const burger = document.querySelector('.burger');
const closeButton = document.querySelector('.close-sign');
const navList = document.querySelector('.nav__list');
const nav = document.querySelector('.nav');
console.log(burger);
console.log(closeButton)
burger.addEventListener('click', function() {
        navList.style.display = 'block';
});
closeButton.addEventListener('click', () => navList.style.display = 'none')

