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