playlists = ["Anissa - Wejdene", "I'm Still Standing - Elton John", "Something in the way - Nirvana", "It was a Good day - Ice Cube", "Dreams on - Aerosmith"]

class character {
    constructor(name, hp){
        this.name = name
        this.hp = hp
    }

    route (playlists) {
        
        let nmbrOfTaxiChange = 0
        let redLights = 0

        while (redLights < 30 && this.hp > 0) {
            redLights += 1
            var randomMusic = playlists[Math.floor(Math.random() * playlists.length)]
            console.log("La musique du taxi au feu rouge est " + randomMusic + ". John a passé " + redLights + " feu(x) rouge(s).")
            if(randomMusic == playlists[0]){

            this.hp -= 1
            nmbrOfTaxiChange += 1
            console.log("Pas de chance, c'est Anissa ! John doit changer de taxi et sa santé mentale a diminué de 1 à cause de Anissa de Wejdene. ")
            
            } else {
                console.log("Ouf, c'était pas Anissa !")
            }

            if(this.hp === 0){

                console.log("Oh non, la tête de John a explosé car sa santé mentale a atteint 0. Il est mort sur le coups ;(")
                break

            } 

            if(redLights === 30){

                console.log("John est arrivé à la maison. Mais il lui a fallu " + nmbrOfTaxiChange + " changements de taxi pour y arriver !")
                break
            }





            

                
            

        }
    }








}

let john = new character("John", 10)
/*console.log(john)*/

john.route(playlists)



