/* let characterInfo = {
    firstName : "Mathis",
    lastName : "Bancquart",
    age : "19 ans"
}

console.log(characterInfo.firstName + " " + characterInfo.lastName + " a " + characterInfo.age + " et il étudie à l'IIM. ")
*/

class hero {
    constructor(name, attack, pv) {
        this.name = name
        this.attack = attack
        this.pv = pv
    }
}

class monster {
    constructor(pv, attack) {
        this.pv= pv
        this.attack = attack
    }
}

let reinor = new hero("Reinor", 120, 300)
let gnome = new monster (10,1200)

console.log(gnome.pv -= reinor.attack)