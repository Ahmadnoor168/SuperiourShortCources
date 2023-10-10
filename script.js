let navLinks = document.getElementById('navLinks')
function showMenu() {
  navLinks.style.top = '0'
}
function hideMenu() {
  navLinks.style.top = '-800px'
}

function handleSubmit(event) {
  event.preventDefault()

  let email = document.getElementById('email').value
  let password = document.getElementById('password').value

  if (email === 'education@gmail.com' && password === 'education@123') {
    location.href = 'http://127.0.0.1:5500/dashbord.html'
  } else {
    console.log('not match')
  }
}
