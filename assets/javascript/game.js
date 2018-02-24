computerScore = "";
userScore = ""; 
wins = 0;
losses = 0; 
crystalValue = ""; 
computerScoreDiv = ""; 
winsDiv = ""; 
crystals = ["blue", "purple", "pink", "yellow"]; 

$(document).ready(function() {

    //Problem 1: Game starts. Random score is input for Computer score. Random value assigned to each crystal. Wins set to zero, losses set to zero.
    function gameStart(){
        var computerScore = Math.floor(Math.random() * 101) + 19;//generates random number between 120 and 19 for computerScore
        console.log(computerScore); 
        var computerScoreDiv = $("<div>"); //creates new div
        computerScoreDiv.text(computerScore); //adds computerScore to new div
        $("#computerScore").append(computerScoreDiv); //pushes score to DOM

        function crystalNumbers(){
            
            //need 4 random numbers generated and then assigned to each crystal picture  
            for (var i=0; i<crystals.length; i++){
                var crystalValue = Math.floor(Math.random() * 11) + 1;//generates random number for crystals
                crystals[i] = crystalValue;  //assigns each number to the crystal item in the array
                console.log(crystals[i]); 
            }//for loop random number generator close
        }//crystal number assignment function closer
        crystalNumbers();//calling crystalNumbers function 

        var winsDiv = $("<div>"); //creates new div
        winsDiv.text(wins); //adds wins to new div
        $("#wins").append(winsDiv); //pushes score to DOM

    }//gameStart function close
        gameStart(); //calling the gameStart function

    //Problem 2: User clicks crystal and score is displayed. 
function crystalClick() {
    $(".crystal").on("click", function(){

    }
)};//crystalClick closing  

    //Problem 3: User clicks second crystal and the score is added. Continue to do this until

    //Problem 4: If user scores exaclty equals that of the computer score, wins increases

    //Problem 5: If user score goes over the computer score, losses increase

    //Problem 6: Game restarts






}); //document ready closing
