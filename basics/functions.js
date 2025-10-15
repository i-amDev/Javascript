function myFunction() {
    console.log("Name");
    console.log("ID");
    console.log("Address");
}
myFunction();

function add(num1, num2) {
    return num1 + num2;
}

console.log(add(5, 5));

function loggedInMessage(username) {
    return `${username} is logged in!`;
}

console.log(loggedInMessage("Tony"));

function calculateSum(...arr) { // rest operator(also called spread operator)
    return arr;
}
console.log(calculateSum(10,20, 30));

let newObj = {
    name : "Bruce",
    age : 50
}
function handleObject(object) {
    // console.log(object.name);
    // console.log(object.age);
    console.log(`Hello ${object.name} your age is ${object.age}`);
}
handleObject(newObj);

