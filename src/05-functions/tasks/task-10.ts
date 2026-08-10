/**
 * An online learning platform stores course completion information.
 * The academy director wants a dashboard containing:
 * Completion Statistics:
 * - Total enrollments
 * - Completed enrollments
 * - Incomplete enrollments
 * - Completion percentage
 * 
 * Academic Statistics:
 * - Highest score
 * - Lowest score
 * - Average score
 * - Students with passing scores (≥ 75)
 * 
 * Course Statistics:
 * - Number of students enrolled in each course
 * - Average score for each course
 * 
 * Learning Statistics:
 * - Total learning hours
 * - Average learning duration
 * 
 * Student Tasks:
 * You must design your own program architecture.
 * Requirements
 * Your solution must contain:
 * - At least 10 non-void functions
 * - At least 2 void functions
 * - No duplicated calculations
 * - Each function must have one responsibility
 * - Every printed value must come from another function
 * - Use meaningful function names and parameters
 * Reuse existing functions whenever possible
 */
type enrollments={student:string,course:string,completed:boolean,score:number,duration:number}
const enrollments = [
    {
        student: "Alya",
        course: "TypeScript",
        completed: true,
        score: 91,
        duration: 38
    },
    {
        student: "Budi",
        course: "TypeScript",
        completed: false,
        score: 45,
        duration: 12
    },
    {
        student: "Citra",
        course: "Database",
        completed: true,
        score: 87,
        duration: 42
    },
    {
        student: "Dimas",
        course: "Backend",
        completed: true,
        score: 96,
        duration: 40
    },
    {
        student: "Eka",
        course: "Database",
        completed: false,
        score: 60,
        duration: 18
    },
    {
        student: "Fajar",
        course: "Backend",
        completed: true,
        score: 82,
        duration: 35
    },
    {
        student: "Gita",
        course: "TypeScript",
        completed: true,
        score: 88,
        duration: 36
    },
    {
        student: "Hana",
        course: "Backend",
        completed: false,
        score: 70,
        duration: 20
    }
];
function completed(arr:enrollments[]){
    let completed:number=0
    for(let i=0;i<arr.length;i++){
        completed++
    }return completed
}
function Incomplete(arr:enrollments[]){
    let Incomplete:number=0
    for(let i=0;i<arr.length;i++){
        Incomplete++
    }return Incomplete
}
function percentage(arr:enrollments[]){
    let percentage:number=0
    for(let i=0;i<arr.length;i++){
        if (arr[i].completed){
            percentage++
        }}return percentage/arr.length
}
function Highestscore(arr:enrollments[]){
    let Highestscore:number=arr[0].score
    for(let i=0;i<arr.length;i++){
         if (arr[i].score > Highestscore) {
            Highestscore = arr[i].score
        }}return Highestscore
}
function Lowestscore(arr:enrollments[]){
    let Lowestscore:number=arr[0].score
    for(let i=0;i<arr.length;i++){
        if(arr[i].score<Lowestscore){
            Lowestscore=arr[i].score
        }}return Lowestscore
}
function Averagescore(arr:enrollments[]){
    let Average:number=0
    for(let i=0;i<arr.length;i++){
        Average += arr[i].score
    }return Average/arr.length
}
function studentspassed(arr:enrollments[]){
    let studentspassed:number=0
    for(let i=0;i<arr.length;i++){
        if (arr[i].score>=75){
            studentspassed++
            console.log("passed students : ",arr[i].student);
        }}return studentspassed
}
function averagecourse(arr:enrollments[]){
    let avgts:number=0
    let avgdb:number=0
    let avgbe:number=0
    let TypeScript:number=0
    let Database:number=0
    let Backend:number=0
    for(let i=0;i<arr.length;i++){
        if(arr[i].course==="TypeScript"){
            avgts+=arr[i].score
            TypeScript++
        }else if(arr[i].course==="Database"){
            avgdb+=arr[i].score
            Database++
        }else{
            avgbe+=arr[i].score
            Backend++
    }}return{TypeScript,Database,Backend,Ts:avgts/TypeScript,db:avgdb/Database,be:avgbe/Backend}
}const course=averagecourse(enrollments)

function totallearning(arr:enrollments[]){
    let totallearning:number=0
    for(let i=0;i<arr.length;i++){
        totallearning+=arr[i].duration
    }return totallearning
}
function avgduration(arr:enrollments[]){
    let avgduration:number=0
    for(let i=0;i<arr.length;i++){
        avgduration+=arr[i].duration
    }return avgduration/arr.length
}
function completion(){
    console.log("total enrollments : ",enrollments.length);
    console.log("completed enrollments : ",completed(enrollments));
    console.log("incomplere enrollments : ",Incomplete(enrollments));
    console.log("completion percentage : ",percentage(enrollments));
}completion()

function academic(){
    console.log("highest score : ",Highestscore(enrollments));
    console.log("lowest score : ",Lowestscore(enrollments));
    console.log("average score : ",Averagescore(enrollments));
    console.log("students with passing score : ",studentspassed(enrollments));
}academic()

function Statistics(){
    console.log("typescript stundents : ",course.TypeScript);
    console.log("database  stundents : ",course.Database);
    console.log("backend stundents : ",course.Backend);
    console.log("average score for typescript : ",course.Ts);
    console.log("average score for database : ",course.db);
    console.log("average score for backend : ",course.be);
}Statistics()

function learning(){
    console.log("total learning hours : ",totallearning(enrollments));
    console.log("average learning durations : ",avgduration(enrollments));
}learning()