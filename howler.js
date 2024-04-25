var sound2 = new Howl({
    src: ['../audio/free.mp3'],
    volume: 0.5,
    loop: true,
    autoplay: false,
    onend: function() {
        console.log('Finished!');
    }
});
/*
var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");
*/

button1.addEventListener("click", sound2.play());

function playSound() {
    if (sound2 != null) 
    {
        sound2.stop();
    } 
    sound2.play();
}

button2.addEventListener("click",togglePlayPause)
function togglePlayPause()
{
    return sound2.playing() ? sound2.pause(): sound2.play();

};

button2.addEventListener("click", togglePlayPause);
 {
    if (sound2.playing()) {
        sound.pause();
    } else {
        sound2.play();
    }
};

var Player = function(playlist)
{
    this.playlist=playlist;
    this.index=0;

    Track.innerHTML ='1. ' + playlist[0].title;
    playlist.forEach(function(song)
    {
        var div = document.createElement('div');
        div.className='list-song';
        div.innerHTML = song.title;
        div.onclick = function()
        {
            player.skipTo(playlist.indexOf(song));
        };
        list.appendChild(div);
    });
}

var player = new Player
([
    {
    title: 'Free',
    file: 'free.mp3',
    howl: null
    }
])

Player.prototype=
{
    play: function(index)
    {
        var self=this;
        var sound;

        index = typeof index === 'number' ? index : self.index;
        var data = self.playlist[index];

        if (data.howl)
        {
            sound = data.howl;
        }
        else 
        {
            sound = data.howl = new Howl
            ({
                src: ['audio/' + data.file + '.mp3'],
                html5: true,
                onplay: function(){
                    duration.innerHTML = self.formatTime(Math.round(sound.duration()));
                    requestAnimationFrame(self.step.bind(self));
                }
            })
        }
    },
}
    pause: function() {
        var self=this;
        var sound= self.playlist[self.index].howl;
        sound.pause();
    
        playButton.style.display='block';
        pauseButton.style.dispay='none';
    },
    sound.play();
    track.innerHTML = (index + 1) + '. ' + data.title;

    if (sound.state() === 'loaded')
    {
        playButton.style.display = 'none';
        pauseBtn.style.display = 'block';
    }
    self.index = index;

    skip: function(direction)
    {
        var self = this;
        var index = 0;

        if (direction === 'prev'){
            index = self.index - 1;
            if (index < 0){
                index = self.playlist.length - 1;
            }
        } else {
            index = self.index + 1;
            if (index >= self.playlist.length){
                index = 0;
            }
        }

        self.skipTo(index);
    },
    skipTo: function(index){
        var self = this;

        if (self.playlist[self.index].howl){
            self.playlist[self.index].howl.stop();
        }

        self.play(index);
    },

    step: function(){
        var self= this;
        var sound = self.playlist[self.index].howl;
        var seek = sound.seek() || 0;
        timer.innerHTML= self.formatTime(Math.round(seek));
        if (sound.playing()){
            requestAnimationFrame(self.step.bind(self));
        }
    },

    formatTime:function(secs){
        var minutes = Math.floor(secs / 60) || 0;
        var seconds = (secs - minutes * 60) || 0;

        return minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
    }
};

playBtn.addEventListener('click', function(){
    player.play();
});
pauseBtn.addEventListener('click', function(){
    player.pause();
});
prevBtn.addEventListener('click', function(){
    player.skip('prev');
});
nextBtn.addEventListener('click', function(){
    player.skip('next')
});


