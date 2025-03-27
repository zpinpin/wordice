const diceElements = document.querySelectorAll('.dice');
const rollButton = document.getElementById('roll-button');

const words = [
"cat", "dog", "house", "tree", "book", "school", "friend", "mom", "dad", "ball",
  "car", "bird", "fish", "sun", "moon", "star", "flower", "apple", "water", "food"
];


function getRandomWord() {
    return words[Math.floor(Math.random() * words.length)];
}

function rollDice() {
    diceElements.forEach(dice => {
        const randomWord = getRandomWord();
        dice.textContent = randomWord;
        
        // Add a subtle animation
        dice.style.animation = 'none';
        dice.offsetHeight; // Trigger reflow
        dice.style.animation = 'roll 0.5s ease';
    });
}

// Initial roll on page load
rollDice();

// Roll again when button is clicked
rollButton.addEventListener('click', rollDice);

