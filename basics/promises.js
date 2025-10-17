// const promise = new Promise((resolve, reject) => {
//     // Do an async task
//     // DB calls, cryptography, network
//
//     setTimeout(function () {
//         console.log("Async task is completed!!");
//         resolve(); // to connect the resolve to the then function.
//     }, 1000);
// });
//
// promise.then(function () {
//     console.log("Promise consumed!!");
// });
//
// new Promise(function (resolve, reject) {
//     setTimeout(function (){
//         console.log("Async task 2!!");
//         resolve();
//     }, 1000)
// }).then(function(){
//     console.log("Async 2 consumed!!")
// });
//
// const promiseThree = new Promise(function (resolve, reject) {
//     setTimeout(function (){
//         resolve({username : "Tony", email : "tony@gmail.com"});
//     }, 1000);
// });
//
// promiseThree.then(function (data) {
//     console.log(data);
// });
//
// const promiseFour = new Promise(function (resolve, reject) {
//     setTimeout(function (){
//         let error = true;
//         if (!error) {
//             resolve({username : "Steve", email : "steve@gmail.com"})
//         }
//         else {
//             reject("Oops, something went wrong!");
//         }
//     })
// })
//
// // promiseFour.then(function () {}).catch(function (error) {});
//
// promiseFour.then((data) => {
//     console.log(data);
//     return data.username;
// }).then(username => {
//     console.log(username);
// }).catch(error => {
//     console.log(error);
// }).finally(() => console.log("The promise is either resolved or rejected!!"));

const promiseFive = new Promise(function (resolve, reject) {
    setTimeout(function (){
        let error = true;
        if (!error) {
            resolve({username : "Bruce", email : "bruce@gmail.com"})
        }
        else {
            reject("Oops, something went wrong!");
        }
    }, 1000)
});

async function consumePromiseFive () {
    try {
        const response = await promiseFive;
        console.log(response);
    }
    catch (error) {
        console.log(error);
    }
}

consumePromiseFive();


