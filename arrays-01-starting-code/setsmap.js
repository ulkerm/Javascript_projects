// const ids = new Set(['Hi', 'from', 'set!']);
// ids.add(2);    //sehv neyise add elesen ignore edecek
// if (ids.has('Hi')) {
//     ids.delete('Hi');
// }    // silmek ucun if ist ele, sehv adi versen ignore edecek

// for (const entry of ids.entries()) {
//     console.log(entry(0));
// }

//MAPS

const person1 = 'Max';
const person2 = 'Manuel';

const personData = new Map([[person1, [{ date:'yesterday', price: 10 }]]]);
personData.set(person2, [{ date: 'two weeks ago', price: 100 }]);

console.log(personData);
console.log(personData.get(person1));

for (const [key, value] of personData.entries()) {
    console.log(key, value);
}

for (const key of personData.keys()) {
    console.log(key);
}

for (const value of personData.values()) {
    console.log(value);
}
