const sliderHeader = ['../images/banner-01.jpg', '../images/banner-02.jpg', '../images/banner-03.jpg', '../images/banner-04.jpg']
const burgerLiner = document.getElementsByClassName('burgerLiner')
const sliderSpan = document.getElementsByClassName('sliderSpan')
const progress = document.querySelectorAll('progress')
const navMenu = document.querySelector('.navMenu')
const burger = document.querySelector('.burger')
const headerName = document.querySelector('h1')
const header = document.querySelector('header')
const number = document.querySelectorAll('b')
const media1024Widthmax = window.matchMedia("(max-width: 1024px)")
const media1024Widthmin = window.matchMedia("(min-width: 1024px)")
let headerSliderCurrent = 0
let burgerBool = false
let valueInterval = 0

// --------------------------burger---------------

burger.addEventListener('click', () => {
    navMenu.classList.add('active')
    if (burgerBool === false) {
        burgerBool = true
        navMenu.classList.add('active')
        burgerLiner[0].style.transform = 'rotate(45deg)'
        burgerLiner[0].style.position = 'absolute'
        burgerLiner[1].style.transform = 'translate(-60px ,0)'
        burgerLiner[2].style.transform = 'rotate(-45deg)'
        burgerLiner[2].style.position = 'absolute'
    }
    else if (burgerBool === true) {
        burgerBool = false
        navMenu.classList.remove('active')
        burgerLiner[0].style.transform = 'rotate(0)'
        burgerLiner[0].style.position = 'static'
        burgerLiner[1].style.transform = 'translate(0px ,0)'
        burgerLiner[2].style.transform = 'rotate(0)'
        burgerLiner[2].style.position = 'static'
    }
})
// --------------------------slider progress interval------------------
let valInt = setInterval(() => {

    if (valueInterval >= 105) {
        headerSliderCurrent++
        if (headerSliderCurrent > 3) {
            progress[0].value = 0
            progress[1].value = 0
            progress[2].value = 0
            progress[3].value = 0
            headerSliderCurrent = 0

        }
        valueInterval = 0
    }
    header.style.backgroundImage = `url(${sliderHeader[headerSliderCurrent]})`
    progress[headerSliderCurrent].value = valueInterval
    valueInterval++

    if (progress[1].value == 0 && valueInterval >= 105) {
        progress[0].value = 0
    }
    else if (progress[2].value == 0 && valueInterval >= 105) {
        progress[1].value = 0
    }
    if (progress[3].value == 0 && valueInterval >= 105) {
        progress[2].value = 0
    }

    if (headerSliderCurrent === 0) {
        headerName.innerHTML = 'Caribbean'
        number[0].innerHTML = "44.48 M"
        number[1].innerHTML = "275.400 KM2 "
        number[2].innerHTML = "$946.000"
    }
    else if (headerSliderCurrent === 1) {
        headerName.innerHTML = 'Switzerland'
        number[0].innerHTML = "8.66 M"
        number[1].innerHTML = "41.290 KM2"
        number[2].innerHTML = "$1.100.200 "
    }
    else if (headerSliderCurrent === 2) {
        headerName.innerHTML = 'France'
        number[0].innerHTML = "67.41 M"
        number[1].innerHTML = "551.500 KM2"
        number[2].innerHTML = "$425.600"
    }
    else if (headerSliderCurrent === 3) {
        headerName.innerHTML = 'Thailand'
        number[0].innerHTML = "69.86 M"
        number[1].innerHTML = "513.120 KM2"
        number[2].innerHTML = "$165.450"
    }
}, 30);

// --------------------------slider progress interval settings---------------------

sliderSpan[0].onmousemove = () => {
    if (progress[0].value && sliderSpan[0]) {
        sliderSpan[0].style.color = '#fff'
        sliderSpan[0].style.cursor = 'default'
    }
    else {
        sliderSpan[0].style.color = '#22b3c1'
        sliderSpan[0].style.cursor = 'pointer'
        sliderSpan[0].onclick = () => {
            valueInterval = 0
            progress[0].value = 0
            progress[1].value = 0
            progress[2].value = 0
            progress[3].value = 0
            headerSliderCurrent = 0
        }
    }
}
sliderSpan[0].onmouseleave = () => {
    sliderSpan[0].style.color = '#fff'
}
sliderSpan[1].onmousemove = () => {
    if (progress[1].value && sliderSpan[1]) {
        sliderSpan[1].style.color = '#fff'
        sliderSpan[1].style.cursor = 'default'
    }
    else {
        sliderSpan[1].style.color = '#22b3c1'
        sliderSpan[1].style.cursor = 'pointer'
        sliderSpan[1].onclick = () => {
            valueInterval = 0
            progress[0].value = 0
            progress[1].value = 0
            progress[2].value = 0
            progress[3].value = 0
            headerSliderCurrent = 1
        }
    }
}
sliderSpan[1].onmouseleave = () => {
    sliderSpan[1].style.color = '#fff'
}
sliderSpan[2].onmousemove = () => {
    if (progress[2].value && sliderSpan[2]) {
        sliderSpan[2].style.color = '#fff'
        sliderSpan[2].style.cursor = 'default'
    }
    else {
        sliderSpan[2].style.color = '#22b3c1'
        sliderSpan[2].style.cursor = 'pointer'
        sliderSpan[2].onclick = () => {
            valueInterval = 0
            progress[0].value = 0
            progress[1].value = 0
            progress[2].value = 0
            progress[3].value = 0
            headerSliderCurrent = 2
        }
    }
}
sliderSpan[2].onmouseleave = () => {
    sliderSpan[2].style.color = '#fff'
}
sliderSpan[3].onmousemove = () => {
    if (progress[3].value && sliderSpan[3]) {
        sliderSpan[3].style.color = '#fff'
        sliderSpan[3].style.cursor = 'default'
    }
    else {
        sliderSpan[3].style.color = '#22b3c1'
        sliderSpan[3].style.cursor = 'pointer'
        sliderSpan[3].onclick = () => {
            valueInterval = 0
            progress[0].value = 0
            progress[1].value = 0
            progress[2].value = 0
            progress[3].value = 0
            headerSliderCurrent = 3
        }
    }
    sliderSpan[3].onmouseleave = () => {
        sliderSpan[3].style.color = '#fff'
    }
}

// -----------------media----------------
function media () {
   
    if(media1024Widthmax.matches){
        burgerBool = false
        navMenu.classList.remove('active')
        burgerLiner[0].style.transform = 'rotate(0)'
        burgerLiner[0].style.position = 'static'
        burgerLiner[1].style.transform = 'translate(0px ,0)'
        burgerLiner[2].style.transform = 'rotate(0)'
        burgerLiner[2].style.position = 'static'
    }
    else if(media1024Widthmin.matches){
        navMenu.classList.remove('active')
    }
}
media1024Widthmin.addListener(media)
media1024Widthmax.addListener(media)
