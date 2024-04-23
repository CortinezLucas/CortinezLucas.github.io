// Import the Howler.js library
import { Howl } from 'howler';

// Define a class for the audio player
class AudioPlayer {
  constructor(playlist) {
    this.playlist = playlist;
    this.index = 0;
    this.sound = null;
    this.isPlaying = false;

    this.trackTitle = document.getElementById('track-title');
    this.duration = document.getElementById('duration');
    this.timer = document.getElementById('timer');
    this.playBtn = document.getElementById('play-btn');
    this.pauseBtn = document.getElementById('pause-btn');
    this.prevBtn = document.getElementById('prev-btn');
    this.nextBtn = document.getElementById('next-btn');

    // Handle button clicks
    this.playBtn.addEventListener('click', () => this.play());
    this.pauseBtn.addEventListener('click', () => this.pause());
    this.prevBtn.addEventListener('click', () => this.skip('prev'));
    this.nextBtn.addEventListener('click', () => this.skip('next'));

    // Load the first track
    this.loadTrack(0);
  }

  loadTrack(index) {
    const { howl } = this.playlist[index];

    // Stop the current sound if it's playing
    if (this.sound) {
      this.sound.stop();
    }

    // Load the new sound and set up event listeners
    this.sound = howl;
    this.sound.once('load', () => {
      this.duration.textContent = this.formatTime(Math.round(this.sound.duration()));
      this.trackTitle.textContent = `${index + 1}. ${this.playlist[index].title}`;
    });
    this.sound.on('end', () => this.skip('next'));
  }

  play() {
    this.sound.play();
    this.isPlaying = true;
    this.playBtn.style.display = 'none';
    this.pauseBtn.style.display = 'inline-block';
    requestAnimationFrame(this.updateTimer.bind(this));
  }

  pause() {
    this.sound.pause();
    this.isPlaying = false;
    this.playBtn.style.display = 'inline-block';
    this.pauseBtn.style.display = 'none';
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
    this.loadTrack(index);
    this.index = index;
    this.isPlaying ? this.play() : this.pause();
  }

  updateTimer() {
    const seek = this.sound.seek() || 0;
    this.timer.textContent = this.formatTime(Math.round(seek));
    if (this.isPlaying) {
      requestAnimationFrame(this.updateTimer.bind(this));
    }
  }

  formatTime(secs) {
    const minutes = Math.floor(secs / 60) || 0;
    const seconds = (secs - minutes * 60) || 0;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  }
}

// Example usage
const playlist = [
  {
    title: 'Track 1',
    howl: new Howl({
      src: ['audio/track1.mp3'],
      html5: true,
    }),
  },
  {
    title: 'Track 2',
    howl: new Howl({
      src: ['audio/track2.mp3'],
      html5: true,
    }),
  },
  // Add more tracks as needed
];

const player = new AudioPlayer(playlist);