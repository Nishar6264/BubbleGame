var timer = 60;
var score = 0;
var hitrn = 0;

function increaseScore(){
    score +=10;
    document.querySelector("#scoreValue").textContent = score;
}

function getNewHit(){
    var  hitrn =  Math.floor(Math.random()*10);
    document.querySelector("#hitValue").textContent = hitrn;
}

function makeBubble() {
    var clutter = "";
    for (let index = 1; index <= 120; index++) {
        let rn = Math.floor(Math.random() * 10)
        clutter += `<div class="bubble">${rn}</div>`;
    }
    document.querySelector("#pbtm").innerHTML = clutter;
}

function runTimer(){
  var timerint =  setInterval(function(){
        if(timer>0){
            timer--;
            document.querySelector("#timerValue").textContent = timer;
        }else{
            clearInterval(timerint);
        }        
    },1000)
}


document.querySelector("#pbtm")
.addEventListener("click",function(details){
     var clickednum = Number(details.target.textContent);
     console.log(clickednum);
     console.log(hitrn);
     if(clickednum === hitrn){
        increaseScore();
        makeBubble();
        getNewHit();
     }
})
runTimer();
makeBubble();
getNewHit();

