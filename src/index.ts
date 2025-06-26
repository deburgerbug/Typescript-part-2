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
interface Person{
    name:string,
    age:number
}

class Manager implements Person {
    constructor( public name: string, public age: number){}
}
const m = new Manager ("Molta", 20)
console.log(m);