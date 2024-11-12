let nombre = document.getElementById('nombreUsuario');
let contraseña = document.getElementById('contraseñaUsuario');
let confirmarContraseña = document.getElementById('confirmarContraseñaUsuario');

let guardar = document.getElementById('botonGuardar');
let mostrar = document.getElementById('botonMostrar');

guardar.addEventListener('click', () => {
    if (contraseña.value === confirmarContraseña.value){
        localStorage.setItem('nombre', nombre.value);
        localStorage.setItem('contraseña', confirmarContraseña.value);
        console.log(nombre);
    }else{
        alert('Contraseña iválida');
    }
    nombre.value = '';
        contraseña.value = '';
        confirmarContraseña.value = '';
})

mostrar.addEventListener('click', () => {
    let nombreGuardado = localStorage.getItem('nombre');
    let contraseñaGuardado = localStorage.getItem('contraseña');

    document.getElementById('mostrarNombre').innerHTML = `${nombreGuardado}`;
    document.getElementById('mostrarContraseña').innerHTML = `${contraseñaGuardado}`;
})