let gameseq=[];
let userSeq=[];
let btns = ["yellow", "red", "purple", "green"]


let started = false;
let level = 0;
let h2 = document.querySelector("h2");

document.addEventListener("keypress", function(){
    if(started == false){
        console.log("game started");
        started = true;
        levelup();
    }
});

function gameFlash(btn){
    btn.classList.add("flash");// backgroun clr chng krega jo clisk hoga
    setTimeout(function(){ // 1sec k baad jo clr pehle tha vo aaega
        btn.classList.remove("flash");
    }, 200);
}
function userFlash(btn){
    btn.classList.add("userflash");// backgroun clr chng krega jo clisk hoga
    setTimeout(function(){ // 1sec k baad jo clr pehle tha vo aaega
        btn.classList.remove("userflash");
    }, 200);
}
function levelup(){
    userSeq = [];
    level++;
    h2.innerText = `Level: ${level}`;


    let randIdx = Math.floor(Math.random() * 3);
    let randomcolor = btns[randIdx];
    let randBtn = document.querySelector(`.${randomcolor}`)
    //random btn choose
    // console.log(randIdx); 
    // console.log(randomcolor); 
    // console.log(randBtn); 

    gameseq.push(randomcolor);
    //console.log(gameseq);
    gameFlash(randBtn);
}

function checkans(idx){
    console.log("cur level: ", level);
    
    if(userSeq[idx] === gameseq[idx]){
        if(userSeq.length == gameseq.length){
            setTimeout(levelup, 1000);
            
        }
    }else{
        h2.innerHTML = `Game over! Your score was <b>${level}</b> <br>press any key to start.`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        }, 500);
        reset();
    }
}
//function
function btnPress(){
    //console.log(this);
    let btn = this;
    
    userFlash(btn);
    userColor = btn.getAttribute("id");
    // console.log(userColor);
    userSeq.push(userColor);
    checkans(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click", btnPress);
}


function reset() {
    started = false;
    gameseq = [];
    userSeq = [];
    level = 0;
}