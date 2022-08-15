/* javascript strings is zero and 
 more characters written inside quotes .
we can use double and single quotes .*/
let person = "Pratima";
let gender = 'female';
console.log(person);
console.log(gender);
let ans1 = ' I am happy';
let ans2 = "I am 'sad'";
let ans3 = ' I am "energetic"';
console.log(ans1);
console.log(ans2);
console.log(ans3);
//to find the length of the string 
let le = "vdsgiawhefenlkwjbheilwkbkjdsnlkeifhwqbk";
console.log(le.length);
/*escape character = we write strings in single and double quotes that's
 why it is difficult in javascript to read out such things ' , "" , / . So,
  we write these characters as */
let ec1 = " I am Ram\'s sister.";
let ec2 = " This is a \"beautiful\" painting . ";
let ec3 = " Ram \\ Shyam \\ Chanchal \\ Vaibhav";
console.log(ec1);
console.log(ec2);
console.log(ec3);

let ec4 = " life is \b beautiful ."; //backspace
let ec5 = " life is \f beautiful .";//form feed
let ec6 = " life is \n beautiful .";//new line 
let ec7 = " life is \r beautiful .";//carriage return
let ec8 = " life is \t beautiful .";//horizontal tabulator
let ec9 = " life is \v beautiful .";//vertical tabulator
console.log(ec4);
console.log(ec5);
console.log(ec6);
console.log(ec7);
console.log(ec8);
console.log(ec9);

/* breaking code lines - for best readability ,
 programmers avoid code lines longer than 80 characters .
we can break it afer an operater .
we can also break up a string is to use string addition .
we can also break up a code within a text string with a single backslash 
but we cannot break up a code line with a backslash .
( to break a code using backslash is not preferred one .)
*/
let bcl1= 
"hello javascript";
console.log(bcl1);
let bcl2 = "hello " + 
"javascript";
console.log(bcl2);
let bcl3 = "hello \ javascript";
console.log(bcl3);
// let bcl4 = \ "hello javascript";  ..This is wrong .
 
//we can define strings as objects with the keyword new .
let a = new String("Ravi");
let b =  "Ravi";
/* It is preferred to not to create string objects 
because new keyword complicates the code and slows 
down execution speed */
console.log(a);
console.log(b);
console.log(a == b); // == , sign of equal to
console.log(a === b);// === ,it compares data type too .
 let c = "vsaygfiuyfohlhwhehoifnljl";
 console.log(c.length); // for length of string 
 
/*extracting string parts 
there are 3 methods - slice(start, end) , 
substring(start,end) , substr(start, length)

slice method :  it extracts a part of a string and 
 returns the extracted part in a new string .
takes two parameters - start position and 
end position (end not included ).
*/
let d = "Aman,Sandhya,RajaRani";
console.log(d.length);
console.log(d.slice(8, 13));
console.log(d.slice(-12,-6)); /*If parameter is -ve,
position is counted from the end of the string . */ 
console.log(d.slice(-13)); 
console.log(d.slice(7));
/* If we omit the second parameter,
the method will slice out the rest of the string */
let e = "vhjgskwehflkwe"
console.log(e.length);
console.log(e.slice(5,9));
console.log(e.slice(-10,-5));
console.log(e.slice(6));
console.log(e.slice(-8));
/* we take ist position as zero 
and second position as one */
/* substring and slice method are same 
difference is only that it takes start and end values 
less than 0 as 0 */
console.log(e.substring(5,9));
console.log(e.substring(-12,-3));
/* substr method is also similar to slice method 
difference is only that it takes second parameter as the length of rextracted part .
*/
console.log(e.substr(7,6));
console.log(e.substr(7));

/* Replacing string content
replace method .. it replaces only the first match .
It does not change the string , returns the new string .
If we want to replace all matches, we use regular expression with the /g flag set .
*/

let abc = " Please Check The results , results of Sam and Ravi";
console.log(abc.replace("results" , "assignments"));
console.log(abc.replace(/results/g, "assignments" ));
/* replace() method is case sensitive, writing RESULTS 
(with upper case) will not work .
to make it insensitive , we use regular expression with an /i flag.
regular expression are written without quotes .
*/
console.log(abc.replace(/RESULTS/i, "assignments"));
/*toUpperCase() : 
converts a string to upper case .
toLowerCase() : 
converts a string to lower case .
*/
console.log(abc.toUpperCase());
console.log(abc.toLowerCase());

//concat method join two or more strings .
let co1 = "Hello"
let co2 = "baby"
console.log(co1.concat(" ", co2));
//it can be used instead of plus operator .
let co3 = "Hello" + " " + "baby" ;
console.log("Hello".concat(" ", "baby"));
 // strings cannot be changed , only replaced .

 /*javascript string padding 
 padStart() and PadEnd() is a string method . 
 It support padding at the start and end .
  to pad a number, we need to convert it 
  in string first .
  */
 let pa1 = "5"
 console.log(pa1.padStart(7 , "wd"));
 console.log(pa1.padEnd(7 , "wd"));

 let pa2 = "7" ;
 console.log(pa2.padStart(7,"x"));
 console.log(pa2.padEnd(7,"x"));

//trim method removes whitespace from both sides of a string .

let tr1 = "          Alex       " ;
console.log(tr1.trim());

/* A string can be converted into array 
with the split() method .
*/
let sp1 = " cgsfuqwg2vhsjcgw4#bjjkh@HJKJhl(nk%NK<L2gkjk"
console.log(sp1.split("f"));
console.log(sp1.split("@"));
console.log(sp1.split(" ")); // It split on spaces .
console.log(sp1.split(""));//it returns an array of single characters .
console.log(sp1.split("#"));
console.log(sp1.split()); //returned array contains whole string in index 0 .



/* Extracting String Characters 
methods -
charAt(position) -  it returns the character at specified index in a string .
charCodeAt(position) - it returns the character code at specified index in a string.
Property access - it allows property access in strings .
 */

let sc1 = "vhjbjjwkhnkljwojojlmjncijsojlnwljiij"
console.log(sc1.charAt(5));
console.log(sc1.charCodeAt(6));
console.log(sc1[1]);




























