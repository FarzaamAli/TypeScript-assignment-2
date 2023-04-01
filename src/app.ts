//Step 1 : Make an abstract class of Vehicle.
abstract class Vehicle {
    //Step 2 : Make instance variables.
    private _company:string;
    private _model:string;
    private _year:number;
    private _rented:boolean;

    //Step 3 : Make a constructor and initialize values.
    constructor(
        company:string,
        model:string,
        year:number,
        rented:boolean
    ){
        this._company = company;
        this._model = model;
        this._year = year;
        this._rented = rented;
    }

    //Step 4 : Make Getter Functions.
    get company(){
        return this._company;
    } 

    get model(){
        return this._model;
    } 

    get year(){
        return this._year;
    }

    get rented(){
        return this._rented;
    } 

    //Step 5 : Make Setter Functions.
    set company(newCompany){
        if(!newCompany){
            throw new Error("Company cannot be empty");
        }
        this._company = newCompany;
    }

    set model(newModel){
        if(!newModel){
            throw new Error("Model cannot be empty");
        }
        this._model = newModel;
    }

    set year(newYear){
        if(!newYear){
            throw new Error("Year field cannot be empty");
        }
        this._year = newYear;
    }

    set rented(newRented){
        if(newRented===null){
            throw new Error("Rent status cannot be empty");
        }
        this._rented = newRented;
    }

    //Step 6 : Define abstract method called rentalRate.
    abstract rentalRate() : number;

    //Step 7 : Define two methods in the Vehicle class: rent() and return().
    rent(){
        if(this.rented){
            console.log("The Vehicle is already rented! Not Available!");
        }
        else{
            console.log("The Vehicle is rented! Thank You!");
            this.rented = true;
        }
    }

    return(){
        if(!this.rented){
            console.log("The Vehicle is not rented. NOT VALID!");
        }
        else{
            console.log("Thank You for renting the Vehicle. :-)")
            this.rented = false;
        }
    }

}

//Step 8 : Create subclasses of Vehicle for each type of vehicle in the rental system.
//Step 9 : Define additional instance variables and methods in the subclasses.
class Car extends Vehicle{
    constructor(
        company : string,
        model : string,
        year : number,
        rented : boolean,
        private readonly _seater : 2 | 4 | 6
        
    ){
        super(company,model,year,rented);
    }
    
    get seater() : number{
        return this.seater;
    }

    rentalRate(): number {
        const rate : number = 200;
        return rate;
    }
}

class Truck extends Vehicle{
    constructor(
        company : string,
        model : string,
        year : number,
        rented : boolean,
        private readonly _typeOfTruck : "pickup" | "tow" | "tracter-trailer" | "Tanker"
    ){
        super(company,model,year,rented);

    }

    get typeOfTruck() : string{
        return this.typeOfTruck;
    }

    rentalRate(): number {
        const rate : number = 400;
        return rate;
    }
}

class Motorcycle extends Vehicle{
    constructor(
        company : string,
        model : string,
        year : number,
        rented : boolean,
        private readonly _engineType : "70cc" | "125cc" | "150cc" | "110cc" 
        
    ){
        super(company,model,year,rented);
    }

    get engineType() : string {
        return this.engineType;
    }

    rentalRate(): number {
        const rate : number = 100;
        return rate;
    }
}





//Step 10 : In the main program, create instances of each type of vehicle 
//and test the rent() and return() methods to make sure they work as expected. 

function main(){
//checking Car object
const car = new Car("Lamborghini","Aventador",2023,false,2);
console.log(car);
car.rent();
car.return();
console.log(car);

//checking Truck object
const truck = new Truck("Master Motors","4x4",2019,true,"tracter-trailer");
console.log(truck);
truck.rent();
truck.return();
console.log(truck);

//checking Motorcycle object
const motorcycle = new Motorcycle("Yamaha","Fzx",2020,false,"150cc");
console.log(motorcycle);
motorcycle.return();
motorcycle.rent();
console.log(motorcycle);
}

main();