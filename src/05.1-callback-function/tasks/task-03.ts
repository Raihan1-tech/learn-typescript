/**
 * An online store has the following products:
 */
const products = [
    { name: "Keyboard", price: 850000 },
    { name: "Mouse", price: 275000 },
    { name: "Monitor", price: 2200000 },
    { name: "Headset", price: 650000 }
];

/**
 * The warehouse system needs to perform different operations on the same product list.
 * 1. Operation for display product
 * Keyboard - Rp850000
 * Mouse - Rp275000
 * Monitor - Rp2200000
 * Headset - Rp650000
 * 
 * 2. Display expensive products - Only products with a price above Rp1,000,000 should be displayed.
 * 3. Display products that cost more than Rp500,000 and show a 10% discount price.
 * 
 * Instead of creating a separate loop for every operation, the developer creates a reusable processing function.
 */
type products={name:string,price:number}

function processproduct(arr:products[],
    callback:(arr:products)=>void
):void{
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i])
    }
}
function display(product: products): void {
    console.log(product.name, "-", "Rp" + product.price);
}
function expensive(product: products): void {
    if (product.price > 1000000) {
        console.log("products :", product.name);
    }
}
function discount(product: products): void {
    if (product.price > 500000) {
        console.log(
            "products :", product.name,
            "discount price :", "Rp" + product.price * 0.9
        );
    }
}
processproduct(products, display);
processproduct(products, expensive);
processproduct(products, discount);