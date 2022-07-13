// TODO: Declare any global variables we need

//Buttons
let flipCoin = document.getElementById('flip')
let clearScore = document.getElementById('clear')

//Data Variables
let totalHeads = 0
let totalTails = 0
let headsCount = document.getElementById('heads')
let headsPercent = document.getElementById('heads-percent')
let tailsCount = document.getElementById('tails')
let tailsPercent = document.getElementById('tails-percent')

let coinImage = document.getElementById('coin')
let outcome = document.querySelector('.message-container')


// TODO: Add event listener and handler for flip and clear buttons

// Flip Button Click Handler
flipCoin.addEventListener('click', function () {

    // TODO: Determine flip outcome
    let flipHeads = Math.random() < 0.5
    
    if (flipHeads) {
        // TODO: Update image and status message in the DOM
        coinImage.src = "assets/images/penny-heads.jpg"
    // Update the scoreboard
        // TODO: Calculate the total number of rolls/flips
        totalHeads++

        outcome.textContent = "You flipped HEADS!"
    }
    else {
        coinImage.src = "assets/images/penny-tails.jpg"
        totalTails++
        outcome.textContent = "You flipped TAILS!"
    }

// Make variables to track the percentages of heads and tails
    // TODO: Use the calculated total to calculate the percentages
    let totalFlips = totalHeads + totalTails
    // HINT: Make sure not to divide by 0! (if total is 0, percent will be 0 as well)
    // TODO: Update the display of each table cell
    if (totalFlips > 0) {
        headsPercent.textContent = Math.round((totalHeads/totalFlips)*100) + "%"
        tailsPercent.textContent = Math.round((totalTails/totalFlips)*100) + "%"
        headsCount.textContent = totalHeads
        tailsCount.textContent = totalTails
    }
    
})

// Clear Button Click Handler
clearScore.addEventListener('click', function () {
    // TODO: Reset global variables to 0
    totalFlips = 0
    totalHeads = 0
    totalTails = 0
    outcome.textContent = "Let's Get Rolling!"

    // TODO: Update the scoreboard (same logic as in flip button click handler)
    headsCount.textContent = totalHeads
    headsPercent.textContent = "0%"
    tailsCount.textContent = totalTails
    tailsPercent.textContent = "0%"  
})