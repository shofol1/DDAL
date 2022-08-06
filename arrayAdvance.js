const mcq = [
  {
    quesNo: 1,
    ques: "what is html?",
    options: [
      "hyper Text Mark up language",
      "jani na",
      "bolbo na",
      "jemon vabo temon khusi",
    ],
    correct: "hyper Text Mark up language",
  },
  {
    quesNo: 2,
    ques: "what is CSS?",
    options: [
      "Cascading style sheet",
      "jani na",
      "bolbo na",
      "jemon vabo temon khusi",
    ],
    correct: "Cascading style sheet",
  },
];
const ques = document.getElementById("ques");

console.log(ques);
mcq.map((q, i) => {
  document.write(`<h2 key=${i}}>${q.ques}</h2>`);
  q.options.map((o) => {
    document.write(`<p key=${i}}>${o}</p>`);
  });
});
