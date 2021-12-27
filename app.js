const frutas = require("./frutas");

const cowsay = require("cowsay");
console.log(
  cowsay.say({
    text: "I'm a moooodule",
    e: "Oo",
    T: "U",
  })
);
frutas.forEach((fruta) => {
  console.count(fruta);
});
