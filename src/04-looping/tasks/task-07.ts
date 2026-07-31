/**
 * The homeroom teacher receives attendance data for one class at following array.
 * 
 * Using a loop:
 * - Count present students.
 * - Count absent students.
 * - Display the names of absent students.
 * - Calculate the attendance percentage.
 */

const attendances = [
  { name: "Alya", present: true },
  { name: "Budi", present: true },
  { name: "Citra", present: false },
  { name: "Dimas", present: true },
  { name: "Eka", present: false },
  { name: "Fajar", present: true },
  { name: "Gita", present: true },
  { name: "Hana", present: false }
];

for(let i=0;i<=attendances.length;i++){
  if(attendances[i].present==true){
    for(let a=0;;a++){
      console.log("presents student ",a);
    }
  }else{
    for(let s=0;;s++){
      console.log("absent student ",s);
      console.log("name of absent student ",attendances.name);
    }
  }
}