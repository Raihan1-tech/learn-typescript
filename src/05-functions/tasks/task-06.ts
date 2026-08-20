/**
 * An online store wants to generate a daily sales dashboard. All transaction amounts are stored in an array.
 * Instead of writing one long program, the development team decides to split the calculations into reusable functions.
 * The dashboard should display:
 * - Total sales
 * - Highest transaction
 * - Lowest transaction
 * - Average transaction
 * - Number of transactions above Rp500,000
 * 
 * Student Tasks
 * Create the following functions:
 */

const sales = [
  125000,
  780000,
  250000,
  99000,
  540000,
  670000,
  180000,
  450000,
  310000,
  820000
];

function calculateTotalSales(sales: number[]) {
  let total:number=0
  for(let i=0;i<sales.length;i++){
    total+=sales[i]
  }return total
}

function findHighestTransaction(sales: number[]) {
  let highest:number=sales[0]
  for(let i=0;i<sales.length;i++){
    if(sales[i]>highest){
      highest=sales[i]
    }}return highest
}

function findLowestTransaction(sales: number[]) {
  let lowest:number=sales[0]
  for(let i=0;i<sales.length;i++){
    if(sales[i]<lowest){
      lowest=sales[i]
    }}return lowest
}

function calculateAverageSale(sales: number[]) {
  let avg:number=0
  for(let i=0;i<sales.length;i++){
    avg+=sales[i]
  }return avg/sales.length
}

function countLargeTransactions(sales: number[], minimumAmount: number) {
  let large:number=0
  for(let i=0;i<sales.length;i++){
    if(sales[i]>minimumAmount){
      large++
    }}return large
}
console.log("total sales : ",calculateTotalSales(sales));
console.log("highest transaction : ",findHighestTransaction(sales));
console.log("lowest transaction : ",findLowestTransaction(sales));
console.log("average transaction : ",calculateAverageSale(sales));
console.log("total large transaction : ",countLargeTransactions(sales,500000));
