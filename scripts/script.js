


fetch(`https://random-word-api.herokuapp.com/word?number=1`)
  .then((res) => res.json())
  .then((data) => fetchDamnData(data));
function fetchDamnData(damnData){
  const words = damnData.toString();
  const letters = words.split('');
 console.log(letters)


  randomWords.forEach((letter) => {
    let emptyBlanks = document.createElement('span');
    emptyBlanks.setAttribute('class', 'emptyBlanks');
    emptyBlanks.innerText= letter;
    let letterBlanks = document.querySelector('.letterBlanks');
    letterBlanks.appendChild(emptyBlanks);
  })}
console.log(randomWords);



function generateAlphabet() {
  let alphabet = "a b c d e f g h i j k l m n o p q r s t u v w x y z";
  alphabet.toUpperCase().split(" ").map((letter) => {
    const btns = document.querySelector(".btns");
    const buttons = document.createElement("button");
    buttons.setAttribute('class', 'buttonBoxes');
    buttons.innerText = letter;
    btns.appendChild(buttons);});}
generateAlphabet();


document.addEventListener("click", (e) => {
  if (e.target.className === "buttonBoxes"){
      e.target.classList.add("clicked");
    let theClickedLetter = e.target.innerText;
    console.log(theClickedLetter);
    }})


