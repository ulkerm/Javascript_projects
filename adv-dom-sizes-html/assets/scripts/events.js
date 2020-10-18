const button = document.querySelector('button');

// button.onclick = function() {

// };

const buttonClickHandler = event => {
    event.target.disabled = true;
    console.log(event);
};

const anotherButtonClickHandler = () => {
    console.log('this was clicked');
};

// button.onclick = buttonClickHandler;    // bele yalniz 1 function elave etmek olur
// button.onclick = anotherButtonClickHandler;    //bele olanda 1cini bunla evez edir

// const boundFn = buttonClickHandler.bind(this);  // remove etmek ucun add ve remove=a YALNIZ fn adini yaz

// button.addEventListener('click', boundFn);

// setTimeout(() => {
//     button.removeEventListener('click', boundFn);
// }, 2000);

// buttons.forEach(btn => {
// //     btn.addEventListener('click', buttonClickHandler);
// // })

const form = document.querySelector('form');

form.addEventListener('submit', event => {
    event.preventDefault();   // prevent etmesen, submitden sonra sehife reload olur
    console.log(event);
});

const div = document.querySelector('div');

div.addEventListener('click', event => {
    console.log('CLICKED DIV');
    console.log(event);
});    //  3cu argument kimi true versek, evvel bu event oxunacaq.

button.addEventListener('click', event => {
    event.stopPropagation();  // propagation yeni btn-dan sonra boyuk eventleri oxuma, mes div
    console.log('CLICKED BUTTON');
    console.log(event);
});

const listitems = document.querySelectorAll('li');

// listitems.forEach(listItem => {
//     listItem.addEventListener('click', event => {
//         event.target.classList.toggle('highlight');
//     });
// });    bele coxlu listeners olur, performance asagi olur

const list = document.querySelector('ul');

list.addEventListener('click',event => {
//     console.log(event.currentTarget);  // listenerin esas aid oldugunu - ul verir
//    event.target.classList.toggle('highlight');  // bu daha yaxsi usuldur, targete gore yalniz click eleyende listener oxuyacaq
    event.target.closest('li').classList.toggle('highlight');
});    