const apiURL = "https://thequoteshub.com/api/";
const quoteElement = document.getElementById("quote");
const authorElement = document.getElementById("author");

fetch(apiURL)
.then(response => {
    if(!response.ok){
        throw new Error("Network response was not ok");
    }
    return response.json();
})
.then(data => {
    console.log(data);
    const usrObj = JSON.parse(JSON.stringify(data));
    quoteElement.textContent = usrObj["text"];
    authorElement.textContent = usrObj["author"];
})
.catch(error => {
    console.error("Error", error);
})

const apiURL2 = "https://cors-anywhere.herokuapp.com/https://xkcd.com/info.0.json";
const titleElement = document.getElementById("title");
const imgElement = document.getElementById("image");
const captionElement = document.getElementById("caption");

fetch(apiURL2)
.then(response => {
    if(!response.ok){
        throw new Error("Network response was not ok");
    }
    return response.json();
})
.then(data => {
    console.log(data);
    const usrObj = JSON.parse(JSON.stringify(data));
    titleElement.textContent = usrObj["title"];
    imgElement.src = usrObj["img"];
    captionElement.textContent = usrObj["alt"];
})
.catch(error => {
    console.error("Error", error);
})