const friends = ["shanto", "sohan", "akash", "sumon"];

//add element end

friends.push("Rabbi");
console.log(friends);
//add element at beginning

friends.unshift("Nazim");
console.log(friends);

//delete from end
friends.pop();
console.log(friends);
//delete from start
friends.shift();
console.log(friends);

//find the index number
const indexOfAkash = friends.indexOf("akash");
console.log(indexOfAkash);

//check either exist or not
const checkOne = friends.includes("John");
const checkTwo = friends.includes("shanto");
console.log(checkOne, checkTwo);
