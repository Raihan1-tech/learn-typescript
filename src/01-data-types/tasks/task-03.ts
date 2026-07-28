/**
 * SMK Telkom Malang is developing a new Student Information System. 
 * Before students can use the system, the administrator must record each student's basic information. 
 * Every student has a unique student ID, a full name, an age, and a status indicating whether they are currently an active student.
 * 
 * Task:
 * 1. Define a proper type for the student information.
 * 2. Implement a type that you defined on 3 students data.
 * 
 * display the student data using console.log.
 */

type studentscore = {
 studentid : string
 fullname : string
 age : number
 activestudent : boolean
}

const student1 :studentscore ={
    studentid:`001`,
    fullname:`tetra ezar siswantoro`,
    age:16,
    activestudent:true
}

const student2 :studentscore={
    studentid:`002`,
    fullname:`budi supardi`,
    age:17,
    activestudent:true
}

const student3:studentscore ={
    studentid:`003`,
    fullname:`dono suparno`,
    age:16,
    activestudent:false
}

console.log(`student1`)
console.log("student id :"+ student1.studentid)
console.log("student name : "+ student1.fullname)
console.log("student age : "+ student1.age)
console.log("student active : "+ student1.activestudent)

console.log("student2")
console.log("student id :"+ student2.studentid)
console.log("student name : "+ student2.fullname)
console.log("student age : "+ student2.age)
console.log("student active : "+ student2.activestudent)

console.log("student3")
console.log("student id :"+ student3.studentid)
console.log("student name : "+ student3.fullname)
console.log("student age : "+ student3.age)
console.log("student active : "+ student3.activestudent)