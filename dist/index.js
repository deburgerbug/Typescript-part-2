"use strict";
// function  greet(name: string): string {
//     return "hello" + name
// } 
// greet("v")
function isLegal(user) {
    return user.filter((user) => user.age > 18);
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
    }]);
console.log(filterArray);
