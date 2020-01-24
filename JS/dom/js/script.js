function check(){
    var email = document.getElementById("email").value
    var password = document.getElementById("pass").value
    var validate = document.getElementById("validatePass").value

    if (/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(email)){
        //alert("La dirección de email " + email + " es correcta.");
        
       } 
    if(password == validate) {
        alert("usuario creado");
       }
    else{
        alert("Algunos de los datos ingresados son incorrectos")
    }
    
  
    
}



