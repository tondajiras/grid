const grid = document.getElementById("grid");

const GridList = ["blue", "green", "red", "yellow", "orange", "grey"]
let change = "nic";

setInterval(function() {
    change = GridList[0];
    GridList[0] = GridList[1];
    GridList[1] = GridList[2];
    GridList[2] = GridList[3];
    GridList[3] = GridList[4];
    GridList[4] = GridList[5];
    GridList[5] = change;
    grid.style.gridTemplateAreas = `"${GridList[0]} ${GridList[1]} ${GridList[2]}"
                                "${GridList[3]} ${GridList[4]} ${GridList[5]}"`;
}, 1000);