let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let temp = arr.filter((item) => item > 4)
console.log(temp);
let temp2 = arr.filter( (item) => {
    return item > 4 && item % 2 === 0;
});
console.log(temp2);

let temp3 = arr.map((item) => item + 10);
console.log(temp3);

let temp4 = arr.reduce((acc, currentValue) => {
    console.log(acc);
    console.log(currentValue);
    return acc + currentValue;
}, 0);

console.log("Total sum is " + temp4);