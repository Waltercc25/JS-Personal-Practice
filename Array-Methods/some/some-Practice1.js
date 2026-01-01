//Example 1. using array method some(), it returns a boolean when it complies the condition.

const users = [
    { name: 'Ana', active: false},
    { name: 'Luis', active: false},
    { name: 'Maria', active: true}
];

const hasActiveUser = users.some(user => user.active);

console.log(hasActiveUser); //there is at least one user with the status 'active'.


//Example 2. numbers bigger than 100.
const numbers = [20, 45, 60, 120, 10];

const hasLargeNumber = numbers.some(number => number > 100);

console.log(hasLargeNumber); //True, there is at least one number bigger than 100.


//Example 3. Products with no stock

const products = [
    {name: 'Laptop', stock: 10},
    {name: 'Mouse', stock: 0},
    {name: 'Keyboard', stock: 5}
];

const hasOutoOfStock = products.some(product => product.stock === 0);

console.log(hasOutoOfStock);// true, because there is at least one product with low stock of 0.

//Funtion using every to confirm if there is a failing student.

const grades = [70, 85, 90, 40, 100];

function hasFailed(grades) {
    return grades.some(score => score < 60);
}

