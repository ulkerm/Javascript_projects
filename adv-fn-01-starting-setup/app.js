// function add(num1, num2) {
//     return num1 + num2;
// }

// console.log(add(1, 5));     // PURE function

// function addRandom(num1) {
//     return num1 + Math.random();
// }

// console.log(addRandom(2));   // INPURE function

// let previousResult = 0;

// function add(num1, num2) {
//     const sum = num1 + num2;
//     previousResult = sum;    // always provides side effects
//     return sum;
// }  

// const hobbies = ['Cooking', 'Sport'];

// function printHobbies(h) {
//     h.push('New Hobby');
//     console.log(h);
// }

// printHobbies(hobbies);    // side effect - array deyisir, cunki f-de kopyalamir, adresi goturub elave edir

function createTaxCalculator(tax) {
    function calculateTax(amount) {
        return amount * tax;
    }

    return calculateTax;
}  // FACTORY function

const calculateVatAmount = createTaxCalculator(0.19);
const calculateIncomeTaxAmount = createTaxCalculator(0.25);

console.log(calculateVatAmount);       // 19
console.log(calculateVatAmount(200));  // 38

// function powerOf(x, n) {
//     let result = 1;

//     for (let i = 0; i < n; i++) {
//         result *= x;
//     }

//     return result;
// }

function powerOf(x, n) {
    // if (n === 1) {
    //     return x;
    // }
    // return x * powerOf(x, n - 1);

    return n === 1 ? x : x * powerOf(x, n - 1);
}

console.log(powerOf(2, 3));  // 2 * 2 * 2         RECURSION



function randomIntBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);   // Math.floor reqemi yuvarlaqlashdirir. 6.99 = 6
}

console.log(randomIntBetween(2, 6));