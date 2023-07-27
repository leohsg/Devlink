function togglemode() {
  const html  = document.documentElement
  html.classList.toggle('light')
  const img = document.querySelector("#aorifile img")

  if(html.classList.contains('light')) {
    img.setAttribute('scr', './assets/avatar-ligght.png')
  } else {
    img.setAttribute("src", "./assets/avatar.png")
  }
}