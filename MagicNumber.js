var guess = prompt ("Enter a whole number.")
var guessNum= parseInt (guess)

if (isNaN(guess) ||  guess == ""){
    alert("Not a number!")
    window.location.reload(true)
}
var tempNum = guessNum;
var origNum = guessNum;
guessNum += 9;
document.write("<ul>")

document.write ("<li>I added 9 to " + tempNum + ". The new number is " + guessNum +".</li>");
tempNum = guessNum
guessNum *=2
document.write ("<li>I multiplied 2 to " + tempNum + ". The new number is " + guessNum +".</li>");
tempNum = guessNum
guessNum -=4
document.write ("<li>I subtracted 4 to " + tempNum + ". The new number is " + guessNum +".</li>");
tempNum = guessNum
guessNum /=2
document.write ("<li>I divided 2 to " + tempNum + ". The new number is " + guessNum + ".</li>");
tempNum = guessNum
document.write ("<li>I subtracted your original number of " + origNum + " from " + guessNum + ".</li>");
guessNum -= origNum
document.write ("<h3>Your final number is " + guessNum + ".</h3>")
document.write ("<h1> Thanks for playing Magic Number.  ")
document.write ("<a href = </a></h1>")

