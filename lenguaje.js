function mostrarRespuesta() {
    var problema = document.getElementById("problema").value;
    var respuesta = document.getElementById("respuesta");

    switch(problema) {
        case "1":
            respuesta.innerHTML = "Entrena un grupo de ardillas escializadas en encontrar objetos";
            break;
        case "2":
            respuesta.innerHTML = "Pantalones";
            break;
        case "3":
            respuesta.innerHTML = "Elefante";
            break;
        case "4":
            respuesta.innerHTML = "Silla";
            break;
        default:
            respuesta.innerHTML = "";
    }
}
