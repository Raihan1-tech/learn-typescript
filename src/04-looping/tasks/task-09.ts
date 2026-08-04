/**
 * A university stores the final grades of students enrolled in the Backend Development course at array below.
 * Grade Categories
 * - A : 90–100
 * - B : 80–89
 * - C : 70–79
 * - D : below 70
 * 
 * Student Task Calculate:
 * - Number of A students
 * - Number of B students
 * - Number of C students
 * - Number of D students
 * - Highest score
 * - Lowest score
 * - Average score
 */

const students = [
    { name: "Alya", score: 88 },
    { name: "Budi", score: 71 },
    { name: "Citra", score: 95 },
    { name: "Dimas", score: 63 },
    { name: "Eka", score: 84 },
    { name: "Fajar", score: 79 },
    { name: "Gita", score: 92 },
    { name: "Hana", score: 67 }
];

let highestScore = -Infinity
let lowestScore = Infinity
let totalScore = 0
let A :number=0
let B :number=0
let C :number=0
let D :number=0

for(let i=0;i<students.length;i++){
    const score = students[i].score
    if(students[i].score>=90){
        A++
    }else if(students[i].score>=89){
        B++
    }else if(students[i].score>=79){
        C++
    }else{
        D++
    }
    if (score > highestScore) {
        highestScore = score
    }
    if (score < lowestScore) lowestScore = score

    totalScore += score
}

const averageScore = totalScore / students.length

console.log("Number of A students:", A)
console.log("Number of B students:", B)
console.log("Number of C students:", C)
console.log("Number of D students:", D)
console.log("Highest score:", highestScore)
console.log("Lowest score:", lowestScore)
console.log("Average score:", averageScore)