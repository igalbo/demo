function sum(a, b) {
    return a + b;
}

let sum2 = (a, b) => a + b;

let sum3 = a => 2 * a ;

class Person {
    constructor(name) {
        this.name = name;
    }

    printNameArrow() {
        setTimeout(() => {
            console.log('Arrow: ' + this.name), 100
        });
    }

    printNameFunction() {
        setTimeout(function() {
            console.log('Function: ' + this.name)
        }, 100);
    }
}

const name = 'Moshe';
let person = new Person('Bob');
person.printNameArrow();
person.printNameFunction();