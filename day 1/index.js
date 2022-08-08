//difference between let , var and const 
// var is functional scoped when it is declare within a function and when it is declared outside the function , it is global scoped . 
// scopes are the boundaries in which the variables are accessible. 
//glope scope variables are accessible everywhere , functional scopes variables are accessible only in functions whereas block scope variables are accessible only in block scope ( everything inside these curly braces {} are known as blocks ) .

var greeter = "hi";
function newFunction() {
    var hello = "hello";
}
console.log(greeter); //hi

 //here greeter is globally scoped and hello is functionally scoped .

 var greeter = " say hi" ;
 var greeter = "say hello " ;
 greeter = " Namaskar!";
 console.log (greeter); // Namaskar!

 var greeter = " Namaste" ;
 var times = 5 ;

if ( times < 4) {
    var greeter = " say hi instead"
}
console.log(greeter); //Namaste
//problem with var variables that we can declare it again and again and redefine it . It is good if we knowinglywant a variable to be redefined but it is a problem if we do not realise about it has been already declared .

//Let .. let variables are block scoped .

let food = "Rajma Chawal"
 times = 3 ;
if ( times < 4){
    let food = " chole kulche"
    console.log(food); // chole kulche 
};

let fruit = " Mango"
colour = "red"
if(colour = orange){
    let fruit = " orange"
}
console.log (fruit); //orange is not defined 
//let variables can be updated but can not be redefined but if the same variable is defined in diff. scopes, there is no error .

let drinks = " Wine";
drinks = "Vodka";
console.log(drinks); //vodka

let vegetables = "Pumpkin";
let vegetables = "Potato";
console.log(vegetables); // vegetables has already been declared

// const variables are block scoped and cannot br updated or redeclared .

const product = "lakme";
product = "ponds";
console.log(product); //assignment to constant variable

const cereals = "wheat";
const cereals = "maize";
console.log(cereals);//cereals has already been declared

const chat = {
    message : "hi",
    times : 5
}
// we can not update const object like this
 chat = {
    numbers : 5 ,
    message : "hello"
}
//instead of doing this , we can update its value by this method
chat. message = "say hello instead"; // say hello instead
   
//calculator
function calculator(val1, val2, sign){
    if (sign==='+'){
        console.log(val1 + val2);
    } 
    else if (sign==='-'){
        console.log(val1 - val2);
    }
    else if (sign==='*'){
        console.log(val1 * val2);
    }
    else if (sign==='/'){
        console.log(val1 / val2);
    }
}
calculator(55, 45, '+'); //100
calculator(55, 45, '-');//10
calculator(55, 45, '*');//2475
calculator(55, 45, '/');//1,2222222223
















