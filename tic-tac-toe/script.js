console.log("welcome to tictactoe")

let audioturn = new Audio("click.mp3")
let gameover = new Audio("loose.mp3")
let turn = "X"
let isgameover = false;


const changeTurn = () => {
    return turn === "X" ? "0" : "X"
}

const checkwin = () => {
    let boxtext = document.getElementsByClassName('boxtext');
    let wins =[
    [0, 1, 2, 1, 6, 0],
    [3, 4, 5, 1, 16, 0],
    [6, 7, 8, 1, 27, 0],
    [0, 3, 6, -10, 16, 90],
    [1, 4, 7, 1, 17, 90],
    [2, 5, 8, 12, 16, 90],
    [0, 4, 8, 2, 17, 45],
    [2, 4, 6, 1, 16, 135],
    ]
    wins.forEach(e =>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")){
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won"
            isgameover = true;
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "300px"
            document.querySelector(".line").style.width = "31vw";
            document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
        }
    })
}

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', () => {
        if (boxtext.innerText === '') {
            boxtext.innerText = turn;
            turn = changeTurn();
            audioturn.play();
            checkwin();
            if(!isgameover){
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
            }
        }
    })
})

let reset = document.getElementById('reset');
reset.addEventListener('click', ()=>{
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerText = ""
    });
    turn = "X"; 
    isgameover = false
    document.querySelector(".line").style.width = "0vw";
    document.getElementsByClassName("info")[0].innerText  = "Start The Game : Player " + turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px"

})