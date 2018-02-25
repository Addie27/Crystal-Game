var computerScore = "";
var userScore = 0;
var wins = 0;
var losses = 0;
var crystalValue = "";
var computerScoreDiv = "";
var winsDiv = "";;
var crystalValue = "";
var crystalValueArray = [];


$(document).ready(function () {

    //Problem 1: Game starts. Random score is input for Computer score. Random value assigned to each crystal. Wins set to zero, losses set to zero.
    function gameStart() {
        winsIncrease();
        lossesIncrease();
        var computerScore = Math.floor(Math.random() * 101) + 19;//generates random number between 120 and 19 for computerScore
        console.log(computerScore);
        var computerScoreDiv = $("<div>"); //creates new div
        computerScoreDiv.text(computerScore); //adds computerScore to new div
        $("#computerScore").append(computerScoreDiv); //pushes score to DOM
    
    }//gameStart function close
    gameStart(); //calling the gameStart function

    function crystalNumbers() { //sets numbers to crystals
            while(crystalValueArray.length < 4){ //sets array length to 4
                crystalValue = Math.floor(Math.random() * 11) + 1; //generates random numbers
                if(crystalValueArray.indexOf(crystalValue) > -1) continue; //generates up to 4 numbers
                crystalValueArray[crystalValueArray.length] = crystalValue;//sets the array numbers
            }
            console.log(crystalValueArray); 
            $( ".crystal" ).each(function() {//iterates through each button and assigns the value of the array to each
                $("#blue").attr("value", crystalValueArray[0]); 
                $("#pink").attr("value", crystalValueArray[1]); 
                $("#yellow").attr("value", crystalValueArray[2]); 
                $("#purple").attr("value", crystalValueArray[3]); 
                });
    };//crystalNumbers close 
    crystalNumbers();//calling crystalNumbers function 


    $(".crystal").on("click", function() {

        // Determining the crystal's value requires us to extract the value from the data attribute.
        // Using the $(this) keyword specifies that we should be extracting the crystal value of the clicked crystal.
        // Using the .attr("data-crystalvalue") allows us to grab the value out of the "data-crystalvalue" attribute.
        // Since attributes on HTML elements are strings, we must convert it to an integer before adding to the counter
        
        var crystalValues = ($(this).attr("value"));
        newValue = parseInt(crystalValues); 
    

        // We then add the crystalValue to the user's "counter" which is a global variable.
        // Every click, from every crystal adds to the global counter.
        userScore += newValue;
    
        // All of the same game win-lose logic applies. So the rest remains unchanged.
        $("#userScore").html("Your score: " + userScore);
        console.log(computerScore); 
    
        if (userScore === computerScore) {
          wins++;
        }
    
        else if (userScore >= computerScore) {
          losses++
        }
    
    //Problem 2: User clicks crystal and score is displayed. 
    
    }); //crystal click closing.
       
    function winsIncrease() {
        var winsDiv = $("<div>"); //creates new div
        winsDiv.text(wins); //adds wins to new div
        $("#wins").append(winsDiv); //pushes score to DOM
    };//winsIncrease closing

    function lossesIncrease() {
        var lossesDiv = $("<div>"); //creates new div
        lossesDiv.text(losses); //adds wins to new div
        $("#losses").append(lossesDiv); //pushes score to DOM
    }; //lossesIncrease closing

    //Problem 3: User clicks second crystal and the score is added. Continue to do this until



    //Problem 4: If user scores exaclty equals that of the computer score, wins increases

    //Problem 5: If user score goes over the computer score, losses increase

    //Problem 6: Game restarts



}); //document ready closing
