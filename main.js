let url = "https://proxy-itunes-api.glitch.me/search?term="
const msgDiv = document.querySelector('#msg')
let formIsValid // this is set as a global variable so it can be used in different functions
//const audioSrc = document.getElementById('myAudio').src

// //use before search feature is working-don't forget to delete later!
//let search = "Brittany+Spears"

const searchTerm = document.getElementById('search-terms')
    console.log(searchTerm)


// let searchText = searchTerm.value
// const audioSrc = document.getElementById("myAudio").src
//     console.log('this is the url:', audioSrc)

//select the button
let btn1= document.querySelector('button');
//add event listener
btn1.addEventListener("click", function (event) {
    event.preventDefault()
    console.log('Button clicked!')
    //validateSearch()
    iTunesPull(searchTerm.value) //need to learn about value. Also how does this line work?
})

//was trying to show a message when any empty search is made-  not working
// function validateSearch() {
//     removeMessage() // if a message is showing from a previous validation attempt
//     formIsValid = true // reset this each time you try to validate the form
//     if (searchTerm.value =null) {
//         console.log('search is empty')
//         formIsValid = false 
//         showMessage()
// }
// }
//***how do I make this a function that listens for the click and 
// then submits the text in the search box and 
// makes it be the value of a variable called 'search'???
// Clear Results

const songDiv = document.getElementById('results-container')
//add the submitted search terms onto the url to search the itunes api. *Review how fetch and JSON work*
function iTunesPull(search) {
    return fetch(url+search+'&limit=20&entity=song') //limiting it to return 20 results and only audio songs
    .then(res => res.json())
    .then((data) => {
        console.log(data)
        songDiv.innerHTML ="" 
        data.results.forEach(item => {  //this is the loop
                    songDiv.innerHTML +=`  
                    <div class = "each-box content is-small">
                    <img src=${item.artworkUrl100} />
                    <h5><a href=${item.previewUrl}>${item.trackName}</a></h5>
                    <h3>${item.artistName}</h3>
                    </div>
                    ` 
            })
  //Get the song to play */

//const songClick = document.getElementById('song');
//songClick.addEventListener("click", insertSongLink);

//select where to click
let songClick = document.getElementById('results-container');
//add event listener
songClick.addEventListener("click", function (event) {
    event.preventDefault() //what does this do?
    console.log('link clicked!')
    console.log('this is the link that is being sent to play:', event.target)
    if(event.target.tagName === "A"){
    insertSongLink();
    }
    
function insertSongLink() {
    // let songUrl = document.querySelector('a').getAttribute('href')
    // console.log("This is the URL to add audio src:", songUrl)
    let audioSrc = document.getElementById('myAudio')
    console.log(audioSrc)
    audioSrc.src=""
    audioSrc.src = event.target
    console.log(audioSrc) 
    }
})
})
}

//Part of not-working function to add/remove error message
// function removeMessage() {
//     if (msgDiv) {
//     msgDiv.innerHTML = ''
//     }
// }

// function showMessage() {  //not being called just writing it
//     if (msgDiv) {
//         msgDiv.innerHTML = "Enter some text and try again"
//     }
// }
// //make click on track name open previewURL in audio player
    //add click event
    //locate 
    //on click, add "previewURL" to 
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