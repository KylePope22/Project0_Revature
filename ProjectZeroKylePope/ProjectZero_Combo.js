//Initialize global variables.
count = 0;  //Counts # of times buttons are clicked.
gameover = false;  //Flag to determine when the game has ended.
btnArray = document.getElementsByClassName("TicBtn");

//Handle selection of radio inputs.
document.getElementById("single").addEventListener("click", singlePlayer);
document.getElementById("double").addEventListener("click", twoPlayer);

//Function for logic behind two player mode
function twoPlayer () {
    //Hide game mode selection menu and make gameboard visible.
    document.getElementById("menu").style.visibility = "hidden";
    document.getElementById("ticTable").style.visibility = "visible";
    //Loop to add event listeners to all elements in btnArray
    for(i = 0; i < btnArray.length; i++){
        btnArray[i].innerHTML = " ";  //Initialize innerHTML to faulsy value.
        btnArray[i].addEventListener("click",function(){
            count++;
            //Remove instruction row.
            if (count == 1) {
                document.getElementById("ticTable").deleteRow(0);
            }
            //Function call to populate innerHTML of button clicked.
            event.target.innerHTML = Symbol2P();
            //Function call to check if either player has won.
            if (count >= 5 && count < 10){
                chk2PWin();
            }
            this.disabled = true;
        });
    }
    
    //Function that determins the turn and thus the symbol to populate the active button with.
    function Symbol2P() {
        console.log();
        if(count%2 == 1)
        return "X";
        else
        return "O";
    }
    
    //Function that determines if a player has connected 3 of the same symbol and update "gameover" flag.
    function chk2PWin() {
        if ((btnArray[0].innerHTML != " " && btnArray[0].innerHTML == btnArray[1].innerHTML && btnArray[1].innerHTML == btnArray[2].innerHTML) || (btnArray[3].innerHTML != " " && btnArray[3].innerHTML == btnArray[4].innerHTML && btnArray[4].innerHTML == btnArray[5].innerHTML) || (btnArray[6].innerHTML != " " && btnArray[6].innerHTML == btnArray[7].innerHTML && btnArray[7].innerHTML == btnArray[8].innerHTML) || (btnArray[0].innerHTML != " " && btnArray[0].innerHTML == btnArray[3].innerHTML && btnArray[3].innerHTML == btnArray[6].innerHTML) || (btnArray[1].innerHTML != " " && btnArray[1].innerHTML == btnArray[4].innerHTML && btnArray[4].innerHTML == btnArray[7].innerHTML) || (btnArray[2].innerHTML != " " && btnArray[2].innerHTML == btnArray[5].innerHTML && btnArray[5].innerHTML == btnArray[8].innerHTML) || (btnArray[0].innerHTML != " " && btnArray[0].innerHTML == btnArray[4].innerHTML && btnArray[4].innerHTML == btnArray[8].innerHTML) || (btnArray[2].innerHTML != " " && btnArray[2].innerHTML == btnArray[4].innerHTML && btnArray[4].innerHTML == btnArray[6].innerHTML)){
            alert("Congradulations!!!!! Player " + Symbol2P() + ". You won!!!!!!!");
            gameover = true;
            location.reload();
            return;
        }
        //Used to output message if no player has connected 3 symbols.
        if (count == 9) {
            alert("Sorry, nobody won this time :(");
            gameover = true;
            location.reload();
            return;
        }
        return;
    };
}

//Function for logic behind single player mode.
function singlePlayer () {
    //Hide game mode selection menu and make gameboard visible.
    document.getElementById("menu").style.visibility = "hidden";
    document.getElementById("ticTable").style.visibility = "visible";
    //Loop to add event listeners to all elements in btnArray.
    for(i = 0; i < btnArray.length; i++){
        btnArray[i].innerHTML = " ";  //Initialize innerHTML to faulsy value.
        btnArray[i].addEventListener("click",function(){
            count++;
            if (count == 1) {
                //Remove instruction row.
                document.getElementById("ticTable").deleteRow(0);
            }
            //Function call to populate innerHTML of button clicked.
            event.target.innerHTML = "X";
            //Function call to check if either player has won.
            if (count >= 5 && count < 10){
                chk1PWin();
            }
            //Function call to populate random button for AI turn.
            ai();
            this.disabled = true;
        });
    }

    //Function for selecting random button to populate with "O".
    function ai() {
        if (gameover == false) {
            var flag = false;
            while (flag == false) {
                var btn = btnArray[Math.floor(Math.random() * btnArray.length)];
                if (btn.innerHTML == " ") {
                    btn.innerHTML = "O";
                    btn.disabled = true;
                    flag = true;
                }
            }
            //Function call to determine if the ai has won.
            count++;
            chk1PWin();
        }
        return;
    }
    
    //Function that determines if the user player has connected 3 of the same symbol and update "gameover" flag.
    function chk1PWin() {
        if ((btnArray[0].innerHTML != " " && btnArray[0].innerHTML == btnArray[1].innerHTML && btnArray[1].innerHTML == btnArray[2].innerHTML) || (btnArray[3].innerHTML != " " && btnArray[3].innerHTML == btnArray[4].innerHTML && btnArray[4].innerHTML == btnArray[5].innerHTML) || (btnArray[6].innerHTML != " " && btnArray[6].innerHTML == btnArray[7].innerHTML && btnArray[7].innerHTML == btnArray[8].innerHTML) || (btnArray[0].innerHTML != " " && btnArray[0].innerHTML == btnArray[3].innerHTML && btnArray[3].innerHTML == btnArray[6].innerHTML) || (btnArray[1].innerHTML != " " && btnArray[1].innerHTML == btnArray[4].innerHTML && btnArray[4].innerHTML == btnArray[7].innerHTML) || (btnArray[2].innerHTML != " " && btnArray[2].innerHTML == btnArray[5].innerHTML && btnArray[5].innerHTML == btnArray[8].innerHTML) || (btnArray[0].innerHTML != " " && btnArray[0].innerHTML == btnArray[4].innerHTML && btnArray[4].innerHTML == btnArray[8].innerHTML) || (btnArray[2].innerHTML != " " && btnArray[2].innerHTML == btnArray[4].innerHTML && btnArray[4].innerHTML == btnArray[6].innerHTML)) {
            if (count%2 == 1) {
                alert("Congradulations!!!!! Player X. You won!!!!!!!");
                gameover = true;
                location.reload();
                return;
            }
            else {
                alert("Sorry, the A.I. won this time :(");
                gameover = true;
                location.reload();
                return;
            }
        }
        //Used to output message if no player has connected 3 symbols.
        if (count == 9) {
            alert("Sorry, nobody won this time :(");
            gameover = true;
            location.reload();
            return;
        }
        return;
    }
}