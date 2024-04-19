

const playButton = document.getElementById('playButton');
const pauseButton = document.getElementById('pauseButton');

playButton.addEventListener('click', () => {
    sound.play();
});

pauseButton.addEventListener('click', () => {
    sound.pause();
});