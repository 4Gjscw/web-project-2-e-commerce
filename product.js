//shopping cart will show up when the cart button is clicked
const shoppingCartBtn = document.querySelector('.shopping-cart-icon');
const cartContainerBg = document.querySelector('.shopping-cart-container-bg');
const cartListDiv = document.querySelector('.shopping-cart-list-div');
const closeCartBtn = document.querySelector('.close-shopping-cart-btn');

shoppingCartBtn.addEventListener('click', () => {
    cartContainerBg.classList.add('open-shopping-cart-container-bg');
    cartListDiv.classList.add('open-shopping-cart');
});

//close the shopping cart when the closed button is clicked
closeCartBtn.addEventListener('click', () => {
    cartContainerBg.classList.remove('open-shopping-cart-container-bg');
    cartListDiv.classList.remove('open-shopping-cart');
});


