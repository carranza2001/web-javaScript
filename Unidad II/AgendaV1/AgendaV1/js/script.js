function guardarDatos() {
    localStorage.nombre = document.getElementById('usuario').value;
    localStorage.celular = document.getElementById('celular').value;
}
function recuperarDatos() {
    if (localStorage.nombre != '' && localStorage.celular != '') {
        document.getElementById('datos').innerHTML = `Nombre: ${localStorage.nombre} <br> Celular: ${localStorage.celular}`
    } else {
        document.getElementById('datos').innerHTML = 'No hay datos guardados'
    }
}


