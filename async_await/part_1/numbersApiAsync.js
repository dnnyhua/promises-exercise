// Make a request to the Numbers API (http://numbersapi.com/) to get a fact about your favorite number. (Make sure you get back JSON by including the json query key, specific to this API. Details.

async function getFacts(num){
   res = await axios.get(`http://numbersapi.com/${num}?json`)
   console.log(res.data.text)
}
// getFacts(22)



// Figure out how to get data on multiple numbers in a single request. Make that request and when you get the data back, put all of the number facts on the page.

async function getMultiFacts(nums){
    res = await axios.get(`http://numbersapi.com/${nums}?json`)
    for (f in res.data){
        console.log(res.data[f])
    }
}
// getMultiFacts([1,2,3])



// Use the API to get 4 facts on your favorite number. Once you have them all, put them on the page. It’s okay if some of the facts are repeats.

async function fourFacts(num){
    await axios.get(`http://numbersapi.com/${num}?json`)
    let facts = await Promise.all([
        axios.get(`http://numbersapi.com/${num}?json`),
        axios.get(`http://numbersapi.com/${num}?json`),
        axios.get(`http://numbersapi.com/${num}?json`),
        axios.get(`http://numbersapi.com/${num}?json`),
    ]);
    // console.log(facts)
    for (f in facts){
        console.log(facts[f].data.text)
    }
}
// fourFacts(7)
