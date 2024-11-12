let guardar = document.getElementById('botonGuardar');
let nombre = document.getElementById('nombre');
let apellidos = document.getElementById('apellidos');

guardar.addEventListener('click', () => {

    localStorage.setItem("nombre", nombre.value);
    localStorage.setItem("apellidos", apellidos.value);

    nombre.value = '';
    apellidos.value = '';

})

let mostrar = document.getElementById('botonMostrar');

mostrar.addEventListener('click', () => {
    let nombreGuardado = localStorage.getItem('nombre');
    let apellidoGuardado = localStorage.getItem('apellidos');
    console.log(apellidos);

    document.getElementById('mostrarNombre').innerHTML = `${nombreGuardado}`;
    document.getElementById('mostrarApellidos').innerHTML = `${apellidoGuardado}`;
})