const shoppingCartBtn = document.querySelectorAll('.cart-btn');

const shoppingCardDeleteBtn = document.querySelectorAll('.shopping-card--delete-btn');

localStorage.setItem('shopping-cart', JSON.stringify[[]]);

const shoppingCartListStorage = JSON.parse(localStorage.getItem('shopping-cart'));
console.log((shoppingCartListStorage));

const addProductLocalStorage = () => {
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCartListStorage))
}

// Funcion para añadir producto al carrito
const addProductShoppingCart = (product) => {
    shoppingCartListStorage.push(product);
    addProductLocalStorage();
}

// Funcion para eliminar producto del carrito

const removeProductShoppingCart = (product) => {
    let productToRemove = shoppingCartList.findIndex(elem => elem == product);
    shoppingCartList.splice(productToRemove, 1);
}

// Obtener carrito de compras del LocalStorage
const getShoppingCartStorage = () => {
    return JSON.parse(localStorage.getItem('shopping-cart'));
}


shoppingCartBtn.forEach(item => {
    item.addEventListener('click', (event) => {
        let matchProduct = catalogueProducts.find(product => product.id == event.target.id);
        addProductShoppingCart(matchProduct);
    })
})

shoppingCardDeleteBtn.forEach(item => {
    item.addEventListener('click', (event) => {
        console.log(event.target);
        removeProductShoppingCart(event.target);
        renderShoppingCart();
    })
})

const reduceCheckout = () => {
    let shoppingCartPriceArr = []
    shoppingCartListStorage.forEach(price => shoppingCartPriceArr.push(price.price))
    const subtotalValue = shoppingCartPriceArr.reduce((firstValue, secondValue) => firstValue + secondValue);
    return subtotalValue;
    
}

const shipCost = 600;

const totalPrice = () => {
    let subtotalCost = reduceCheckout();
    return shipCost + subtotalCost;
}
