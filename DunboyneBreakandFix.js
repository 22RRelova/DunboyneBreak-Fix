// This class is due to return information to car owners
// it is based on the fuel they input
// this should return a message to the user based on the method that is called

class Fuel {
    constructor(name, car, fuelType) {
        this.name = name;
        this.car = car;
        this.fuelType = fuelType;
    }


    getfuelPrice() {
      
        return "You own a " + this.car;
        // here needs to be some code to tell the price of this fuel
    }

    getFuelDetails() {


        // here needs to be some code to tell the all the details of this fuel

    }
    
   getRecommendation() {}


   // here needs to be some code that returns a recommendation on the car owner going forward
   

}

var FuelP = new Fuel ("Liam", "Toyota", "Action");
console.log(FuelP.getfuelPrice()) 


// you must comment the code correctly 