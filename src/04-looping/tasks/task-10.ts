/**
 * An LMS stores assignment submission information on array below.
 * Business Rules
 * - Students who do not submit automatically receive a score of 0.
 * - A passing score is 75.
 * - Submitted assignments with a score below 75 require revision.
 * 
 * Student Tasks using a loop for:
 * - Count students who submitted their assignment.
 * - Count students who did not submit.
 * - Count students who passed.
 * - Count students who must revise their assignment.
 * - Display the names of students who did not submit.
 * - Display the names of students who must revise.
 * - Calculate the class average score.
 */

const submissions = [
    { student: "Alya", submitted: true, score: 92 },
    { student: "Budi", submitted: false, score: 0 },
    { student: "Citra", submitted: true, score: 78 },
    { student: "Dimas", submitted: true, score: 65 },
    { student: "Eka", submitted: false, score: 0 },
    { student: "Fajar", submitted: true, score: 84 },
    { student: "Gita", submitted: true, score: 90 },
    { student: "Hana", submitted: true, score: 73 }
];

let countSubmitted = 0
let countNotSubmitted = 0
let countPassed = 0
let countRevision = 0
let totalScore = 0

const missingStudents = []
const revisionStudents = []

for (let i = 0; i < submissions.length; i++) {
    const record = submissions[i]
    
    totalScore += record.score

    if (record.submitted === true) {
        countSubmitted++
        
        if (record.score >= 75) {
            countPassed++
        } else {
            countRevision++
            revisionStudents.push(record.student)
        }
    } else {
        countNotSubmitted++
        missingStudents.push(record.student)
    }
}

const averageScore = totalScore / submissions.length

console.log("Number of students who submitted:", countSubmitted)
console.log("Number of students who did not submit:", countNotSubmitted)
console.log("Number of students who passed:", countPassed)
console.log("Number of students who must revise:", countRevision)
console.log("Students who did not submit:", missingStudents.join(", "))
console.log("Students who must revise:", revisionStudents.join(", "))
console.log("Class average score:", averageScore)