function guardarDato() {
    var nombreEs = document.getElementById('nombre').value;
    var movilEs = document.getElementById('movil').value;
    if (nombreEs == "") {
        alert("El nombre es obligatorio digitarlo");
        document.getElementById("nombre").focus();
    } else {
        if (movilEs == "") {
            alert("El numero es obligatorio digitarlo");
            document.getElementById("movil").focus();
        }
    }

    var datos = {
        'movil' : movil,
        'email' : email,
    };

    localStorage.setItem(nombreEs,JSON.stringify(datos));
    actualizarDatos();
}

function recuperarDatos(){
    var nombreEs = document.getElementById("nombre").value;
    localStorage.getItem(nombreEs);
    document.getElementById("movil").value = localStorage.getItem(nombreEs);
}
function eliminarDato(){
    var nombreEs = document.getElementById("nombre").value;
    localStorage.removeItem(nombreEs);
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
    document.getElementById('contactos').innerHTML = registro;
}