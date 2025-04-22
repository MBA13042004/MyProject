const navToggle = document.querySelector('.nav-toggle')
const links = document.querySelector('.links')

navToggle.addEventListener('click', function () {
  links.classList.toggle('show-links')
})
fetch('/api/user')
  .then(res => res.json())
  .then(data => console.log(data));

