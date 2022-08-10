/*objects are variables too but objects can contain many values .
The values are written as name : value pairs ..separated by colon .
*/
const girl = {
name: 'Smriti',
email: 'smriti@gmail.com',
age: 25 ,
smart: true,
address: 'p-463466',
complexion: 'wheatish',
};
/* we can objects values in two ways */
/*objectName.propertyName
objectName['propertyName']

console.log(girl.name);
console.log(girl.age);
console.log(girl.address);
console.log(girl['complexion']);*/

const boy = {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      },
    },
    };

      //console.log(boy.id.address);
      //console.log(Object.keys(boy));
     // console.log(Object.values(boy));
/*Object.keys(boy).forEach((key) => {
console.log(key + ": " +boy[key]);
}) 
Object.keys(boy).forEach((key) => {
    console.log(key);
    }) 
    Object.keys(boy).forEach((key) => {
        console.log(key);
        console.log(boy[key]);
    }) 
    Object.values(boy).forEach((Fragrance) => {
        console.log(Fragrance);
        }) 
        let objArray  = Object.keys(boy)
        for(i=0; i<Object.keys(boy).length; i++){
            console.log(boy);
        }*/
        let objArray  = Object.keys(boy)
        for(i=0; i<Object.keys(boy).length; i++){
            console.log(Object.values);
        }