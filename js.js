

var CurrentVal = "X";
var gameOver = false;
const boxes = document.getElementsByClassName("box");
const WinCombo = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

function AddVal(num) {
    let ID = "" + num ;
    if (document.getElementById(ID).innerHTML !== '') return;
    if (gameOver) return;
    if (CurrentVal == "X"){
        document.getElementById(ID).innerHTML = 'X';
        document.getElementById("player").innerHTML = 'X';
        CurrentVal = 'O';
    }else {
        document.getElementById(ID).innerHTML='O';
        document.getElementById("player").innerHTML = 'O';
        CurrentVal = 'X';
    }

    checkWin();
}

function checkWin() {
    for (let i = 0; i <= WinCombo.length; i++) {
        let ID = [];
        for (let j = 0; j <= WinCombo[0].length ; j++) {
            ID[j] = ""+ WinCombo[i][j];
        }
        if (document.getElementById(ID[0]).innerHTML == ""){
            continue;
        }
        if (document.getElementById(ID[0]).innerHTML === document.getElementById(ID[1]).innerHTML && document.getElementById(ID[1]).innerHTML === document.getElementById(ID[2]).innerHTML){
            document.getElementById("winner").innerHTML = document.getElementById(ID[0]).innerHTML;
            gameOver = true;
            if (gameOver){
                $("#myModal").modal({backdrop: 'static', keyboard: false})
            }
            break;
        }

    }

}
function reSet() {

    for (let i = 0; i < boxes.length; i++) {
        boxes[i].innerHTML = "";
    }
    gameOver = false;
}