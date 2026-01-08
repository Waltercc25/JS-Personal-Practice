/*A closure is a function that remembers the variables in its environment even after that 
environment has ended.*/

//Example 1.
function outer() {
    let count = 0;

    function inner() {
        count++
        console.log(count)
    }

    return inner
}

const fn = outer();
fn(); //1
fn(); //2
fn(); //3

//Example 2. Dynamic configuration.
function multiplyBy(multiplier) {
    return function (value) {
        return value * multiplier
    }
}

const double = multiplyBy(2);
const triple = multiplyBy(3);

double(5); //10
triple(5); //15


//Example 3. advanced level - private status.

function createUser(name) {
    let score = 0;

    return {
        getName: () => name,
        getScore: () => score,
        increment: () => score++
    }
}

//Score is not accesable from outside, this is real encapsulation.
const user = createUser("Ana");
user.increment();
user.increment()

user.getScore() //2


//Example 4, Closures + Arrays (very commun)
function createButtons() {
    const handlers = [];
    
    for (let i = 0; i < 3; i++){
        handlers.push(() => console.log(i));
    }
    return handlers
}

const buttons = createButtons();
buttons[0]() // 0
buttons[1]() // 1
buttons[2]() // 2


//Example 5, Closures + Async
function delayedLog(value) {
    setTimeout(() => {
        console.log(value)
    }, 1000);
}

delayedLog('hola');



//function that says hello to an user
function createGreeter(name) {
    return function hello() {
        console.log(`hola ${name}` );
    }
    
}

const greetAna = createGreeter("Ana")
greetAna() // "Hola Ana"

//smaller versión 
const createGreeter2 = name => () => {
    return `hola ${name}`;
}


//Small function that increments, decrements and get the current value of the amout entered.

function elevator(value) {
    let counter = value;
    
    return {
        increment: () => counter++,
        decrement: () => counter--,
        getValue: () => counter
    }

}