/* 
==================== Renderizado de Favoritos ====================
*/

// Container de favoritos
const favoritesContainer = document.querySelector('.favorites-products-list');

let parsedFavoriteList = []

for(let i=0; i < parsedFavoriteProducts.length; i++) {
    parsedFavoriteList.push(JSON.parse(parsedFavoriteProducts[i]))
}

// Función para renderizar los productos en favoritos
const favoriteRender = (list) => {
    // const favoriteEmpty = document.querySelector('.favorites-container-empty');

    // favoriteEmpty.style.display = 'none';
    for(const fav of list) {
        let favItem = document.createElement('li');
        favItem.classList.add('favorites-products-list--item');
        favItem.innerHTML = `
                            <div class="favorite-card">
                                <figure class="favorite-card--img">
                                    <img src=../${fav.image} alt="">
                                </figure>
                                <div class="favorite-card--info">
                                    <h3>${fav.name}</h3>
                                    <p>${fav.price}</p>
                                    <button>Eliminar de Favoritos</button>
                                </div>
                            </div>`;
        favoritesContainer.append(favItem);
    }
}

favoriteRender(parsedFavoriteList);
