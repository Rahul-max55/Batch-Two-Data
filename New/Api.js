// console.log("hello");

// let x = history.length;

// const nextPage = () => {
//     history.forward();
// }



// localStorage.setItem("name", "rahul");
// let x = localStorage.getItem("name");
// let x = localStorage.clear();
// let x = localStorage.removeItem("name");
// let x = localStorage.key(0);


// sessionStorage.setItem("name", "rahul");


// fetch --> return --> promise --> then -- catch

// Get method using fetch json
// let data = fetch("https://jsonplaceholder.typicode.com/users")
//     .then((result) => { return result.json()})
//     .then((value) => { console.log(value) })
//     .catch((error)=>{console.log(error)});

// Get method using fetch text
let data = fetch("./dataApi.txt")
    .then((result) => { return result.text()})
    .then((value) => { console.log(value) })
    .catch((error)=>{console.log(error)});

// let data = fetch("https://jsonplaceholder.typicode.com/posts", {
//     method: "POST",
//     body: JSON.stringify({ name: "xyz", add: "indore" }),
//     headers: {
//         'Content-type': 'application/json; charset=UTF-8'
//     },
// }).then((r) => { return r.json() })
//     .then((v) => { console.log(v) })

// console.log(data);


// Delete

let data1 = fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "DELETE",
})







