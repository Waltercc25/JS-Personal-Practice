//Example 1

const numbers = [1, 2, 3];

const newNumbers =  [...numbers, 4]; //we dont break the array we copy the one created and add the number 4 into it and we dont touch the original

console.log(numbers); //[1, 2, 3]
console.log(newNumbers); //[1, 2, 3, 4]

/* Important:
 if we use Push, Splice, pop, shift you are almost certainly mutating*/ 

 //another example.
 const nums = [10, 20, 30];

 const newAddition = [...nums, 40];

 console.log(nums);
 console.log(newAddition);


 //Example where we want to mark an user as active without mutating the original array.

 //Incorrect way.
 function activeUser(users, id) {
    const user = users.find(u => u.id === id);
    user.active = true; // mutating 'Wrong'

    return users;
 }

 //Correct way.
 function activeUser2(users, id) {
    return users.map(user => 
        user.id === id
        ? {...user, active: true}
        : user
    )
 }


 //Clear example using spread.
 const internalUsers = [
    {nombre: 'Walter', active: false},
    {nombre: 'Jack', active: false}
 ];

function Statuschange(internalUsers, nombre) {
    return internalUsers.map(user => user.nombre === nombre
        ? {...user, active: true}
        : user
    );

}

console.log(Statuschange(internalUsers,'Walter'))



const tasks = [
    { id: 1, title: "JS", done: false },
    { id: 2, title: "Git", done: true },
    { id: 3, title: "Reduce", done: false }
  ];

  
  function deletingUser(tasks, id) {
    return tasks.filter(task => task.id !== id)
  }

  console.log(deletingUser(tasks, 2));