const sunMoonContainer = document.querySelector('.sun-moon-container')

/* when click */
document.querySelector('.theme-toggle-button').addEventListener('click', () => {
document.body.classList.toggle('dark')
const currentRotation = parseInt(getComputedStyle(sunMoonContainer).getPropertyValue('--rotation'))
sunMoonContainer.style.setProperty('--rotation', currentRotation + 180)
})