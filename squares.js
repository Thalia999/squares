let squareArea =document.querySelector("#squarearea");
//let squareArea =document.getElementById("squarearea");
let squareCounter = parseInt(Math.random()*21)+30; //30-50
//make some variable for a big z index e.g. 1000
for (let i=0; i<squareCounter; i++){
    //make square
    let square = document.createElement("div");
    square.className = "square";
    square.style.left = parseInt(Math.random()*650)+"px";
    square.style.top = parseInt(Math.random()*250)+"px";
    square.style.backgroundColor = getRandomColor();
    //put onclick and func(this)
    //put it on screen
    squareArea.append(square);
}

function getRandomColor(){
//make a color string
  let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i=0; i<6; i++){
        color+=letters.charAt(parseInt(Math.random()*letters.length));
    }
    //return the color string
    return color;
}
//make a func to add 1 square
//make sure that I set as onclick

//make a func that changes color of all squares
//make sure button calls it
function changeColors(){
    //make an array
    let allSquares = document.querySelectorAll(".square");
    //for of loop or reg for loop with index
    //change the color
    //1-3 lines of code 
    

}