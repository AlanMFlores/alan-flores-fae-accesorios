const shoppingCartBtn = document.querySelectorAll('.cart-btn');

const shoppingCardDeleteBtn = document.querySelectorAll('.shopping-card--delete-btn');

let shoppingCartList = [];
localStorage.setItem('shopping-cart', JSON.stringify(shoppingCartList))
console.log(shoppingCartList);

// Guardar producto en localStorage
const addProductLocalStorage = (products) => {
    localStorage.setItem('shopping-cart', JSON.stringify(products))
}

// Obtener carrito de compras del localStorage
const getShoppingCartStorage = () => {
    return JSON.parse(localStorage.getItem('shopping-cart'));
}

let shoppingCartListStorage = getShoppingCartStorage() || [];

// Funcion para añadir producto al carrito
const addProductShoppingCart = (product) => {
    shoppingCartListStorage.push(product);
    addProductLocalStorage(shoppingCartListStorage);
}


shoppingCartBtn.forEach(item => {
    item.addEventListener('click', (event) => {
        let matchProduct = catalogueProducts.find(product => product.id == event.target.id);
        addProductShoppingCart(matchProduct);
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
