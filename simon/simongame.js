let user=[];
let game=[];

let levelup=0;
let bb=["navy","peal","beige","red"]
let keypressed=false;
let p=document.querySelector("p");
document.addEventListener("keypress",function(event){
    if(keypressed===false){
        keypressed=true;
        gamelevelup();
    }

})

function buttonglowup(bt){
    bt.classList.add("w");
    setTimeout(function(){
        bt.classList.remove("w");
    },250);
}

function gamelevelup(){
    user=[];
    levelup+=1;
    p.innerText=`${levelup}`;
    let random=Math.floor(Math.random()*3);
    let color=bb[random];
    let btn=document.querySelector(`.${color}`);
    game.push(color);
    console.log(game);
    buttonglowup(btn);
}
function check(k){
    if(user[k]===game[k]){
        if(user.length==game.length){
            setTimeout(gamelevelup(),1000);
        }
    }else{
        p.innerHTML=`your score is <b>${levelup}<b>.<br> please enter any key to restart your game `;
        reset();
    }
}

let btns=document.querySelectorAll(".button");
function userbtn(bt){
    let h=this;
    buttonglowup(h)
    let m=this.getAttribute("id");
    user.push(m);
    check(user.length-1);
}
for( btn of btns){
    btn.addEventListener("click",userbtn);
}
function reset(){
    keypressed=false;
    user=[];
    game=[];
    levelup=0;
}