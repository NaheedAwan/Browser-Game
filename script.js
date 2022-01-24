// creating Global Variables
score = 0
// creating Boolean variable
cross = true;

// creatin window reload function to restart game
function fun() {
    location.reload();
}
// attaching audio files
audio = new Audio('Dragon-Castle.mp3')
audio.play()

// creating on keyDown function for arrows keys

document.onkeydown = function (e) {
    console.log("The key code is:", e.keyCode)


    // moving character forward
    if (e.keyCode === 39) {
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
    // moving character upward
    else if (e.keyCode === 38) {
        document.querySelector('.player').classList.add('animatePlayer')
        setTimeout(() => {
            player.classList.remove('animatePlayer')
        }, 1000)
    }

}

// Detection of collision and announcing Game Over


setInterval(() => {
    player = document.querySelector('.player');
    gameOver = document.querySelector('.gameOver');
    hurdle = document.querySelector('.hurdle')

    // detecting players position around x and y axis
    pX = parseInt(window.getComputedStyle(player).getPropertyValue('left'))
    pY = parseInt(window.getComputedStyle(player).getPropertyValue('top'))
    // deteccting hurdle position around x and y axis

    hX = parseInt(window.getComputedStyle(hurdle).getPropertyValue('left'))
    hY = parseInt(window.getComputedStyle(hurdle).getPropertyValue('top'))

    // adding Math.abs to calculate offset values
    X = Math.abs(pX - hX)
    Y = Math.abs(pY - hY)
    // console.log(offsetY, offsetX)

    //  If collision Detected make game over visible
    if (X < 100 && Y < 40) {
        gameOver.style.visibility = 'visible'
        hurdle.classList.remove("animateDragon")
    }

    // if no collision , update score by 1
    else if (X < 100 && cross) {
        score += 1
        updateScore(score)
        cross = false;

        // making cross true again after 1 sec to update score accurately otherwise it kept on updating 
        setTimeout(() => {
            cross = true;
        }, 1000)

        // after every crossover decrease duration of hurdle
        decreaseDuration = a = parseFloat(window.getComputedStyle(hurdle).getPropertyValue('animation-duration'))
        newDuration = b = a - 0.2
        hurdle.style.animationDuration = b + 's'
        console.log(a, b)

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

