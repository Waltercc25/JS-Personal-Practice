//Function to create a new task

let tasks = []; //we declare the empty array out of the function so the variable can take the new objects
let nextId = 1; //we start the new object from the number 1.

function addTask(title) {
    if(!title || title.trim() === ''){
        return null; //we return null if the title is empty or has blank spaces at the beginning or at the end.
    }

    const newTask = { //creates the new task with the id, title and the status of the task as false.
        id: nextId,
        title: title.trim(),
        completed: false
    };

    tasks.push(newTask); // we take the new object and the insert it into the empty array that is declare at the top.
    nextId++; //it accumulate the Ids of the new objects entered in the array and increases the number.

    return newTask; //returns the new task created
}


//Function to mark a task as completed.
function completeTask(id) {
    if(typeof id !== 'number'){
        return null;
    }

    const task = tasks.find(task => task.id === id);

    if(!task){
        return null;
    }

    task.completed = true;

    return task;
}

//Function to delete a task
function deleteTask(id) {
    if(typeof id !== 'number'){
        return false;
    }

    const index = tasks.findIndex(task => task.id === id)

    if(index === -1){
        return false;
    }

    tasks.splice(index, 1)

    return true;
}

addTask('Estudiar'); //usage example
addTask('trabajar'); //usage example

deleteTask(1);
console.log(tasks);

//Function to filter all task´s status.
function filterTasks(status) {
   if(status === 'All'){
    return [...tasks];
   }

   if(status === 'completed'){
    return tasks.filter(task => task.completed === true);
   }

   if(status === 'pending'){
    return tasks.filter(task => task.completed === false);
   }

   return [];
}

//Function to confirm if at least 1 task is pending.
function hasPendingTasks() {
    return tasks.some(task => task.completed === false);
}


//Function to confirm if at least 1 task is completed.
function hasCompletedTasks() {
    return tasks.some(task => task.completed === true);
}

//Function to confirm if all the tasks in the array are coompleted
function areAllTasksCompleted() {
    return tasks.every(task => task.completed)
}

//Function to get the index of the first pending task in the array.
function getFirstPendingTaskIndex() {
    return tasks.findIndex(task => task.completed === false);
}