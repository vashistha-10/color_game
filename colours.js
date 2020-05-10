var numOfSquares = 6;
var colors = generateRandomColors(numOfSquares);


var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDis = document.getElementById("colorDis");
colorDis.textContent = pickedColor;
var messageDis = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");


easyBtn.addEventListener("click",function(){ 
     easyBtn.classList.add("selected");
     hardBtn.classList.remove("selected");
     numOfSquares = 3;
     colors = generateRandomColors(numOfSquares);
     pickedColor = pickColor();
     colorDis.textContent = pickedColor;
     
     h1.style.backgroundColor = "cadetblue";
     for(var i=0; i < squares.length; i++){
         if(colors[i])
         {
             squares[i].style.backgroundColor = colors[i];
         }
         else{
             squares[i].style.display = "none";
         }
     }
});

hardBtn.addEventListener("click",function(){ 
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    h1.style.backgroundColor = "cadetblue";
    numOfSquares = 6;
    colors = generateRandomColors(numOfSquares);
     pickedColor = pickColor();
     colorDis.textContent = pickedColor;
     for(var i=0; i < squares.length; i++){
         
             squares[i].style.backgroundColor = colors[i];
             squares[i].style.display = "block";
         
     }
});


resetButton.addEventListener("click",function()
{
    colors = generateRandomColors(numOfSquares);
    pickedColor = pickColor();
    messageDis.textContent = "";
    this.textContent = "New Colors";
    colorDis.textContent = pickedColor;
    for(var i=0; i < squares.length; i++)
         {
    squares[i].style.backgroundColor = colors[i]; }
    h1.style.backgroundColor = "cadetblue";
});

for(var i=0; i < squares.length; i++)
{
    squares[i].style.backgroundColor = colors[i];
     
    squares[i].addEventListener("click",function(){
        var clickedColor = this.style.backgroundColor;
        if(clickedColor === pickedColor) {
            messageDis.textContent = "Correct!";
            resetButton.textContent = "Play Again";
            h1.style.backgroundColor = pickedColor;
            changeToCorrectColors(pickedColor);
        }
        else{
            this.style.backgroundColor = "#232333";
            messageDis.textContent = "Try Again";
        }
    });
}

function changeToCorrectColors(color){
    for(var i=0; i < colors.length; i++)
    {
        squares[i].style.backgroundColor = color;
    }
}

function pickColor()
{
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(n){
    var ar = [];

    for(var i=0; i<n; i++)
    {
        ar.push(randomColor());
    }
    return ar;
}

function randomColor()
{
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);
    return "rgb(" + red + ", " + green + ", " + blue + ")";
}