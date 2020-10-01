// class Course {
//     constructor(title, length, price) {
//         this.title = title;
//         this.length = length;
//         this.price = price;
//     }

//     calc() { return this.length / this.price }

//     // set Course(price) {
//     //     this.price = price;
//     //     if (price > 0) {
//     //         return `\$${this.price}`;
//     //     }
//     // }

//     get price() {
//         return '$' + this.price;
//     }
//     set price(val) {
//         if(val < 0) {
//            throw new Error;
//         }
//         this.price = val;
//     }
// // get price() {
// //     return this.price;
// // }

//     }

// const greekCourse = new Course('Greek', 30, 10);
// const englishCourse = new Course('English', 30, 15);
// console.log(englishCourse);
// console.log(greekCourse.calc());

// class PracticalCourse extends Course {
//     constructor() {
//         super ();
//     }

//    numOfExercises
// }

// class TheoreticalCourse extends Course {
//     constructor() {
//         super ();
//     }
//    static publish() {
//         console.log('hi');
//     }
// }

// console.log(PracticalCourse);
// TheoreticalCourse.publish();



class Course {
    constructor(title, length, price) {
        this.title = title;
        this.length = length;
        this.price = price;
    }
    get price() {
        return '$' + this.price;
    }
    
    set price(val) {
        if (val < 0) {
            throw 'Invalid Code';
        } else {
            this.price = val
        }

        
    }

    calc() { return this.length / this.price; }

    summary() {
        return (`Title: ${this.title}, Length: ${this.length}, Price: ${this.price}`);
    }
}

const englishCourse = new Course('English', 30, 10);
const greekCourse = new Course('Greek', 40, 10);

console.log(englishCourse);
console.log(greekCourse);
console.log(englishCourse.calc());
console.log(greekCourse.summary());

class PracticalCourse extends Course {
    constructor(title, length, price, numOfExercises) {
        super (title, length, price);
        this.numOfExercises = numOfExercises;
    }
}

class TheoreticalCourse extends Course {
    publish() {
        console.log('Hi');
    }
}

const myCourse = new PracticalCourse('My Course', 40, 20, 60);
const hisCourse = new TheoreticalCourse('His Course', 30, 20, 40);

console.log(myCourse);
console.log(hisCourse.publish());