/**
 * A warehouse stores the stock quantity of each product in following array.
 * Warehouse Rules:
 * - Out of Stock → quantity = 0
 * - Low Stock → quantity < 10
 * - Safe Stock → quantity ≥ 10
 * 
 * Students have to Calculate:
 * - Number of Out of Stock products
 * - Number of Low Stock products
 * - Number of Safe Stock products
 * - Total inventory
 * - Average stock quantity
 */

const stocks = [
    25, 0, 18, 6, 42,
    9, 0, 55, 13, 2,
    30, 8, 41, 0, 16
];

let outOfStock: number = 0
let lowofStock: number = 0
let safeofStock: number = 0
const totalInventory: number = stocks.length
let totalStock: number = 0

for(let i = 0; i <= 14; i++){
    if(stocks[i] >= 10){
        safeofStock++
    } else if(stocks[i] < 10){
        lowofStock++
    } else {
        outOfStock++
    }
    totalStock += stocks[i]
}

console.log("Number out of stocks: ",outOfStock)
console.log("Number low of stocks: ",lowofStock)
console.log("Number safe of stocks: ",safeofStock)
console.log("Number of Inventory: ",totalStock)
console.log("Average stock quantity: ",totalStock / totalInventory)