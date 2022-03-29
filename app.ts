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


var myCountry : {

  Name:string;
  Captial:string;
  Pm:string;
}


myCountry = {
  Name:"India",
  Captial:"Delhi",
  Pm:"Modi"

  
}


console.log(myCountry.Captial+" is a Captial Of "+myCountry.Name+" Our Prime Minister Name "+myCountry.Pm);

/* ----------------------   object END        ------------------- */


/* --------------  String Tools START  ---------------- */


var nameData1:string = "Hello Balaji";

var nameData2 :string = " Angular  Developer"


console.log(nameData1.charAt(1));     // charAt()

console.log (nameData1.indexOf("B"));  // indexOf()


console.log(nameData1.concat(nameData2)); // concat()

console.log (nameData1.concat(" Node js Developer "," & ",nameData2 ));


console.log (nameData1.replace("Balaji","Alex"));  // replace()

console.log (nameData1.replace("Balaji",nameData2));

var fruits:string = "Apple,Banana,Orange,Graphs";   

console.log (fruits.split(","));                 // split()

console.log (fruits.split(",",2))

console.log (nameData1.toLowerCase())        //toLowerCase()

console.log (nameData1.toUpperCase())           // toUpperCase()
/* --------------  String Tools END  ---------------- */