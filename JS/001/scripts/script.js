var nombre = prompt("ingrese su nombre")
var anio = prompt("ingrese su año de nacimiento")
var mes = prompt ("ingrese su mes de naciemiento")
var dia = prompt ("ingrese su dia de nacimiento")

function edad(anio,mes,dia){

var fecha = new Date()
var dia_hoy =  fecha.getDate()
var mes_hoy = fecha.getMonth() + 1
var anio_hoy = fecha.getFullYear()

var edad = anio_hoy - anio - 1

if((mes_hoy - mes) > 0){
    edad +=1
}

if ((mes_hoy - mes) == 0){
    
    if((dia_hoy - dia) > 0){
        edad +=1
    }
    if(dia_hoy == dia){
        edad +=1
        console.log("Feliz Cumpleaños! hoy cumplis " edad)
    }
}

return edad

}

var xx = edad(anio,mes,dia)

console.log(xx)


 
 

