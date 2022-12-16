// const details = {
//     name: "rahul",
//     age: 23,
// }

// const arr = ["Rahul", 23];

// const arr = [];
// arr[0] = "Rahul";
// arr[1] = 25;

// console.log(arr);


// let obj = new Array("Rahul", 45);
// console.log(obj);

// const arr = ["Rahul", 23];
// console.log(arr[0]);
// console.log(arr[1]);

// arr[0] = "pramod";

// console.log(arr[0]);
// console.log(arr);
// console.log( typeof arr);

// const arr = [
// {
// name: "rahul",
// age : 23,
// },
// "pramod",
// ]


// console.log(arr[0].age);

// let name1 = "My na*me i*s Pram*od";
// console.log(name1[0]);

// let x = name1.split("*");
// console.log(x);


// const arr = "Rahul";
// console.log(Array.isArray(arr));


// Array Methods


// let carName = ["BMW", "Honda", "Thar"];

// let x = carName.toString();
// console.log(carName);
// console.log(x);

// let x = carName.join("/");
// console.log(x);

// pop and push

// let x = carName.pop();
// console.log(carName);
// console.log(x);

// carName.push("Maruti");
// console.log(carName);

// let x = carName.shift();
// console.log(carName);
// console.log(x);

// carName.unshift("Maruti");
// console.log(carName);

// carName.length = 1
// console.log(carName);

// let carName1 = ["BMW", "Honda", "Thar" , "Nexa" , "Kia" ];
// let number = ["1", "2", "3"];

// let x = carName1.concat(number , "7th");
// console.log(x);



// carName1.splice(1, 2, number);
// carName1.splice(1, 2 , "Nexa");
// console.log(carName1);


// carName1.splice(1, 2);
// console.log(carName1);


// console.log(carName1);
// let newArr = carName1.slice(1 , 4);
// let newArr2 = carName1.sort();
// console.log(carName1);

let carName1 = ["BMW", "Honda", "Thar", "Nexa", "Kia"];

// let newSplice = carName1.splice(2, 2, "aaaaaa");
// let newSplice = carName1.splice(2, 1);


// let console.log(carName1);
// console.log(newSplice);


// let newSlice = carName1.slice(1 , 3);

// console.log(carName1);
// console.log(newSlice);




// carName1.sort();
// console.log(carName1);
// carName1.reverse();
// console.log(carName1);


// let number = [40, 100, 1115, 5, 25, 10];
// number.sort(function s(a, b) {
//     return a - b;
// });
// console.log(number);


// let m = Math.max.apply(null, number);
// let m = Math.min.apply(null, number);
// console.log(m);


let arr = [
    {
        name: "rahul",
        age: 69,
    },
    {
        name: "pramod",
        age: 94,
    }
]


// arr.sort(function sh(a, b) {
//     return a.age - b.age;
// })

// console.log(arr);


// arr.sort(function sh(a, b) {
//      let x = a.name.toLowerCase();
//      let y = b.name.toLowerCase();
//     if (a.name < b.name) { return -1 }
//     if (a.name > b.name) { return 1 }
//     return 0;
// })

// console.log(arr);



let number = [1, 2, 3, 4, 5];


// let x = number.forEach((v, i, a) => {
//     console.log(a);
// })

// console.log(x);


// let x = number.map((v, i, a) => {
//     return v*8;
// })

// console.log(x);

// let x = number.reduce((t ,v, i, a) => {
//     return v += t ;
// },10)

// console.log(number);
// console.log(x);

// let x = number.some((v) => {
//     return v > 5;
// })


// console.log(x);

// let x = number.indexOf(2 , 1);

// console.log(x);

// let c = { number: 25, age:45}
// let x = Array.from(c);
// console.log(x);



// Array Iteration


// let number2 = [25, 18, 44, 35, 22];
// forEach
// let x = number2.forEach(Myfunction);
// function Myfunction(value, index, arr) {
    // console.log(value);
    // console.log(index);
    // console.log(arr);
// }




// map

// let x = number2.map(function Myfunction(x , index){
//     return index *2;
// })

// console.log(x);

// let x = number2.filter(function Myfunction(v, i, a) {
//     return v > 30
// })

// console.log(x);

// let number2 = [25, 18, 44, 35, 22];

// let x = number2.reduce(function Myfunction(total, value, index, arr) {
//    return value += total;
// },100)

// console.log(x);


// let x = number2.every(function Myfunction(value, index, arr) {
//    return value>17
// })

// console.log(x);

// let x = number2.some(function Myfunction(value, index, arr) {
//    return value>44
// })

// console.log(x);
// let number2 = [25, 18, 44, 18, 22];
// let x = number2.indexOf(18 , 4 );

// console.log(x);

// let number2 = [25, 18, 44, 18, 22];

// let x = number2.findIndex(function Myfunction(value, index, arr) {
//     return value > 18;
// })

// console.log(x);


// let x = Array.from("abcdef")
// console.log(x);


// let x = number2.entries();
// for (let i of x) {
//     console.log(i);
// }
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let x = fruits.keys();

// console.log(Array.from(x));


// keys

// const number1 = [12, 45, 78, 56, 78];
// let x = number1.keys();

// console.log(x);
// console.log(Array.from(x));
// console.log(Array.from("abcd"));


// entries
// const number2 = [12, 21, 12, 45, 78];
// let en = number2.entries();
// console.log(en);

// console.log(Array.from(en));


// includes
// const number2 = [12, 21, 12, 45, 78];

// let x = number2.includes(21);
// console.log(x);

// const a = 24;

// a = 25;
// console.log(a);

// const arr1 = [12, 12, 21];
// console.log(arr1);

// arr1[0] = 55;

// console.log(arr1);

// const arr2 = [12, 12, 21];

// console.log(arr2);

// let arr1;
// arr1 = []























