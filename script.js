const player = new Tone.Player().toDestination();
player.playbackRate = 1;
// player.loop = true;

// Array to hold all audio files uploaded by user
let audioFiles = [];

// Position in array of next loaded file
let loadFileNum = 0;

// Position of next file to play in array
let playFileNum = 0;

// Flag signifying whether app is playing or not
let isPlaying = 0;

// Without async/await here, the player starts before the 
// audio file has finished loading
player.onstop = async () => {
    console.log(`playFileNum before: ${playFileNum}`);
    if (isPlaying) {
        if (playFileNum < loadFileNum - 1) {
            playFileNum++;
        } else {
            playFileNum = 0;
        }
        await player.load(audioFiles[playFileNum]);
        player.start();
    }
    console.log(`playFileNum after: ${playFileNum}`);
}

function start() {
    player.start();
    isPlaying = 1;
}

function stop() {
    player.stop();
    playFileNum = 0;
    isPlaying = 0;
}

function closeModal() {
    let modal = document.getElementById("popup");
    modal.style.display="none";
    Tone.start();
}

function handleFiles() {
    let files = document.getElementById("file-input").files;
    for (let i = 0; i < files.length; i++) {
        let audioURL = URL.createObjectURL(files[i]);
        audioFiles[loadFileNum] = audioURL;
        loadFileNum++;
    }
    player.load(audioFiles[0]);
}

/* Method of loading audio files adapted from these links:
https://codepen.io/ankerpeet/pen/GQRdLK
https://stackoverflow.com/questions/70910548/play-loaded-audio-file-with-tone-js-web-audio-framework
https://editor.p5js.org/llelell/sketches/3icSjW6xQ
*/