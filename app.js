const navItems = document.querySelectorAll('.navlistItem')
const wrapper = document.querySelector('.wrapper')
const arrows = document.querySelectorAll('.arrow')
const more = document.querySelector('.headerWrapper h2')
const owlSlider = document.querySelector('.invisableOwlSlider')
const closeSlider = document.querySelector('.closeSlider')
const navToggle = document.querySelector('.sliderCard span')
const navContainer = document.querySelector('.navContainer')
const closeNav = document.querySelector('.closeNav')
const arrowsHorizontal = document.querySelectorAll('.arrowHoriz')
const sliderWrapper1 = document.querySelector('.sliderWrapper1')

/************** Active Nav Logic ************************ */

let activePage = 0

navItems.forEach((item, index) => {

    item.addEventListener('click', () => {
        activePage = index

        navItems.forEach((opt, ind) => {
            activePage === ind ? opt.classList.add('active') : opt.classList.remove('active')
        })
    })

})


/************** JS Slider Logic *************************** */

let sliderIndex = 0
arrows.forEach((item, index) => {
        item.addEventListener('click', () => {
            if (index === 0) {
                sliderIndex = sliderIndex > 0 ? sliderIndex - 1 : 4;
            } else {
                sliderIndex = sliderIndex < 4 ? sliderIndex + 1 : 0;
            }

            wrapper.style.transform = `translateY(${sliderIndex * -100}vh)`
        })
    })
    /************** JS Slider Logic  Horizontal*************************** */

let SliderHorizontalIndex = 0
arrowsHorizontal.forEach((item, index) => {
    item.addEventListener('click', () => {
        if (index === 0) {
            SliderHorizontalIndex = SliderHorizontalIndex > 0 ? SliderHorizontalIndex - 1 : 5;
        } else {
            SliderHorizontalIndex = SliderHorizontalIndex < 5 ? SliderHorizontalIndex + 1 : 0;
        }

        sliderWrapper1.style.transform = `translateX(${SliderHorizontalIndex * -25}vw)`
    })
})


/**************** Owl Slider *************************** */

more.addEventListener('click', () => {
    owlSlider.classList.add('show')
})
closeSlider.addEventListener('click', () => {
    owlSlider.classList.remove('show')
})



navToggle.addEventListener('click', () => {
    navContainer.classList.add('show')
})
closeNav.addEventListener('click', () => {
    navContainer.classList.remove('show')
})