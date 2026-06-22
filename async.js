console.log("one");
console.log("two");

setTimeout(() => {
console.log("Hello");
}, 4000);

console.log("three");

setInterval(myFunction, 1);

function myFunction() {
  let d = new Date();
  document.getElementById('deme').innerHTML = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds() + ":" + d.getMilliseconds() + ":" + d.getDay() + ":" + d.getMonth();
}

// Callback

function displayDate() {
  document.getElementById("demo").innerHTML = Date();
}

document.getElementById("display").addEventListener("click", function () {
  setTimeout(displayDate, 3000);
});

function helloo() {
  document.getElementById("demy").innerHTML = "Hello World!";
}

document.getElementById("hello").addEventListener("click", function () {
  setTimeout(helloo, 4000);
});

// This is Callback Hell and Nested Callback
function getData(dataId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data", dataId);
      resolve("Success");
    }, 3000);
  });
}

// IIFE
(async function() {
  console.log("Getting data 1....")
  await getData(1);
  console.log("Getting data 2....")
  await getData(2);
  console.log("Getting data 3....")
  await getData(3);
})();


// Promise Chain
// getData(1).then((res) => {
//   return getData(2);
// })
// .then((res) => {
//   return getData(3);
// })
// .then((res) => {
//   console.log(res);
// })



// function data() {
//     setTimeout(() => {
//         console.log("one")
//     }, 1000);

//     setTimeout(() => {
//         console.log("two")
//     }, 2000);

//     setTimeout(() => {
//         console.log("three")
//     }, 3000);
// }

// data();

// function getData(dataId, getNextData) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Data", dataId);
//       // resolve("Success");
//     reject("error")
//       if (getNextData) {
//         getNextData();
//       }
//     }, 4000);
//   });
// }

// let promise = getData(5);

// promise.then(() => {
//   console.log("Promise Fullfilled");
// })

// promise.catch((err) => {
//   console.log("rejected", err);
// })

// function asyncFunc1() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Show Data 1.");
//       resolve("success");
//     }, 4000);
//   });
// }

// function asyncFunc2() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Show Data 2.");
//       resolve("success");
//     }, 4000);
//   });
// }

// console.log("Fetching Data1....");
// let p1 = asyncFunc1().then((res) => {
//   console.log("Fetching Data 2....")
//   let p2 = asyncFunc2().then((res) => {})
// });
