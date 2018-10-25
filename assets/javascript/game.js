var randomAnswer = Math.floor(Math.random() * (121- 19) + 19);
$("#number").text(randomAnswer); 

var crystalNumber = 0;
function crystalRandomNumber(){
    crystalNumber = Math.floor(Math.random() * (13 - 1) + 1)
    return crystalNumber
}

var redCrystalNumber = crystalRandomNumber();
var blueCrystalNumber = crystalRandomNumber();
var yellowCrystalNumber = crystalRandomNumber();
var blackCrystalNumber = crystalRandomNumber();
var wins = 0;
var losses = 0;
var totalScore = 0;

function reset(){
    randomAnswer = Math.floor(Math.random() * (121- 19) + 19);
    $("#number").text(randomAnswer);
    totalScore = 0;
    $("#total-score-number").text(totalScore)
    redCrystalNumber = crystalRandomNumber();
    blueCrystalNumber = crystalRandomNumber();
    yellowCrystalNumber = crystalRandomNumber();
    blackCrystalNumber = crystalRandomNumber();      
}

function checkScores(){    
    if (totalScore > randomAnswer){        
        alert("Too many! You lose!")  
        losses = losses + 1
        $("#losses").text("Losses: "+ losses)        
        reset()        
    }
    else if (totalScore === randomAnswer){       
        wins = wins + 1;        
        $("#wins").text("Wins: "+ wins)
        alert("You win!!!!")
        reset()   
    }    
}

$("#red").click(function(){
    totalScore = totalScore + redCrystalNumber
    $("#total-score-number").text(totalScore)  
    checkScores()  
})

$("#blue").click(function(){
    totalScore = totalScore + blueCrystalNumber
    $("#total-score-number").text(totalScore)    
    checkScores()  
})

$("#yellow").click(function(){
    totalScore = totalScore + yellowCrystalNumber
    $("#total-score-number").text(totalScore)    
    checkScores()  

})

$("#black").click(function(){
    totalScore = totalScore + blackCrystalNumber
    $("#total-score-number").text(totalScore) 
    checkScores()
})






