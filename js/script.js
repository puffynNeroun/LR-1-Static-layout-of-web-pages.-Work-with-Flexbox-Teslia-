const headerList = document.getElementById('headerList')
const burgerBtn = document.getElementById('burgerBtn')
const main = document.getElementById('main')

burgerBtn.addEventListener('click', function () {
    headerList.classList.toggle('activeBurger')
    main.classList.toggle('displayNone')
})