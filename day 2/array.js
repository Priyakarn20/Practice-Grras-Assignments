//An array can hold many values under a single name and we can access array values by referring to their index no. .
//Array index no. starts with 0 .
const cars = ["volvo","Volvo"]; // literal method
//we can also create an array like this 
const junk = new Array("jalebi", "kachodi"); // this method is not that convenient ,readable .


let fruits = [ "banana","apple","grapes","pine apple","orange","water melon"]


//toString method - converts an array to a comma separated String.
//console.log(fruits.toString());

/*for (i=0; i<fruits.length; i++){
    console.log(fruits.toString(i));
}

//join method- joins array elements into  separate string, * used as a separator
console.log(fruits.join(" * "));
console.log(fruits.join("       "));
console.log(fruits.join(" $ "));

for(i=0; i<fruits.length; i++){
console.log(fruits.join(+i));
}

for(i=0; i<fruits.length; i++){
    console.log(fruits.join(i));
    }

//pop method-to remove last item out of array
console.log(fruits.pop());
   

 //fruits = fruits.pop();     ...this method returs the item that was popped out .

//shift method- remove first item out of array
console.log(fruits.shift());


//unshift method - adds new item to the beginning of an array..returns new length of an array
console.log(fruits.unshift("Guava"));

//push method- it adds new item at the last position ..returns new length
console.log(fruits.push("Peach"));

//concat method- simply merging two arrays into a new one
let food1 = ["burger","pizza","momos","samosa"]
let food2= ["jalebi","dosa","biryani","kabab"]
let food = food1.concat(food2);

//Splice method- used to add items items into an array
console.log(fruits.splice(2, 4 ,"Musk melon" , "Pomegranate"));

//slice method - breaks an array from particular item, it can take two items also
console.log(fruits.slice(4));
console.log(fruits.slice(3,4));

//sort method - It rearranges an array alphabetically 
console.log(fruits.sort());

//reverse method- it reverses the array, first we sort an array then we reverse it .
console.log(fruits.sort());
console.log(fruits.reverse());

for(i=0; i<fruits.length; i++){
    console.log(fruits.reverse(i));
    }

    for(i=0; i<fruits.length; i++){
        console.log(fruits.pop(i));
        }
 for(i=0; i<fruits.length; i++){
     console.log(fruits.sort(i));
  }
  for(i=0; i<fruits.length; i++){
    console.log(fruits(i));
 } ;

 for(i=0; i<fruits.length; i++){
    console.log(fruits(i) + fruits.pop(i));
 } ;
