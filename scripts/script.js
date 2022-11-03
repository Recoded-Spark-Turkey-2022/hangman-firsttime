const arr = [];

fetch(`https://random-word-api.herokuapp.com/word?number=1`)
  .then((res) => res.json())
  .then((data) => fetchDamnData(data));
function fetchDamnData(damnData) {
  const word = damnData[0].split("");
  arr.push(word);
}
console.log(arr);
function generateAlphabet() {
  let alphabet = "a b c d e f g h i j k l m n o p q r s t u v w x y z";
  alphabet.split(" ").map((letter) => {
    const btns = document.querySelector(".btns");
    const buttons = document.createElement("button");
    buttons.innerText = letter;
    btns.appendChild(buttons);
  });
}
generateAlphabet();
