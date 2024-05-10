console.log("Typescript start");
// npm install typescript --save-dev
// npm install typescript -g
let str : string = "Nannu";
let num1 : number = 15;
let bool1 : boolean|number = true;
bool1 = 33;
let n1 : null = null;
let u1 : undefined = undefined;
// build in
let arr : number[] = [44,10,12,9,10];
let arr2 : string[] = ["abc","def","ghi"];
let arr3 = Array<number>(90,39,10,10);
let tup : [string,number] = ["a1",33];
interface Calcu{
    subtact(f:number,s:number):number;
}
let cal : Calcu = {
    subtact(f, s) {
        return f - s;
    },
} 
class Student{
    name : string;
    age : number;
    constructor(n: string,a:number){
        this.name = n;
        this.age = a;
    }
    details(){
        return this.name + this.age;
    }
}
let obj = new Student("abc",33);
console.log(obj.details());
enum Color {
    "red","green","yellow"
}
let c : Color;
console.log(Color.green);
function add(a:number,b:number):number{
    return a + b;
}
// Generic
function show<T>(arg:T):T{
    return arg;
}
let s1 = show<string>("main");
let s2 = show<number>(23);
// null va undefined
// type assertion
let empcode : any = 11;
let emp1 = <number>empcode;
console.log(typeof(emp1));
// union
let val1 : number|boolean = false;
val1 = 34;
// decision making
if(val1 > 0){
    console.log("Val1 is greater than 0");
}else{
    console.log("Val1 is smaller than 0");
}
let day = new Date().getDay();
let days : string[] = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
switch(day){
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
enum Direction{
    Up = 1,Down= "Down",Left = "Left",Right = 9
}
console.log(Direction);
console.log(Direction.Up);
console.log(Direction.Down);
// forEach
let arr1 : number[] = [1,2,3,4,5,6,7,8,9,10];
arr1.forEach((val)=>{
    console.log(val*2);
})
// Map function
let map = new Map([
    ["age","23"],
    ["gender","male"]
]);
map.set("name","nandini");
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
class Student1{
    public studCode:string;
    private age : number;
    constructor(name:string,a:number){
        this.studCode = name;
        this.age = a;
    }
    details(){
        console.log(this.studCode+""+this.age);
    }
}
class ano_student extends Student1{
    public gender:string;
    constructor(n:string,a:number,g:string){
        super(n,a);
        this.gender = g;
    }
    details() {
        console.log(this.studCode+ " " + this.gender);
    }
}
let obj4 = new Student1("himan",23);
let obj5 = new ano_student("red",11,"male");
console.log(obj5);
// Accessor
class Department{
    public EId:number;
    public EName : string;
    public Eage : number;
    constructor(id:number, name:string, age:number){
        this.EId = id;
        this.EName = name;
        this.Eage = age;
    }
    get Id(){
        return this.EId;
    }
    set Id(i:number){
        this.EId = i;
    }
}
let depart = new Department(12,"Software Manager",11);
depart.Id = 23;
console.log(depart);
// Function
function div(a:number,b:number):number{
    return a/b;
}
console.log(div(100,90));
// Arrow Function
let arrfun = (a:number,b:number):number =>{
    return a*b;
}
console.log(arrfun(20,2));
// function overloading 
function shape(a:string,b:string):string
function shape(a:number,b:number):number;
function shape(a:any,b:any):any{
    return a+b;
}
// function parameter
// Optional parameter
function showDetail(id:number,name?:string){
    console.log("ID",id,"Name :",name);
}
showDetail(23,"typescript");
showDetail(44);
// Default parameters
function showDetail1(id:number,name:string = "Default Value"){
    console.log("ID",id,"Name :",name);
}
showDetail1(12);
// Rest Parameters
function showDetail2(id:number,...name:string[]){
    console.log("ID",id,"Name :",name);
}
showDetail2(33,"a","b","c","d","e","f");
// Classes
class Color1{
    public name: string;
    public price : number;
    public quantity: number;
    constructor(n:string,p:number,q:number){
        this.name = n;
        this.price = p;
        this.quantity = q;
    }
    get nam():string{
        return this.name;
    }
    set nam(n:string){
        this.name = n;
    }
}
let obj6 = new Color1("red",1220,1);
obj6.nam = "green";
console.log(obj6.nam)
// Interface 
interface OS{
    name : string;
    Bname : string;
}
let os = (type:OS)=>{
    console.log(type.name+type.Bname)
}
let os1 = {name:"Ubuntu",Bname:"Linux"};
os(os1);
// namespace
///<reference path="plane.ts"/>
