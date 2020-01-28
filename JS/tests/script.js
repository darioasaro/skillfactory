let miArreglo = [ 10, 12, 13, 15, 18];

miArreglo.forEach(elemento =>console.log(elemento))

var pares = miArreglo.filter(valor=>valor%2==0)
console.log(pares)

var iva = miArreglo.map(valor=>valor+1.21)
console.log(iva)
 
var total = miArreglo.reduce((numero,acumulador)=>numero + acumulador)
console.log(total)


//forEach miArreglo
for(var i = 0;i<miArreglo.length; i++){
    //console.log(miArreglo[i])
}

//map miArreglo
function map (miArreglo){
    var nuevo = []

    for(var i = 0;i<miArreglo.length;i++){
        nuevo.push(miArreglo[i]*1.21)
    }
    return nuevo

}

var iva = map(miArreglo)
//console.log(iva);

// filter

function filter(miArreglo){
    var nuevo = []
    for(var i = 0;i<miArreglo.length;i++){
        if(miArreglo[i]%2 == 0){
            nuevo.push(miArreglo[i])
        }
    }
    return nuevo
}

var pares = filter(miArreglo)

//console.log(pares)

//reduce

function reduce(miArreglo,inicial){
    var total = 0
    
    for(var i = 0;i<miArreglo.length;i++){
        
        total += parseInt(miArreglo[i]) 
    }

    return total + (inicial || 0)
}

var suma = reduce(miArreglo)
//console.log(suma)