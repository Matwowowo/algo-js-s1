class pokemon {
    constructor(name, attack, defense, hp, luck){
        this.name = name
        this.attack = attack
        this.defense = defense
        this.hp = hp
        this.luck = luck


    }

    /* isLucky (pokemonLuck){

        pokemonLuck = Math.random()

        if (pokemonLuck > this.luck){

            this.attack = 0
        } else {
            this.attack = this.attack
        }

        
    } */





    attackPokemon (pokemon) {

        

        let damage = this.attack - pokemon.defense
        pokemon.hp = pokemon.hp - damage
        return damage
        
        

    }


}

let pikachu = new pokemon("Pikachu", 18, 10, 40, 0.4)
/*console.log(pikachu)*/

let lucario = new pokemon("Lucario", 25, 14, 80, 0.5)
/*console.log(lucario)*/

while (pikachu.hp > 0 && lucario.hp > 0) {
    damageToLucario = pikachu.attackPokemon(lucario)
    console.log("Lucario a subi " + damageToLucario + " points de dégats." + " Il lui reste " + lucario.hp + " points de vie.")
    if (lucario.hp <= 0){

        
        console.log("Lucario a été vaincu !")
        break

    } 
       
        
    damageToPikachu = lucario.attackPokemon(pikachu)
    console.log("Pikachu a subi " + damageToPikachu + " points de dégats." + " Il lui reste " + pikachu.hp + " points de vie")

    if (pikachu.hp <= 0){

        
        console.log("Pikachu a été vaincu !")
        break
    } 

}




