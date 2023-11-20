const boxes1 = [...document.querySelectorAll(".box")];
const overlay = document.querySelector('.overlay')
const winnerPopUpResetButton = document.querySelector('.restart')
const winnerPopUpQuitButton = document.querySelector('.quit')
const winnerPopUp = document.querySelector('.winner')
const winnerPopUpText = winnerPopUp.querySelector('.winner-text')

let turnedO = false

let usedNumbers = []

function determineWinner(sign) {
    let xWins = JSON.parse(localStorage.getItem('xWins')) ;
    let oWins =  JSON.parse(localStorage.getItem('oWins'));
    if (boxes1[0].innerHTML === `${sign}` && boxes1[1].innerHTML === `${sign}` && boxes1[2].innerHTML === `${sign}` ) {
        console.log(`${sign} win`)
        overlay.classList.add('active')
        winnerPopUp.classList.add('active')
        winnerPopUpText.innerHTML = `${sign.toUpperCase()} Won!`
        
        if (sign === 'x') {
            xWins += 1
            console.log(xWins)
        } else if (sign === 'o') {
            oWins += 1 
            console.log(oWins)
        }
        boxes1[0].classList.toggle('win')
        boxes1[1].classList.toggle('win')
        boxes1[2].classList.toggle('win')
    } else if ( boxes1[3].innerHTML === `${sign}` && boxes1[4].innerHTML === `${sign}` && boxes1[5].innerHTML === `${sign}` ) {
        console.log(`${sign} win`)
        overlay.classList.add('active')
        winnerPopUp.classList.add('active')
        winnerPopUpText.innerHTML = `${sign.toUpperCase()} Won!`
        
        if (sign === 'x') {
            xWins += 1
            console.log(xWins)
        } else if (sign === 'o') {
            oWins += 1 
            console.log(oWins)
        }
        boxes1[3].classList.toggle('win')
        boxes1[4].classList.toggle('win')
        boxes1[5].classList.toggle('win')
    } else if (boxes1[6].innerHTML === `${sign}` && boxes1[7].innerHTML === `${sign}` && boxes1[8].innerHTML === `${sign}`) {
        console.log(`${sign} win`)
        overlay.classList.add('active')
        winnerPopUp.classList.add('active')
        winnerPopUpText.innerHTML = `${sign.toUpperCase()} Won!`
        
        if (sign === 'x') {
            xWins += 1
            console.log(xWins)
        } else if (sign === 'o') {
            oWins += 1 
            console.log(oWins)
        }
        boxes1[6].classList.toggle('win')
        boxes1[7].classList.toggle('win')
        boxes1[8].classList.toggle('win')
    } else if (boxes1[0].innerHTML === `${sign}` && boxes1[3].innerHTML === `${sign}` && boxes1[6].innerHTML === `${sign}`) {
        console.log(`${sign} win`)
        overlay.classList.add('active')
        winnerPopUp.classList.add('active')
        winnerPopUpText.innerHTML = `${sign.toUpperCase()} Won!`
        
        if (sign === 'x') {
            xWins += 1
            console.log(xWins)
        } else if (sign === 'o') {
            oWins += 1 
            console.log(oWins)
        }
        boxes1[0].classList.toggle('win')
        boxes1[3].classList.toggle('win')
        boxes1[6].classList.toggle('win')
    } else if (boxes1[1].innerHTML === `${sign}` && boxes1[4].innerHTML === `${sign}` && boxes1[7].innerHTML === `${sign}`) {
        console.log(`${sign} win`)
        overlay.classList.add('active')
        winnerPopUp.classList.add('active')
        winnerPopUpText.innerHTML = `${sign.toUpperCase()} Won!`
        
        if (sign === 'x') {
            xWins += 1
            console.log(xWins)
        } else if (sign === 'o') {
            oWins += 1 
            console.log(oWins)
        }
        boxes1[1].classList.toggle('win')
        boxes1[4].classList.toggle('win')
        boxes1[7].classList.toggle('win')
    } else if (boxes1[2].innerHTML === `${sign}` && boxes1[5].innerHTML === `${sign}` && boxes1[8].innerHTML === `${sign}`) {
        console.log(`${sign} win`)
        overlay.classList.add('active')
        winnerPopUp.classList.add('active')
        winnerPopUpText.innerHTML = `${sign.toUpperCase()} Won!`
        
        if (sign === 'x') {
            xWins += 1
            console.log(xWins)
        } else if (sign === 'o') {
            oWins += 1 
            console.log(oWins)
        }
        boxes1[2].classList.toggle('win')
        boxes1[5].classList.toggle('win')
        boxes1[8].classList.toggle('win')
    } else if (boxes1[0].innerHTML === `${sign}` && boxes1[4].innerHTML === `${sign}` && boxes1[8].innerHTML === `${sign}`) {
        console.log(`${sign} win`)
        overlay.classList.add('active')
        winnerPopUp.classList.add('active')
        winnerPopUpText.innerHTML = `${sign.toUpperCase()} Won!`
        
        if (sign === 'x') {
            xWins += 1
            console.log(xWins)
        } else if (sign === 'o') {
            oWins += 1 
            console.log(oWins)
        }
        boxes1[0].classList.toggle('win')
        boxes1[4].classList.toggle('win')
        boxes1[8].classList.toggle('win')
    } else if ( boxes1[2].innerHTML === `${sign}` && boxes1[4].innerHTML === `${sign}` && boxes1[6].innerHTML === `${sign}`) {
        console.log(`${sign} win`)
        overlay.classList.add('active')
        winnerPopUp.classList.add('active')
        winnerPopUpText.innerHTML = `${sign.toUpperCase()} Won!`
        
        if (sign === 'x') {
            xWins += 1
            console.log(xWins)
        } else if (sign === 'o') {
            oWins += 1 
            console.log(oWins)
        }
        boxes1[2].classList.toggle('win')
        boxes1[4].classList.toggle('win')
        boxes1[6].classList.toggle('win')
    } else if (boxes1[0].innerHTML !== '' 
    && boxes1[1].innerHTML !== ''
    && boxes1[2].innerHTML !== ''
    && boxes1[3].innerHTML !== ''
    && boxes1[4].innerHTML !== ''
    && boxes1[5].innerHTML !== ''
    && boxes1[6].innerHTML !== ''
    && boxes1[7].innerHTML !== ''
    && boxes1[8].innerHTML !== ''
    ) {
        overlay.classList.add('active')
        winnerPopUp.classList.add('active')
        winnerPopUpText.innerHTML = `It's a Tie!`
    }

    localStorage.getItem('xWins', JSON.stringify(xWins))
    localStorage.getItem('oWins', JSON.stringify(oWins))
}

function botMove() {
    let randomNumber;
    do {
    randomNumber = Math.floor(Math.random() * 10);
    } while (usedNumbers.includes(randomNumber));

    console.log(usedNumbers)
    console.log(randomNumber)
    usedNumbers.push(randomNumber)
    boxes1[randomNumber].innerHTML = 'o'
    determineWinner('o')
}

boxes1.forEach((box, index) => {
    box.addEventListener('click', () => {
        if (box.innerHTML === '') {
            box.innerHTML = 'x'
            usedNumbers.push(index)
            botMove()
            determineWinner('x')
        }

    })
})