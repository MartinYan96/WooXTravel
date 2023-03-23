
const sliderHeaderImg = ['./images/banner-01.jpg', './images/banner-02.jpg', './images/banner-03.jpg', './images/banner-04.jpg'] 
const burgerMenuLiners = document.querySelectorAll('.burgerMenuLiners')
const headerSliderNumber = document.querySelectorAll('.headerSliderNumber')
const headerSliderProgress = document.querySelectorAll('.headerSliderProgress')
const navMenu = document.querySelector('.navMenu')
const burgerMenu = document.querySelector('.burgerMenu')
const headerName = document.querySelector('h1')
const header = document.querySelector('header')
const indexOfCountries = document.querySelectorAll('.indexOfCountries')
const media1024Widthmax = window.matchMedia("(max-width: 1024px)")
const media1024Widthmin = window.matchMedia("(min-width: 1024px)")
const navigation = document.querySelector('.navigation')

let headerSliderCurrent = 0
let burgerBool = false
let headerProgressvalueInterval = 0

function ProgressValueZero() {
    headerSliderProgress.forEach(progress => {
        progress.value = 0
    });
}

function BurgerStyle() {
    burgerMenuLiners[0].style.transform = 'rotate(0)'
    burgerMenuLiners[0].style.position = 'static'
    burgerMenuLiners[1].style.transform = 'translate(0px ,0)'
    burgerMenuLiners[2].style.transform = 'rotate(0)'
    burgerMenuLiners[2].style.position = 'static'
}
// --------------------------burgerMenu---------------

burgerMenu.addEventListener('click', () => {
    navMenu.classList.add('active')
    if (burgerBool === false) {
        burgerBool = true
        navMenu.classList.add('active')
        burgerMenuLiners[0].style.transform = 'rotate(45deg)'
        burgerMenuLiners[0].style.position = 'absolute'
        burgerMenuLiners[1].style.transform = 'translate(-60px ,0)'
        burgerMenuLiners[2].style.transform = 'rotate(-45deg)'
        burgerMenuLiners[2].style.position = 'absolute'
    }
    else if (burgerBool === true) {
        burgerBool = false
        navMenu.classList.remove('active')
        BurgerStyle()
    }
})
// --------------------------slider headerSliderProgress interval------------------

let valInt = setInterval(() => {

    if (headerProgressvalueInterval >= 105) {
        headerSliderCurrent++
        if (headerSliderCurrent > 3) {
            ProgressValueZero()
            headerSliderCurrent = 0

        }
        headerProgressvalueInterval = 0
    }
    sliderHeaderImg.forEach(() => {
        header.style.backgroundImage = `url(${sliderHeaderImg})`
        header.style.backgroundImage = `url(${sliderHeaderImg[headerSliderCurrent]})`
    })

    headerSliderProgress[headerSliderCurrent].value = headerProgressvalueInterval
    headerProgressvalueInterval++

    if (headerSliderProgress[1].value == 0 && headerProgressvalueInterval >= 105) {
        headerSliderProgress[0].value = 0
    }
    else if (headerSliderProgress[2].value == 0 && headerProgressvalueInterval >= 105) {
        headerSliderProgress[1].value = 0
    }
    if (headerSliderProgress[3].value == 0 && headerProgressvalueInterval >= 105) {
        headerSliderProgress[2].value = 0
    }

    if (headerSliderCurrent === 0) {
        headerName.innerHTML = 'Caribbean'
        indexOfCountries[0].innerHTML = "44.48 M"
        indexOfCountries[1].innerHTML = "275.400 KM2 "
        indexOfCountries[2].innerHTML = "$946.000"
    }
    else if (headerSliderCurrent === 1) {
        headerName.innerHTML = 'Switzerland'
        indexOfCountries[0].innerHTML = "8.66 M"
        indexOfCountries[1].innerHTML = "41.290 KM2"
        indexOfCountries[2].innerHTML = "$1.100.200 "
    }
    else if (headerSliderCurrent === 2) {
        headerName.innerHTML = 'France'
        indexOfCountries[0].innerHTML = "67.41 M"
        indexOfCountries[1].innerHTML = "551.500 KM2"
        indexOfCountries[2].innerHTML = "$425.600"
    }
    else if (headerSliderCurrent === 3) {
        headerName.innerHTML = 'Thailand'
        indexOfCountries[0].innerHTML = "69.86 M"
        indexOfCountries[1].innerHTML = "513.120 KM2"
        indexOfCountries[2].innerHTML = "$165.450"
    }
}, 30);

// --------------------------slider headerSliderProgress interval settings---------------------

headerSliderNumber.forEach((slider, index) => {
    slider.addEventListener('mousemove', () => {
        if (headerSliderProgress[index].value && slider) {
            slider.style.color = '#fff'
            slider.style.cursor = 'default'
        }
        else {
            slider.style.color = '#22b3c1'
            slider.style.cursor = 'pointer'
            slider.addEventListener("click", () => {
                slider.style.color = '#fff'
                slider.style.cursor = 'default'
                headerProgressvalueInterval = 0
                ProgressValueZero()
                headerSliderCurrent = index
            })
        }
    })

    slider.addEventListener("mouseleave", () => {
        slider.style.color = '#fff'
    })
})

// ---------------navigation animation------------

window.addEventListener('scroll', () => {
    let logo = document.documentElement.scrollTop
    if (logo >= header.clientHeight) {
        navigation.style.position = 'fixed'
        navigation.style.zIndex = '100'
    }
    else {
        navigation.style.position = 'static'
        navigation.style.zIndex = '0'
    }
    console.log(logo)
})



// -----------------media----------------

function media() {

    if (media1024Widthmax.matches) {
        burgerBool = false
        navMenu.classList.remove('active')
        BurgerStyle()
    }
    else if (media1024Widthmin.matches) {
        navMenu.classList.remove('active')
    }
}
media1024Widthmin.addListener(media)
media1024Widthmax.addListener(media)
