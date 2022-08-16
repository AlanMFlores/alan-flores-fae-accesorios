/* 
>>>>>>> 0eccb7919334238efb1660b878c91b2a9118a585:product.js
==================== Render Products Home ====================
*/

// Featured Products Container 
let featuredProducts = document.querySelector('.featured-products-grid');

// Funcion para renderizar productos en el home
const renderProductsHome = (arr) => {
    let shuffledArr = shuffleArray(arr);
    let slicedArr = sliceArr(shuffledArr);
    
    slicedArr.forEach(product => {
        let card = document.createElement('div');
        card.classList.add('product-card', product.category);
        card.innerHTML = ` <div class="product-card-image">
                                    <img src=${product.image} alt="product card image">
                                </a>
                            </div>
                            <div class="product-card-description">
                                <div class="product-card-info">
                                    <p class="product-card-name">${product.name}</p>
                                    <p class="product-card-price">$${product.price.toFixed(2)}</p>
                                </div>
                            </div>
                            <div class="product-card-purchase">
                                <button onclick="alertCartFunction()" class="cart-btn">Agregar al Carrito</buton>
                                <button onclick="alertPurchaseFunction()" class="purchase-btn">Comprar</buton>
                            </div>
        `
        featuredProducts.append(card);
    })
}

renderProductsHome(products);