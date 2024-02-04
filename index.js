// Animal class representing generic animal properties and behaviors
class Animal {
    constructor(name, kingdom) {
        this.name = name;
        this.kingdom = kingdom;
    }

    makeSound() {
        console.log("Animal sound"); // Placeholder for making a sound
    }

    eat() {
        console.log("Eating..."); // Placeholder for eating behavior
    }
}

// Mammal class representing mammals, inherits from Animal
class Mammal extends Animal {
    constructor(name) {
        super(name, "Mammalia");
    }

    giveBirth() {
        console.log("Giving birth..."); // Placeholder for giving birth behavior
    }
}

// Bird class representing birds, inherits from Animal
class Bird extends Animal {
    constructor(name) {
        super(name, "Aves");
    }

    fly() {
        console.log("Flying..."); // Placeholder for flying behavior
    }
}

// Instantiate objects
const lion = new Mammal("Lion");
const sparrow = new Bird("Sparrow");

// Demonstrate usage
lion.makeSound();
sparrow.fly();

// Encourage interaction with the classes
console.log(`Meet ${lion.name}, a ${lion.kingdom}.`);
console.log(`Meet ${sparrow.name}, a ${sparrow.kingdom}.`);

lion.eat();
sparrow.eat();

lion.giveBirth(); // Mammals can give birth
sparrow.fly();    // Birds can fly
