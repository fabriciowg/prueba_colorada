const imagenes = document.querySelectorAll('.img-galeria');
const imagenesLight = document.querySelector('.agregar-imagen');
const contenedorLight = document.querySelector('.imagen-light');
const closeBtn = document.querySelector('.close');


const menu1 = document.querySelector('.menu');




imagenes.forEach(imagen => {
    imagen.addEventListener('click', () => {
        aparecerImagen(imagen.getAttribute('src'));
    })
})

const aparecerImagen = (imagen) => {
    imagenesLight.src = imagen;
    contenedorLight.classList.toggle('show')
    imagenesLight.classList.toggle('showImage')
    menu1.style.opacity = '0'
}

const cerrarImagen = () => {
    imagenesLight.src = '';
    contenedorLight.classList.remove('show');
    imagenesLight.classList.remove('showImage');
    menu1.style.opacity = '1';
}

closeBtn.addEventListener('click', cerrarImagen);

/*contenedorLight.addEventListener('click', (e) => {
    if (e.target !== imagenesLight) {
        contenedorLight.classList.toggle('show')
        imagenesLight.classList.toggle('showImage')
        menu1.style.opacity = '1'
    }
})*/

