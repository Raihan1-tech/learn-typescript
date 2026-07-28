/**
 * SMK Telkom Malang calculates each student's final score using several assessment components. 
 * Before calculating the final grade, the system stores every assessment score as a separate variable. 
 * The homeroom teacher entered the following information for one student. 
 * The student named Nadia Putri has a student ID of ST2026045. She earned 88.5 on assignments, 
 * 84 on the midterm exam, and 91.5 on the final exam. Because she submitted every assignment before the deadline, 
 * she received an attendance score of 100. The school also records that Nadia participates in extracurricular activities, 
 * so this information should also be stored.
 * 
 * Task:
 * 
 * 1. dentify all values that should be stored as variables.
 * 2. Determine the most appropriate data type for each variable.
 * 3. Create the variable declarations using TypeScript.
 * 4. Display the student data using console.log.
 */

const name : string = `Nadia Putri`
const studentId : string = `ST2026045`
type studentscore = {
    assignment : number
    midterm : number
    final : number
    attendance : number
}
const nadiascore : studentscore = {
    assignment : 90,
    midterm : 100,
    final : 90.5,
    attendance : 80
}
const extracurricularactivity : string = `scout`

console.log(`name : ${name}`)
console.log(`id : ${studentId}`)
console.log("extracurricular activity : "+ extracurricularactivity)
console.log("assignment score :"+ nadiascore.assignment)
console.log("midterm score : "+nadiascore.midterm)
console.log("final score : "+ nadiascore.final)
console.log("attendance score : "+ nadiascore.attendance)