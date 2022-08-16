/* 
==================== Categories Products Render ====================
*/

const categoryContainer = document.querySelector('.category-container');
const categoryIdentifier = categoryContainer.id;

// Funcion para renderizar los productos según categoría
const renderCategory = (arr) => {
    const categoryProducts = arr.filter(item => item.category == categoryIdentifier);

    categoryProducts.forEach(product => {
        let card = document.createElement('div');
        card.classList.add('product-card', product.category);
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
                                <button class="cart-btn">Agregar al Carrito</buton>
                                <button class="purchase-btn">Comprar</buton>
                            </div>
        `
        categoryContainer.append(card);
    })
}

renderCategory(catalogueProducts)


