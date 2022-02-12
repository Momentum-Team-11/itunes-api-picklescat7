let url = "https://itunes.apple.com/search?term="


// //use before search feature is working-don't forget to delete later!
let search = "Brittany+Spears"

let searchTerm = document.getElementById('search-terms')
    console.log(searchTerm)

//select the button
let btn1= document.querySelector('button');
btn1.addEventListener("click", function (event) {
    event.preventDefault()
    console.log('Button clicked!')
    iTunesPull(searchTerm.value)
})



//***how do I make this a function that listens for the click and 
// then submits the text in the search box and 
// makes it be the value of a variable called 'search'???


//add the submitted search terms onto the url to search the itunes api. *Review how fetch and JSON work*
function iTunesPull(search) {
    return fetch(url+search+'&limit=20&entity=song') //limiting it to return 20 results and only audio songs
    .then(res => res.json())
    .then((data) => {
        console.log(data)
        data.results.forEach(item => {
            //     // div and span magic here
                const songDiv = document.getElementById('results-container')
                    // console.log(songDiv)
                    // console.log("nothing to see here", songDiv.innerHTML)
                    //the += makes it loop
                    songDiv.innerHTML +=`  
                    <div class = "each-box content is-small">
                    <img src=${item.artworkUrl100} />
                    <h5>${item.trackName}</h5>
                    <h3>${item.artistName}</h3>
                    </div>
                    `
            })
})
}

// fetch(iTunesPull)
//     .then((response) => response.json())
//     .then((data) => {
//         const songDiv = document.getElementById('results-container')
//         console.log(songDiv)
//     })
// iTunesPull(search)
//     .then(res => {
//     console.log(res.results);






//console.log(data.trackName))
//need to define "search" so it is replaced by text entry in search box upon click
//locate where to insert it in the DOM and call it 'search'
//Need to display the following for each song in a grid or flex:
//artworkUrl100
//trackName
//artistName  

//Then get "previewUrl" to ginto the audio track
//and done.

//locate the id where I will insert the results
// const songDiv = document.getElementById('results-container')
// console.log(songDiv)

// // songDiv.innerHTML = `
// // <img src=${}`

// const searchText = document.createTextNode (search)
// console.log('I will be inserting the following name:', searchText)
// //combine the element and text
// //song-info-container.appendChild(searchText)
// //now insert it
// songDiv.appendChild(searchText)

// fetch(url+search+'&limit=25&entity=song') //limiting it to return 25 results and only audio songs
//     .then((response) => response.json())
//     .then((data) => {
//         const songDiv = document.getElementById('results-container')
//         console.log(songDiv)
//         console.log("nothing to see here", songDiv.innerHTML)

//         songDiv.innerHTML =`
//         <img src=${data.artworkUrl100} />