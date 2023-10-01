let killer = {
    name : "Jason",
    health : 100
}
/* console.log(killer) */

nameOfSurvivor = ["James", "Chris", "Emma", "Alex", "Josh", "Richard", "Suzie", "Agathe"]


probOfDying = [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7]

probOfAttacking = [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7]

probOfRevenge = [0.1, 0.2, 0.3, 0.4, 0.5, 0.6]

caracteristics = ["nerd", "sportif", "blonde", "blagueur", "peureux", "courageux", "intello"] 

class survivors {
    constructor(name, caracteristisc) {
        
        this.name = name
        this.caracteristic = caracteristisc


    }
}

function chanceOfKill(survivor) {                

    survivorChance = probOfDying[Math.floor(Math.random() * probOfDying.length)]

    if(Math.random() > survivorChance === true) {
        
        console.log("Il est mort")
        return true
        
    } else {

        console.log("Il a esquivé")
        return false
    }
}


function killing(killer) {

    if(this.chanceOfKill() === true) {




    }

}


randomName = nameOfSurvivor[Math.floor(Math.random() * nameOfSurvivor.length)]

randomCara = caracteristics[Math.floor(Math.random() * caracteristics.length)]

let firstSurvivor = new survivors(randomName, randomCara)

firstSituation = firstSurvivor.chanceOfKill(firstSurvivor)

console.log(firstSituation)


/* console.log(firstSurvivor) */

// Ma logique pour cet exercice aurait été de faire une fonction pour les chances de tuer pour Jason et une fonction pour les actions de Jason.
// Avec ceci j'aurais fait une boucle while avec comme paramètre les points de vie de Jason qui ne doivent pas atteindre 0. 
// Puis, dans cette boucle While, j'aurais intégré des If pour les 3 différentes actions possibles par Jason 