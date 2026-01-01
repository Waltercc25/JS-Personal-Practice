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