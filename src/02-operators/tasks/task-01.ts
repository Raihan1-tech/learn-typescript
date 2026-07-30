/**
 * The school cafeteria sells lunch packages to students. Today, Raka purchased 3 fried rice meals, each costing Rp18,000, and 2 bottles of mineral water, each costing Rp5,000. Because he is a member of the student council, he received a Rp10,000 discount.
 * The cashier wants to calculate:
 *  - Total price of fried rice
 *  - Total price of drinks
 *  - Total price before discount
 *  - Final amount to be paid
 *
 * Task:
 * 1. Use operators to calculate:
 *  - Total food price
 *  - Total drink price
 *  - Grand total
 *  - Final payment
 * 2. Display the calculation results.
 */
const friedrice :number=18000;
const water :number=5000;
const council:boolean=true;
const discount:number=council?10000:0;
console.log("price of fried rice",friedrice*3)
console.log("price of water ",water*2)
console.log("grand total ",(friedrice*3)+(water*2))
console.log("final payment",(friedrice*3)+(water*2)-discount)