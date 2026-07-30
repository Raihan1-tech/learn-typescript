/**
 * A hotel calculates a guest's payment based on the following information.
 * | Information          | Value  |
 * | -------------------- | ------ |
 * | Room Price per Night | 650000 |
 * | Nights Stayed        | 4      |
 * | Service Charge       | 120000 |
 * | Tax                  | 11%    |
 * | VIP Member           | Yes    |
 * 
 * Business Rules
 * - VIP guests receive a 12% room discount.
 * - Tax is calculated after the discount.
 * - Service charge is not discounted.
 * - The hotel also offers free breakfast if the guest stays at least 3 nights or is a VIP member.
 * 
 * The system must calculate:
 * - Room subtotal
 * - Discount
 * - Tax
 * - Final payment
 * - Whether the guest is eligible for free breakfast
 */

const price:number=650000;
const nights:number=4;
const Service:number=120000;
const Tax:number=0.11;
const vip:boolean=true;
const member:number=0.12;
const breakfast:boolean=nights>3&&vip==true?true:false;

console.log("subtotal ",price*nights)
console.log("discount ",(price*nights)*member)
console.log("tax ",((price * nights) - (price*nights)*member+Service) * Tax)
console.log("final payment ",price*nights-(price*nights)*member+((price * nights) - (price*nights)*member+Service) * Tax)
console.log("free breakfast? ",breakfast)