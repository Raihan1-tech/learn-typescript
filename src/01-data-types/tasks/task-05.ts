/**
 * A software company records daily employee attendance. 
 * Every attendance record stores the employee's ID, employee name, date, check-in time, check-out time, 
 * total working hours, and whether the employee was present on that day.
 * 
 * Task:
 * 1. Define a proper type for the attendance information.
 * 2. Implement a type that you defined on 3 attendance data.
 * 
 * display the attendance data using console.log.
 */

import { checkPrime } from "crypto";

type employee ={
    id:string,
    name:string,
    date:string,
    checkIn:string,
    checkOut:string,
    workingHours:string,
    present:boolean
}

const employee1:employee={
    id:`01234`,
    name:`budi`,
    date:`11-04-2026`,
    checkIn:`06.00`,
    checkOut:`16.03`,
    workingHours:`10 hours`,
    present:true
}

const employee2:employee={
    id:`01287`,
    name:`aji`,
    date:`23-11-2026`,
    checkIn:`05.47`,
    checkOut:`16.14`,
    workingHours:`10 hours`,
    present:true
}

const employee3:employee={
    id:`02341`,
    name:`lutpi`,
    date:`24-02-2026`,
    checkIn:``,
    checkOut:``,
    workingHours:``,
    present:false
}

console.log("employee1")
console.log("id : "+employee1.id)
console.log("name : "+employee1.name)
console.log("date : "+employee1.date)
console.log("check in : "+employee1.checkIn)
console.log("check out : "+employee1.checkOut)
console.log("working hours : "+employee1.workingHours)
console.log("present : "+employee1.present)

console.log("employee2")
console.log("id : "+employee2.id)
console.log("name : "+employee2.name)
console.log("date : "+employee2.date)
console.log("check in : "+employee2.checkIn)
console.log("check out : "+employee2.checkOut)
console.log("working hours : "+employee2.workingHours)
console.log("present : "+employee2.present)

console.log("employee3")
console.log("id : "+employee3.id)
console.log("name : "+employee3.name)
console.log("date : "+employee3.date)
console.log("check in : "+employee3.checkIn)
console.log("check out : "+employee3.checkOut)
console.log("working hours : "+employee3.workingHours)
console.log("present : "+employee3.present)