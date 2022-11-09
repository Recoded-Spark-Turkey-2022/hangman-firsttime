let words;
let letters;
let clickedLetter;
let damnData;
let wordStatus;
let wrongGuesses = 0;
let maxWrong = 9;

fetch(`https://random-word-api.herokuapp.com/word?number=1`)
  .then((res) => res.json())
  .then((data) => fetchDamnData(data));
function fetchDamnData(damnData) {
  words = Array.from(damnData).toString();
  letters = words.split("");
  console.log(letters);



function generateAlphabet() {
  let alphabet = "a b c d e f g h i j k l m n o p q r s t u v w x y z";
      alphabet.toUpperCase().split(" ").forEach((letter) => {
        const btns = document.querySelector(".btns");
        const buttons = document.createElement("button");
        buttons.setAttribute("class", "buttonBoxes");
        buttons.setAttribute("id", `${letter}`);
        buttons.innerText = letter;
        btns.appendChild(buttons); });}
  generateAlphabet();

function returnDefinition() {
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${words}`)
    .then(response => {return response.json();})
    .then(word => {singleWordDefinition = word[0].meanings[0].definitions[0].definition;
        
      
    document.querySelector('.needHelp').addEventListener('click', () => {
      let wordDefinition = document.createElement('span');
      let hint = document.querySelector(".hint");
      wordDefinition.innerText = singleWordDefinition;
      hint.appendChild(wordDefinition);
          console.log(singleWordDefinition)
      });})};
  returnDefinition();

 

  letters.forEach(() => {
    let emptyBlanks = document.createElement("span");
    emptyBlanks.setAttribute("class", "emptyBlanks");
    emptyBlanks.innerHTML = " _ ";
    let letterBlanks = document.querySelector(".letterBlanks");
    letterBlanks.appendChild(emptyBlanks); });

document.querySelectorAll(`.buttonBoxes`).forEach((button, index) => {
  button.addEventListener("click", (e) => {
    let wordStatus = false;
    if (e.target.className === "buttonBoxes") {
        e.target.classList.add("clicked");
        let clickedLetter = e.target.innerText;
        let selectedLetter = document.querySelectorAll(".emptyBlanks");

letters.forEach((letter, index) => {
  if (clickedLetter.toUpperCase() === letter.toUpperCase()) {
    wordStatus = true;
    selectedLetter.forEach((span, spanIndex) => {
  if (index === spanIndex) {
    span.innerText = clickedLetter;}});}});}

    

  if (wordStatus !== true) {
      wrongGuesses++;
      let imgContainer = document.querySelector(".imgContainer");
      imgContainer.classList.add(`wrong-${wrongGuesses}`);}

  if (wrongGuesses === maxWrong) {
     
    }

  });});}


      function restart() {
        window.location.reload();}

  
    
        // const button = document.getElementById('enter');
        // button.addEventListener('click', function (e) {
        //   document.getElementById('entrance').style.display = "none";
        // })
        // button.addEventListener("mouseover", function () {
        //   button.style.cursor = "pointer";
        // })
   
        







