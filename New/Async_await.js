// Promise

// let n = 5;
// let data = new Promise(function (resolve, reject) {
//     if (n == 6) {
//         resolve("success")
//     } else {
//         reject("failed");
//     }
// })


// data.then(function (solve) { console.log(solve) }, function (cancel) { console.log(cancel) })


// Async and Await

// let data = async function () {
//       return "hello.."
// }

// data().then(function(result){console.log(result)});


// let sum = async function (x, y) {
//     if (x > y) {
//         return x;
//     } else {
//         return z;
//     }
// }

// console.log(sum(5, 5));

// sum(8, 8)
//     .then((res) => { console.log(res) })
//     .catch((error) => { console.log(error)})

// sum(8, 8)
//     .then((res) => { console.log(res) }, (error) => { console.log(error) })


// const data = async (x , y) => {
//     return x + y;
// }

// data(4, 78).then((res) => console.log(res), error => console.log(error));


// Await

// let data = async () => {
//     try {
//         console.log("2 : massage");
//         await console.log("3 : massage");
//         console.log("4 : massage");
//         console.log("5 : massage");
//     } catch (e) {
//         console.log(e);
//     }
// }

// console.log("1 : massage");
// data();

// console.log("6 : massage");

