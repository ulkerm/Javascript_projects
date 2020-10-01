// const numbers = [1, 3, 5, 7, 9];

// const filteredNumbers = numbers.filter(number => number > 5);
// console.log(filteredNumbers);

// const sum = numbers.reduce((prevValue , curValue) => prevValue + curValue);
// console.log(sum);


// const task4 = new Set()


const numbers5 = [2, 4, 6, 8, 9];

const task1 = numbers5.filter(num => num > 5);

console.log(task1);

const task2 = numbers5.map((val) => ({num: val}));
console.log(task2);

const task3 = numbers5.reduce((prev, cur) => prev * cur);
console.log(task3);

// function findMax(... numbers) {
//     let curNum = numbers[0];
//     for (const num of numbers) {
//         if (num > curNum) {
//             curNum = num;
//         };
//     return curNum;
//  }
// } 
// console.log(findMax(numbers5));

function findMax(...numbers) {
    let curNum = [numbers[0]];
    for (const num of numbers) {
        if(num > curNum) {
            curNum = num;
        }
    }
    return curNum;
}

console.log(findMax(...numbers5));