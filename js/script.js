const headerList = document.getElementById('headerList')
const burgerBtn = document.getElementById('burgerBtn')
const main = document.getElementById('main')

burgerBtn.addEventListener('click', function () {
    headerList.classList.toggle('activeBurger')
    main.classList.toggle('displayNone')
})

document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector('.form__content');
    const nameInput = form.querySelector('input[type="text"]');
    const emailInput = form.querySelector('input[type="email"]');
    const numberInput = form.querySelector('input[type="number"]');
    const checkbox = form.querySelector('.form__checkbox');
    const submitButton = form.querySelector('.form__btn');
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const numberError = document.getElementById('numberError');
    const checkboxError = document.getElementById('checkboxError');

    function validateEmail(email) {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

    function validateNumber(number) {
        return !isNaN(number);
    }


    function validateForm() {
        let isValid = true;

        if (nameInput.value.trim() === '') {
            nameError.textContent = 'Please enter your name.';
            isValid = false;
        } else if (!/^[a-zA-Z]+$/.test(nameInput.value)) {
            nameError.textContent = 'Name can only contain letters.'
            isValid = false;
        } else if (nameInput.value.length < 2 || nameInput.value.length > 20) {
            nameError.textContent = 'Name must be between 2 and 20 characters long.'
            isValid = false;
        } else {
            nameError.textContent = '';
        }

        if (emailInput.value.trim() === '') {
            emailError.textContent = 'Please enter your email.';
            isValid = false;
        } else if (!validateEmail(emailInput.value)) {
            emailError.textContent = 'Please enter a valid email address.';
            isValid = false;
        } else {
            emailError.textContent = '';
        }

        if (numberInput.value.trim() === '') {
            numberError.textContent = 'Please enter your number.';
            isValid = false;
        } else if (!validateNumber(numberInput.value)) {
            numberError.textContent = 'Please enter a valid number.'
            isValid = false;
        } else if (numberInput.value.length < 6 || numberInput.value.length > 15) {
            numberError.textContent = 'Number must be between 6 and 15 characters long.'
            isValid = false;
        } else {
            numberError.textContent = '';
        }

        if (!checkbox.checked) {
            checkboxError.textContent = 'Please accept the terms and conditions.'
            isValid = false;
        } else {
            checkboxError.textContent = '';
        }

        return isValid;
    }

    submitButton.addEventListener('click', function(event) {
        event.preventDefault();
        if (validateForm()) {

            alert('Form submitted successfully!');

        }
    });
});

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    freeMode: true,
    autoplay: {
        delay: 3000,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});


