/* 
==================== Products Home ====================
*/

// Función para obtener los productos del JSON
const getProductsList = async () => {
    const products = await fetch('./data/products.json');
    const parsedProducts = await products.json();
    saveProductsStorage(parsedProducts);
}

getProductsList();

// Array de Productos
const products = getProductsStorage();

const cartBtn = document.querySelectorAll('.cart-btn');

