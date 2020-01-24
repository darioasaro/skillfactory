const URL =  "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json"

async function readJason(url){
   
    var response = await fetch(url)
    var json = await response.json();
    return json
}




var squad ; 
var univers = readJason(URL)


    .then((data)=>{
 
        univers = data
        squad = new Squad(univers)
        
    })  
    .catch(function(e){
    }
    )

    
function showHeroes(squad){
    
}
    
    
    
    


    
    

    
    

    
    

    
    
    

    

    

   

