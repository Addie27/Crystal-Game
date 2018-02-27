var computerScore;
var userScore = 0;
var wins = 0;
var losses = 0;
var crystalValue = "";
var computerScoreDiv = "";
var winsDiv = "";;
var crystalValueArray = [];

function gameStart() {
    userScore = 0;
    computerScore = Math.floor(Math.random() * 101) + 19;//generates random number between 120 and 19 for computerScore
    console.log(computerScore);
    $("#computerScore").html(computerScore); //pushes score to DOM
    $("#userScore").html(userScore);
};//gameStart function close  

function crystalNumbers() { //sets numbers to crystals
    while (crystalValueArray.length < 4) { //sets array length to 4
        crystalValue = Math.floor(Math.random() * 11) + 1; //generates random numbers
        if (crystalValueArray.indexOf(crystalValue) > -1) continue; //generates up to 4 numbers
        crystalValueArray[crystalValueArray.length] = crystalValue;//sets the array numbers
    }
    console.log(crystalValueArray);
    $(".crystal").each(function () {//iterates through each button and assigns the value of the array to each
        $("#blue").attr("value", crystalValueArray[0]);
        $("#pink").attr("value", crystalValueArray[1]);
        $("#yellow").attr("value", crystalValueArray[2]);
        $("#purple").attr("value", crystalValueArray[3]);
    });
};//crystalNumbers close 

function winsLosses() {
    if (userScore === computerScore) {
        wins++;
        $("#wins").html(wins); //pushes score to DOM
        reset();
    }//if statement close

    else if (userScore >= computerScore) {
        losses++;
        $("#losses").html(losses); //pushes score to DOM
        reset(); 
    }; //else if closing
};//winslosses closing

function reset (){
    gameStart();
    crystalValueArray = []; 
    crystalNumbers();

}

$(document).ready(function () {

    gameStart(); 
    crystalNumbers();

    $(".crystal").on("click", function () {

        var crystalValues = ($(this).attr("value"));
        newValue = parseInt(crystalValues);

        userScore += newValue;

        $("#userScore").html(userScore);

        winsLosses(); 

    }); //crystal click closing.

    

 
    //Problem 3: User clicks second crystal and the score is added. Continue to do this until



    //Problem 4: If user scores exaclty equals that of the computer score, wins increases

    //Problem 5: If user score goes over the computer score, losses increase

    //Problem 6: Game restarts



}); //document ready closing
