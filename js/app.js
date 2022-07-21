import * as UI from './interfaz.js'
import API from './api.js'

UI.formularioBuscar.addEventListener('submit', buscarCancion)


function buscarCancion(e){
    e.preventDefault();

    //Obtener los datos del formulario

    const artista = document.querySelector('#artista').value
    const cancion = document.querySelector('#cancion').value

    //Validación
    if(artista === '' || cancion === '') {
        //Si el usario deja un campo vacio del formulario, mostrar error
        UI.divMensajes.textContent = 'Error todos los campos son obligatorios'
        UI.divMensajes.classList.add('error')
        
        setTimeout(() => {
            UI.divMensajes.textContent = '';
            UI.divMensajes.remove();
        }, 3000);
        return;
    }

    //Consultar la API

    const busqueda = new API(artista, cancion);
    busqueda.consultarAPI();
}