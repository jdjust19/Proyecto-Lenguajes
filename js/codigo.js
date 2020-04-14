function imagenAleatoria(){
    var imagenArray = new Array("medusas.jpg",
                                 "montañas.jpg",
                                 "perros.jpg",
                                 "piedras.jpg",
                                 "pollos.jpg",
                                 "flores.jpg",
                                 "casa.jpg",
                                 "edificio.jpg");

    var imagenArrayLength = imagenArray.length;
    for(var i = 0; i < 6; i++){
        for(var j = 0; j < 6; j++){
            var aleatorio = Math.random() * imagenArrayLength;
            var elemento = document.getElementsByTagName('tr')[i].getElementsByTagName('td')[j];
            elemento.innerHTML = "<img src=\"../img/"+imagenArray[parseInt(aleatorio)]+"\"></img>"
        }
    }
}