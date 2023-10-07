let date = new Date();
let year = date.getFullYear();
let lastModify = new Date(document.lastModified);
document.getElementById('currentyear').innerHTML = year;
document.getElementById('lastModified').innerHTML = lastModify;

document.getElementById('lastLoaded').innerHTML = lastModify;


const visitsDisplay = document.querySelector(".visits");

let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

if (numVisits !== 0) {
	visitsDisplay.textContent = numVisits;
} else {
	visitsDisplay.textContent = `This is your first visit. 🥳 Welcome!`;
}

numVisits++;


localStorage.setItem("numVisits-ls", numVisits);












document.addEventListener('DOMContentLoaded', function () {
    // Get current date and time
    var currentDate = new Date();
    var timestampField = document.getElementById('timestamp');

    // Format date and time 
    var formattedTimestamp = currentDate.getFullYear() + '-' + 
                             padNumber(currentDate.getMonth() + 1) + '-' + 
                             padNumber(currentDate.getDate()) + ' ' + 
                             padNumber(currentDate.getHours()) + ':' + 
                             padNumber(currentDate.getMinutes()) + ':' + 
                             padNumber(currentDate.getSeconds());

    
    timestampField.value = formattedTimestamp;
});

function padNumber(number) {
    return (number < 10 ? '0' : '') + number;
}
