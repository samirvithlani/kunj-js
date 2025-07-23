class Vehicle{

    #speed; // private variable
    //# using private variable
    constructor(name, type) {
        this.name = name;
        this.type = type;
        this.#speed = 0; // private variable
    }

    accelerate(amount) {
        this.#speed += amount; // using private variable
        console.log(`${this.name} is now going at ${this.#speed} km/h`);
        console.log(`${this.name} is now going at ${this.#getSpeed()} km/h`); // using private method
    }
    #getSpeed() {
        return this.#speed; // private method
    }


}

var aud = new Vehicle("Audi", "Car");
aud.accelerate(50); // Output: Audi is now going at 50 km/h
//aud.getSpeed(); // Error: getSpeed is not defined