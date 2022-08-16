/* 
==================== Products Catalogue ====================
*/

// Función para obtener los productos del JSON
const getCatalogueList = async () => {
    const products = await fetch('../data/products.json');
    const parsedProducts = await products.json();
    saveCatalogueStorage(parsedProducts);
}

getCatalogueList();

// Array de productos del catálogo almacenados en el localStorage
const catalogueProducts = getCatalogueStorage();

