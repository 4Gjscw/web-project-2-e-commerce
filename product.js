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



//get all the products from other places
class Products {
    async getAllProducts() {
        try {
            //the json file was created to imitate the response that we will get from Contentful
            const result = await fetch('./products.json');
            const data = await result.json();

            //select the data that we need that we get from the responses we fetched, and change the data format to the way we want
            let products = data.items;
            products = products.map((item) => {
                const { title, price } = item.fields;
                const { id } = item.sys;
                const image = item.fields.image.fields.file.url;
                return { title, price, id, image };
            })
            return products;
        } catch (error) {
            console.log(error);
        }
    }
}


const allProductsContainer = document.querySelector('.all-products-container-div');

let shoppingCart = [];

class ShowProducts {

    //display all the products
    displayProducts(products) {
        let result = '';
        products.forEach((element) => {
            result += `<section class="individual-product-sec">

            <div class="product-img-div">
                <img src=${element.image} alt="a pic of a product" class="product-pic">
                <button type="button" class="more-details-btn"><i class="fa-solid fa-magnifying-glass"></i></button>
                <button type="button" class="add-to-cart-btn" data-id=${element.id}><i class="fa-solid fa-cart-plus"></i> add to
                    cart</button>
            </div>

            <h3>${element.title}</h3>
            <h4>$${element.price}</h4>
        </section>`
        });
        allProductsContainer.innerHTML = result;
    }

    //get the cart buttons
    getCartBtns() {
        const addToCartBtn = [...document.querySelectorAll('.add-to-cart-btn')]; //change nodelist to an array

        addToCartBtn.forEach((btn) => {
            //check whether some of the items are already in the shopping cart
            const id = btn.dataset.id;
            let inCart = shoppingCart.find((item) => item.id === id);
            //when refreshing, if the item is already in the cart, the addtocart btn will be disabled for that item
            if (inCart) {
                btn.innerText = 'in cart';
                btn.disabled = true;
            }
            //the item is not in the cart, we will add that item into the cart
            btn.addEventListener('click', (event) => {
                event.target.innerText = 'in cart';
                event.target.disabled = true;
            });
        });
    }
}


//store the selected fetched data into localstorage
class StoreData {
    static saveData(products) {
        localStorage.setItem('allProducts', JSON.stringify(products));
    }
}

window.addEventListener('DOMContentLoaded', () => {
    const myProducts = new Products;
    const display = new ShowProducts;
    myProducts.getAllProducts().then((products) => {
        display.displayProducts(products);
        StoreData.saveData(products);
    }).then(() => {
        display.getCartBtns();
    });
});
