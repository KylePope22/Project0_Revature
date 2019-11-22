count = 0;
gameover = false;
btnArray = document.getElementsByClassName("TicBtn");


for(i = 0; i < btnArray.length; i++){
    btnArray[i].innerHTML = " ";
    btnArray[i].addEventListener("click",function(){
        count++;
        event.target.innerHTML = func();
        if (count >= 5 && count < 10){
            chkWin();
        }
        this.disabled = true;
    });
}

function func() {
    if(count%2 == 1)
    return "X";
    else
    return "O";
}

function chkWin() {
    if ((btnArray[0].innerHTML != " " && btnArray[0].innerHTML == btnArray[1].innerHTML && btnArray[1].innerHTML == btnArray[2].innerHTML) || (btnArray[3].innerHTML != " " && btnArray[3].innerHTML == btnArray[4].innerHTML && btnArray[4].innerHTML == btnArray[5].innerHTML) || (btnArray[6].innerHTML != " " && btnArray[6].innerHTML == btnArray[7].innerHTML && btnArray[7].innerHTML == btnArray[8].innerHTML) || (btnArray[0].innerHTML != " " && btnArray[0].innerHTML == btnArray[3].innerHTML && btnArray[3].innerHTML == btnArray[6].innerHTML) || (btnArray[1].innerHTML != " " && btnArray[1].innerHTML == btnArray[4].innerHTML && btnArray[4].innerHTML == btnArray[7].innerHTML) || (btnArray[2].innerHTML != " " && btnArray[2].innerHTML == btnArray[5].innerHTML && btnArray[5].innerHTML == btnArray[8].innerHTML) || (btnArray[0].innerHTML != " " && btnArray[0].innerHTML == btnArray[4].innerHTML && btnArray[4].innerHTML == btnArray[8].innerHTML) || (btnArray[2].innerHTML != " " && btnArray[2].innerHTML == btnArray[4].innerHTML && btnArray[4].innerHTML == btnArray[6].innerHTML)){
        alert("Congradulations!!!!! Player " + func() + ". You won!!!!!!!");
        gameover = true;
        location.reload();
        return;
    }
    if (count == 9) {
        alert("Sorry, nobody won this time :(");
        gameover = true;
        location.reload();
        return;
    }
    return;
};