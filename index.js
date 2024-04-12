const grid = document.getElementById("grid");


setInterval(function() {
    let order = grid.style.order;
    grid.style.order = Math.floor(Math.random() * 6);


}, 1000);