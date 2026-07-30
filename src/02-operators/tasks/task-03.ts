/**
 * A company pays employees based on their monthly salary and overtime hours.
 * Employee Information:
 * | Information    | Value   |
 * | -------------- | ------- |
 * | Employee Name  | Dimas   |
 * | Basic Salary   | 5000000 |
 * | Overtime Hours | 12      |
 * | Overtime Rate  | 50000   |
 *
 * 
 * The company has the following policy:
 * Employees who work more than 10 overtime hours receive an additional Rp300,000 performance bonus.
 * Otherwise, no bonus is given.
 * You need to calculatea and display:
 * - Overtime pay
 * - Bonus
 * - Final salary
 */

import { BoundedChannelScope } from "diagnostics_channel";

const salary:number=5000000;
const overtimehours:number=12;
const overtimerate:number=50000;
const overtimepay:number=overtimehours*overtimerate;
const bonus:number=overtimehours>10 ? 300000 : 0;

console.log("overtime pay : ",overtimepay)
console.log("bonus : ",bonus)
console.log("final : ",overtimepay+bonus+salary)