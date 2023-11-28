const boton = document.querySelector('#boton');
const menu = document.querySelector('#menu');

boton.addEventListener('click', () => {
    console.log('click')
    menu.classList.toggle('hidden')
})

const darkModeInput = document.querySelector('#darkmode')

darkModeInput.addEventListener('click', ()=> {
    console.log('click')
    document.documentElement.classList.toggle('dark')
})

//carrusel
