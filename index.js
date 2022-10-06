for(var i=0;i<document.querySelectorAll('button').length;i++){
    document.querySelectorAll('button')[i].addEventListener('click',gotclicked);
};
window.addEventListener('keydown',e => {
    play(e.key);
})
function gotclicked(){
    this.style.color = 'black';
    var key = this.innerHTML;
    play(key);
}
function play(key){
    var audio = new Audio();
    if(key === 'w' ){
    audio = new Audio('sounds/crash.mp3');
    }
    else if(key==='a'){
        audio = new Audio('sounds/kick-bass.mp3');
    }
    else if(key==='s'){
        audio = new Audio('sounds/snare.mp3');
    }
    else if(key==='d'){
        audio = new Audio('sounds/tom-1.mp3');
    }
    else if(key==='j'){
        audio = new Audio('sounds/tom-2.mp3');
    }
    else if(key==='k'){
        audio = new Audio('sounds/tom-3.mp3');
    }
    else if(key==='l'){
        audio = new Audio('sounds/tom-4.mp3');
    }
    audio.play();
}
