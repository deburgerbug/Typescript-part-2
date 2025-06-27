// function  greet(name: string): string {
//     return "hello" + name
// } 
// greet("v")


//Interface Example 
/*
interface User {
    name: string,
    age: number,
    address:{
        country: string,
        city: string,
        pincode: number
    }
}
let user: User = {
    name: "Yuki",
    age: 21,
    address:{
        country: "Japan",
        city: "Tokyo",
        pincode: 123456
    }
}
function isLegal(user: User): boolean {
    if(user.age >= 18){
        return true;
    }
    else{
        return false;
    }
}
const ans = isLegal(user)
if(ans){
    console.log("user is Legal")
}
else{
    console.log("user is Illegal")

}
*/

/*
interface People {
    name: string,
    age: number
    greet(): string
}
const person: People ={
    name:"Toji",
    age: 36,
    greet(){
        return "Hii"
    }

}
let ans = console.log(person.greet())
*/


// Implementing Classes
/*
interface People {
    naam: string,
    age: number,
}
class Mangaer implements People {
    naam: string
    age: number
    id: number

    constructor(naam: string, age: number, id: number) {
        this.naam = naam
        this.age = age
        this.id = id
    }
}
let user = new Mangaer("Yama", 25, 101)
let user2 = new Mangaer("nao", 28, 110)
console.log(user, user2)
*/


// Much simpler Implementation 
/*
interface Person{
    name:string,
    age:number
}
class Manager implements Person {
    constructor( public name: string, public age: number){}
}
const m = new Manager ("Molta", 20)
console.log(m);
*/

// Some more Examples
/*
interface PaymentMethod {
    connect(): void,
    pay(amount: number): void
}
class Paypal implements PaymentMethod {
    connect() {
        console.log(" Paypal Connected")
    }
    pay(amount: 5000) {
        console.log(`Paid $${amount} using Paypal`)
    }

}


class Stripe implements PaymentMethod {
    connect(){
        console.log("Stripe Connected")
    }
    pay(amount:10000){
        console.log(`Paid $${amount} using Stripe`)
    }
}*/


//Abstract Class

// Example 1

abstract class User {
    name: string
    constructor(name: string){
        this.name = name
    }
    abstract greet(): string
    hello(){
        console.log("Hello")
    }
}

class Boss extends User {
    constructor(name: string){
        super(name)
        this.name
    }
    greet(){
        return "Hii" + this.name
    }
}

/*
abstract class Product {
    bookName: string; 
    price: number;

    constructor(bookName:string, price:number) {
        this.bookName = bookName;
        this.price=price;
    }
    abstract getDiscountPrice(): number;

    showInfo(){
        console.log(`${this.bookName} cost at Rupees ${this.price}`)
    }
}
class Book extends Product {
    getDiscountPrice(): number {
        return this.price * 0.9 // 10% Off
    }
}
const novel = new Book("Lord of the Mysteries", 20)
novel.showInfo()
console.log(` After Discount ,Book price is  ${novel.getDiscountPrice()}`)
*/