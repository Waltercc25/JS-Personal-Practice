//simple example of reduce
[1, 2, 3].reduce((acc, n) => acc + n, 0); //6

const resultado = [30,30,50].reduce((acc, n) => acc + n, 0)// 140
console.log(resultado);


//Function that gets the total of tasks in the array.
function getTotalTasks() {
    return tasks.reduce(acc => acc + 1 , 0);
}

//Function that help us to get the amount of completed tasks.
function getCompletedTasksCount() {
    return tasks.reduce((acc, task) =>{
        return acc + (task.completed ? 1 : 0);
    }, 0);
}


//Function to create a list of total of task, completed and pending tasks
function getTasksStats() {
    return tasks.reduce((acc, task)=>{
        acc.total += 1;

        if(task.completed){
            acc.completed += 1;
        } else{
            acc.pending += 1;
        }

        return acc;
    }, {
        total: 0,
        completed: 0,
        pending: 0
    });
}



