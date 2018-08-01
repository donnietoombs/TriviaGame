$(document).ready(function() {
    var timeLeft = 15;
    var answerGuess;

    var questions = [
        {
            question: "How many superbowls have the Washington Redskins Won?",
            answers: ["3", "4", "5", "0"],
            correctChoice: "3",
        },

        {
            question: "What city do the Cowboys play in?",
            answers: ["Houston", "Baltimore", "Miami", "Dallas"],
            correctChoice: "Dallas",
        },

        {
            question: "The superbowl trophy is named after what famous coach?",
            answers: ["Bill Belichick", "Vince Lombardi", "Nick Saban", "Joe Gibbs"],
            correctChoice: "Vince Lombardi",
        }

    ];


    

    function startGame() {
        $(".startBtn").hide();
        $("#gamePlay").html("<p>You have <span id='timer'>" + timeLeft + "</span> seconds left!</p>");
        questionContent();
        gameTimer();
        userTimeout();
       
    }

    function gameTimer() {
        clock = setInterval(countDown, 1000);
        function countDown() {
            if (timeLeft < 1) {
                clearInterval(clock);
                userTimeout();
            }
            if (timeLeft > 0) {
                timeLeft--;
            }
            $("#timer").html("<strong>" + timeLeft + "</strong>");
        }
    }

        function restartGame(){
            console.log("hello");
            $("#gamePlay").empty;
            $("#gamePlay").html("<p>You have <span id='timer'>" + timeLeft + "</span> seconds left!</p>");
            questionContent();
            gameTimer();
            userTimeout();

            
        }
    function userTimeout() {
    if (timeLeft === 0) {
        $("#gamePlay").html("<p>You ran out of time!</p>");
        $("#gamePlay").append("<button id='restartBtn'>Start Again</button>")
        $("#restartBtn").click(restartGame);            
    }
    }

    function questionContent() {
        $("#gamePlay").append("<div class='questionShow'><strong>" +
            questions[0].question + "<div class='answerBox'><label for='name'>Please Click Your Answer Below: Answer Will Show in Box Below!</label>" + "<div class='answerChoice' id ='aChoice1'><label for='choice'></label>" + "</div>" +
            "</div><br>" +
            "<div class='answers1'>" +
            questions[0].answers[0] +
            "</div>" +
            "<div class='answers1'>" +
            questions[0].answers[1] +
            "</div>" +
            "<div class='answers1'>" +
            questions[0].answers[2] +
            "</div>" +
            "<div class='answers1'>" +
            questions[0].answers[3] +
            "</strong></div>" + "<br>");


        $("#gamePlay").append("<div class ='questionShow'><strong>" +
            questions[1].question + "<div class='answerBox'><label for='name'>Please Click Your Answer Below: Answer Will Show in Box Below!</label>" + "<div class='answerChoice' id ='aChoice2'><label for='choice'></label>" + "</div>" +
            "</div><br>" +
            "<div class='answers2'>" +
            questions[1].answers[0] +
            "</div>" +
            "<div class='answers2'>" +
            questions[1].answers[1] +
            "</div>" +
            "<div class='answers2'>" +
            questions[1].answers[2] +
            "</div>" +
            "<div class='answers2'>" +
            questions[1].answers[3] +
            "</strong></div>" + "<br>");


        $("#gamePlay").append("<div class='questionShow'><strong>" +
            questions[2].question + "<div class='answerBox'><label for='name'>Please Click Your Answer Below: Answer Will Show in Box Below!</label>" + "<div class='answerChoice' id ='aChoice3'><label for='choice'></label>" + "</div>" +
            "</div><br>" +
            "<div class='answers3'>" +
            questions[2].answers[0] +
            "</div>" +
            "<div class='answers3'>" +
            questions[2].answers[1] +
            "</div>" +
            "<div class='answers3'>" +
            questions[2].answers[2] +
            "</div>" +
            "<div class='answers3'>" +
            questions[2].answers[3] +
            "</strong></div><br>");

    }
    $(".startBtn").click(startGame);


    $("#gamePlay").on("click", ".answers1", (function () {

        var answerGuess1 = $(this).text();

        $("#aChoice1").text(answerGuess1);
        if (answerGuess1 === questions[0].correctChoice) {
            alert("Great. You got the right Answer!")
           
        }
        else {
            var wrongAns= answerGuess1 + ":  " + "Wrong Answer. Please Try Again!"
            
            $("#aChoice1").text(wrongAns);
        }
    }));

    $("#gamePlay").on("click", ".answers2", (function () {
        var answerGuess2 = $(this).text();
        console.log(answerGuess2);

        $("#aChoice2").text(answerGuess2);
        if (answerGuess2 === questions[1].correctChoice) {
            alert("Great. You got the right Answer!")
           
        }
        else {
            var wrongAns= answerGuess2 + ":  " + "Wrong Answer. Please Try Again!"
            
            $("#aChoice2").text(wrongAns);
        }
    }));

    $("#gamePlay").on("click", ".answers3", (function () {

        var answerGuess3 = $(this).text();
      
        $("#aChoice3").text(answerGuess3);
        if (answerGuess3 === questions[2].correctChoice) {
            alert("Great. You got the right Answer!")
           
        }
        else {
            var wrongAns= answerGuess3 + ":  " + "Wrong Answer. Please Try Again!"
            
            $("#aChoice3").text(wrongAns);
        }
    }));
});