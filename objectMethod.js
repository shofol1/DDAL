const person = {
  firstName: "Ashikul",
  lastName: "shofol",
  gender: "male",
  birthYear: 1998,
  calAge: function () {
    return 2022 - this.birthYear;
  },
};
console.log(person.calAge());
