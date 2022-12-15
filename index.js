//nav-list will show up when the nav toggle button is clicked

const navToggleBtn = document.querySelector('.nav-toggle-btn');
const navListModal = document.querySelector('.nav-list-modal-div');

navToggleBtn.addEventListener('click', function() {
    navListModal.style.visibility = 'visible';
});

//close the nav-list modal when the closed button is clicked
const closeNavBtn = document.querySelector('.close-nav-btn');

closeNavBtn.addEventListener('click', function() {
    navListModal.style.visibility = 'hidden';
});