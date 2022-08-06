const person = {
  firstName: "Ashikul",
  lastName: "shofol",
  gender: "male",
};

console.log(person.lastName); //dot notation
console.log(person["lastName"]); //bracket notation

//dot vs bracket

const nameKey = "Name";
console.log(person["first" + nameKey]);

//this not work for dot notation

person["address"] = "saidpure";
console.log(person);
