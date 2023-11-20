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


const switchButton = document.querySelector(".js-theme");
const circle = document.getElementById("circle");

switchButton.addEventListener("click", () => {
  circle.classList.toggle("dark");
  console.log("dark");

  if (!document.body.classList.contains("light-theme")) {
    document.body.classList.toggle('light-theme');
    circle.innerHTML = `<i class="fa-regular fa-sun"></i>`

  } else if (document.body.classList.contains("light-theme")) {
    document.body.classList.remove('light-theme')
    circle.innerHTML = `<i class="fa-solid fa-moon"></i>`

  }
});