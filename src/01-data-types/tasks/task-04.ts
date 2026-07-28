/**
 * 
 * The school library is building a digital catalog to help students search for books. 
 * Every book must store its ISBN number, title, author's name, total number of pages, 
 * book category, and whether the book is currently available for borrowing.
 * 
 * Task:
 * 1. Define a proper type for the book information.
 * 2. Implement a type that you defined on 3 books data.
 * 
 * display the book data using console.log.
 */
type book = {
    isbnnumber:string,
    title:string,
    author:string,
    page:string
    category:string
    avaible:boolean
}

const book1 : book={
    isbnnumber:`01233223`,
    title :`how to being nice`,
    author:`tetra`,
    page :`132`,
    category:`romance`,
    avaible:true
}

const book2 :book={
    isbnnumber:`01233224`,
    title :`successfull era`,
    author:`ezar`,
    page :`172`,
    category:`motivation`,
    avaible:true
}

const book3 :book={
    isbnnumber:`01233244`,
    title :`am i nice?`,
    author:`siswantoro`,
    page :`43`,
    category:`novel`,
    avaible:false
}

console.log ("book1")
console.log ("isbn number : "+ book1.isbnnumber)
console.log ("title : "+ book1.title)
console.log ("author : "+ book1.author)
console.log ("page : "+ book1.page)
console.log ("category : "+ book1.category)
console.log ("avaible : "+ book1.avaible)

console.log ("book2")
console.log ("isbn number : "+ book2.isbnnumber)
console.log ("title : "+ book2.title)
console.log ("author : "+ book2.author)
console.log ("page : "+ book2.page)
console.log ("category : "+ book2.category)
console.log ("avaible : "+ book2.avaible)

console.log ("book3")
console.log ("isbn number : "+ book3.isbnnumber)
console.log ("title : "+ book3.title)
console.log ("author : "+ book3.author)
console.log ("page : "+ book3.page)
console.log ("category : "+ book3.category)
console.log ("avaible : "+ book3.avaible)