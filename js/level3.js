function imagenAleatoria(){
    var imagenArray = new Array( "Foto1.jpg",
                                 "Foto1.jpg",
                                 "Foto2.jpg",
                                 "Foto2.jpg",
                                 "Foto3.jpg",
                                 "Foto3.jpg",
                                 "Foto4.jpg",
                                 "Foto4.jpg",
                                 "Foto5.jpg",
                                 "Foto5.jpg",
                                 "Foto6.jpg",
                                 "Foto6.jpg",
                                 "Foto7.jpg",
                                 "Foto7.jpg",
                                 "Foto8.jpg",
                                 "Foto8.jpg");
    for(var i = 0; i < document.getElementsByTagName('tr').length; i++){
        for(var j = 0; j < document.getElementsByTagName('tr').length; j++){
            var aleatorio = Math.random() * imagenArray.length;
            var elemento = document.getElementsByTagName('tr')[i].getElementsByTagName('td')[j];
            elemento.innerHTML = "<img src=\"../img/"+imagenArray[parseInt(aleatorio)]+"\"></img>"
            var posicion = imagenArray.indexOf(imagenArray[parseInt(aleatorio)]);
            imagenArray.splice(posicion, 1);
        }
    }
}



