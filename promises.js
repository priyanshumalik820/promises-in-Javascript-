// let promise = new Promise((resolve,reject) => {
//     console.log(" I am a promise");
//     resolve("sucess");
// }); 

// const getPromise = () => {
//   return new Promise((resolve,reject) => {
//         console.log(" I am a promise");
//         resolve("sucess");
//         //reject("Network error")
//     }); 
// };

// let promise = getPromise();
// promise.then((res) => {
//     console.log("promise fulfilled", res);
// });

// promise.catch((err) => {
//     console.log("promise rejected",err);
     
// });
// function getData(dataId, getNextData) {
//     return new Promise((resolve ,reject) => {
//     setTimeout(() => {
//     console.log("data" ,dataId);
//     resolve("sucess");
//     if (getNextData) {
//         getNextData();
//     }
//    },5000);
//  });
// }

function asyncFunc1() {
return new Promise((resolve ,reject) => {
    setTimeout(() => {
    console.log("data1")
    resolve("sucess");
  },4000);
 });
}

function asyncFunc2() {
    return new Promise((resolve ,reject) => {
        setTimeout(() => {
        console.log("data2")
        resolve("sucess");
      },4000);
   });
}

console.log("fetching data1....")
asyncFunc1().then((res) => {
    console.log("fetching data2...")
asyncFunc2().then((res) => {});
});
