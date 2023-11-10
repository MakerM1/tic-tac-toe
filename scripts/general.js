const warning = document.getElementById('warning')
const overlay2 = document.getElementById('warning-overlay')
const closeButton = warning.querySelector('.close')

function popUp() {
    warning.classList.add('active')
    overlay2.classList.add('active')
}

window.onload = popUp()

overlay2.addEventListener('click', () => [
    warning.style.display = 'none'
    ,overlay2.style.display = 'none'
])

closeButton.addEventListener('click', () => {
    warning.style.display = 'none'
    overlay2.classList.remove('active')
})

const switchButton = document.querySelector(".js-theme");
const circle = document.getElementById("circle");

switchButton.addEventListener("click", () => {
  circle.classList.toggle("dark");
  console.log("dark");

  if (circle.classList.contains("dark")) {
    document.body.classList.toggle('light-theme');
    circle.innerHTML = `<i class="fa-regular fa-sun"></i>`
  } else {

    document.body.classList.remove('light-theme')
    circle.innerHTML = `<i class="fa-solid fa-moon"></i>`
  }
});