let date = new Date();
let year = date.getFullYear();
let lastModify = new Date(document.lastModified);
document.getElementById('currentyear').innerHTML = year;
document.getElementById('lastModified').innerHTML = lastModify;

