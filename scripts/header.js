const mainMenuButton = document.querySelector('.menu')
const headerOverlay = document.querySelector('.overlay')

mainMenuButton.addEventListener('click', () => {
    mainMenuButton.classList.toggle('active')
    headerOverlay.classList.toggle('active')
})

headerOverlay.addEventListener('click', () => {
    mainMenuButton.classList.remove('active')
    headerOverlay.classList.remove('active')
})

