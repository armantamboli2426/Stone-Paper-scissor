let userscore=0;
let compscore=0;
const choice=document.querySelectorAll(".choice");
const msgb=document.querySelector("#msgbox");
const userscore1=document.querySelector("#userscore");
const comscore1=document.querySelector("#comp-score");

const gencomch=()=>{
    const option=["rock","paper","scissor"];
    const randidx=Math.floor(Math.random() * 3);
    return option[randidx];
};
const drawgame=()=>{
    console.log("game was draw");
    msgb.innerText="Game Was Draw Play Again";
    msgb.style.backgroundColor = "violet"
}
const showwinner=(userwin,userchoice,comchoice)=>{
    if(userwin){
        userscore++;
        userscore1.innerText=userscore;
        console.log("You Win");
        msgb.innerText=`you win ! your ${userchoice} beats ${comchoice}`;
        msgb.style.backgroundColor = "green";
    }
    else{
        compscore++;
        comscore1.innerText=compscore;
        msgb.innerText=`You lost ! ${comchoice} beats ${userchoice}`;
        msgb.style.backgroundColor = "red";
        console.log("you lose");
    }
}
const playgame=(userchoice)=>{
    console.log("userchoice=",userchoice);
    const comchoice=gencomch();
    console.log("comchoice=",comchoice);
    if(userchoice===comchoice){
        drawgame();
    }
    else{
        let userwin=true;
        if(userchoice==="rock"){
            userwin=comchoice==="paper" ? false :true;
        }
        else if(userchoice==="paper"){
            userwin=comchoice==="scissors" ? false :true;
        }
        else{
           userwin= comchoice==="rock" ? false: true;
        }
        showwinner(userwin,userchoice,comchoice);
    }
};
choice.forEach((choice) => {
    choice.addEventListener("click",()=>{
const userchoice=choice.getAttribute("id");

playgame(userchoice);
    })
});