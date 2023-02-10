"use strict";
const navBtn = document.querySelector(`#nav-btn`)
const nav = document.querySelector(`nav`)
const media = matchMedia(`screen and (min-width: 800px)`)
const navLinks = document.querySelectorAll("nav a")
// Add toggle to nav-btn
navBtn.addEventListener("click", ()=> nav.classList.toggle(`toggle-display`))
//Always set display nav bar at screen min-width: 800px
media.addEventListener("change", e => nav.classList.toggle(`toggle-display`,!e.matches))
const section = document.querySelector("section")
const observer = new IntersectionObserver(entries=> entries.forEach(entry => console.log(entry)))
// const observer = new IntersectionObserver(entries=> console.log(entries))
observer.observe(section)
