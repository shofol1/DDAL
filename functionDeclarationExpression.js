//declaration

function calAge(year) {
  return 2022 - year;
}
const age = calAge(1998);
console.log(age);

//expression
const calAge2 = function (year) {
  return 2022 - year;
};
const age2 = calAge2(1998);
console.log(age2);
