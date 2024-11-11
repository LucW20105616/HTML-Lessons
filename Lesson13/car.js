class Car {
    constructor(regNumber, name, year,maxmileages) {
        this.regNumber = regNumber;
        this.name = name;
        this.year = year;
        this.engineStarted = false;
        this.mileage = 0;
        this.maxmileage=maxmileage;
    }

    getAge() {
        const today = new Date();
        return today.getFullYear() - this.year;
    }

    startEngine() {
        if (this.engineStarted == false) {
            this.engineStarted = true;
            console.log('Engine started');
        }
        else {
            console.log('Engine already started');
        }
    }

    stopEngine() {
        if (this.engineStarted == false) {            
            console.log('Engine already stopped');
        }
        else {
            this.engineStarted = false;
            console.log('I have stopped the Engine');
        }
    }

    drive(drove) {        
        if (this.engineStarted == true) {
            this.mileage = this.mileage + drove;
            console.log('Car drove', this.mileage, 'mile');
            this.engineStarted=false;
        }
        else {
            console.log('Cannot drive the car. The engine has stopped.');
        }

        if (this.mileage > 100) {
            console.log('I need for fuel');
        }
    }
}

const ford = new Car("123", "Ford", 1991);

const BMW = new Car("456", "BMW", 1991);

ford.startEngine();
BMW.startEngine();

ford.drive(100);
ford.drive(100);
BMW.drive(100);
