var randomNumber1= Math.random();
randomNumber1= 6*randomNumber1;
randomNumber1=1+Math.floor(randomNumber1);

var randomImage1="images/"+"dice"+randomNumber1+".png";
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImage1);

var randomNumber2= 1+(Math.floor(6*Math.random()))
var randomImage2="images/"+"dice"+randomNumber2+".png";
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomImage2);
if(randomNumber1>randomNumber2)
{
    document.querySelector("h1").textContent="🚩player1 wins!";
}
else if(randomNumber2>randomNumber1){
    document.querySelector("h1").textContent="player2 wins!🚩";
}
else{
    document.querySelector("h1").textContent="Draw";
}