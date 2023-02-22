const player =new Tone.Player("https://tonejs.github.io/audio/berklee/gong_1.mp3").toDestination();
player.loop = true;

function start() {
    player.start();
}

function stop() {
    player.stop();
}

function closeModal() {
    let modal = document.getElementById("popup");
    modal.style.display="none";
    Tone.start();
}

function handleFile() {
    let file = document.querySelector('input[type=file]').files[0];
    let audioURL = URL.createObjectURL(file);
    player.load(audioURL);
}

/* Method of loading audio files adapted from these links:
https://codepen.io/ankerpeet/pen/GQRdLK
https://stackoverflow.com/questions/70910548/play-loaded-audio-file-with-tone-js-web-audio-framework
https://editor.p5js.org/llelell/sketches/3icSjW6xQ
*/