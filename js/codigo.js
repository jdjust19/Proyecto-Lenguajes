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
                                 "Foto8.jpg",
                                 "Foto7.jpg",
                                 "Foto7.jpg");
    for(var i = 0; i < 6; i++){
        for(var j = 0; j < 6; j++){
            var aleatorio = Math.random() * imagenArray.length;
            console.log(imagenArray.length);
            var elemento = document.getElementsByTagName('tr')[i].getElementsByTagName('td')[j];
            elemento.innerHTML = "<img src=\"../img/"+imagenArray[parseInt(aleatorio)]+"\"></img>"
            var posicion = imagenArray.indexOf(imagenArray[parseInt(aleatorio)]);
            imagenArray.splice(posicion, 1);
        }
    }
}

function crearTablero(numeroFilas, numeroColumnas){
    var matriz = new Array(numeroFilas);
    for(var i = 0; i < numeroFilas; i++){
        matriz[i] = new Array(numeroColumnas);
    }
    return matriz;
}

function inicializaMatriz(matriz, dato){
    for(var i=0; i < matriz.length; i++){
        for(var j = 0; 0 < matriz[i].length; j++){
            matriz[i][j]=dato;
        }
    }
}

