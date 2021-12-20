function inicio ( ) {
    const element = document.getElementById("getLocalizacion");
    element.addEventListener("click",getUbicacion);
}
function getUbicacion ( ) {
    navigator.geolocation.getCurrentPosition(show);
}

function show(posicion) {
    let geolocalizacion = document.getElementById("geolocalizacion");
    let datos = "";
    datos += "Latitud: " + posicion.coords.latitude + "<br>";
    datos += "Longitud: " + posicion.coords.longitude + "<br>";
    datos += "Exactitud: " + posicion.coords.exact + "<br>";
    geolocalizacion.innerHTML = datos;
}
window.addEventListener("load", inicio);