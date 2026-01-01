//Every comes when every object in the array complies the condition and the method returns a boolean.

//Example 1. every person is over 18 Years Old.
const ages = [18, 21, 30, 40];

const allAdults = ages.every(age => age >= 18);

console.log(allAdults); //true

  
//Example 2. all the tasks are completed.

const tasks = [
    { title: 'A', completed: true},
    { title: 'B', completed: true}
];

const allcompleted = tasks.every(task => task.completed);

console.log(allcompleted); // true.

//Example 3. Valid Emails.

const Emails = ['a@test.com', 'b@test.com', 'c@test.com'];

const validEmails = Emails.every(Email => Email.includes('@'));

console.log(validEmails); //true, the emails include '@' 


//Function using every to confirm if every product has stock.
const products = [
    { name: 'Laptop', stock: 5},
    { name: 'Mouse', stock: 3}
];

function allInStock(products) {
    return products.every(item => item.stock > 0);
}


//Function using Filter + every to confirm if all the active users have emails.

const users = [
    { name: "Ana", active: true, email: "ana@test.com" },
    { name: "Luis", active: true, email: "" },
    { name: "Maria", active: false, email: "" }
];

function activeUsersHaveEmail(users) {
   const activeUsers = users.filter (user => user.active);

   return activeUsers.every(user => user.email.includes('@'));
}