var personas = [{
    nombre : "dario",
    email : "sadada@qwewq.com",
    edad : 22
},
  {  nombre : "mateo",
     email : "dsadada@fds.com",
     edad : 12

  }

]

document.addEventListener("DOMContentLoaded", function() {
    
    cargarPersonas(personas)  
    addEventListener("submit",insertOnline);
  });

  
  function insertOnline(evento){
    evento.preventDefault();
       
    var user = {
        nombre : document.getElementById("nombre").value,
        email : document.getElementById("email").value,
        edad : parseInt( document.getElementById("edad").value)
    }

    
    insertarEnTabla(user)

    evento.target.reset()

  }

  function cargarPersonas(personas){
      
         personas.forEach(function (element){
            
            insertarEnTabla(element)     
          
      });
  }

  function insertarEnTabla(element){
    
    var fila = crearFila(element)
    
    if(element.edad > 13){
            var table = document.getElementById("tabla1")
            table.appendChild(fila)
        }
    else{
            var table = document.getElementById("tabla2")
            table.appendChild(fila)
        }
      
  }
 

  function crearFila(persona){
                
                var fila = document.createElement("tr")
                
                var celda = document.createElement("td")
                var texto = document.createTextNode(persona.nombre)
                celda.appendChild(texto)
                fila.appendChild(celda)

                 celda = document.createElement("td")
                 texto = document.createTextNode(persona.email)
                celda.appendChild(texto)
                fila.appendChild(celda)

                 celda = document.createElement("td")
                 texto = document.createTextNode(persona.edad)
                celda.appendChild(texto)
                fila.appendChild(celda)

                var celda = document.createElement("td")
                var exit = document.createElement("button")
                exit.innerText = "delete"
                exit.setAttribute("class","borrar")
                exit.setAttribute("onclick","Borrar(this)")
            
                celda.appendChild(exit)
                fila.appendChild(celda)

            
                return fila;
  }

function Borrar(t){
  
    var td = t.parentNode;
    var tr = td.parentNode;
    var datos =  tr.getElementsByTagName("td")
    console.log(datos[1].value());  
    var table = tr.parentNode;
    table.removeChild(tr);
}



  
    
