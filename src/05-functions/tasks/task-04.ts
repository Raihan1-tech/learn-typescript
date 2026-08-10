import { array } from "node:stream/iter";

/**
 * The homeroom teacher stores attendance information as follows.
 * The school wants to display an attendance report.
 * The report should include:
 * - Total Present
 * - Total Absent
 * - Names of absent students
 * The report is displayed directly on the console.
 * Student Tasks:
 * - Create a function named printAttendanceReport.
 * - The function receives the attendance array.
 * - Use looping and conditions.
 * - Display the report inside the function.
 * - The function should not return any value.
 */
type student={name:string,present:boolean}

const attendances = [
    { name: "Alya", present: true },
    { name: "Budi", present: false },
    { name: "Citra", present: true },
    { name: "Dimas", present: true },
    { name: "Eka", present: false }
];

function printAttendanceReport(arr: student[]){
    let totalpresent:number=0
    let totalabsent:number=0
    for(let i=0;i<arr.length;i++){
    if (arr[i].present){
        totalpresent++
    }else{
        console.log("student absent : ",arr[i].name );
        totalabsent++
    }}
    console.log("total present : ",totalpresent);
    console.log("total absent : ",totalabsent);

}

printAttendanceReport(attendances)