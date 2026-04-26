let squareArea =document.querySelector("#squarearea");
let squareCounter = parseInt(Math.random()*21)+30; //30-50
let bigZ = 1000;
window.onload = function(){
    for (let i=0; i<squareCounter; i++){
        addSquare(); // 3) updated onload to use addSquare()
    }
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
function addSquare(){
    let square = document.createElement("div");
    square.className = "square";
    square.style.left = parseInt(Math.random()*650)+"px";
    square.style.top = parseInt(Math.random()*250)+"px";
    square.style.backgroundColor = getRandomColor();
    square.style.width = parseInt(Math.random()*11)+45+"px";  // 5) random size
    square.style.height = square.style.width;
    square.onclick = function(){ handleClick(this); }; // 4) onclick behavior
    squareArea.append(square);
}
function handleClick(sq){
    if(parseInt(sq.style.zIndex) >= bigZ){
        sq.remove();
    } else {
        bigZ++;
        sq.style.zIndex = bigZ;
    }
}

function changeColors(){
    let allSquares = Array.from(document.querySelectorAll(".square"));
    allSquares.forEach(sq => sq.style.backgroundColor = getRandomColor());
}