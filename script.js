window.addEventListener('keydown',function(e){
    const audio=document.querySelector(`audio[data-key="${e.keyCode}"`);
    const key=document.querySelector(`.key[data-key="${e.keyCode}"]`)
    if(!audio){
        return;
    }
   audio.currentTime=0;//
   key.classList.add('playing')
    audio.play();
    
});
function removeTransition(e){
    if(e.propertyName!='transform')
    return;
    console.log(this.classList.remove('playing'))
}
const keys=document.querySelectorAll('.key');
keys.forEach(key=>key.addEventListener('transitionend',removeTransition))
