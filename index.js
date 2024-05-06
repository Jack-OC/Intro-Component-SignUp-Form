const form = document.getElementById('form');
const error_msg = document.querySelectorAll('.error-div');
const email_regex = /^[^@]+@\w+(\.\w+)+\w$/;

console.log(error_msg);

form.addEventListener('submit', e => {
    e.preventDefault();

    const firstname = document.querySelector(".firstname");
    const lastname = document.querySelector(".lastname");
    const email = document.querySelector(".email");
    const password = document.querySelector(".password");

    // First Name 
    if(firstname.value === '') {
        firstname.classList.add("error-active");
        error_msg[0].classList.add("error-div-active");
    }
    else {
        firstname.classList.remove("error-active");
        error_msg[0].classList.remove("error-div-active");
    }

    // Last Name 
    if(lastname.value === '') {
        lastname.classList.add("error-active");
        error_msg[1].classList.add("error-div-active");
    }
    else {
        lastname.classList.remove("error-active");
        error_msg[1].classList.remove("error-div-active");
    }

    // Email

    if(email.value === '' || email.value.match(email_regex)) {
        email.classList.add("error-active");
        error_msg[2].classList.add("error-div-active");
    }
    else {
        email.classList.remove("error-active");
        error_msg[2].classList.remove("error-div-active");
    }

    // Password
    if(password.value === '') {
        password.classList.add("error-active");
        error_msg[3].classList.add("error-div-active");
    }
    else {
        password.classList.remove("error-active");
        error_msg[3].classList.remove("error-div-active");
    }
})
