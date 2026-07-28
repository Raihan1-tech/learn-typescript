/**
 * An online marketplace sells thousands of products every day. 
 * To display complete product information, the system stores a product code, product name, selling price, 
 * stock quantity, product weight, average customer rating, and whether the product is currently discounted.
 * 
 * Task:
 * 1. Define a proper type for the product information.
 * 2. Implement a type that you defined on 3 products data.
 * 
 * display the product data using console.log.
 */

type marketplace={
    productcode:string,
    productname:string,
    price:number,
    stock:number,
    weight:string,
    rating:number,
    discounted:boolean
}

const product1 : marketplace ={
    productcode:`000001121221`,
    productname:`apple`,
    price:12000,
    stock:13,
    weight:`130g`,
    rating:4.7,
    discounted:true
}

const product2 : marketplace ={
    productcode:`000001129876`,
    productname:`grape`,
    price:8000,
    stock:57,
    weight:`98g`,
    rating:4.3,
    discounted:true
}

const product3 : marketplace ={
    productcode:`000001128745`,
    productname:`orange`,
    price:22000,
    stock:8,
    weight:`40g`,
    rating:4.9,
    discounted:false
}

console.log("product1")
console.log("code : "+product1.productcode)
console.log("name : "+product1.productname)
console.log("price : "+product1.price)
console.log("stock : "+product1.stock)
console.log("weight : "+product1.weight)
console.log("rating : "+product1.rating)
console.log("discounted? : "+product1.discounted)

console.log("product2")
console.log("code : "+product2.productcode)
console.log("name : "+product2.productname)
console.log("price : "+product2.price)
console.log("stock : "+product2.stock)
console.log("weight : "+product2.weight)
console.log("rating : "+product2.rating)
console.log("discounted? : "+product2.discounted)

console.log("product3")
console.log("code : "+product3.productcode)
console.log("name : "+product3.productname)
console.log("price : "+product3.price)
console.log("stock : "+product3.stock)
console.log("weight : "+product3.weight)
console.log("rating : "+product3.rating)
console.log("discounted? : "+product3.discounted)