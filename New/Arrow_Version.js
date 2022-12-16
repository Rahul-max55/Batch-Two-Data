
// function sum(x , y){
// let z = x + y;
// console.log(z);
// return x;
// }

// let value = sum(25 , 12);
// console.log(value);
// sum(28 , 2);
// sum(2 , 12);

// const sum = (x , y) => {
//     console.log(x + y);
// }

// sum( 5 , 5);

//single line you can remove curly bracess
// const sum = (x, y) => console.log(x + y);

// Single parameter you can remove parenthesis
// const sum = x => console.log(x);

// single line you can not write return keyword
// const sum = x => x;
// OR
// const sum = (x , y) => x + y;

// let s = sum(5 , 8);
// console.log(s);



// Version

// const obj = {
//     name: "rahul",
//     age: 23,
// }

// console.log(obj);

//  Spread operator (...)

// let obj1 = {
//     name1: "a",
//     age1:3
// }

// let obj2 = {
//     name2: "b",
//     age2:4
// }

// let obj3 = { ...obj1 , ...obj2 };
// let obj3 = { ...obj1 , name1:"rahul"};
// console.log(obj3);


// let arr1 = [1, 2, 3]
// let arr2 = [4, 5, 6]

// console.log(arr2);


// let arr3 = [...arr1, ...arr2];
// console.log(arr3);


// rest parameter (...)

// const sum = (x , ...data) => {
//     let l = data.length;
//     let add = 0;
//     console.log(data);
//     for (let x = 0; x < l; x++) {
//         add = add + data[x];
//     }
//     console.log(add);
// }

// sum(2, 25, 12, 78, 65, 78 , 456546);



// flat

// let arr = [1, 2, [[[3, 4]]], [5]];
// // console.log(arr[2][0]);
// let f = arr.flat(3);
// console.log(f);

// flatMap


// let arr = [1, 2, [3, 4] , 5];
// let f = arr.flatMap((x) =>  x+2 );
//  [1 , 2  , 3 ]
// console.log(f);

// big Int

// let x = 99999999999999999n;
// let x = BigInt(99999999999999999);
// console.log(x);



// ?? (Nullish)


// let x;
// let y = 25;

// let result = x ?? console.log("hello");
// console.log(result);

// ?. opational chenning

// _

// let number = 10_000_000_00;
// console.log(number);











