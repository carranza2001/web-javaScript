$(document).ready(function () {
    $("a").click(function (evento) {
        alert("Has pulsado en el enlace. Ahora serás enviado a la página de la USAT")
    })
})

$("#cb1").click(function () {
    $("#cb1").toggle(1500);
}, function(){
    $("#cont1").toggle(1500);
})
