let score = 0;
let cross = true;
const scoreCount = document.querySelector('.scoreCount');

document.onkeydown = function(e) {
    console.log("Key code is: ", e.keyCode);
    var batman = document.querySelector('.batman');

    if (e.keyCode == 38) {
        // Up Arrow - Jump
        batman.classList.add('animateBatman');
        setTimeout(function() {
            batman.classList.remove('animateBatman');
        }, 900);
    }
    if (e.keyCode == 39) {
        // Right Arrow - Move right
        var batx = parseInt(window.getComputedStyle(batman, null).getPropertyValue('left'));
        batman.style.left = batx + 112 + "px";
    }
    if (e.keyCode == 37) {
        // Left Arrow - Move left
        var batx = parseInt(window.getComputedStyle(batman, null).getPropertyValue('left'));
        batman.style.left = batx - 200 + "px";
    }
};

setInterval(() => {
    var batman = document.querySelector('.batman');
    var gameOver = document.querySelector('.gameOver');
    var bane = document.querySelector('.bane');

    var batx = parseInt(window.getComputedStyle(batman, null).getPropertyValue('left'));
    var baty = parseInt(window.getComputedStyle(batman, null).getPropertyValue('top'));
    var banex = parseInt(window.getComputedStyle(bane, null).getPropertyValue('left'));
    var baney = parseInt(window.getComputedStyle(bane, null).getPropertyValue('top'));

    var offsetx = Math.abs(batx - banex);
    var offsety = Math.abs(baty - baney);

    console.log(`batx: ${batx}, baty: ${baty}, banex: ${banex}, baney: ${baney}, offsetx: ${offsetx}, offsety: ${offsety}`);

    if (offsetx < 50 && offsety < 50) {
        // Collision detected
        gameOver.style.visibility = 'visible';
        bane.classList.remove('baneAnimation');
    } else if (offsetx < 145 && cross) {
        score += 1;
        updateScore(score);
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000);
    }
}, 10);

function updateScore(score) {
    scoreCount.innerHTML = "Score: " + score;
}

setTimeout(() => {
    var centeredText = document.getElementById('centeredText');
    centeredText.style.display = 'block';
}, 2000); // Show after 2 seconds
