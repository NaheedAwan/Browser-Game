// creating Global Variables
score = 0
// creating Boolean variable
cross = true;

// creating on keyDown function for arrows keys

document.onkeydown = function (e) {
    console.log("The key code is:", e.keyCode)

    // moving character upward
    if (e.keyCode === 38) {
        document.querySelector('.player').classList.add('animatePlayer')
        setTimeout(() => {
            player.classList.remove('animatePlayer')
        }, 1000)
    }

    // moving character forward
    else if (e.keyCode === 39) {
        player = document.querySelector('.player');
        playerX = parseInt(window.getComputedStyle(player).getPropertyValue('left'))
        player.style.left = playerX + 80 + 'px'
    }

    //moving character backward
    else if (e.keyCode === 37) {
        player = document.querySelector('.player');
        playerX = parseInt(window.getComputedStyle(player).getPropertyValue('left'))
        player.style.left = playerX - 80 + 'px'
    }
}

// Detection of collision and announcing Game Over


setInterval(() => {
    player = document.querySelector('.player');
    gameOver = document.querySelector('.gameOver');
    hurdle = document.querySelector('.hurdle')
    // score = document.querySelector('#scoreCan')

    pX  = parseInt(window.getComputedStyle(player, null).getPropertyValue('left'))
    
    pY  = parseInt(window.getComputedStyle(player, null).getPropertyValue('top'))

    hX = parseInt(window.getComputedStyle(hurdle, null).getPropertyValue('left'))
    hY = parseInt(window.getComputedStyle(hurdle, null).getPropertyValue('top'))

    // adding Math.abs to calculate offset values
    offsetX = Math.abs(pX - hX)
    offsetY = Math.abs(pY - hY)
    // console.log(offsetY, offsetX)

    //  If collision Detected make game over visible
    if (offsetX < 150 && offsetY < 40) {
        gameOver.style.visibility = 'visible'
        hurdle.classList.remove("animateDragon")
    }

    // if no collision , update score by 1
    else if (offsetX < 140 && cross) {
        score += 1
        updateScore(score)
        cross = false;

        // making cross true again after 1 sec to update score accurately
        setTimeout(() => {
            cross = true;
        }, 1000)

        // after everycross over decrease duration of hurdle
        // decreaseDuration = a = parseFloat(window.getComputedStyle(hurdle, null).getPropertyValue('animation.duration'))
        // newDuration = b = a - 0.8
        // hurdle.style.animationDuration = b + 's'

    }

}, 100)

// function for updating scores

function updateScore(score) {
    scoreContainer = document.querySelector('#scoreContainer')
    scoreContainer.innerHTML = "Your score:" + score
}

// restart = document.getElementById("#restartButton").addEventListener("click", gameRestart)

// function gameRestart(){
//     location.reload();

//  }

function fun() {
    location.reload();
    }