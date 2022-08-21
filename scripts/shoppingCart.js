const shoppingCartBtn = document.querySelectorAll('.cart-btn');

const shoppingCardDeleteBtn = document.querySelectorAll('.shopping-card--delete-btn');

let shoppingCartList = [];

// Agregar productos al localStorage
const addProductLocalStorage = () => {
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCartList))
}

// Obtener carrito de compras del LocalStorage
const getShoppingCartStorage = () => {
    return JSON.parse(localStorage.getItem('shopping-cart'));
}

// Funcion para añadir producto al carrito
const addProductShoppingCart = (product) => {
    shoppingCartList.push(product);
    addProductLocalStorage();
}

shoppingCartBtn.forEach(item => {
    item.addEventListener('click', (event) => {
        let matchProduct = catalogueProducts.find(product => product.id == event.target.id);
        addProductShoppingCart(matchProduct);
    })
})

const reduceCheckout = () => {
    let shoppingCartListStorage = getShoppingCartStorage();
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
