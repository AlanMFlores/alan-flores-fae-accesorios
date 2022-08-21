const shoppingCartBtn = document.querySelectorAll('.cart-btn');

const shoppingCardDeleteBtn = document.querySelectorAll('.shopping-card--delete-btn');

let shoppingCartList = [];

// Guardar productos en el localStorage
const saveProductsLocalStorage = (products) => {
    localStorage.setItem('shopping-cart', JSON.stringify(products))
}

// Obtener carrito de compras del localStorage
const getShoppingCartStorage = () => {
    return JSON.parse(localStorage.getItem('shopping-cart'));
}

saveProductsLocalStorage(shoppingCartList);

// Funcion para añadir producto al carrito
const addProductShoppingCart = (product) => {
    let shoppingCart = getShoppingCartStorage();
    console.log(shoppingCart);
    shoppingCart.push(product);
    console.log(shoppingCart);
    saveProductsLocalStorage(shoppingCart);
    console.log(shoppingCart);
}

// Funcion para eliminar producto del carrito
const removeProductShoppingCart = (product) => {
    let productToRemove = shoppingCartList.findIndex(elem => elem == product);
    shoppingCartList.splice(productToRemove, 1);
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
    let shoppingCartCheckout = getShoppingCartStorage();
    let shoppingCartPriceArr = []
    shoppingCartCheckout.forEach(price => shoppingCartPriceArr.push(price.price))
    const subtotalValue = shoppingCartPriceArr.reduce((firstValue, secondValue) => firstValue + secondValue);
    return subtotalValue;
    
}

const shipCost = 600;

const totalPrice = () => {
    let subtotalCost = reduceCheckout();
    return shipCost + subtotalCost;
}
