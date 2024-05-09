"use strict";
/*
Typescript types
static have two types : built-in and user-defined
1) Built-in
Number
String
Boolean
Void
Null
any
*/
let str1 = "Data is very important";
let num = 23.3;
let boole = true;
let v1 = undefined;
let val = null;
val = 23;
val = "deepak";
/*
2) User Defined Data Types
Array
Tuple
Enum
Class
Functions
Interface
*/
// Array
let l1 = [1, 22, 12, 23];
let l2 = ["a", "b", "c", "d", "e", "f", "g", "h", "i"];
let l3 = [1, 2, 44];
// Tuple : it includes two different set values of different data types
let a = [22, "deepak", 44, "abc", "bcd"];
// function getinfo(stu : student,par:student):student{
//     return {
//         email : stu.email,
//         phone : stu.phone,
//         // email2 : par.email becuase student does not have email2 variable
//     }
// }
let obj1 = {
    email: "student@gmail.com",
    phone: 3423422
};
let obj2 = {
    email: "parent@gmail.com",
    phone: 3242343
};
console.log("everything is good");
// console.log(getinfo(obj1,obj2))
// Class
class student {
    constructor(r, n) {
        this.roll = r;
        this.name = n;
    }
    showdetails() {
        console.log(this.roll + " " + this.name);
    }
}
let obj3 = new student(23, "deep");
obj3.showdetails();
//Enum
var color;
(function (color) {
    color[color["red"] = 0] = "red";
    color[color["green"] = 1] = "green";
    color[color["blue"] = 2] = "blue";
})(color || (color = {}));
console.log(color.blue);
