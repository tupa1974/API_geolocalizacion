function inicio() {
  /*  */
  let element = document.getElementById("obtener");
  element.addEventListener("click", getUbicacion);
 
 
}

function getUbicacion() {
  /*let geoconfig ={
        enableHighAccuracy : true,
        timeout :20000,
        maximumAge : 60000

    };
    const control = navigator.geolocation.watchPosition(mostrar,mostrarerror,geoconfig); */
  navigator.geolocation.getCurrentPosition(mostrar, mostrarerror);
}

function mostrar(posicion) {
  let geolocalizacion = document.getElementById("ubicacion");
  let latitud = posicion.coords.latitude;
  let longitud = posicion.coords.longitude;
  let urlMap = "https://maps.googleapis.com/maps/api/staticmap?center="+latitud+ "," + longitud+ "&zoom=16&size=400x400&sensor=false&makers="+latitud+","+longitud+"&key=AIzaSyCvn2hqMm_dxWxVxxQ2-541grmAStjpir0";
  ubicacion.innerHTML = '<img src="'+urlMap+'" alt="mapa">';
  console.log(urlMap);
 /*  let datos = "";
  datos += "Latitud: " + posicion.coords.latitude + "<br>";
  datos += "Longitud: " + posicion.coords.longitude + "<br>";
  datos += "exactitud: " + posicion.coords.accuracy + "<br>";
  datos += "Altitud: " + posicion.coords.latitude + "<br>";
  datos += "exactitud: " + posicion.coords.altitudeAccuracy + "<br>";
  geolocalizacion.innerHTML = datos; */
}

function mostrarerror(error) {
  alert("Error: " + error.code + " " + error.message);
}
window.addEventListener("load", inicio);
