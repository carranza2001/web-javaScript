function guardarDatos() {
    localStorage.nombre = document.getElementById('usuario').value;
    localStorage.celular = document.getElementById('celular').value;
    localStorage.correo = document.getElementById('correo').value;
    
    document.getElementById("nombre").value = "";
    document.getElementById("celular").value = "";
    document.getElementById("correo").value = "";
    actualizarDatos();
}
function recuperarDatos() {
    if (localStorage.nombre != '' && localStorage.celular != '' && localStorage.correo != '') {
        document.getElementById('datos').innerHTML = `Nombre: ${localStorage.nombre} <br> Celular: ${localStorage.celular} <br> Correo: ${localStorage.correo}`
    } else {
        document.getElementById('datos').innerHTML = 'No hay datos guardados'
    }
}
function eliminarDato(){
    var nombre = document.getElementById("usuario").value;
    localStorage.removeItem(nombre);

    var celular = document.getElementById("celular").value;
    localStorage.removeItem(celular);

    var nombre = document.getElementById("correo").value;
    localStorage.removeItem(correo);
    actualizarDatos();
}
function eliminarTodo(){
    localStorage.clear();
    actualizarDatos();
}
function actualizarDatos(){
    var registro = "";
    if (localStorage.length === 0){
        registro += '<li>Vacío</li>';
    }else{
        for(var i = 0; i<= localStorage.length - 1; i++){
            var key = localStorage.key(i);
            registro += '<li>' + '<span class="nom">' + key + '</span>'+
            '<span class = "nom">' + localStorage.getItem(key) + '</span>' + '</li><br>';
        }
    }
    document.getElementById('datos').innerHTML = registro;
}

