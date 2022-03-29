console.log("Lets Start");
var a = 10;
console.log(a);
function firstProgramme(a, b) {
    return a + b;
}
console.log(firstProgramme(10, 13));
/* ----------------------   object START         ------------------- */
var personalData;
personalData = {
    id: 100,
    name: "Balaji"
};
console.log(personalData.name);
var personData;
personData = {
    Name: "balaji",
    Age: 12,
    Mobile: 8870375448
};
var Name2v = "Hello " + personData.Name + "is " + personData.Age + " old ";
console.log(Name2v);
var myCountry;
myCountry = {
    Name: "India",
    Captial: "Delhi",
    Pm: "Modi"
};
console.log(myCountry.Captial + " is a Captial Of " + myCountry.Name + " Our Prime Minister Name " + myCountry.Pm);
/* ----------------------   object END        ------------------- */
/* --------------  String Tools START  ---------------- */
var nameData1 = "Hello Balaji";
var nameData2 = " Angular  Developer";
console.log(nameData1.charAt(1)); // charAt()
console.log(nameData1.indexOf("B")); // indexOf()
console.log(nameData1.concat(nameData2)); // concat()
console.log(nameData1.concat(" Node js Developer ", " & ", nameData2));
console.log(nameData1.replace("Balaji", "Alex")); // replace()
console.log(nameData1.replace("Balaji", nameData2));
var fruits = "Apple,Banana,Orange,Graphs";
console.log(fruits.split(",")); // split()
console.log(fruits.split(",", 2));
console.log(nameData1.toLowerCase()); //toLowerCase()
console.log(nameData1.toUpperCase()); // toUpperCase()
/* --------------  String Tools END  ---------------- */
/* ---------------- Array START  ----------------- */
var seriesName2; // Square Bracket Array 
seriesName2 = ["Rio", "Denver", "Professor"];
console.log("Square Bracket Array " + seriesName2[0]);
var seriesName3; // Generic Type Array 
seriesName3 = ["Professor", "Rio", "Denver"];
console.log("Generic Type Array " + seriesName3[1]);
var seriesName;
seriesName = ["Rio", "Denver", "Professor"];
console.log("Good Morning " + seriesName[2]);
// Access Array Loop
var friends = ["Alex", "Balaji", "Chitra", "Durai"];
for (var list in friends) {
    console.log("Hello " + friends[list] + " Access Array Loop");
}
for (var i = 0; i < friends.length; i++) {
    console.log("Hi " + friends[i]);
}
var friends2 = ["Rio", "Raqul", "Denver", "Narobi"];
var friends3 = ["Rio", "Raqul", "Denver", "Narobi"];
var friends4 = ["Rio", "Raqul", "Denver", "Narobi"];
var friends5 = ["Rio", "Raqul", "Denver", "Narobi"];
var friends6 = ["Rio", "Raqul", "Denver", "Narobi"];
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
var text = "Hello Balaji What Are hell Doing ?";
console.log(text.indexOf('Balaji')); // indexOf()
/* ---------------- Array  END  ----------------- */
/* ---------------- Tuple  START  ----------------- */
var employee = [1, "Alex"];
console.log(employee);
console.log(employee[0]);
//------ Tuple Array 
var employee2;
employee2 = [[1, "Balaji", 201], [2, "Alex", 202]];
console.log(employee2);
console.log(employee2[0]);
console.log(employee2[0][1]);
/* ---------------- Tuple  END  ----------------- */
/* ---------------  Enum START -------------- */
var days;
(function (days) {
    days[days["mon"] = 1] = "mon";
    days[days["tues"] = 2] = "tues";
    days[days["wed"] = 3] = "wed";
    days[days["thus"] = 4] = "thus";
    days[days["fri"] = 5] = "fri";
    days["sat"] = "Happy Saturday";
    days["sun"] = "Happy Sunday";
})(days || (days = {}));
function listDays(parameter) {
    if (parameter == days.mon) {
        return days.sun;
    }
    else {
        return days.sat;
    }
}
console.log(listDays(2));
console.log(days);
/* ---------------  Enum End -------------- */
/* ----------  Union START ----------- */
var dataDetails;
console.log(dataDetails = 10);
console.log(dataDetails = "Hello Union");
function displayData(parameter) {
    if (typeof (parameter) === "string") {
        console.log("Generated String");
    }
    else if (typeof (parameter) === "number") {
        console.log("Generated Number");
    }
    else {
        console.log("Nothing Generated ");
    }
}
displayData("hello");
displayData(12);
/* ----------  Union END ----------- */
/* ----------  Void START ----------- */
function sayHi() {
    console.log("Hello Void");
}
console.log(sayHi());
function sayHi2() {
    return;
}
console.log(sayHi2());
/* ----------  Void END ----------- */ 
