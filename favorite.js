
// Función global para agregar el producto o eliminar
const addToFav = () => {
    favBtn.forEach(fav => {
        fav.addEventListener('click', (event) => {
                event.target.classList.toggle('like-product');
                let matchProduct = products.find(product => product.id == event.target.id);
                let stringifiedMatchProduct = JSON.stringify(matchProduct);
                event.target.classList.contains('like-product') ? addProduct(stringifiedMatchProduct) : removeProduct(matchProduct);
                let finalFavoriteList = JSON.parse(localStorage.getItem('favoriteList'));
                console.log('Funciona?');
                for(let i=0; i< finalFavoriteList.length; i++) {
                    let favItem = JSON.parse(finalFavoriteList[i]);
                    let favoriteListRender = [];
                    favoriteListRender.push(favItem);
                    favoriteRender(favoriteListRender);
                }
                
                favoriteRender(finalFavoriteList);
            })
    })
}

addToFav();


