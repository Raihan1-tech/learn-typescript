/**
 * A smart home monitors electricity usage every day.
 * Today's information:
 * | Information               | Value |
 * | ------------------------- | ----- |
 * | Previous Meter            | 25640 |
 * | Current Meter             | 25892 |
 * | Electricity Price per kWh | 1650  |
 * | Solar Panel Installed     | Yes   |
 * | Energy Saving Mode        | No    |
 * 
 * Business Rules
 * - Electricity usage is calculated from the meter difference.
 * - Houses with solar panels receive a 20% discount.
 * - Houses receive an additional 5% discount if Energy Saving Mode is enabled.
 * - A house qualifies for the Green Energy Program only if:
 *      - Solar panel is installed
 *      - Energy consumption is below 300 kWh
 *      - Energy Saving Mode is enabled
 * 
 * The system must calculate:
 * - Total energy consumption
 * - Electricity bill
 * - Final bill
 * - Green Energy Program eligibility
 */

const premeter:number=25640;
const nowmeter:number=25892;
const electricityprice:number=1650;
const solarpanel:boolean=true;
const savingmode:boolean=false;
const discount1: number = savingmode ? 0.05 : 0;
const discount2: number = savingmode ? 0.2 : 0;
const energyconsume:number=nowmeter-premeter;
const greenenergy:boolean=solarpanel&&energyconsume<300&&savingmode;
const discount:number=energyconsume*electricityprice*discount1;
const discounts:number=energyconsume*electricityprice*discount2;

console.log("energy consumption ",energyconsume)
console.log("price ",energyconsume*electricityprice)
console.log("final price ",energyconsume*electricityprice-discount-discounts)
console.log("green energy?  ",greenenergy)