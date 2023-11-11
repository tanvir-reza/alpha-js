window.addEventListener('keyup', function (e) {
    const audio = this.document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = this.document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!audio) return;
    audio.currentTime = 0; 
    let word = e.key
    this.document.getElementById("show").innerHTML = word.toUpperCase();
    key.classList.add('playing')
    this.setInterval(function () {
        
    })
    audio.play();
    
})