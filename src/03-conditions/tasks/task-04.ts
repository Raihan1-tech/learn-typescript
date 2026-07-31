/**
 * A hotel determines room availability using the following rules.
 * First, the system checks whether rooms are still available.
 * If rooms are available:
 * - Premium members receive a free room upgrade.
 * - Regular customers receive the reserved room only.
 * 
 * If no rooms are available:
 * - Premium members are placed on the priority waiting list.
 * - Regular customers are informed that no rooms are available.
 * 
 * Today's reservation:
 * | Information    | Value       |
 * | -------------- | ----------- |
 * | Customer Name  | Nadia Putri |
 * | Premium Member | Yes         |
 * | Room Available | No          |
 * 
 * The system should display the appropriate message.
 * Student Tasks: 
 * 1. Declare all variables.
 * 2. Implement the logic using nested if statements.
 * 3. Display the reservation result.
 */

const Name:string="nadia putri"
const premium:boolean=true;
const room:boolean=false;

if(premium){
    console.log("you receive a free room upgrade");
    
}else{
    console.log("you receive the reserved room only");
    
}
if(room){
    console.log("thanks for the service");
    
}else{
    console.log("room is not avaible but,");
    
    if(premium){
        console.log("you are at priority waiting list");
        
    }else{
        console.log("you can wait");
        
    }
}