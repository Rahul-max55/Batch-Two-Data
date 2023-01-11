// console.log(window.innerHeight);
// console.log(window.outerHeight);
// document.write(window.innerHeight)
// document.write("------------------")
// document.write(window.outerHeight)


// console.log(window.innerWidth);
// console.log(window.outerWidth);

// let x;
// const Webpage = () => {
//   x =  window.open("" , "_blank" , "width=200px , height=200px , left=200px , top=200px")
// }

// const CloseWebpage = () => {
//     x.close();
// }


// const moveto = () => {
//     x.moveTo(100 , 100)
// }

// const moveby = () => {
//     x.moveBy(200 , 200)
// }


// const resizeto = () => {
//     x.resizeTo(216 , 280)
// }

// const resizeby = () => {
//     x.resizeBy(200 , 200)
// }


// const scrollto = () => {
//     window.scrollTo(200 , 0)
// }

// const scrollby = () => {
//     window.scrollBy(-20 , -10)
// }



//  location ---------------------

console.log(location.host);
console.log(location.hostname);
console.log(location.pathname);
console.log(location.href);
console.log(location.port);
console.log(location.protocol);


const reload = () => {
  location.reload();
}


// const changeurl = () => {
//   location.assign("https://www.google.com");
// }

const changeurl = () => {
  location.replace("https://www.google.com");
}

