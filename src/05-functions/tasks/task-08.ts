/**
 * An LMS stores assignment submission data at following array.
 * Business Rules
 * - Passing score = 75
 * - Students who do not submit receive 0
 * - Submitted assignments below 75 require revision.
 * 
 * The principal requests a report showing:
 * - Total students
 * - Submitted assignments
 * - Missing assignments
 * - Passed students
 * - Students requiring revision
 * - Average score
 * - Highest score
 * - Lowest score
 * 
 * Student Tasks
 * 1. Design your own functions.
 * At minimum, your solution must contain:
 * - 7 non-void functions
 * - 1 void function to display the report.
 * 
 */
type submissions={student:string,submitted:boolean,score:number}
const submissions = [
    {
        student: "Alya",
        submitted: true,
        score: 90
    },
    {
        student: "Budi",
        submitted: false,
        score: 0
    },
    {
        student: "Citra",
        submitted: true,
        score: 84
    },
    {
        student: "Dimas",
        submitted: true,
        score: 72
    },
    {
        student: "Eka",
        submitted: false,
        score: 0
    },
    {
        student: "Fajar",
        submitted: true,
        score: 96
    }
];
function submittedassignment(arr:submissions[]){
    let submitted:number=0
    for(let i=0;i<arr.length;i++){
        if (arr[i].submitted){
            submitted++
        }
    }
    return submitted
}

function Missingassignment(arr:submissions[]){
    let Missing:number=0
    for(let i=0;i<arr.length;i++){
        if(arr[i].submitted==false){
            Missing++
        }
    }
    return Missing
}

function Passedstudent(arr:submissions[]){
    let Passed:number=0
    for(let i=0;i<arr.length;i++){
        if(arr[i].score>=75){
            Passed++
            console.log("passed student : ",arr[i].student);
            
        }
    }
    return Passed
}

function revisionstudent(arr:submissions[]){
    let revision:number=0
    for(let i=0;i<arr.length;i++){
        if(arr[i].score<75){
            revision++
            console.log("revision student : ",arr[i].student);
        }
    }
    return revision
}

function Averagescore(arr:submissions[]){
    let Average:number=0
    for(let i=0;i<arr.length;i++){
       Average += arr[i].score
    }
    return Average/arr.length
}

function Highestscore(arr:submissions[]){
    let Highestscore:number=arr[0].score
    for(let i=0;i<arr.length;i++){
         if (arr[i].score > Highestscore) {
            Highestscore = arr[i].score
        }
    }
    return Highestscore
}

function lowestscore(arr:submissions[]){
    let lowestscore:number=arr[0].score
    for(let i=0; i<arr.length;i++){
        if(arr[i].score<lowestscore){
        lowestscore=arr[i].score
    }}
    return lowestscore
}

function print(){
    console.log("total students : ",submissions.length);
    console.log("submitted assignments : ",submittedassignment(submissions));
    console.log("missing assignments : ",Missingassignment(submissions));
    console.log("passed students : ",Passedstudent(submissions));
    console.log("revision students : ",revisionstudent(submissions));
    console.log("average score : ",Averagescore(submissions));
    console.log("highest score : ",Highestscore(submissions));
    console.log("lowest score : ",lowestscore(submissions));
}
print()