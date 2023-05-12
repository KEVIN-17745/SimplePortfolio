//alert("test");
let emailElement = document.querySelector('#email');
let messageElement = document.querySelector('#message');
let submitButton = document.querySelector('#submit-button');

submitButton.addEventListener('click', function (e) {
    e.preventDefault();
    let emailValue = emailElement.value;
    let messageValue = messageElement.value;

    if (emailValue.includes('@')) {
        alert('Thank you for your message!');
    }
    else {
        alert('It seems you have entered a wrong email, please check and try again !');
    }
    console.log('Email: ', emailValue);
    console.log('Message: ', messageValue);
})