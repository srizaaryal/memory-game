const gameContainer = document.getElementById("game");
let card1 = null;
let card2 = null;
let flippedCard = 0;
let donotclick = false;

const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple"
];

function shuffle(array) {
  let counter = array.length;
  while (counter > 0) {
  
    let index = Math.floor(Math.random() * counter);

  counter--;

    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }
  return array;
}

let shuffledColors = shuffle(COLORS);

function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    const newDiv = document.createElement("div");
    newDiv.classList.add(color);
    newDiv.addEventListener("click", handleCardClick);
    gameContainer.append(newDiv);
  }
}

function handleCardClick(event) {
 if (donotclick) return;
 if (event.target.classList.contains('faceup')) return;

 let currentCard = event.target;
 currentCard.style.backgroundColor= currentCard.classList[0];

 if(!card1 || !card2){
  currentCard.classList.add('faceup');
  if(!card1){
    card1=currentCard;
  } else {
    card1=card1;
  }
  if(currentCard===card1){
    card2=null;
  } else{
    card2 = currentCard;
  }
 }

if (card1 && card2){
  donotclick = true;

  let color1 = card1.className;
  let color2 = card2.className;
  if (color1 === color2) {
    flippedCard += 2;
    card1.removeEventListener("click", handleCardClick);
    card2.removeEventListener("click", handleCardClick);
    card1 = null;
    card2 = null;
    donotclick = false;
  } else {
    setTimeout(function() {
      card1.style.backgroundColor = "";
      card2.style.backgroundColor = "";
      card1.classList.remove("faceup");
      card2.classList.remove("faceup");
      card1 = null;
      card2 = null;
      donotclick = false;
    }, 1000);
  }
}

if (flippedCard === COLORS.length) alert("game over!");
}

createDivsForColors(shuffledColors);
