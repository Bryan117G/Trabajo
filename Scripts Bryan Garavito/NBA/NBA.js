arregloUnido = [
               {"nombre":"Kevin Durant",
               "puntaje":"32",},
               {"nombre":"Trae Young",
               "puntaje":"26",},
               {"nombre":"Giannis Antetokounmpo",
               "puntaje":"25",},
               {"nombre":"Stephen Curry",
               "puntaje":"27",},
               {"nombre":"DeMar DeRozan",
               "puntaje":"22",},
               {"nombre":"Zach LaVine",
               "puntaje":"26",},
               {"nombre":"Donovan Mitchell",
               "puntaje":"31",},
               {"nombre":"Nikola Jokic",
               "puntaje":"25",},
               {"nombre":"Jayson Tatum",
               "puntaje":"29",},
               {"nombre":"Karl-Anthony Towns",
               "puntaje":"24",},
               {"nombre":"Bradley Beal",
               "puntaje":"23",},
               {"nombre":"DeAaron Fox",
               "puntaje":"21",},
               {"nombre":"LeBron James",
               "puntaje":"23",}]

arregloUnido.sort((valorA, valorB) => {
    
    if(valorA.puntaje.toUpperCase() == valorB.puntaje.toUpperCase()) {
        return 0;
    }
    const arrA = valorA.puntaje.split(' ');
    const arrB = valorB.puntaje.split(' ');
    const nombreA = parseInt(arrA[0]) || valorA.puntaje.toUpperCase();
    const nombreB = parseInt(arrB[0]) || valorB.puntaje.toUpperCase();
    if(nombreA == nombreB && Number.isInteger(nombreA) && Number.isInteger(nombreB)) {
        arrA.shift();
        arrB.shift();
        const strA = arrA.join(' ').toUpperCase();
        const strB = arrB.join(' ').toUpperCase();
        if(strA < strB) {
            return -1;
        }
            return 1;
    }
    if (nombreA < nombreB || (Number.isInteger(nombreA) && !Number.isInteger(nombreB))) {
        return -1;
    }
        return 1;
});

console.log("Top 10 Puntos de la NBA: \n")
console.log(arregloUnido.reverse())
