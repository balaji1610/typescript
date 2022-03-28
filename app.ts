console.log("Lets Start");

var a: number = 10;

console.log(a);

function firstProgramme(a: number, b: number) {
  return a + b;
}

console.log(firstProgramme(10, 13));

//  object
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
