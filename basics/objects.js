let myObject = new Object();

let myObject2 = {}

console.log(myObject);
console.log(myObject2);

myObject.id = "123abc"
myObject.name = "Tony"
myObject.address = "Norway"

console.log(myObject);

let user = {
    name : "Steve",
    id : 1,
    address : {
        city : "Pune",
        pinCode : "123456"
    }
}
console.log(user);
console.log(user.address);

let obj1 = {
    1 : "a",
    2 : "b",
}
let obj2 = {
    3 : "c",
    4 : "d",
}
let obj3 = {
    5 : "e",
    6 : "f",
}

let obj4 = Object.assign({}, obj1, obj2, obj3);
console.log(obj4);

let obj5 = {...obj1, ...obj2, ...obj3}; // spread operator
console.log(obj5);

let obj6 = Object.keys(myObject);
let obj7 = Object.values(myObject);
let obj8 = Object.entries(myObject);
console.log(obj6);
console.log(obj7);
console.log(obj8);
console.log(myObject.hasOwnProperty("id1"))
