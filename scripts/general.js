const warning = document.getElementById('warning')
const overlay2 = document.querySelector('.overlay')
const closeButton = warning.querySelector('.close')

function popUp() {
    warning.classList.add('active')
    overlay2.classList.add('active')
}

window.onload = popUp()

overlay2.addEventListener('click', () => [
    warning.style.display = 'none'
])

closeButton.addEventListener('click', () => {
    warning.style.display = 'none'
    overlay2.classList.remove('active')
})