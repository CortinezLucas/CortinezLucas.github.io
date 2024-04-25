// Define the playlist data
const playlist = [
    {
        title: 'Free',
        file: '../audio/free.mp3'
    },
    {
        title: 'Song 2',
        file: 'song2'
    },
    // Add more songs as needed
];

// Declare variables
let sound2;
const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const playBtn = document.getElementById("playBtn");
const pauseBtn = document.getElementById("prevBtn");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const track = document.getElementById("track");
const timer = document.getElementById("timer");
const duration = document.getElementById("duration");
const list = document.getElementById("list");

// Create a new Player instance
const player = new Player(playlist);

// Event listeners
button1.addEventListener("click", playSound);
button2.addEventListener("click", togglePlayPause);
playBtn.addEventListener('click', () => player.play());
pauseBtn.addEventListener('click', () => player.pause());
prevBtn.addEventListener('click', () => player.skip('prev'));
nextBtn.addEventListener('click', () => player.skip('next'));

// Play sound function
function playSound() {
    if (sound2 != null) {
        sound2.stop();
    }
    sound2 = new Howl({
        src: ['../audio/free.mp3'],
        volume: 0.5,
        loop: true,
        autoplay: true,
        onend: function() {
            console.log('Finished!');
        }
    });
}

// Toggle play/pause function
function togglePlayPause() {
    if (sound2 && sound2.playing()) {
        sound2.pause();
    } else if (sound2) {
        sound2.play();
    }
}

// Player class
class Player {
    constructor(playlist) {
        this.playlist = playlist;
        this.index = 0;

        // Set the initial track
        track.innerHTML = '1. ' + playlist[0].title;

        // Populate the playlist
        playlist.forEach((song, index) => {
            const div = document.createElement('div');
            div.className = 'list-song';
            div.innerHTML = song.title;
            div.onclick = () => {
                this.skipTo(index);
            };
            list.appendChild(div);
        });
    }

    play(index) {
        const self = this;
        index = typeof index === 'number' ? index : self.index;
        const data = self.playlist[index];

        // If the sound is already loaded, play it
        if (data.howl) {
            data.howl.play();
        } else {
            // Otherwise, load and play the sound
            data.howl = new Howl({
                src: [`audio/${data.file}.mp3`],
                html5: true,
                onplay: () => {
                    duration.innerHTML = self.formatTime(Math.round(data.howl.duration()));
                    requestAnimationFrame(self.step.bind(self));
                }
            });
            data.howl.play();
        }

        track.innerHTML = `${index + 1}. ${data.title}`;
        if (data.howl.state() === 'loaded') {
            playBtn.style.display = 'none';
            pauseBtn.style.display = 'block';
        }
        self.index = index;
    }

    pause() {
        const self = this;
        const sound = self.playlist[self.index].howl;
        sound.pause();
        playBtn.style.display = 'block';
        pauseBtn.style.display = 'none';
    }

    skip(direction) {
        let index = this.index;
        if (direction === 'prev') {
            index = this.index - 1;
            if (index < 0) {
                index = this.playlist.length - 1;
            }
        } else {
            index = this.index + 1;
            if (index >= this.playlist.length) {
                index = 0;
            }
        }
        this.skipTo(index);
    }

    skipTo(index) {
        const self = this;
        if (self.playlist[self.index].howl) {
            self.playlist[self.index].howl.stop();
        }
        self.play(index);
    }

    step() {
        const self = this;
        const sound = self.playlist[self.index].howl;
        const seek = sound.seek() || 0;
        timer.innerHTML = self.formatTime(Math.round(seek));
        if (sound.playing()) {
            requestAnimationFrame(self.step.bind(self));
        }
    }

    formatTime(secs) {
        const minutes = Math.floor(secs / 60) || 0;
        const seconds = (secs - minutes * 60) || 0;
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    }
}