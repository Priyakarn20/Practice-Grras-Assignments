const axios = require('axios');

/*let grrasPromise = new Promise(function(resolve, reject) {
    setTimeout(() => {
        resolve(console.log('Get a job......!'));
    }, 2000)
})
console.log(grrasPromise);
//grrasPromise();

let promise = new Promise(function(resolve, reject) {
    setTimeout(() => {
        reject(console.log('new error......OOOOooppss!'));
    }, 1000)
})
console.log(promise);

let pro = new Promise(function(resolve, reject) {
    setTimeout(() => {
        resolve(console.log('It is just an trial '));
    })
})
console.log(pro);

async function fetchData() {
    try {const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    //const resJson = await response.json();
    console.log("I love u Priya", response);
        
    } catch (error) {
        console.log('Inside error');
       console.log(error); 
    }

}
fetchData();

async function trial(){
    try {
        const result = await axios.get();
        console.log("I am always there", result);
    } catch (error) {
        console.log('server is down');
    }
}
trial();


async function trial1(){
    try {
        const test = await axios.get();
        console.log('Promise fulfilled', test);
    } catch (error) {
       console.log('Inside error');
       setTimeout(()=> {
        console.log('server is down');
       }, 1000) 
    }
}
trial1();

let promise = new Promise(function(resolve, reject) {
    try {
        const server =  axios.get('https://jsonplaceholder.typicode.com/users');
    resolve(console.log('Promise is fulfilled', server));
    } catch (error) {
        console.log('Error: ' + error);
        setTimeout(() => {
            reject(console.log('new error......OOOOooppss!'));
        }, 1000)
    }
    
})
console.log(promise);


const wait = (ms) => new Promise((resolve) => 
setTimeout(resolve, ms));
wait (10*1000)
.then(()=> console.log('Hello Priya'))
.catch(console.log('failureCallback'));*/

/*const myPromise = new Promise((resolve, reject) =>{
    setTimeout(()=> {
        resolve("Apple is good for health");
    }, 300);
});
myPromise
.then(handleFulfilledA, handleRejectedA)
.then(handleFulfilledB, handleRejectedB)
.then(handleFulfilledC, handleRejectedC);

let myPromise =  new Promise(function (resolve, reject){
    resolve();
    reject();
} );
myPromise.then(
    function(happy) {
        console.log('Priya is Happy')
    },
    function(error){
        console.log('error in happiness')
    }
);*/