window.onload = () => {
    document.querySelector("#generate-card").addEventListener("click", () => {
        // Get the deck of cards
        const cards = deckBuilder();
        // Call the randomCard function and pass the deck, it already creates the 
        // elements needed in the html. no need to more document.querySelectById()
        randomCard(cards);
    });
};

function deckBuilder() {
    const values = [ "A", "2", "3", "4", "5", "6", 
                    "7", "8", "9", "10", "J", "Q", "K", ];
    const suits = ["♥", "♦", "♠", "♣"];
    const cards = [];
    for (let s = 0; s < suits.length; s++) {
      for (let v = 0; v < values.length; v++) {
        const value = values[v];
        const suit = suits[s];
        cards.push({ value, suit });
      }
    } 
    return cards;
  } 
// Declaring these load the cards from the begining. If removed it wont show card at all
  const cards = deckBuilder();
  randomCard(cards);

  function randomCard(cards) {  
    const random = Math.floor(Math.random() * 52);  
    const cardValue = cards[random].value;
    const cardSuit = cards[random].suit;
    const card = document.createElement("div");
    card.classList.add("card", cardSuit.toLowerCase());
    card.innerHTML = 
    '<span class="card-value-suit top">' + cardValue + cardSuit + '</span>' + 
    '<span class="card-suit">' + cardValue + '</span>' + 
    '<span class="card-value-suit bot">' + cardValue + cardSuit + '</span>';
    document.querySelector("#theDeck").innerHTML = "";
    document.querySelector("#theDeck").appendChild(card);
  }
