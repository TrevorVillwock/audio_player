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