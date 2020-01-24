var anio =[
    {mes : "enero" , numero : 1,dias:31},
    {mes : "febrero" , numero : 2,dias:29},
    {mes : "marzo" , numero : 3,dias:31},
    {mes : "abril" , numero : 4,dias:30},
    {mes : "mayo" , numero : 5,dias:31},
    {mes : "junio" , numero : 6,dias:30},
    {mes : "julio" , numero : 7,dias:31},
    {mes : "agosto" , numero : 8,dias:31},
    {mes : "septiembre" , numero : 9,dias:30},
    {mes : "octubre" , numero : 10,dias:31},
    {mes : "noviembre" , numero : 11,dias:30},
    {mes : "diciembre" , numero : 12,dias:31},
]

//  anio.forEach(element => {
//      console.log(" mes: "+element.mes + " es el numero: " + element.numero + " del año y tiene: " + element.dias + " dias")
    
//  });

for (let i = 0; i < anio.length; i++) {
    const element = anio[i];
    element.toString = function(){return "Nombre "+ element.mes +"mes del año"+ element.numero + "cantidad de dias"+element.dias}
    console.log(element.toString());
    
    
}