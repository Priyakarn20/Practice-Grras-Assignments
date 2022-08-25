//async await // .then .catch // interval(time)

const { timeout } = require("async");

/*const { default: axios } = require("axios");

console.log('Happy');

setTimeout(() => {
    console.log('very happy ');
}, 2000);

console.log('very very happy');
console.log('very very happy');
console.log('very very happy');
console.log('very very happy');
console.log('very very happy');
console.log('very very happy');
console.log('very very happy');

async function add(a,b){
    await setTimeout(() => {
        console.log(a+b);
    }, 2000)
console.log(b);
}
add(20,30);

function x() {
    return 'I love u Priya';
}
async function love(){
    const arr = [];
    const res = x();
    arr.push(res);
    console.log(arr);
}
love();

async function fetchData() {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
//const resJson = await response.json();
console.log("I love u Priya", response);

}
fetchData();


function myDisplayer() {
    console.log('something');
}
function myCal(a,b){
    console.log(a+b);
}
//myCal(3,2, myDisplayer);
myCal(70,20);
myDisplayer();

function f1(){
    console.log('Hello Priya');
}
function f2(){
    console.log('How are you');
}
f2();
f1();  js functions are executed in the sequence 
they are called , not in the sequence they are defined
*/

function happiness(){
    console.log('Happiness is a habit');
}
//setInterval(happiness,2000);
setTimeout(happiness,2000);

setInterval(clock, 2000);
function clock(){
    let time = new Date();
    console.log(time.getHours() +":" +
    time.getMinutes() + ":" + 
    time.getSeconds());
}
console.log('be happy');
