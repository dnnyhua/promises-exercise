// Make a request to the Deck of Cards API to request a single card from a newly shuffled deck. Once you have the card, console.log the value and the suit (e.g. “5 of spades”, “queen of diamonds”).

let res = axios.get("https://deckofcardsapi.com/api/deck/new/draw/?count=2")

$.getJSON("https://deckofcardsapi.com/api/deck/new/draw/")
    .then(data => {
        console.log(data)
        let { suit, value } = data.cards[0];
        let deckId = data.deck_id

        $(".card-image").attr("src", `${data.cards[0].image}`)
        console.log(`${value}, ${suit.toLowerCase().c}`)
    })
    
          



// Make a request to the deck of cards API to request a single card from a newly shuffled deck. Once you have the card, make a request to the same API to get one more card from the same deck. Once you have both cards, console.log the values and suits of both cards.

let cards = [];
$.getJSON("https://deckofcardsapi.com/api/deck/new/draw/")

    // data is the response from the API

    .then(data => {
        console.log(data)

        // card1 = data.cards[0]
        cards.push(data.cards[0])
        let deckId = data.deck_id;

        // $(".card-image").attr("src", `${data.cards[0].image}`)
        return $.getJSON(`https://deckofcardsapi.com/api/deck/${deckId}/draw/`)
    })
    .then(data =>{
        console.log(data)

        // card2 = data.cards[0];
        cards.push(data.cards[0])
        console.log(
            cards.forEach( card => {
                console.log(`${card.suit}, ${card.value}`)
            })    
        );
    })
    .catch(err => console.log(err))




// Build an HTML page that lets you draw cards from a deck. When the page loads, go to the Deck of Cards API to create a new deck, and show a button on the page that will let you draw a card. Every time you click the button, display a new card, until there are no cards left in the deck.

let deckId = null;

$.getJSON("https://deckofcardsapi.com/api/deck/new/shuffle/")
    .then(data => {
        console.log(data)
        deckId = data.deck_id
        console.log(deckId)
    })
   

function drawCard() {
    $.getJSON(`https://deckofcardsapi.com/api/deck/${deckId}/draw/`)
    .then(data => { 
        cardUrl = data.cards[0].image;
        console.log(cardUrl)

        let angle = Math.random() * 90 - 45;
        let randomX = Math.random() * 40 - 20;
        let randomY = Math.random() * 40 - 20;

        let $newCard = $(`<img>`)
        $newCard.attr("src", cardUrl).css({'transform': `translate(${randomX}px, ${randomY}px)`, 'rotate':`${angle}deg`})
        // transform: `translate(${randomX}px, ${randomY}px) rotate(${angle}deg)`
        // $newCard.css('max-width', '100px')
        $('.cardsContainer').append($newCard)
        console.log(data)
        console.log(data.remaining)

        if (data.remaining === 0){
            $('.drawCardBtn').hide()
        }
    })
}


$(".drawCardBtn").on('click', drawCard)

    
