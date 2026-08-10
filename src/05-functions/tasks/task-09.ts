import { Agent } from "http";

/**
 * A hospital stores patient information in the following array.
 * The hospital director requests a daily report containing:
 * - Total patients
 * - Total admitted patients
 * - Total discharged patients
 * - Number of patients in each department
 * - Highest hospital bill
 * - Lowest hospital bill
 * - Average hospital bill
 * - Total hospital revenue
 * - Names of admitted patients
 * 
 * Student Tasks
 * Design a program using multiple reusable functions.
 * 
 * Requirements
 * - Create at least 8 non-void functions.
 * - Create 1 void function to print the report.
 * - Each function should perform only one responsibility.
 * - printHospitalReport() must only display results.
 * - No duplicated calculations.
 */
type patients={id:string,name:string,age:number,department:string,admitted:boolean,bill:number}
const patients = [
    {
        id: "PT001",
        name: "Alya",
        age: 17,
        department: "Pediatrics",
        admitted: true,
        bill: 850000
    },
    {
        id: "PT002",
        name: "Budi",
        age: 45,
        department: "Cardiology",
        admitted: false,
        bill: 1200000
    },
    {
        id: "PT003",
        name: "Citra",
        age: 68,
        department: "Cardiology",
        admitted: true,
        bill: 2500000
    },
    {
        id: "PT004",
        name: "Dimas",
        age: 33,
        department: "Orthopedics",
        admitted: true,
        bill: 640000
    },
    {
        id: "PT005",
        name: "Eka",
        age: 14,
        department: "Pediatrics",
        admitted: false,
        bill: 350000
    }
];
function total(arr:patients[]){
    let total:number=0
    for(let i=0;i<arr.length;i++){
        total++
    }return total
}
function admitted(arr:patients[]){
    let admitted:number=0
    for(let i=0;i<arr.length;i++){
        if(arr[i].admitted){
            admitted++
        }}return admitted
    }

function discharged(arr:patients[]){
    let discharged:number=0
    for(let i=0;i<arr.length;i++){
        if(arr[i].admitted==false){
            discharged++
        }}return discharged
    }
function number(arr:patients[]){
    let pediatrics:number=0
    let Cardiology:number=0
    let Orthopedics:number=0
    for(let i=0;i<arr.length;i++){
        if(arr[i].department==="pediatrics"){
            pediatrics++
        }else if(arr[i].department==="cardiology"){
            Cardiology++
        }else{
            Orthopedics++
        }}return {pediatrics,Cardiology,Orthopedics}
}
const department=number(patients)
function highestbill(arr:patients[]){
    let highestbill:number=arr[0].bill
    for(let i=0;i<arr.length;i++){
         if (arr[i].bill > highestbill) {
            highestbill = arr[i].bill
        }
    }return highestbill
}
function lowestbill(arr:patients[]){
    let lowestbill:number=arr[0].bill
    for(let i=0;i<arr.length;i++){
        if(arr[i].bill<lowestbill){
            lowestbill=arr[i].bill
        }}return lowestbill
}
function averagebill(arr:patients[]){
    let averagebill:number=0
    for(let i=0;i<arr.length;i++){
        averagebill +=arr[i].bill
    }return averagebill/arr.length
}
function totalrevenue(arr:patients[]){
    let totalrevenue:number=0
    for(let i=0;i<arr.length;i++){
        totalrevenue+=arr[i].bill
    }return totalrevenue
}
function Namesadmitted (arr:patients[]){
    for(let i=0;i<arr.length;i++){
        if (arr[i].admitted){
            console.log("admitted students : ",arr[i].name);
        }}}

function print(){
    console.log("total patients : ",total(patients));
    console.log("total admitted patients : ",admitted(patients));
    console.log("total discharged patients : ",discharged(patients));
   console.log("number of patients in cardiology : ",department.Cardiology);
    console.log("number of patients in pediatrics : ",department.pediatrics);
    console.log("number of patients in orthopedics : ",department.Orthopedics);
    console.log("highest hospital bill : ",highestbill(patients));
    console.log("lowest hospital bill : ",lowestbill(patients));
    console.log("total hospital revenue : ",totalrevenue(patients));
    Namesadmitted(patients)
}
print()