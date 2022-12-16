// class PersonDetails {
//     constructor(name, age, add) {
//         this.name = name
//         this.age = age
//         this.add = add
//     }

//     detailPrint() {
//         console.log(`my name is ${this.name},${this.age} and ${this.add}`);
//     }
// }


// let pramod = new PersonDetails('pramod', 25, 'indore');
// let rahul = new PersonDetails('rahul', 25, 'indore');

// pramod.detailPrint();
// rahul.detailPrint();


// const obj = {}
// let obj = new Object();



// Inheritance

// class Car {
//     constructor(model, color, company) {
//         this.model = model
//         this.color = color
//         this.comapany = company
//     }
//     details(owner) {
//         return (`The car model is ${this.model} and color is ${this.color} and company is ${this.comapany} and ${owner}`);
//     }
// }

// let BMW = new Car("BMW_S6", "white", "BMW-C");
// BMW.details("pramod");


// class CarFunction extends Car {
//     constructor(model, color, company, gear, automatic) {
//         super(model, color, company);
//         this.gear = gear;
//         this.automatic = automatic;
//     }

//     features_details() {
//         console.log(`${super.details("parmod")} some features are ${this.gear} and ${this.automatic}`);
//     }
// }



// Getter and Setter


// class Car {
//     constructor(name) {
//         this.name = name;
//     }
//     set Value(age) {
//         this.age = age;
//     }
//     get Value() {
//         return this.age;
//     }
//     print() {
//         console.log(this.name);
//     }
// }

// let honda = new Car("Honda");
// honda.print();

// Car.Value = 23;
// let x = Car.Value;

// console.log(x);


// Static methods

// class Car {

//     constructor(pressure) {
//         this.pressure = pressure;
//     }

//     static break() {
//         console.log("breaks are applied");
//     }

// }
// let honda = new Car();
// let Nexa = new Car();
// let Kia = new Car();

// Car.break();





























// let honda = new CarFunction("honda-ww", "black" , "honda" , 5 , "auto");
// honda.features_details();

// Setter and getter concepts

// class Student {
//     constructor(name) {
//         this.name = name;
//     }

//     set Value(age) {
//         this.age = age;
//     }

//     get Value() {
//         return this.age;
//     }

//     print() {
//         return this.name;
//     }
// }



// let r = new Student("rahul");
// console.log(r.name);
// console.log(r.print());
// r.Value = "zzzzz";
// console.log(r.Value);
