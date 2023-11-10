const board = document.querySelector('.board')
export const boxes = [...document.querySelectorAll(".box")];
export const winnerPopUp = document.querySelector('.winner')
export const winnerPopUpText = winnerPopUp.querySelector('.winner-text')
export const overlay = document.querySelector('.overlay')
const winnerPopUpResetButton = document.querySelector('.restart')
const winnerPopUpQuitButton = document.querySelector('.quit')

export let turn = 'x'
let gameOver = false

function determineWinner(sign) {
    let xWins = JSON.parse(localStorage.getItem('xWins')) ;
    let oWins =  JSON.parse(localStorage.getItem('oWins'));
    if (boxes[0].innerHTML === `${sign}` && boxes[1].innerHTML === `${sign}` && boxes[2].innerHTML === `${sign}` ) {
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
        boxes[0].classList.toggle('win')
        boxes[1].classList.toggle('win')
        boxes[2].classList.toggle('win')
    } else if ( boxes[3].innerHTML === `${sign}` && boxes[4].innerHTML === `${sign}` && boxes[5].innerHTML === `${sign}` ) {
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
        boxes[3].classList.toggle('win')
        boxes[4].classList.toggle('win')
        boxes[5].classList.toggle('win')
    } else if (boxes[6].innerHTML === `${sign}` && boxes[7].innerHTML === `${sign}` && boxes[8].innerHTML === `${sign}`) {
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
        boxes[6].classList.toggle('win')
        boxes[7].classList.toggle('win')
        boxes[8].classList.toggle('win')
    } else if (boxes[0].innerHTML === `${sign}` && boxes[3].innerHTML === `${sign}` && boxes[6].innerHTML === `${sign}`) {
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
        boxes[0].classList.toggle('win')
        boxes[3].classList.toggle('win')
        boxes[6].classList.toggle('win')
    } else if (boxes[1].innerHTML === `${sign}` && boxes[4].innerHTML === `${sign}` && boxes[7].innerHTML === `${sign}`) {
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
        boxes[1].classList.toggle('win')
        boxes[4].classList.toggle('win')
        boxes[7].classList.toggle('win')
    } else if (boxes[2].innerHTML === `${sign}` && boxes[5].innerHTML === `${sign}` && boxes[8].innerHTML === `${sign}`) {
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
        boxes[2].classList.toggle('win')
        boxes[5].classList.toggle('win')
        boxes[8].classList.toggle('win')
    } else if (boxes[0].innerHTML === `${sign}` && boxes[4].innerHTML === `${sign}` && boxes[8].innerHTML === `${sign}`) {
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
        boxes[0].classList.toggle('win')
        boxes[4].classList.toggle('win')
        boxes[8].classList.toggle('win')
    } else if ( boxes[2].innerHTML === `${sign}` && boxes[4].innerHTML === `${sign}` && boxes[6].innerHTML === `${sign}`) {
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
        boxes[2].classList.toggle('win')
        boxes[4].classList.toggle('win')
        boxes[6].classList.toggle('win')
    } else if (boxes[0].innerHTML !== '' 
    && boxes[1].innerHTML !== ''
    && boxes[2].innerHTML !== ''
    && boxes[3].innerHTML !== ''
    && boxes[4].innerHTML !== ''
    && boxes[5].innerHTML !== ''
    && boxes[6].innerHTML !== ''
    && boxes[7].innerHTML !== ''
    && boxes[8].innerHTML !== ''
    ) {
        overlay.classList.add('active')
        winnerPopUp.classList.add('active')
        winnerPopUpText.innerHTML = `It's a Tie!`
    }

    localStorage.getItem('xWins', JSON.stringify(xWins))
    localStorage.getItem('oWins', JSON.stringify(oWins))
}

function restartGame() {  
    winnerPopUpResetButton.addEventListener('click', () => {
        winnerPopUp.classList.remove('active')
        overlay.classList.remove('active')
        for (let i = 0; i <= 8; i++) {
            if (boxes[i].innerHTML === 'x' || boxes[i].innerHTML === 'o') {
                boxes[i].innerHTML = ''
                boxes[i].classList.remove('win')
                turn = 'x'
                console.log('clear')
            }
        }
    })
}
    
    winnerPopUpQuitButton.addEventListener('click', () => {
        winnerPopUp.classList.remove('active')
        overlay.classList.remove('active')
        gameOver = true
    })
    
    restartGame()


boxes.forEach((box) => {
    box.addEventListener('click', () => {
        if (gameOver === false) {
        if (box.innerHTML === '') {
            if (turn === 'x') {
                box.innerHTML = 'x'
                determineWinner('x')
                turn = 'o'
                console.log('x')
            } else if (turn === 'o') {
                box.innerHTML = 'o'
                determineWinner('o')
                console.log('o')
                turn = 'x'
            }    
        }
    } 
        
    })
})