
// header
fetch("/layout/header.html")
.then(response => {return response.text()})
.then(data => {document.querySelector("#header").innerHTML = data;})

// footer
fetch("/layout/footer.html")
.then(response => {return response.text()})
.then(data => document.querySelector('#footer').innerHTML = data);
