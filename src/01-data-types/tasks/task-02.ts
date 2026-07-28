/**
 * An e-commerce platform is preparing a flash sale event. Before the discount calculation begins, 
 * the system temporarily stores several pieces of information as individual variables.
 * A customer wants to purchase a Mechanical Keyboard RGB with the product code KBR-001. 
 * The original price of the product is 850000 rupiahs, 
 * and the flash sale offers a 25% discount. The customer plans to buy 2 keyboards. 
 * Because the customer is a premium member, they are eligible for free shipping. 
 * The current stock available in the warehouse is 18 units.
 * 
 * Task:
 * 1. Identify every value that should become a variable.
 * 2. Choose an appropriate variable name for each value.
 * 3. Determine the correct data type.
 * 4. Declare all variables in TypeScript.
 * 5. Display the product data using console.log.
 */

type product ={
    productname : string,
    productcode : string,
    oriprice : number,
    stock : number
}

const product={
    productname :`Mechanical Keyboard RGB`,
    productcode : `KBR-001`,
    oriprice : 850000,
    stock : 18
}
const discount : number = 25/100
const customerstatus : boolean = true
const freeshipping : boolean =true
const totalorder : number = 2

console.log("productname : "+ product.productname)
console.log("productcode : "+ product.productcode)
console.log("oriprice : "+ product.oriprice)
console.log("productstock : "+ product.stock)
console.log(`discount : ${discount}`)
console.log(`premium member : ${customerstatus}`)
console.log(`free shipping : ${freeshipping}`)
console.log(`total order : ${totalorder}`)


