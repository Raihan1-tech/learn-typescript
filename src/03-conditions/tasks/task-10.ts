/**
 * A university allows students to register for advanced programming courses only if they satisfy all academic requirements.

Registration Process

Step 1 — Academic Status
The student must:
 - Be actively enrolled.
 - Have completed tuition payment.

If either requirement is not satisfied:
Registration Rejected

Otherwise, continue.

Step 2 — Academic Requirements
The student must:
- Pass Programming Fundamentals.
- Pass Database Systems.
- Have a GPA of at least 3.20.
If these requirements are satisfied, continue.
Otherwise:
Academic Requirements Not Met

Step 3 — Seat Availability
If seats are still available:
- Registration Successful
Otherwise:
- Added to Waiting List

Student Information:
| Information                     | Value       |
| ------------------------------- | ----------- |
| Student Name                    | Nadia Putri |
| Active Student                  | Yes         |
| Tuition Paid                    | Yes         |
| Passed Programming Fundamentals | Yes         |
| Passed Database Systems         | Yes         |
| GPA                             | 3.45        |
| Seats Available                 | No          |

Student Tasks
- Declare all variables.
- Implement the registration workflow.
- Use nested conditional statements.
- Display the final registration result.
 */

const name:string="nadia putri";
const Active:boolean=true;
const paid:boolean=true;
const Fundamentals:boolean=true;
const Database:boolean=true;
const GPA:number=3.45;
const seats:boolean=false;

console.log("mr/mrs ",name);

if(Active&&paid){
    if(Fundamentals&&Database&&GPA>=3.20){
        if(seats){
            console.log("registration sccessful");
        }else{
            console.log("added to waiting list");
        }
    }else{
        console.log("academic requirements not met");
    }
}else{
    console.log("registration rejected");
}