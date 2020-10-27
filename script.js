const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navbarLinks = document.getElementsByClassName('navbar-links')[0];


toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
})

function validation() {
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var error_message = document.getElementById("error_message");
    var text;

    error_message.style.padding = "10px";

    if (firstName.length < 5) {

        text = "Please enter a valid first name";
        error_message.innerHTML = text;
        return false;
    }
    if (lastName.length < 4) {

        text = "Please enter a valid last name";
        error_message.innerHTML = text;
        return false;
    }
    if (isNaN(phone) || phone.length !== 10) {

        text = "Please enter a valid phone number";
        error_message.innerHTML = text;
        return false;
    }
    if (email.indexOf("@") == -1 || email.length < 6) {

        text = "Please enter a valid email";
        error_message.innerHTML = text;
        return false;
    }
    if (message.length <= 50) {

        text = "Please enter a valid message";
        error_message.innerHTML = text;
        return false;
    }



    alert("Form submitted successfully");
    return true;
}
