
// creatin window reload function to restart game
function fun() {
    location.reload();
}
// attaching audio files
audio = new Audio('gamePlay.m4a')
audio.play()

audio2 = new Audio('gameOver2.m4a')
audio2.pause()

audio3 = new Audio('gameWon3.m4a')
audio3.pause()

// creating an alert
function myAlert(){
    alert("This game can only be played on laptops and desktops, not designed for small devices\n Only children ages 4-8 can play")
}

// creating on keyDown function for arrows keys

document.onkeydown = function (e) {
    console.log("The key code is:", e.keyCode)
    if (!e.repeat) {

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
}


// creating Global Variables
score = 0
cross = true;

setInterval(() => {
    const player = document.querySelector('.player');
    const gameOver = document.querySelector('.gameOver');
    const hurdle = document.querySelector('.hurdle')
    const gameWon = document.querySelector('.gameWon')

    // detecting red character position around x and y axis
    pX = parseInt(window.getComputedStyle(player).getPropertyValue('left'))
    pY = parseInt(window.getComputedStyle(player).getPropertyValue('top'))

    // deteccting green character position around x and y axis
    hX = parseInt(window.getComputedStyle(hurdle).getPropertyValue('left'))
    hY = parseInt(window.getComputedStyle(hurdle).getPropertyValue('top'))

    // adding Math.abs to calculate offset values
    X = Math.abs(pX - hX)
    Y = Math.abs(pY - hY)

    //  If collision Detected make game over visible
    if (X < 80 && Y < 40) {
        gameOver.style.visibility = 'visible'
        hurdle.classList.remove("animateDragon")
        audio.pause()
        audio2.play()
        // myAlert()
    }
 

    // if no collision , update score by 1
    else if (X < 80 && cross) {
        score += 1
        updateScore(score)
        cross = false;
       console.log(score)
        // making cross true again after 1 sec to update score accurately otherwise it kept on updating 
        setTimeout(() => {
            cross = true;
        }, 1000)

        // after every crossover decrease duration of green character
        const duration = parseFloat(window.getComputedStyle(hurdle).getPropertyValue('animation-duration'))
        if (duration >= 1.6) {
            newDuration = duration - 0.1
            hurdle.style.animationDuration = newDuration + 's'
            console.log(duration, newDuration)
        }
        // if (score == 14) {
        //     gameWon.style.visibility = 'visible'
        //     hurdle.classList.remove("animateDragon")
        //     audio.pause()
        //     audio2.pause()
        //     audio3.play()
        // }
    }
  
}, 10)

// function for updating scores

function updateScore(score) {
    scoreCard = document.querySelector('#scoreCard')
    scoreCard.innerHTML = "Your score:" + score


}

// restart = document.getElementById("#restartButton").addEventListener("click", gameRestart)

// function gameRestart(){
//     location.reload();

//  }

