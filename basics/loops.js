for (let i = 0; i < 10; i++) {
    console.log(i + 1);
}

let arr = [1, 2, 3, 4, 5, 6];
for (let index = 0; index < arr.length; index++) {
    console.log(arr[index] * 10);
}

let index = 0;
while (index < 5) {
    console.log(`While loop ${index}`);
    index++;
}

let score = 1;
do {
    console.log(`Score: ${score}`);
    score += 2;
} while (score <= 10);

let myArr = [1, 2, 3, 4, 5, 6];
for (let ele of myArr) {
    console.log(ele * 11);
}

let hello = "Hello World";
for (let char of hello) {
    console.log(char);
}

let map = new Map();
map.set("Tony", "Stark")
map.set("Steve", "Rogers")
map.set("Bruce", "Banner")

console.log(map);

for (let [key, value] of map) {
    console.log(key + " :- " + value);
}

let obj = {
    "one" : 1,
    "two" : 2,
    "three" : 3,
}

for (let key in obj) {
    console.log(`${key} and the value is ${obj[key]}`);
}

let newArr = ["A", "B", "C"];
newArr.forEach(function (item) {
    console.log(item);
});

newArr.forEach((item) => {
    console.log(item);
})

newArr.forEach((item, index, array) => {
    console.log(item, index, array);
})