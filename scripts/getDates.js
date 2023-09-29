let date = new Date();
let year = date.getFullYear();
let lastModify = new Date(document.lastModified);
document.getElementById('currentyear').innerHTML = year;
document.getElementById('lastModified').innerHTML = lastModify;


const visitsDisplay = document.querySelector(".visits");

let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

if (numVisits !== 0) {
	visitsDisplay.textContent = numVisits;
} else {
	visitsDisplay.textContent = `This is your first visit. 🥳 Welcome!`;
}

numVisits++;


localStorage.setItem("numVisits-ls", numVisits);

