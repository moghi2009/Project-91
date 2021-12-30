var player1_name = localStorage.getItem("player1-name");
var player2_name = localStorage.getItem("player2-name");
var score_player1 = 0;
var score_player2 = 0;

document.getElementById("player1_score").innerHTML = score_player1;
document.getElementById("player2_score").innerHTML = score_player2;

document.getElementById("player1-name").innerHTML = player1_name + " ;;"
document.getElementById("player2_name").innerHTML = player2_name + " ;;"

document.getElementById("player_question").innerHTML = "Question turn" + player1_name;
document.getElementById("player_anuswer").innerHTML = "Answer turn" + player2_name;

function send(){
    get_number1 = document.getElementById("number1").value;
    get_number2 = document.getElementById("number2").value;
    get_actualAnswer = parseInt(number1) * parseInt(number2);
    question_number = "<h4>" + number1 +  " X" + number2 + "</h4>"
    input_box = "<br>Answer : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>"
    row = question_number + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("number1").value = " ";
    document.getElementById("number2").value = " ";
}