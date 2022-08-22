const shoppingCartBtn = document.querySelectorAll('.cart-btn');

const shoppingCardDeleteBtn = document.querySelectorAll('.shopping-card--delete-btn');

// Obtener carrito de compras del localStorage
const getShoppingCartStorage = () => {
    return JSON.parse(localStorage.getItem('shopping-cart')) || [];
}

// Funcion para añadir producto al carrito
const addProductShoppingCart = (product) => {
    let shoppingCartListStorage = getShoppingCartStorage();
    shoppingCartListStorage.push(product);
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCartListStorage));
}

shoppingCartBtn.forEach(item => {
    item.addEventListener('click', (event) => {
        let matchProduct = catalogueProducts.find(product => product.id == event.target.id);
        addProductShoppingCart(matchProduct);
    })
})

// Función Checkout
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
