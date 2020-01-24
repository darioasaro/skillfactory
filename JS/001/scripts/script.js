var nombre = prompt("ingrese su nombre")
var anio = prompt("ingrese su año de nacimiento")
var mes = prompt ("ingrese su mes de naciemiento")
var dia = prompt ("ingrese su dia de nacimiento")

function edad(anio,mes,dia){                    //Otorgando la fecha devuelva la edad

var fecha = new Date()
var dia_hoy =  fecha.getDate()
var mes_hoy = fecha.getMonth() + 1
var anio_hoy = fecha.getFullYear()

var edad = anio_hoy - anio - 1

if((mes_hoy - mes) > 0){                    //compara meses para saber si ya cumpliste años
    edad +=1
}

if ((mes_hoy - mes) == 0){                  //si estamos en el mismo mes, luego comprobara los dias
    
    if((dia_hoy - dia) > 0){                 //compara dias para saber si ya paso el cumpleaños
        edad +=1
    }
    else if(dia_hoy == dia){                 //si es el mismo dia, felicita
        edad +=1
        console.log("Feliz Cumpleaños! hoy cumplis " + edad + "años")
        alert("FELIZ CUMPLEAÑOS "+ nombre + "!!!")
    }
}

return edad

}

var xx = edad(anio,mes,dia)

console.log(xx)

 

 
 

