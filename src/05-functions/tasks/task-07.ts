/**
 * A university stores enrollment information at following array
 * The university needs a report containing:
 * - Total students
 * - Active students
 * - Inactive students
 * - Software Engineering students
 * - Networking students
 * - Multimedia students
 * 
 * Complete following functions!
 */
type student = { name: string, major: string,active:boolean}
const students = [
  {
    name: "Alya",
    major: "Software Engineering",
    active: true
  },
  {
    name: "Budi",
    major: "Networking",
    active: false
  },
  {
    name: "Citra",
    major: "Software Engineering",
    active: true
  },
  {
    name: "Dimas",
    major: "Multimedia",
    active: true
  },
  {
    name: "Eka",
    major: "Networking",
    active: false
  }
];



let totalstudent: number = students.length


function countActiveStudents(arr: student[]): number {
let totalpresent = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].active) {
      totalpresent++
    }
  }
  return totalpresent
}

function countInactiveStudents(Inactive: student[]) {
  let totalabsent: number = 0;
  for (let i = 0; i < Inactive.length; i++) {
    if (Inactive[i].active == false) {
      totalabsent++
    }
  }
  return totalabsent
}

function countStudentsByMajor(major: student[]) {
  let Networking: number = 0
  let Software: number = 0
  let Multimedia: number = 0
  for (let i = 0; i < major.length; i++) {
    if (major[i].major == "Networking") {
      Networking++
    } else if (major[i].major == "Software Engineering") {
      Software++
    } else {
      Multimedia++
    }
  }
  return{
    Networking,Software,Multimedia
  }
}
const major=countStudentsByMajor(students)

function printEnrollmentReport() {
  console.log("total student ",totalstudent);
  console.log("active student ", countActiveStudents(students));
  console.log("inactive student ", countInactiveStudents(students));
  console.log("software engineering student ", major.Software);
  console.log("networking student ",major.Networking);
  console.log("multimedia student ", major.Multimedia);
}
printEnrollmentReport()