
//nav-list will show up when the nav toggle button is clicked

const navToggleBtn = document.querySelector('.nav-toggle-btn');
const navListModal = document.querySelector('.nav-list-modal-div');

navToggleBtn.addEventListener('click', function () {
    navListModal.style.visibility = 'visible';
});

//close the nav-list modal when the closed button is clicked
const closeNavBtn = document.querySelector('.close-nav-btn');

closeNavBtn.addEventListener('click', function () {
    navListModal.style.visibility = 'hidden';
});

//open the shopping-cart
const openCartBtn = document.querySelector('.shopping-cart-icon');
const cartBigBg = document.querySelector('.shopping-cart-container-bg');
const cartDiv = document.querySelector('.shopping-cart-list-div');


openCartBtn.addEventListener('click', function () {
    cartBigBg.classList.add('open-shopping-cart-container-bg');
    cartDiv.classList.add('open-shopping-cart');
});


// close the shopping cart
const closeCartBtn = document.querySelector('.close-shopping-cart-btn');

closeCartBtn.addEventListener('click', function () {
    cartBigBg.classList.remove('open-shopping-cart-container-bg');
    cartDiv.classList.remove('open-shopping-cart');
});




//render all the products whem the page is loaded
const products = [
    {
        id: 0,
        img: './images-products/product-1.jpeg',
        title: 'queen panel bed',
        price: 10.99
    },
    {
        id: 1,
        img: './images-products/product-2.jpeg',
        title: 'king panel bed',
        price: 12.99
    },
    {
        id: 2,
        img: './images-products/product-3.jpeg',
        title: 'single panel bed',
        price: 12.99
    },
    {
        id: 3,
        img: './images-products/product-4.jpeg',
        title: 'twin panel bed',
        price: 22.99
    },
    {
        id: 4,
        img: './images-products/product-5.jpeg',
        title: 'fridge',
        price: 88.99
    },
    {
        id: 5,
        img: './images-products/product-6.jpeg',
        title: 'dresser',
        price: 32.68
    },
    {
        id: 6,
        img: './images-products/product-7.jpeg',
        title: 'couch',
        price: 55.99
    },
    {
        id: 7,
        img: './images-products/product-8.jpeg',
        title: 'table',
        price: 33.99
    },
    {
        id: 8,
        img: './images-products/product-9_evgdfv.jpg',
        title: 'high-back bench',
        price: 9.99
    },
    {
        id: 9,
        img: './images-products/product-10_nhlwda.jpg',
        title: 'albany table',
        price: 79.88
    },
    {
        id: 10,
        img: './images-products/product-11_rolf3u.jpg',
        title: 'accent chair',
        price: 25.99
    },
    {
        id: 11,
        img: './images-products/product-12_qgqh7n.jpg',
        title: 'dinning table',
        price: 66.99
    }
];


window.addEventListener('DOMContentLoaded', function () {
    const allProductsDiv = document.querySelector('.all-products-container-div');
    let eachProductSec = '';

    products.forEach(function (item) {


        eachProductSec += `<section class="individual-product-sec">

        <div class="product-img-div">
            <img src=${item.img} alt="a pic of a product" class="product-pic">
            <button type="button" class="more-details-btn"><i class="fa-solid fa-magnifying-glass"></i></button>
            <button type="button" class="add-to-cart-btn" id="${item.id}"><i class="fa-solid fa-cart-plus"></i> add to
                cart</button>
        </div>

        <h3>${item.title}</h3>
        <h4>$${item.price}</h4>
    </section>`;
    });
    allProductsDiv.innerHTML = eachProductSec;

    //add items to the cart
    const addToCartBtn = document.querySelectorAll('.add-to-cart-btn');

    addToCartBtn.forEach(function (btn) {
        btn.addEventListener('click', function (event) {

            //the cart will be opened once the btn is clicked
            cartBigBg.style.visibility = 'visible';
            cartDiv.classList.add('open-shopping-cart');

            const clickedBtnId = event.currentTarget.id;
            const cartItemsDiv = document.querySelector('.all-incart-items-div');

            const cartItemSec = document.createElement('section');
            cartItemSec.classList.add('each-incart-item-section');

            cartItemSec.innerHTML = `<div class="incart-item-pic-div">
            <img src=${products[clickedBtnId].img} alt="a photo of a piece of furniture"
                class="incart-item-pic">
        </div>


        <div class="incart-item-info-div">
            <h5 class="incart-item-title">${products[clickedBtnId].title}</h5>
            <h5>$<span class="in-cart-item-price">${products[clickedBtnId].price}</span></h5>
            <button type="button" class="remove-cart-item-button">remove</button>
        </div>

        <div class="incart-item-quantity-div">
            <button type="button" class="add-one-btn"><i class="fa-solid fa-chevron-up"></i></button>
            <div class="item-quantity">1</div>
            <button type="button" class="minus-one-btn"><i class="fa-solid fa-chevron-down"></i></button>
        </div>`

            cartItemsDiv.appendChild(cartItemSec);


            //once the item is added to cart, the tag on the pic will become "in-cart", and the vutton will be disabled
            btn.textContent = 'in cart';
            btn.disabled = true;

            //total price
            const totalPrice = document.querySelector('.total-price');

            const inCartItemPrice = document.querySelectorAll('.in-cart-item-price');

            let price = 0;
            for (i = 0; i < inCartItemPrice.length; i++) {
                const itemPrices = Number(inCartItemPrice[i].textContent);
                price += itemPrices;
            };
            totalPrice.textContent = price.toFixed(2);

            //clear cart
            const clearCartBtn = document.querySelector('.clear-cart-btn');

            clearCartBtn.addEventListener('click', function () {
                cartItemsDiv.innerHTML = '';
                totalPrice.textContent = '0';
            });
        });
    });


});










