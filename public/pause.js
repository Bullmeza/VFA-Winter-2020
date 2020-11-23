let audio = []
let spinners;
let lefts = document.getElementsByClassName("left");
let rights = document.getElementsByClassName("right");

window.onload = function () {
    const players = document.getElementsByClassName("plyr");
    for (var x = 0; x < players.length; x++) {
        audio.push(new Plyr(players[x]));
    }
    spinners = document.getElementsByClassName("audio_player");


}


function pause() {
    let vids = document.getElementsByClassName("vimeo");
    for (var i = 0; i < vids.length; i++) {
        new Vimeo.Player(vids[i]).pause();
    }
    for (var i = 0; i < audio.length; i++) {
        audio[i].pause();
        audio[i].on("play", play);
        audio[i].on("pause", pauseSpinner);
    }

}

function play() {
    for (var x = 0; x < spinners.length; x++) {
        spinners[x].classList.add("rotate");
    }
}

function pauseSpinner() {
    for (var x = 0; x < spinners.length; x++) {
        spinners[x].classList.remove("rotate");
    }
}


$(document).ready(function () {
    var iframe = $('#intro_vid');
    var player = new Vimeo.Player(iframe);

    player.on('ended', function () {
        window.location.replace("#title0");
    });
});
window.onscroll = function () {
    if (window.location.hash.includes("title")) {
        document.getElementById("navbar").style.display = "block";

        for (var a = 0; a < lefts.length; a++) {
            lefts[a].classList.add("animate__animated", "animate__flash", "animate__delay-2s", "animate__slow");
        }
        for (var b = 0; b < rights.length; b++) {
            rights[b].classList.add("animate__animated", "animate__flash", "animate__delay-2s", "animate__slow");
        }
        this.setTimeout(function update() {
            for (var a = 0; a < lefts.length; a++) {
                lefts[a].classList.remove("animate__animated", "animate__flash", "animate__delay-2s", "animate__slow");
            }
            for (var b = 0; b < rights.length; b++) {
                rights[b].classList.remove("animate__animated", "animate__flash", "animate__delay-2s", "animate__slow");
            }
        }, 5000);
    } else {
        document.getElementById("navbar").style.display = "none";
    }
}



