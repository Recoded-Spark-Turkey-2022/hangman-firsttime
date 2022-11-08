
let words;
let letters;
let clickedLetter;
let damnData;

fetch(`https://random-word-api.herokuapp.com/word?number=1`)
  .then((res) => res.json())
  .then((data) => fetchDamnData(data));
function fetchDamnData(damnData){
  for (let i = 0; i < damnData.length; i++){
  words = Array.from(damnData).toString();
  letters = words.split('');}
  console.log(letters);
   
  function generateAlphabet() {
    let alphabet = "a b c d e f g h i j k l m n o p q r s t u v w x y z";
    alphabet.toUpperCase().split(" ").forEach((letter) => {
      const btns = document.querySelector(".btns");
      const buttons = document.createElement("button");
      buttons.setAttribute('class', 'buttonBoxes');
      buttons.innerText = letter;
      btns.appendChild(buttons);});}
  generateAlphabet();

  letters.forEach(() => {
    let emptyBlanks = document.createElement('span');
    emptyBlanks.setAttribute('class', 'emptyBlanks');
    emptyBlanks.innerHTML= " __ ";
    let letterBlanks = document.querySelector('.letterBlanks');
    letterBlanks.appendChild(emptyBlanks);})

   document.addEventListener("click", (e) => {
    if (e.target.className === "buttonBoxes"){
        e.target.classList.add("clicked");
      let clickedLetter = e.target.innerText;
     console.log(clickedLetter);}


     
    
    })
  }
    

   
  







