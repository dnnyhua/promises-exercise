// Make a request to the Deck of Cards API to request a single card from a newly shuffled deck. Once you have the card, console.log the value and the suit (e.g. “5 of spades”, “queen of diamonds”).

// https://deckofcardsapi.com/api/deck/<<deck_id>>/draw/?count=2

async function getCard(){
    res = await axios.get('https://deckofcardsapi.com/api/deck/new/draw')
    console.log(res.data)
    let {suit, value} = res.data.cards[0];
    console.log (`${value.toLowerCase()} of ${suit.toLowerCase()}`)
}




// Make a request to the deck of cards API to request a single card from a newly shuffled deck. Once you have the card, make a request to the same API to get one more card from the same deck.



async function getCards(){
    let deckId = null;
    let cards = []
    let res = await axios.get('https://deckofcardsapi.com/api/deck/new/draw');
    deckId = res.data.deck_id;
    let firstCard = res.data.cards[0];
    cards.push(firstCard);
    
    let res2 = await axios.get(`https://deckofcardsapi.com/api/deck/${deckId}/draw`);
    let secondCard = res2.data.cards[0];
    // console.log(secondCard)
    cards.push(secondCard);

    for (c in cards){
        console.log(` ${cards[c].value.toLowerCase()} of ${cards[c].suit.toLowerCase()}`)
    }
}

// Springboard's solution to second problem

async function part2() {
    let firstCardData = await $.getJSON(`${baseURL}/new/draw/`);
    let deckId = firstCardData.deck_id;
    let secondCardData = await $.getJSON(`${baseURL}/${deckId}/draw/`);
    [firstCardData, secondCardData].forEach(card => {
      let { suit, value } = card.cards[0];
      console.log(`${value.toLowerCase()} of ${suit.toLowerCase()}`);
    });
  }





// Build an HTML page that lets you draw cards from a deck. When the page loads, go to the Deck of Cards API to create a new deck, and show a button on the page that will let you draw a card. Every time you click the button, display a new card, until there are no cards left in the deck.



async function drawCardAsync(){
    let res = await axios.get(`https://deckofcardsapi.com/api/deck/new/shuffle/`);
    let deckId = res.data.deck_id
    
    $('.btn').on('click', async function() {
        let res = await axios.get(`https://deckofcardsapi.com/api/deck/${deckId}/draw`)

        let cardUrl = res.data.cards[0].image
        console.log(cardUrl)

        let angle = Math.random() * 90 - 45;
        let randomX = Math.random() * 40 - 20;
        let randomY = Math.random() * 40 - 20;

        $newCard = $(`<img>`)
        .attr("src", cardUrl)
        .css({'transform': `translate(${randomX}px, ${randomY}px)`, 'rotate':`${angle}deg`});

        $('.cardTable').append($newCard);
        if (res.data.remaining === 0){
            $('.btn').hide()
        };
    });
};
drawCardAsync()











