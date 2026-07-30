/**
 * An online store is processing a customer's shopping cart.
 * The customer purchased:
 * 
 * | Product             |  Price | Quantity |
 * | ------------------- | -----: | -------: |
 * | Mechanical Keyboard | 850000 |        1 |
 * | Wireless Mouse      | 275000 |        2 |
 * | Mouse Pad           | 120000 |        1 |
 * 
 * Business Rules:
 * - Customers receive 10% discount if the total purchase exceeds Rp1,000,000.
 * - Only Premium members receive free shipping.
 * - Every purchased product increases the total item counter.
 * 
 * Additional Information: Current customer is Premium member.
 * 
 * Task:
 *  - Calculate subtotal.
 *  - Count the total purchased items using an increment operator.
 *  - Determine whether a discount should be applied.
 *  - Calculate the final payment.

 */

const Keyboard :number=850000;
const Keyboardnumber :number=1;
const mouse :number=275000;
const mousenumber :number=2;
const mousepad :number=120000;
const mousepadnumber :number=1;
const total :number=Keyboard+(mouse*2)+mousepad;
const discount:number=total>1000000?0.1:0;

console.log("subtotal ",total)
console.log("total purchased ",Keyboardnumber+mousenumber+mousepadnumber)
console.log("discount? ",discount)
console.log("final payment ",total*discount)