const board = document.querySelector('.board')
const boxes = [...document.querySelectorAll(".box")];

let turn = 'x'

function determineWinner(sign) {
    if (boxes[0].innerHTML === `${sign}` && boxes[1].innerHTML === `${sign}` && boxes[2].innerHTML === `${sign}` ) {
        console.log(`${sign} win`)
        boxes[0].style.color = 'green'
        boxes[1].style.color = 'green'
        boxes[2].style.color = 'green'
    } else if ( boxes[3].innerHTML === `${sign}` && boxes[4].innerHTML === `${sign}` && boxes[5].innerHTML === `${sign}` ) {
        console.log(`${sign} win`)
        boxes[3].style.color = 'green'
        boxes[4].style.color = 'green'
        boxes[5].style.color = 'green'
    } else if (boxes[6].innerHTML === `${sign}` && boxes[7].innerHTML === `${sign}` && boxes[8].innerHTML === `${sign}`) {
        console.log(`${sign} win`)
        boxes[6].style.color = 'green'
        boxes[7].style.color = 'green'
        boxes[8].style.color = 'green'
    } else if (boxes[0].innerHTML === `${sign}` && boxes[3].innerHTML === `${sign}` && boxes[6].innerHTML === `${sign}`) {
        console.log(`${sign} win`)
        boxes[0].style.color = 'green'
        boxes[3].style.color = 'green'
        boxes[6].style.color = 'green'
    } else if (boxes[1].innerHTML === `${sign}` && boxes[4].innerHTML === `${sign}` && boxes[7].innerHTML === `${sign}`) {
        console.log(`${sign} win`)
        boxes[1].style.color = 'green'
        boxes[4].style.color = 'green'
        boxes[7].style.color = 'green'
    } else if (boxes[2].innerHTML === `${sign}` && boxes[5].innerHTML === `${sign}` && boxes[8].innerHTML === `${sign}`) {
        console.log(`${sign} win`)
        boxes[2].style.color = 'green'
        boxes[5].style.color = 'green'
        boxes[8].style.color = 'green'
    } else if (boxes[0].innerHTML === `${sign}` && boxes[4].innerHTML === `${sign}` && boxes[8].innerHTML === `${sign}`) {
        console.log(`${sign} win`)
        boxes[0].style.color = 'green'
        boxes[4].style.color = 'green'
        boxes[8].style.color = 'green'
    } else if ( boxes[2].innerHTML === `${sign}` && boxes[4].innerHTML === `${sign}` && boxes[6].innerHTML === `${sign}`) {
        console.log(`${sign} win`)
        boxes[2].style.color = 'green'
        boxes[4].style.color = 'green'
        boxes[6].style.color = 'green'
    }
}


boxes.forEach((box) => {
    box.addEventListener('click', () => {
        let i = 1
        if (i < 9) {
            i++
        }
        if (box.innerHTML === '') {
            if (turn === 'x') {
                box.innerHTML = 'x'
                determineWinner('x')
                turn = 'o'
            } else if (turn === 'o') {
                box.innerHTML = 'o'
                determineWinner('o')
                turn = 'x'
            }    
        }
        
    })
})