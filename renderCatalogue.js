/* 
==================== Render Catalogue ====================
*/

// Catálogo Container
let catalogueGrid = document.querySelector('.catalogue-products');

const renderCatalogue = (arr) => {
    let shuffledArr = shuffleArray(arr);

    shuffledArr.forEach(product => {
        let card = document.createElement('div');
        card.classList.add('product-card', product.category, 'hide');
        card.innerHTML = ` <div class="product-card-image">
                                    <img src=../${product.image} alt="product card image">
                                </a>
                                <div class="product-card-favorite">
                                    <button class="fav-check" id="false">
                                        <i class="fa-solid fa-heart" id=${product.id}></i>
                                    </button>
                                </div>
                            </div>
                            <div class="product-card-description">
                                <div class="product-card-info">
                                    <p class="product-card-name">${product.name}</p>
                                    <p class="product-card-price">$${product.price.toFixed(2)}</p>
                                </div>
                            </div>
                            <div class="product-card-purchase">
                                <button onclick="alertCartFunction()" class="cart-btn" id=${product.id}>Agregar al Carrito</buton>
                                <button onclick="alertPurchaseFunction() "class="purchase-btn" id=${product.id}>Comprar</buton>
                            </div>
        `
        catalogueGrid.append(card);
    })
}

renderCatalogue(catalogueProducts);

// Renderizado Inicial
window.onload = () => {
    filterProduct('todos');
}
























