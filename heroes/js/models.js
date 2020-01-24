class Squad{
    
    constructor(data){
        
        this.name = data["squadName"] || " "
        this.members =  data["members"] || " "
        this.hometown = data["homeTown"] || " "
        this.formed = data["formed"] || " "
        this.secretBase = data["secretBase"] || " "
    }
    
}

class Heroe{
    constructor(data){
    this.name = data["name"] || " "
    this.age = data["age"] || " "
    this.power = data["powers"] || " "
    this.secretIdentity = data["secretIdentity"] || " "
    }
}