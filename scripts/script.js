
let words;
let letters;
let clickedLetter;
let damnData;
let wordStatus;
let wrongGuesses = 0;
let maxWrong = 6;

fetch(`https://random-word-api.herokuapp.com/word?number=1`)
  .then((res) => res.json())
  .then((data) => fetchDamnData(data));
function fetchDamnData(damnData){
  words = Array.from(damnData).toString();
  letters = words.split('');
   
function generateAlphabet(){
  let alphabet = "a b c d e f g h i j k l m n o p q r s t u v w x y z";
  alphabet.toUpperCase().split(" ").forEach((letter)=>{
    const btns = document.querySelector(".btns");
    const buttons = document.createElement("button");
    buttons.setAttribute('class', 'buttonBoxes');
    buttons.innerText = letter;
    btns.appendChild(buttons);});}
  generateAlphabet();

letters.forEach(()=>{
  let emptyBlanks = document.createElement('span');
  emptyBlanks.setAttribute('class', 'emptyBlanks');
  emptyBlanks.innerHTML= " __ ";
  let letterBlanks = document.querySelector('.letterBlanks');
  letterBlanks.appendChild(emptyBlanks);})
     
document.addEventListener("click", (e) => {
  let wordStatus = false;
  if (e.target.className === "buttonBoxes"){
      e.target.classList.add("clicked");
      let clickedLetter = e.target.innerText;
      let selectedLetter = document.querySelectorAll('.emptyBlanks');

  letters.forEach((letter,index)=>{
  if (clickedLetter.toUpperCase() === letter.toUpperCase()){
      wordStatus = true;
      selectedLetter.forEach((span,spanIndex)=>{
  if (index === spanIndex){
      span.innerText = clickedLetter;};})}})}
        
  if (wordStatus !== true){
      wrongGuesses++;
      document.getElementById('hangman').src = './images/' + wrongGuesses + '.jpg';}
  
  if (wrongGuesses === maxWrong){
      let gameOver = document.createElement('div');
      gameOverMessage = document.createTextNode (`You Killed The Man, The word is ${words}`);
      gameOver.appendChild(gameOverMessage);
      document.body.appendChild(gameOver);}


      })}
  
    

   
  







