/* 
==================== Local Storage ====================
*/

// Guardar productos en LocalStorage
const saveProductsStorage = (products) => {
    localStorage.setItem('products', JSON.stringify(products));
}

// Obtener productos del LocalStorage
const getProductsStorage = () => {
    return JSON.parse(localStorage.getItem('products') || []);
}

// Guardar catalogo en LocalStorage
const saveCatalogueStorage = (products) => {
    localStorage.setItem('catalogue', JSON.stringify(products));
}

// Obtener catálogo del LocalStorage
const getCatalogueStorage = () => {
    return JSON.parse(localStorage.getItem('catalogue') || []);
}

// Ordenar productos aleatoriamente
const shuffleArray = (arr) => {
    let newArr = arr.sort(() => Math.random() - 0.5);
    return newArr;
}

// Cortar un número determinado de productos
const sliceArr = (arr) => {
    let newArr = arr.slice(0, 12);
    return newArr;
}