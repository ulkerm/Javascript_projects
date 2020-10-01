const numbers = [1, 2, 3];
console.log(numbers);

// const moreNumbers = new Array();  // []
// console.log(moreNumbers);

// const yetMoreNumbers = Array.of(1, 2);
// console.log(yetMoreNumbers);

const listItems = document.querySelectorAll('li');
console.log(listItems);

const arrayListItems = Array.from(listItems);
console.log(arrayListItems);



// const prices = [10.99, 5.99, 3.99, 6.99];
// const tax = 0.19;
// const taxAdjustedPrices = [];

// for (const price of prices) {
//     taxAdjustedPrices.push(price * (1 + tax));
// }

// prices.forEach((price, idx, prices) => {
//     const priceObj = { index: idx, taxAdjPrice: price * (1 + tax) };
//     taxAdjustedPrices.push(priceObj);
// });

// console.log(taxAdjustedPrices);

const prices = [10.99, 5.99, 3.99, 6.99];
const tax = 0.19;
const taxAdjustedPrices = prices.map((price, idx, prices) => {
    const priceObj = { index: idx, taxAdjPrice: price * (1 + tax) };
    return priceObj;
});

const sortedPrices = prices.sort((a, b) => {
    if (a > b) { 
        return 1;
    } else if (a === b) {
        return 0;
    } else {
        return 1;
    }
});
console.log(sortedPrices); //bu azdan coxa siralayir
console.log(sortedPrices.reverse()); // bu coxdan aza siralayir. reverse yerine ifin icinde reqemleri tersine yaz

const filteredArray = prices.filter((price, index, prices) => {
    return price > 6;
});

console.log(filteredArray);

//  qisa formasi 
const filteredArray = prices.filter(price => price > 6);

// let sum = 0;
// prices.forEach((price) => {
//     sum += price
// });
// console.log(sum); ve ya :

// const sum = prices.reduce((prevValue, curValue, curIndex, prices) => {
//     return prevValue + curIndex;
// }, 0);  ve ya :

const sum = prices.reduce((prevValue, curValue,) => prevValue + curIndex, 0);  // en qisa forma

console.log(sum);

// stringin elementlerini ayirib array edir

const data = 'new york;10.99;2000';
transformedData[1] = +transformedData[1];   // stringdeki reqemi parse edir
console.log(transformedData);

//  arrayi stringe cevirir

const nameFragments = ['Max', 'Schwarz'];
const name = nameFragments.join();   // moterize bos olanda stringde , olur, '' qoysan sozler arasinda mesafe olur
console.log(name);

const nameData = ['Max', 'Schwarz'];
// const firstName = nameData[0];
// const lastName = nameData[1];  ve ya

const [firstName, lastName] = nameData;