//Grades Analyzer

const grades = [
    {student: 'Ana', score: 90},
    {student: 'Luis', score: 75},
    {student: 'Ana', score: 85},
    {student: 'Luis', score: 95},
    {student: 'Maria', score: 100}
];


//Function where we get the total score and the student average using reduce.
function getGradesSummary(grades) {
    return grades.reduce((acc, item) => {
        const student = item.student;
        const totales = item.score;

        //if the student doesnt exist we analyze it.
        if(!acc[student]){ 
            acc[student] = { //if its undefined the if returns true and creates the object of the student.
                total: 0,
                count: 0,
                average: 0
            };
        }

        //accumulate
        acc[student].total += totales; //accumulate the amount the amount of grades per student
        acc[student].count += 1; //it counts how many times the student appears in the array example: Ana is 2 times in the array so count: 2

        //calculating averege
        acc[student].average = acc[student].total / acc[student].count;

        return acc;
    }, {});
}

console.log(getGradesSummary(grades));


//Function that helps us to get the amount of scores and the totals of grades 
function getTotals(grades) {
    return grades.reduce((acc, item) => {
        const totals = item.score;
        const student = item.student;

        if(acc[student] === undefined){
            acc[student] = {
                count: 0,
                totals: 0
            }
        }

        acc[student].count += 1;
        acc[student].totals += totals;

        return acc;

    }, {})
}

console.log(getTotals(grades));
