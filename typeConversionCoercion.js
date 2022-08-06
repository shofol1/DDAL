//type Conversion-manually
const inputYear = "1991";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18, inputYear + 18);

console.log(Number("Johns"));
console.log(typeof NaN); //number

//type Coercion-koersion
console.log(`i am ${23} yeats old`); //----> 23 automatically converted into String, that only possible for javascript coersion
