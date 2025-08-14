// adding the navigation menu to the index file
fetch("menu.html")
    .then(response => response.text())
    .then(data => document.getElementById("menubar").innerHTML=data)