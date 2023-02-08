const passwordInput = document.querySelector('#password');
const confirmPasswordInput = document.querySelector('#confirm-password');
const submitButton = document.querySelector('#sign-up');

submitButton.addEventListener('click', (e) => {
    if (passwordInput.value !== confirmPasswordInput.value){
        confirmPasswordInput.setCustomValidity(`Passwords don't match bro, Try matching them and you won't see this message!`)
    }
    else {
        confirmPasswordInput.setCustomValidity('');
    }
})

window.addEventListener('load', (e) => {
    alert('Beautiful image taken by @lexilaginess on unsplash.com')
})
