const box1 = document.querySelector('.box1')
const box2 = document.querySelector('.box2')
const box3 = document.querySelector('.box3')
const box4 = document.querySelector('.box4')
const box5 = document.querySelector('.box5')
const box6 = document.querySelector('.box6')
const box7 = document.querySelector('.box7')
const box8 = document.querySelector('.box8')
const box9 = document.querySelector('.box9')
const move1 = document.querySelector('.xOrO1')
const move2 = document.querySelector('.xOrO2')
const move3 = document.querySelector('.xOrO3')
const move4 = document.querySelector('.xOrO4')
const move5 = document.querySelector('.xOrO5')
const move6 = document.querySelector('.xOrO6')
const move7 = document.querySelector('.xOrO7')
const move8 = document.querySelector('.xOrO8')
const move9 = document.querySelector('.xOrO9')
const displayBox = document.querySelector('.container')
let myIntervalX;
let myIntervalO;
let i = 0;



displayBox.addEventListener('click', () => {
    if (i < 9) {
        i++
    }
    console.log(i)
})


box1.addEventListener('click', () => {
    if (i === 0 && move1.innerHTML !== 'O') {
        move1.innerHTML = 'x'
    } else if (i === 1 && move1.innerHTML !== 'x') {
        move1.innerHTML = 'O'
    }  else if (i === 2 && move1.innerHTML !== 'O') {
        move1.innerHTML = 'x'
    }   else if (i === 3 && move1.innerHTML !== 'x') {
        move1.innerHTML = 'O'
    } else if (i === 4 && move1.innerHTML !== 'O') {
        move1.innerHTML = 'x'
    } else if (i === 5 && move1.innerHTML !== 'x') {
        move1.innerHTML = 'O'
    } else if (i === 6 && move1.innerHTML !== 'O') {
       move1.innerHTML = 'x'
    } else if (i === 7 && move1.innerHTML !== 'x') {
        move1.innerHTML = 'O'
    } else if (i === 8 && move1.innerHTML !== 'O') {
        move1.innerHTML = 'x'
    } else if (i === 9 && move1.innerHTML !== 'x') {
        move1.innerHTML = 'O'
    }
    checkWin()
})
box2.addEventListener('click', () => {
    if (i === 0 && move2.innerHTML !== 'O') {
        move2.innerHTML = 'x'
    } else if (i === 1 && move2.innerHTML !== 'x') {
        move2.innerHTML = 'O'
    }  else if (i === 2 && move2.innerHTML !== 'O') {
        move2.innerHTML = 'x'
    }   else if (i === 3 && move2.innerHTML !== 'x') {
        move2.innerHTML = 'O'
    } else if (i === 4 && move2.innerHTML !== 'O') {
        move2.innerHTML = 'x'
    } else if (i === 5 && move2.innerHTML !== 'x') {
        move2.innerHTML = 'O'
    } else if (i === 6 && move2.innerHTML !== 'O') {
        move2.innerHTML = 'x'
    } else if (i === 7 && move2.innerHTML !== 'x') {
        move2.innerHTML = 'O'
    } else if (i === 8 && move2.innerHTML !== 'O') {
        move2.innerHTML = 'x'
    } else if (i === 9 && move2.innerHTML !== 'x') {
        move2.innerHTML = 'O'
    }
    checkWin()
   
})
box3.addEventListener('click', () => {
    if (i === 0 && move3.innerHTML !== 'O') {
        move3.innerHTML = 'x'
    } else if (i === 1 && move3.innerHTML !== 'x') {
        move3.innerHTML = 'O'
    }  else if (i === 2 && move3.innerHTML !== 'O') {
        move3.innerHTML = 'x'
    }   else if (i === 3 && move3.innerHTML !== 'x') {
        move3.innerHTML = 'O'
    } else if (i === 4 && move3.innerHTML !== 'O') {
        move3.innerHTML = 'x'
    } else if (i === 5 && move3.innerHTML !== 'x') {
        move3.innerHTML = 'O'
    } else if (i === 6 && move3.innerHTML !== 'O') {
        move3.innerHTML = 'x'
    } else if (i === 7 && move3.innerHTML !== 'x') {
        move3.innerHTML = 'O'
    } else if (i === 8 && move3.innerHTML !== 'O') {
        move3.innerHTML = 'x'
    } else if (i === 9 && move3.innerHTML !== 'x') {
        move3.innerHTML = 'O'
    }
    checkWin()
})
box4.addEventListener('click', () => {
    if (i === 0 && move4.innerHTML !== 'O') {
        move4.innerHTML = 'x'
    } else if (i === 1 && move4.innerHTML !== 'x') {
        move4.innerHTML = 'O'
    }  else if (i === 2 && move4.innerHTML !== 'O') {
        move4.innerHTML = 'x'
    }   else if (i === 3 && move4.innerHTML !== 'x') {
        move4.innerHTML = 'O'
    } else if (i === 4 && move4.innerHTML !== 'O') {
        move4.innerHTML = 'x'
    } else if (i === 5 && move4.innerHTML !== 'x') {
        move4.innerHTML = 'O'
    } else if (i === 6 && move4.innerHTML !== 'O') {
        move4.innerHTML = 'x'
    } else if (i === 7 && move4.innerHTML !== 'x') {
        move4.innerHTML = 'O'
    } else if (i === 8 && move4.innerHTML !== 'O') {
        move4.innerHTML = 'x'
    } else if (i === 9 && move4.innerHTML !== 'x') {
        move4.innerHTML = 'O'
    } 
    checkWin()
})
box5.addEventListener('click', () => {
    if (i === 0 && move5.innerHTML !== 'O') {
        move5.innerHTML = 'x'
    } else if (i === 1 && move5.innerHTML !== 'x') {
        move5.innerHTML = 'O'
    }  else if (i === 2 && move5.innerHTML !== 'O') {
        move5.innerHTML = 'x'
    }   else if (i === 3 && move5.innerHTML !== 'x') {
        move5.innerHTML = 'O'
    } else if (i === 4 && move5.innerHTML !== 'O') {
        move5.innerHTML = 'x'
    } else if (i === 5 && move5.innerHTML !== 'x') {
        move5.innerHTML = 'O'
    } else if (i === 6 && move5.innerHTML !== 'O') {
        move5.innerHTML = 'x'
    } else if (i === 7 && move5.innerHTML !== 'x') {
        move5.innerHTML = 'O'
    } else if (i === 8 && move5.innerHTML !== 'O') {
        move5.innerHTML = 'x'
    } else if (i === 9 && move5.innerHTML !== 'x') {
        move5.innerHTML = 'O'
    }
    checkWin()
})
box6.addEventListener('click', () => {
    if (i === 0 && move6.innerHTML !== 'O') {
        move6.innerHTML = 'x'
    } else if (i === 1 && move6.innerHTML !== 'x') {
        move6.innerHTML = 'O'
    }  else if (i === 2 && move6.innerHTML !== 'O') {
        move6.innerHTML = 'x'
    }   else if (i === 3 && move6.innerHTML !== 'x') {
        move6.innerHTML = 'O'
    } else if (i === 4 && move6.innerHTML !== 'O') {
        move6.innerHTML = 'x'
    } else if (i === 5 && move6.innerHTML !== 'x') {
        move6.innerHTML = 'O'
    } else if (i === 6 && move6.innerHTML !== 'O') {
        move6.innerHTML = 'x'
    } else if (i === 7 && move6.innerHTML !== 'x') {
        move6.innerHTML = 'O'
    } else if (i === 8 && move6.innerHTML !== 'O') {
        move6.innerHTML = 'x'
    } else if (i === 9 && move6.innerHTML !== 'x') {
        move6.innerHTML = 'O'
    }
    checkWin()
})
box7.addEventListener('click', () => {
    if (i === 0 && move7.innerHTML !== 'O') {
        move7.innerHTML = 'x'
    } else if (i === 1 && move7.innerHTML !== 'x') {
        move7.innerHTML = 'O'
    }  else if (i === 2 && move7.innerHTML !== 'O') {
        move7.innerHTML = 'x'
    }   else if (i === 3 && move7.innerHTML !== 'x') {
        move7.innerHTML = 'O'
    } else if (i === 4 && move7.innerHTML !== 'O') {
        move7.innerHTML = 'x'
    } else if (i === 5 && move7.innerHTML !== 'x') {
        move7.innerHTML = 'O'
    } else if (i === 6 && move7.innerHTML !== 'O') {
        move7.innerHTML = 'x'
    } else if (i === 7 && move7.innerHTML !== 'x') {
        move7.innerHTML = 'O'
    } else if (i === 8 && move7.innerHTML !== 'O') {
        move7.innerHTML = 'x'
    } else if (i === 9 && move7.innerHTML !== 'x') {
        move7.innerHTML = 'O'
    }
    checkWin()
})
box8.addEventListener('click', () => {
    if (i === 0 && move8.innerHTML !== 'O') {
        move8.innerHTML = 'x'
    } else if (i === 1 && move8.innerHTML !== 'x') {
        move8.innerHTML = 'O'
    }  else if (i === 2 && move8.innerHTML !== 'O') {
        move8.innerHTML = 'x'
    }   else if (i === 3 && move8.innerHTML !== 'x') {
        move8.innerHTML = 'O'
    } else if (i === 4 && move8.innerHTML !== 'O') {
        move8.innerHTML = 'x'
    } else if (i === 5 && move8.innerHTML !== 'x') {
        move8.innerHTML = 'O'
    } else if (i === 6 && move8.innerHTML !== 'O') {
        move8.innerHTML = 'x'
    } else if (i === 7 && move8.innerHTML !== 'x') {
        move8.innerHTML = 'O'
    } else if (i === 8 && move8.innerHTML !== 'O') {
        move8.innerHTML = 'x'
    } else if (i === 9 && move8.innerHTML !== 'x') {
        move8.innerHTML = 'O'
    }
    checkWin()
})
box9.addEventListener('click', () => {
    if (i === 0 && move9.innerHTML !== 'O') {
        move9.innerHTML = 'x'
    } else if (i === 1 && move9.innerHTML !== 'x') {
        move9.innerHTML = 'O'
    }  else if (i === 2 && move9.innerHTML !== 'O') {
        move9.innerHTML = 'x'
    }   else if (i === 3 && move9.innerHTML !== 'x') {
        move9.innerHTML = 'O'
    } else if (i === 4 && move9.innerHTML !== 'O') {
        move9.innerHTML = 'x'
    } else if (i === 5 && move9.innerHTML !== 'x') {
        move9.innerHTML = 'O'
    } else if (i === 6 && move9.innerHTML !== 'O') {
        move9.innerHTML = 'x'
    } else if (i === 7 && move9.innerHTML !== 'x') {
        move9.innerHTML = 'O'
    } else if (i === 8 && move9.innerHTML !== 'O') {
        move9.innerHTML = 'x'
    } else if (i === 9 && move9.innerHTML !== 'x') {
        move9.innerHTML = 'O'
    }
    checkWin()
})

function checkWin() {
    // x check
   myIntervalX = setInterval(() => {    
    if (move1.innerHTML === 'x' && move2.innerHTML === 'x' && move3.innerHTML === 'x') {
        alert('win x')
        location.reload()
    }  else if (move1.innerHTML === 'x' && move4.innerHTML === 'x' && move7.innerHTML === 'x') {
        alert('win x')
        location.reload()
    } else if (move3.innerHTML === 'x' && move6.innerHTML === 'x' && move9.innerHTML === 'x') {
        alert('win x')
        location.reload()
    } else if (move7.innerHTML === 'x' && move8.innerHTML === 'x' && move9.innerHTML === 'x') {
        alert('win x')
        location.reload()
    } else if (move1.innerHTML === 'x' && move5.innerHTML === 'x' && move9.innerHTML === 'x') {
        alert('win x')
        location.reload()
    } else if (move3.innerHTML === 'x' && move5.innerHTML === 'x' && move7.innerHTML === 'x') {
        alert('win x')
        location.reload()
    } else if (move4.innerHTML === 'x' && move5.innerHTML === 'x' && move6.innerHTML === 'x') {
        alert('win x')
        location.reload()
    } else if (move7.innerHTML === 'x' && move8.innerHTML === 'x' && move9.innerHTML === 'x') {
        alert('win x')
        location.reload()
    } else if (move2.innerHTML === 'x' && move5.innerHTML === 'x' && move8.innerHTML === 'x') {
        alert('win x')
        location.reload()
        window.relo
    }}, 300)

        // o check
   myIntervalO = setInterval(() => {    
    if (move1.innerHTML === 'O' && move2.innerHTML === 'O' && move3.innerHTML === 'O') {
        alert('win O')
        location.reload()
    }  else if (move1.innerHTML === 'O' && move4.innerHTML === 'O' && move7.innerHTML === 'O') {
        alert('win O')
        location.reload()
    } else if (move3.innerHTML === 'O' && move6.innerHTML === 'O' && move9.innerHTML === 'O') {
        alert('win O')
        location.reload()
    } else if (move7.innerHTML === 'O' && move8.innerHTML === 'O' && move9.innerHTML === 'O') {
        alert('win O')
        location.reload()
    } else if (move1.innerHTML === 'O' && move5.innerHTML === 'O' && move9.innerHTML === 'O') {
        alert('win O')
        location.reload()
    } else if (move3.innerHTML === 'O' && move5.innerHTML === 'O' && move7.innerHTML === 'O') {
        alert('win O')
        location.reload()
    } else if (move4.innerHTML === 'O' && move5.innerHTML === 'O' && move6.innerHTML === 'O') {
        alert('win O')
        location.reload()
    } else if (move7.innerHTML === 'O' && move8.innerHTML === 'O' && move9.innerHTML === 'O') {
        alert('win O')
        location.reload()
    } else if (move2.innerHTML === 'O' && move5.innerHTML === 'O' && move8.innerHTML === 'O') {
        alert('win O')
        location.reload()
    }}, 300)

    setTimeout(function( ) { clearInterval( myIntervalX ); }, 320)
    setTimeout(function( ) { clearInterval( myIntervalO ); }, 320)
}