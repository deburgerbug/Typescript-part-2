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
/*
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
*/

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

//Types
/*
type GoodPerson = {
    name: string
    gifts: string
}

type BadPerson = {
    name:string
    ip: string
}

type User = GoodPerson | BadPerson
const user: User = {
    name: "Vinit",
    gifts:"Expensive Pen",
    ip: "123200121"
}
*/


//create two types called User and Admin 
//create a function that takes either a user or an admin as an input and returns a string saying Welcome, [name]
/*
interface User {
    msg: string
    age: number
}
interface Admin {
    greet(): string 
}

type Welcome = User | Admin 

const newUser: Welcome = {
    msg: "hello User",
    age: 21,
    greet(){
        return "opies"
    }
}
*/

// Arrays in TS
// If you want to access array in Typescript, it's simple as  adding [] annotation next to the type

// Q. Given an array of positive Integers as input, return the maximum value in the array
/*
function getMax(arr:number[]){
    let maxValue = -100;
    for(let i=0; i<arr.length; i++){
        if(arr[i]>maxValue){
            maxValue = arr[i]
        }
    }
    return maxValue
}
getMax([1,2,3,5,0])
*/

//Given list of users filter out the users that are legal(greater than age of 18)
interface User{
    firstName: string,
    lastName: string,
    age: number
}

function isLegal(user: User[]){
    return user.filter((user) => user.age>18)
    // let ans= []
    // for(let i=0; i<user.length; i++){
    //     if(user[i].age>18){
    //         ans.push(user[i]);
    //     }
    // }
    // return ans;
}
const filterArray = isLegal([{
    firstName: "Dora",
    lastName: "Dsl",
    age: 23
    },
    {
    firstName: "Vic",
    lastName: "Sl",
    age: 21    
    
}])
console.log(filterArray)