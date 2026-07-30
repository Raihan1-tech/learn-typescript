/**
 * An online marketplace wants to calculate the customer's final payment and reward points after checkout.
 * The customer purchases the following items:
 * | Product             |  Price | Quantity |
 * | ------------------- | -----: | -------: |
 * | Mechanical Keyboard | 850000 |        1 |
 * | Wireless Mouse      | 275000 |        2 |
 * | Monitor Stand       | 420000 |        1 |
 * 
 * Customer Information:
 * | Information       | Value                            |
 * | ----------------- | -------------------------------- |
 * | Voucher Value     | 100000                           |
 * | Premium Member    | Yes                              |
 * | Reward Point Rate | 1 point for every Rp50,000 spent |
 * 
 * Business Rules:
 * - Premium members receive 10% discount.
 * - Voucher is deducted after the membership discount.
 * - Reward points are calculated from the final payment before tax.
 * - VAT is 11%.
 * - Free shipping is available if:
 * - Premium member OR
 * - Final payment before tax exceeds Rp1,500,000.
 * 
 * The checkout system must calculate:
 * - Product subtotal
 * - Membership discount
 * - Voucher deduction
 * - Payment before tax
 * - VAT
 * - Final payment
 * - Reward points
 * - Free shipping eligibility

 */

const Keyboard:number=850000;
const Mouse:number=275000;
const monitor:number=420000;
const Voucher:number=100000;
const member:boolean=true;
const membership:number=0.1;
const tax:number=0.11;
const total:number=Keyboard+(Mouse*2)+monitor;
const final:number=total+(total*tax)-Voucher-(total*membership)
const point:number=+ ((final-(total*tax))/50000);

console.log("subtotal ",total)
console.log("membership discount ",total*membership)
console.log("voucher deduction ",total-Voucher)
console.log("before tax ",final-(total*tax))
console.log("tax ",total*tax)
console.log("final payment ",final)
console.log("reward points ",point)
console.log("free shipping? ",member||final-(total*tax)>1500000)