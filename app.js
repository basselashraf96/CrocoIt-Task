const navItems = document.querySelectorAll('.navlistItem')
const wrapper = document.querySelector('.wrapper')
const arrows = document.querySelectorAll('.arrow')




/**************Active Nav Logic************************ */

let activePage = 0

navItems.forEach((item, index) => {

    item.addEventListener('click', () => {
        activePage = index

        navItems.forEach((opt, ind) => {
            activePage === ind ? opt.classList.add('active') : opt.classList.remove('active')
        })
    })

})


/**************Slider Logic*************************** */

let sliderIndex = 0
arrows.forEach((item, index) => {
    item.addEventListener('click', () => {
        if (index === 0) {
            sliderIndex = sliderIndex > 0 ? sliderIndex - 1 : 3;
        } else {
            sliderIndex = sliderIndex < 3 ? sliderIndex + 1 : 0;
        }

        wrapper.style.transform = `translateY(${sliderIndex * -100}vh)`
    })
})