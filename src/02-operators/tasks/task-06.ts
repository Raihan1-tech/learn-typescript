/**
 * An internet café charges customers Rp8,000 per hour. 
 * Customers are billed for every started hour. If the total playing time exceeds 5 hours, they receive a 15% discount.
 * Today, a customer used a computer for:
 * 7 hours and 35 minutes
 * 
 * 
 * You need to determine:
 * - Total playing time in minutes
 * - Remaining minutes after full hours
 * - Total billed hours
 * - Total payment before discount
 * - Discount amount
 * - Final payment
 */

const charges:number=8000;
const playingtimehours:number=7;
const playingtimeminute:number=35;
const discount:number=playingtimehours>5?0.15:1;

console.log("total play in minutes :",playingtimehours*60+playingtimeminute)
console.log("remain minutes :",60-playingtimeminute)
console.log("total billed hours ",playingtimehours*charges)
console.log("total discount ",(playingtimehours*charges)*discount)
console.log("final payment ",playingtimehours*charges-((playingtimehours*charges)*discount))