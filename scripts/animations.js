// Animaciones

// Menu Mobile

const hambMenu = document.querySelector('.hamb-menu-btn');
const menuList = document.querySelector('.nav--list-menu');
const closeMenu = document.querySelector('.close-menu');

hambMenu.addEventListener('click', () => {
    menuList.classList.add('show-menu');
})

closeMenu.addEventListener('click', () => {
    menuList.classList.remove('show-menu');
})

// Register Modal

const registerModal = document.querySelector('.register');
const showRegister = document.querySelector('.show-register');
const closeRegister = document.querySelector('.close-register');

showRegister.addEventListener('click', () => {
    registerModal.classList.add('show-register');
    menuList.classList.remove('show-menu');
})

closeRegister.addEventListener('click', () => {
    registerModal.classList.remove('show-register');
})


// Sweet Alert

function alertCartFunction() {
    Swal.fire({
     title: '¿Quieres agregar el producto al carrito?',
     showCancelButton: true,
     confirmButtonText: 'Agregar Producto',
     confirmButtonColor: '#B05258',
     cancelButtonColor: '#E5BD95'
    }).then((result) => {
     if(result.isConfirmed) {
         Swal.fire({
             text: '¡Producto agregado con Éxito!',
             icon: 'success'})
        
        }
    }) 
 }

 function alertPurchaseFunction() {
    Swal.fire({
        title: '¿Estás seguro de comprar este producto?',
        showCancelButton: true,
        confirmButtonColor: '#B05258',
        confirmButtonText: 'Ir al Carrito',
    }).then((result) => {
        if(result.isConfirmed) {
            Swal.fire({
                icon: 'success',
                text: 'Redirigiendo...'
            }
            )
        }
    })
 }
 
 function alertConfirmed() {
    Swal.fire({
        title: '¡Compra confirmada!',
        icon: 'success',
    })
 }

 
