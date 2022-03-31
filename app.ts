console.log("Lets Start");

var a: number = 10;

console.log(a);

function firstProgramme(a: number, b: number) {
  return a + b;
}

console.log(firstProgramme(10, 13));
/* ----------------------   object START         ------------------- */
var personalData: {
  id: number;
  name: string;
};

personalData = {
  id: 100,
  name: "Balaji",
};

console.log(personalData.name);

var personData: {
  Name: string;
  Age: number;
  Mobile: number;
};

personData = {
  Name: "balaji",
  Age: 12,
  Mobile: 8870375448,
};

var Name2v = "Hello " + personData.Name + "is " + personData.Age + " old ";

console.log(Name2v);

var myCountry: {
  Name: string;
  Captial: string;
  Pm: string;
};

myCountry = {
  Name: "India",
  Captial: "Delhi",
  Pm: "Modi",
};

console.log(
  myCountry.Captial +
    " is a Captial Of " +
    myCountry.Name +
    " Our Prime Minister Name " +
    myCountry.Pm
);

/* ----------------------   object END        ------------------- */

/* --------------  String Tools START  ---------------- */

var nameData1: string = "Hello Balaji";

var nameData2: string = " Angular  Developer";

console.log(nameData1.charAt(1)); // charAt()

console.log(nameData1.indexOf("B")); // indexOf()

console.log(nameData1.concat(nameData2)); // concat()

console.log(nameData1.concat(" Node js Developer ", " & ", nameData2));

console.log(nameData1.replace("Balaji", "Alex")); // replace()

console.log(nameData1.replace("Balaji", nameData2));

var fruits: string = "Apple,Banana,Orange,Graphs";

console.log(fruits.split(",")); // split()

console.log(fruits.split(",", 2));

console.log(nameData1.toLowerCase()); //toLowerCase()

console.log(nameData1.toUpperCase()); // toUpperCase()
/* --------------  String Tools END  ---------------- */

/* ---------------- Array START  ----------------- */

let seriesName2: string[]; // Square Bracket Array
seriesName2 = ["Rio", "Denver", "Professor"];

console.log("Square Bracket Array " + seriesName2[0]);

let seriesName3: Array<string>; // Generic Type Array
seriesName3 = ["Professor", "Rio", "Denver"];

console.log("Generic Type Array " + seriesName3[1]);

let seriesName: Array<string>;
seriesName = ["Rio", "Denver", "Professor"];

console.log("Good Morning " + seriesName[2]);

// Access Array Loop

let friends: string[] = ["Alex", "Balaji", "Chitra", "Durai"];

for (var list in friends) {
  console.log("Hello " + friends[list] + " Access Array Loop");
}

for (var i = 0; i < friends.length; i++) {
  console.log("Hi " + friends[i]);
}

let friends2: string[] = ["Rio", "Raqul", "Denver", "Narobi"];
let friends3: string[] = ["Rio", "Raqul", "Denver", "Narobi"];
let friends4: string[] = ["Rio", "Raqul", "Denver", "Narobi"];
let friends5: string[] = ["Rio", "Raqul", "Denver", "Narobi"];
let friends6: string[] = ["Rio", "Raqul", "Denver", "Narobi"];

friends2.push("Last Element Add"); // push()

console.log(friends2);

friends3.unshift("Frist Element Add"); // unshift ()

console.log(friends3);

friends4.pop(); // pop()

console.log(friends4);

friends5.shift(); // shift()

console.log(friends5);

friends6 = friends6.concat(["Professor", "Berlin"]);

console.log(friends6);

var text: string = "Hello Balaji What Are hell Doing ?";

console.log(text.indexOf("Balaji")); // indexOf()

/* ---------------- Array  END  ----------------- */

/* ---------------- Tuple  START  ----------------- */

var employee: [number, string] = [1, "Alex"];

console.log(employee);

console.log(employee[0]);

//------ Tuple Array

var employee2: [number, string, number][];
employee2 = [
  [1, "Balaji", 201],
  [2, "Alex", 202],
];

console.log(employee2);

console.log(employee2[0]);
console.log(employee2[0][1]);

/* ---------------- Tuple  END  ----------------- */

/* ---------------  Enum START -------------- */

enum days {
  mon = 1,
  tues,
  wed,
  thus,
  fri,
  sat = "Happy Saturday",
  sun = "Happy Sunday",
}

function listDays(parameter: any): days {
  if (parameter == days.mon) {
    return days.sun;
  } else {
    return days.sat;
  }
}

console.log(listDays(2));

console.log(days);
/* ---------------  Enum End -------------- */

/* ----------  Union START ----------- */

let dataDetails: string | number;

console.log((dataDetails = 10));

console.log((dataDetails = "Hello Union"));

function displayData(parameter: string | number) {
  if (typeof parameter === "string") {
    console.log("Generated String");
  } else if (typeof parameter === "number") {
    console.log("Generated Number");
  } else {
    console.log("Nothing Generated ");
  }
}
displayData("hello");
displayData(12);

/* ----------  Union END ----------- */

/* ----------  Void START ----------- */

function sayHi(): void {
  console.log("Hello Void");
}
console.log(sayHi());

function sayHi2(): void {
  return;
}
console.log(sayHi2());

/* ----------  Void END ----------- */

/* ----- Never START --------- */

const generateError = (message: string, code: number): never => {
  throw {
    messageCode: message,
    errorCode: code,
  };
};

// generateError(" An Error Occured !", 201);

// const result = generateError(" An Error Occured !", 201);
// console.log(result);                                   //return any value

/*
const getError = (message:string):never =>{
throw new Error(message);

}
const fail = ()=>{

  return getError("Something Went Wrong !!!!")
}

console.log(fail())

*/

/*

const infiniteLoop = ():never=>{

 while(true){
console.log("Am a Infiniteloop")
 }
 }
 infiniteLoop();

 
*/

/* ------------ Never End ------ */

/*-------- function Overloading Start --- */

function overloading(a: string, b: string): string;

function overloading(a: number, b: number): number;

function overloading(a: any, b: any): any {
  return a + b;
}

console.log(overloading("hello ", "balaji"));

console.log(overloading(1, 2));

/*-------- function Overloading End --- */

/* --------- Rest Parameter START --------- */

function personalDetails(says:string,...names:string[]){


  return "Good Morning "+" "+says+" How are You ? "+names.join(" ! ");
}

console.log(personalDetails("Hello","Balaji","Alex","Denver"))
/* --------- Rest Parameter END --------- */


/* ----------- Intersection START -------- */

interface personalDetails {

  firstName:string;
  lastName:string;
}

interface parentDetails {

  fatherName:string;
  motherNmae:string;

}

interface communicationDetails {

  email:string;
  mobile:number;
}

type overallData = personalDetails & parentDetails & communicationDetails;

let dataV2 :overallData = {
  firstName:'Balaji',
  lastName:'M',
  fatherName:'x',
  motherNmae:'y',
  email:"abc@gmail.com",
  mobile:123456789
}

console.log("Hello "+dataV2.firstName+" "+dataV2.lastName+","+" My Email Id is "+dataV2.email+" My Mobile Number "+dataV2.mobile);



//method 2


const div1 = document.getElementById("intersection") as HTMLDivElement;


interface bg{

  backgroundColor:string;
}

interface color{
  color:string;
}

interface fontSize {

  font:string;
}
interface display {

  display:string;
}


type over = bg & color & fontSize & display;

const result = (overData:over)=>{
  div1.style.color = overData.color;
  div1.style.backgroundColor = overData.backgroundColor;
  div1.style.fontSize = overData.font;
  div1.style.display = overData.display;
}

result({
   backgroundColor:'blue',
  color:'red',
  font:"20px",
  display:"inline"
})

/* ----------- Intersection End -------- */


/* ------------- Interface START ---------- */


interface employeeDetails {

  employeeName:string;
  employeeArea:string;
  employeeAge:(age:number)=>number;
employeeCollegeName(clg:string):string;

}

const employeeData:employeeDetails = {
  employeeName:"Balaji",
  employeeArea:"India",
  employeeAge :(age:number):number =>{


    return   age - 2000
  },
   employeeCollegeName:function(clg:string):string{

    return "Myself "+employeeData.employeeName+ "My college name is "+clg+" I live "+employeeData.employeeArea;
   }
}

console.log(employeeData.employeeAge(2022));

console.log(employeeData.employeeCollegeName("xyz"));


// Optional Property


interface data {


  a:string;
  b:string;
  c?:number;    // remove question mark show result
}

let dataResult :data={

  a:"balaji",b:"BE"
}

let dataResult2 :data={
  a:"alex",b:"BE",c:18

}


console.log(dataResult);
console.log(dataResult2);


/* ------------- Interface END ---------- */





