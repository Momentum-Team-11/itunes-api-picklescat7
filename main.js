const url = "https://itunes.apple.com/search?term="

console.log('Calling fetch....');

const form = document.querySelector('#search-form')


//add the submitted search terms onto the url to search the itunes api. Somehow fetch and json are involved
function iTunesPull(search) {
    return fetch(url+search+'&limit=25&entity=song') //limiting it to return 25 results and only audio songs
    .then(res => res.json());
}
let search = "Jack+Johnson"
//need to define "search" so it is replaced by text entry in search box upon click

iTunesPull(search)
    .then(res => {
    console.log(res.results);

   // res.results.forEach(item => {
    //div and span magic here
//})
})

//Need to display the following for each song in a grid or flex:
//artworkUrl100
//trackName
//artistName  

//Then get "previewUrl" to ginto the audio track