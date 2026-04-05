let gamesequence = [];
let usersequence = [];
let buttoncol =["blue","red","green","yellow"]; 
let start =false;
let level=0;
let para = document.querySelector(".para");
document.addEventListener("keypress",function(){
    if(start==false){
    console.log("game started");
    start=true;
    levelup();
}
})


function gameflash(btn){
    btn.classList.add("gflash");
    setTimeout(function(){
        btn.classList.remove("gflash");
    },500);


}


function userflash(btn){
    btn.classList.add("uflash");
    setTimeout(function(){
        btn.classList.remove("uflash");
    },500);
}



function levelup(){
    usersequence = [];
    level++;
    para.textContent=`level ${level}`;


    //random button choose 
    let randindex = Math.floor(Math.random()* 4);
    let randcol = buttoncol[randindex];
    let randbtn = document.querySelector(`.${randcol}`);
    gamesequence.push(randcol);
    gameflash( randbtn);

}
function checkanswer(){
    let index = usersequence.length - 1;

    if(usersequence[index] === gamesequence[index]){
        console.log("correct");

        // ⭐ ONLY when full sequence matched
        if(usersequence.length === gamesequence.length){
            setTimeout(levelup, 1000);
        }

    } else {
        console.log("game over");
        para.textContent = "game over, press any key to restart";
        //score
        para.insertAdjacentHTML("beforeend", `<br>your score is ${level}`);
         start = false;
    gamesequence = [];
    usersequence = [];
    level = 0;
}
    }

function buttonPress(){
    console.log(this);
    let btn = this;
    userflash(btn);
    let userbtn = btn.getAttribute("id");
    usersequence.push(userbtn);
    console.log(usersequence);
    console.log(gamesequence);
    checkanswer();



}
let allbtn = document.querySelectorAll(".b , .c, .d, .e");
for(btn of allbtn){
    btn.addEventListener("click",buttonPress);
}