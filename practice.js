"use strict";
console.log("Typescript start");
// npm install typescript --save-dev
// npm install typescript -g
let str = "Nannu";
let num1 = 15;
let bool1 = true;
bool1 = 33;
let n1 = null;
let u1 = undefined;
// build in
let arr = [44, 10, 12, 9, 10];
let arr2 = ["abc", "def", "ghi"];
let arr3 = Array(90, 39, 10, 10);
let tup = ["a1", 33];
let cal = {
    subtact(f, s) {
        return f - s;
    },
};
class Student {
    constructor(n, a) {
        this.name = n;
        this.age = a;
    }
    details() {
        return this.name + this.age;
    }
}
let obj = new Student("abc", 33);
console.log(obj.details());
var Color;
(function (Color) {
    Color[Color["red"] = 0] = "red";
    Color[Color["green"] = 1] = "green";
    Color[Color["yellow"] = 2] = "yellow";
})(Color || (Color = {}));
let c;
console.log(Color.green);
function add(a, b) {
    return a + b;
}
// Generic
function show(arg) {
    return arg;
}
let s1 = show("main");
let s2 = show(23);
// null va undefined
// type assertion
let empcode = 11;
let emp1 = empcode;
console.log(typeof (emp1));
// union
let val1 = false;
val1 = 34;
// decision making
if (val1 > 0) {
    console.log("Val1 is greater than 0");
}
else {
    console.log("Val1 is smaller than 0");
}
let day = new Date().getDay();
let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
switch (day) {
    case 0:
        console.log(days[day]);
        break;
    case 1:
        console.log(days[day]);
        break;
    case 2:
        console.log(days[day]);
        break;
    case 3:
        console.log(days[day]);
        break;
    case 4:
        console.log(days[day]);
        break;
    case 5:
        console.log(days[day]);
        break;
    case 6:
        console.log(days[day]);
        break;
}
// do while loop , while loop
// for loop
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 1] = "Up";
    Direction["Down"] = "Down";
    Direction["Left"] = "Left";
    Direction[Direction["Right"] = 9] = "Right";
})(Direction || (Direction = {}));
console.log(Direction);
console.log(Direction.Up);
console.log(Direction.Down);
// forEach
let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
arr1.forEach((val) => {
    console.log(val * 2);
});
// Map function
let map = new Map([
    ["age", "23"],
    ["gender", "male"]
]);
map.set("name", "nandini");
console.log(map.get("name"));
// methods like has,delete,size,clear
// Set function
let myset = new Set();
myset.add("apple");
myset.add("banana");
myset.add("apple");
myset.add("banana");
myset.add(23);
console.log(myset);
// methods like has,delete,size,clear
// Access Modifiers
class Student1 {
    constructor(name, a) {
        this.studCode = name;
        this.age = a;
    }
    details() {
        console.log(this.studCode + "" + this.age);
    }
}
class ano_student extends Student1 {
    constructor(n, a, g) {
        super(n, a);
        this.gender = g;
    }
    details() {
        console.log(this.studCode + " " + this.gender);
    }
}
let obj4 = new Student1("himan", 23);
let obj5 = new ano_student("red", 11, "male");
console.log(obj5);
// Accessor
class Department {
    constructor(id, name, age) {
        this.EId = id;
        this.EName = name;
        this.Eage = age;
    }
    get Id() {
        return this.EId;
    }
    set Id(i) {
        this.EId = i;
    }
}
let depart = new Department(12, "Software Manager", 11);
depart.Id = 23;
console.log(depart);
// Function
function div(a, b) {
    return a / b;
}
console.log(div(100, 90));
// Arrow Function
let arrfun = (a, b) => {
    return a * b;
};
console.log(arrfun(20, 2));
function shape(a, b) {
    return a + b;
}
// function parameter
// Optional parameter
function showDetail(id, name) {
    console.log("ID", id, "Name :", name);
}
showDetail(23, "typescript");
showDetail(44);
// Default parameters
function showDetail1(id, name = "Default Value") {
    console.log("ID", id, "Name :", name);
}
showDetail1(12);
// Rest Parameters
function showDetail2(id, ...name) {
    console.log("ID", id, "Name :", name);
}
showDetail2(33, "a", "b", "c", "d", "e", "f");
// Classes
class Color1 {
    constructor(n, p, q) {
        this.name = n;
        this.price = p;
        this.quantity = q;
    }
    get nam() {
        return this.name;
    }
    set nam(n) {
        this.name = n;
    }
}
let obj6 = new Color1("red", 1220, 1);
obj6.nam = "green";
console.log(obj6.nam);
let os = (type) => {
    console.log(type.name + type.Bname);
};
let os1 = { name: "Ubuntu", Bname: "Linux" };
os(os1);
// namespace
///<reference path="plane.ts"/>
