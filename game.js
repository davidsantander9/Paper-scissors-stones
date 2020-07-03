var choose_player = -1;
var choose_cpu = -1;
var myInterval;
var stone = 0;
var scissors = 1;
var paper = 2;
var isStartGame = false;

function startGame() {
    isStartGame = true;
    choose_player = -1;
    choose_cpu = -1;
    myInterval = setInterval(select_item, 200);
    document.getElementById("carousel_player").children[0].onclick = function() {choosePlayer(0)};
    document.getElementById("carousel_player").children[1].onclick = function() {choosePlayer(1)};
    document.getElementById("carousel_player").children[2].onclick = function() {choosePlayer(2)};
    document.getElementById("carousel_player").children[0].style.color = "#757575";
    document.getElementById("carousel_player").children[1].style.color = "#757575";
    document.getElementById("carousel_player").children[2].style.color = "#757575";
  }

function select_item(){
    var i = Math.floor((Math.random() *3 ));
    document.getElementById("carousel_cpu").children[0].style.color = "#757575";
    document.getElementById("carousel_cpu").children[1].style.color = "#757575";
    document.getElementById("carousel_cpu").children[2].style.color = "#757575";
    if(choose_cpu < 0 ){
        document.getElementById("carousel_cpu").children[i].style.color = "#0b8ee0";
    }else{
        document.getElementById("carousel_cpu").children[choose_cpu].style.color = "#0b8ee0";
    }
    
}

function choosePlayer(i){
    choose_player = i;
    choose_cpu = Math.floor((Math.random() *3 ));
    clearInterval(myInterval);
    if(choose_player == choose_cpu){
        document.getElementById("result").innerHTML = "Draw";
    }if(choose_player == stone && choose_cpu == scissors){
        document.getElementById("result").innerHTML = "You win";
    }else if(choose_player == stone && choose_cpu == paper){
        document.getElementById("result").innerHTML = "You lost";
    }else if(choose_player == scissors && choose_cpu == paper){
        document.getElementById("result").innerHTML = "You win";
    }else if(choose_player == scissors && choose_cpu == stone){
        document.getElementById("result").innerHTML = "You lost";
    }else if(choose_player == paper && choose_cpu == stone){
        document.getElementById("result").innerHTML = "You win";
    }else if(choose_player == paper && choose_cpu == scissors){
        document.getElementById("result").innerHTML = "You lost";
    }
    select_item();
    document.getElementById("carousel_player").children[i].style.color = "#0b8ee0";
}




