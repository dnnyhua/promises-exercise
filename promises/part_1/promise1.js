// Make a request to the Numbers API (http://numbersapi.com/) to get a fact about your favorite number. (Make sure you get back JSON by including the json query key, specific to this API. Details.

$.getJSON('http://numbersapi.com/7?json', response => {
    let res = response            
console.log(res);
    $('#number').text(res.text);

    // {text: '7 is the number of seconds it takes "Superman: Esc…oller coaster to go from 0 to 100 miles per hour.', number: 7, found: true, type: 'trivia'}

});




// Figure out how to get data on multiple numbers in a single request. Make that request and when you get the data back, put all of the number facts on the page.

let favNumbers = [7, 11, 22];
$.getJSON(`http://numbersapi.com/${favNumbers}?json`).then(data => {
  console.log(data);
});




// Use the API to get 4 facts on your favorite number. Once you have them all, put them on the page. It’s okay if some of the facts are repeats.

let number = 7;
facts = [];

for (let i=1; i<5; i++){
    facts.push(axios.get(`http://numbersapi.com/${number}?json`))
}

Promise.all(facts)
    .then(factsArr => {
        // for (res of factsArr){
        //     $("body").append(`<p>${res.data.text}</p>`)
        // }

        // Using forEach
        factsArr.forEach(res => {$("body").append(`<p>${res.data.text}</p>`)
        });
    })
    .catch(err => console.log(err));



