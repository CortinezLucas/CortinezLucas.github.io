var sound2 = new Howl({
    src: ['audio/free.mp3'],
    volume: 0.5,
    loop: true,
    autoplay: false,
    onend: function() {
        console.log('Finished!');
    }
});

var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");

button1.addEventListener("click", playSound);

button2.addEventListener("click", function() {
    if (sound2.playing()) {
        sound2.pause();
    } else {
        sound2.play();
    }
});

function playSound() {
    if (sound2 != null) {
        sound2.stop();
    }
    sound2.play();
}

button2.addEventListener("click",togglePlayPause)
function togglePlayPause()
{
    return sound2.playing() ? sound2.pause(): sound2.play();

};