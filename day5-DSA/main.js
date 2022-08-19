const arr = [1,2,3,4,2,1];

function removeDuplicates(arr) {
    const res = [];
    for(i=0; i<arr.length; i++) {
        
        if(!res.includes(arr[i])) {
res.push(arr[i]);
        }else{
            console.log(arr[i]);
        }
    }
    console.log(res);
};

removeDuplicates(arr);

const arr2 = [16,15,12,58,325,444,5222,1515,852];

function evenElement(arr) {
    const res = [];
    for(i=0; i<arr.length; i++){
        if(arr[i] % 2 == 0){
res.push(arr[i]);
console.log(res);
    }
}
};
evenElement(arr);

const arr3 = [564,4581,21166,245,15,425,1678,1669,24,24];

function evenoddElement(arr){
    const even = [];
    const odd = [];
    for(let i = 0; i < arr3.length; i++){
if (arr[i] % 2 == 0){
    even.push(arr[i]);
    
} else {
    odd.push(arr[i]);
    
}
}
//console.log("####odd#####", odd);
//console.log( "even-----", even);
};
evenoddElement(arr);   

const names = ['A','b','C','c','D','d','e','F','g','H','i'];

function letter(arr) {
   arr.forEach(element => {
    console.log(element);
   });
}
letter(names);

function letters(arr){
    const uppercase = [];
    const lowercase = [];
    arr.forEach(element => {
        if(element == element.toUpperCase()) {
uppercase.push(element)
        }else {
lowercase.push(element);
        }
    });
    console.log(uppercase);
    console.log(lowercase);
}
letters(names);

const pic = ['Priya', 'jayesh','Ashish', 'Saurabh', 'harsh', 'Anushka','priyansh'];

function checkFirstChar(arr) {
    arr.forEach(element => {
        if(element[0] == element.charAt(0).toUpperCase()){
console.log(element);
        }else {
console.log('Hi Priya');
        }
    });
}

checkFirstChar(pic);

