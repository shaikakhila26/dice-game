var randomNumber1=Math.floor(Math.random()*6)+1;
var randomDiceImage="dice"+randomNumber1+".png";
var randomImageSource="images/"+randomDiceImage;
document.querySelectorAll("img")[0].setAttribute("src",randomImageSource);
var randomNumber2=Math.floor(Math.random()*6)+1;
var randomDiceImage2="dice"+randomNumber2+".png";
var randomImageSource2="images/"+randomDiceImage2;
var image2=document.querySelectorAll("img")[1]
image2.setAttribute("src",randomImageSource2);


if(randomNumber1===randomNumber2){
    document.querySelector("h1").innerHTML=" Draw ! <img class='im' src='./images/oops.png' alt='oops' style=width:60px;height:60px'> ";
}
else if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="<img class='im' src='./images/flag.png' alt='flag' style='width:50px;height:50px'> Player1 WINS";
}
else{
    document.querySelector("h1").innerHTML=" Player2 WINS <img class='im' src='./images/flag.png' alt='flag' style='width:50px;height:50px'> ";
}
    



