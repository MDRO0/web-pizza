const lista = document.getElementById('miLista');
const botonAgregar = document.getElementById('agregarElemento');
const botonEliminar = document.getElementById('eliminarElemento');

botonAgregar.addEventListener('click', function(){
    let nuevoElement = document.createElement('li'); //<li></li>
    nuevoElement.textContent = 'Nuevo elemento'; //<li>Nuevo elemento</li>
    lista.appendChild(nuevoElement);
    //console.log('Ohhhh, le distes click. Genial!')
})

botonEliminar.addEventListener('click',function(){
    const primerElemento = lista.firstElementChild;
    if(primerElemento){
        lista.removeChild(primerElemento);
    }else{
        alert('No hay elemento que eliminar, todo esta vacio')
    }
    console.log(primerElemento);
})
