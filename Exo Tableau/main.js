names = []

names.push("Vincent")
names.push("Paul")
names.push("Arthur")


/*
for(let i = 0; i < names.length; i++){

    names[i] += " va à la pêche"
    console.log(names[i])
}
*/


names.forEach(name => { 

    name += " et au tennis"
    console.log(name)
});

let dndCharacterProfile = {
    name : "Reinor",
    level : 6,
    class : "Paladin",
    atk : 25,
    def : 12.5,
    isAlive : false,
    inventory : ["water", "sword", "shield"]

}

console.log(dndCharacterProfile)