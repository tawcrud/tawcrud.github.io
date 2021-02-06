function sampleFunction() {
    location.reload();
  }

var var_rand = Math.floor(Math.random()*10);
//alert(var_rand);

var user_input = 0;
var historical_inputs = "";
var max_chances = 3;
for (i = 0; i < max_chances;i++){
    if (historical_inputs == ""){
        user_input = prompt(`Enter Number between 1 and 10 \n \n Chances Left =  ${max_chances}`);
        historical_inputs = historical_inputs + user_input;
    }
    else if (historical_inputs != ""){
        user_input = prompt(`Enter Number between 1 and 10 \n \n Your previous inputs were: ${historical_inputs} \n \n Chances Left = ${max_chances - i} `);
        historical_inputs = historical_inputs + " - " +user_input;
    }

    if (user_input == var_rand){
//        document.getElementById("root").innerHTML = "correct";
        alert("You Win");
        break;
    }
    else if (user_input > var_rand) {
        //document.getElementById("root").innerHTML = "incorrect";

        alert("Correct answer is smaller!");
        if (i==max_chances-1){
            alert("You Lose!");
        }
    }
    else if (user_input < var_rand) {
        //document.getElementById("root").innerHTML = "incorrect";

        alert("Correct answer is greater!");
        if (i==max_chances-1){
            alert("You Lose!");
        }
    }    
}


