class Animal {
    static remainingAnimals;

    #name
    #species
    #energy


    constructor(name,species,energy){

        this.#name = name
        this.#species = species
        this.#energy= energy

    }

    get name(){
        return this.#name
    }

    set name(newName){
        this.#name = newName
    }

    get species(){
        return this.#species
    }

    set species(newSpecie){
        this.#species = newSpecie
    }

    get energy(){
        return this.#energy
    }

    set energy(newEnergy){
        this.#energy = newEnergy
    }

    attack(target){
        if(this.energy <=0){
           return ` ${this.name} 0 energy, it cannot attack`       
       }
       target.energy = target.energy - 50
       this.energy = this.energy - 50
       let messageAttacker 
       let messageTarget
       if(this.energy <=0){
           messageAttacker = `${this.name} has 0 energy, has lost`
           remainingAnimals --  
       } else {
           messageAttacker = `${this.name} has Win has ${this.energy}`
       }
       if(target.energy <= 0){
           messageTarget = `${target.name} has lost has 0 energy `
           remainingAnimals --             
       }else {
           messageTarget = `${target.name} has Win has ${target.energy}`
       }
       
   }

   eat(){
     this.#energy += 10
   }

}

class Bird extends Animal {
    #canFly 

    constructor(name, species, canFly){
        super(name,species, 100)
        

        this.#canFly = canFly
        Animal.remainingAnimals ++

    }

    get canFly(){
        return this.#canFly
    }

    set canFly(newCanFly){
        this.#canFly = newCanFly
    }

    attack(target){

        if(this.energy <=0){
            return "Bird has 0 energy, it cannot attack"        
        }
        this.energy= this.energy -20
        target.energy = target.energy - 20
        let messageBird 
        let messageTarget
        if(this.energy <=0){
            messageBird = "Bird has 0 energy, has lost"
            remainingAnimals --  
        } else {
            messageBird = `Bird has Win has ${this.energy}`
        }
        if(target.energy <= 0){
            messageTarget = `${target.name} has lost has 0 energy `
            remainingAnimals --             
        }else {
            messageTarget = `${target.name} has Win has ${target.energy}`
        }
        
    }

    eat(){
        this.energy += 10
      }

} 

class Mammal extends Animal {
    #furColor

    constructor(name,species,furColor){
        super(name,species,200)

        this.#furColor = furColor
        Animal.remainingAnimals ++
    }

    get furColor(){
        return this.#furColor
    }

    set furColor(newFurColor){
        this.#furColor = newFurColor
    }

    attack(target){
         if(this.energy <=0){
            return ` ${this.name} 0 energy, it cannot attack`       
        }
        target.energy = target.energy - 50
        this.energy = this.energy - 50
        let messageAttacker 
        let messageTarget
        if(this.energy <=0){
            messageAttacker = `${this.name} has 0 energy, has lost`
            remainingAnimals --  
        } else {
            messageAttacker = `${this.name} has Win has ${this.energy}`
        }
        if(target.energy <= 0){
            messageTarget = `${target.name} has lost has 0 energy `
            remainingAnimals --             
        }else {
            messageTarget = `${target.name} has Win has ${target.energy}`
        }
        
    }

    eat(){
        this.energy += 20
      }
}

class Reptile extends Animal {

    #coldBlooded 

    constructor(name,species,coldBlooded){

        super(name,species,100)

        this.#coldBlooded = coldBlooded
        Animal.remainingAnimals ++
    }

    get coldBlooded(){
        return this.#coldBlooded
    }

    set coldBlooded(newColdBlooded){
        this.#coldBlooded = newColdBlooded
    }

    attack(target){
        if(this.energy <=0){
           return ` ${this.name} 0 energy, it cannot attack`       
       }
       target.energy = target.energy - 50
       this.energy = this.energy - 50
       let messageAttacker 
       let messageTarget
       if(this.energy <=0){
           messageAttacker = `${this.name} has 0 energy, has lost`
           remainingAnimals --  
       } else {
           messageAttacker = `${this.name} has Win has ${this.energy}`
       }
       if(target.energy <= 0){
           messageTarget = `${target.name} has lost has 0 energy `
           remainingAnimals --             
       }else {
           messageTarget = `${target.name} has Win has ${target.energy}`
       }
       
   }

   eat(){
    this.energy += 15
  }

}



// DRIVER CODE: Create instances of the subclasses and use their properties and methods. You can modify this to add more attacks and eating actions.

const eagle = new Bird("Eagle", "Bird of Prey", true);
console.log(`Name: ${eagle.name}, Species: ${eagle.species}, Can Fly: ${eagle.canFly}`);

const lion = new Mammal("Lion", "Big Cat", "Golden");
console.log(`Name: ${lion.name}, Species: ${lion.species}, Fur Color: ${lion.furColor}`);

const snake = new Reptile("Snake", "Serpent", true);
console.log(`Name: ${snake.name}, Species: ${snake.species}, Cold-Blooded: ${snake.coldBlooded}`);

// Example attack
console.log(eagle.attack(lion));
eagle.attack(lion);
lion.attack(snake);

// Display the remaining number of animals with energy
console.log(`Remaining animals with energy: ${Animal.remainingAnimals}`);

// Example eating
console.log("\n--- Eating ---");
eagle.eat();
lion.eat();
snake.eat();
