document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    let isValid = true;

    // Full Name
    const fullName = document.getElementById('fullName').value;
    if (fullName.length < 5) {
        document.getElementById('fullNameError').innerText = "Name must be at least 5 characters.";
        isValid = false;
    } else {
        document.getElementById('fullNameError').innerText = "";
    }

    // Email
    const email = document.getElementById('email').value;
    if (!email.includes('@')) {
        document.getElementById('emailError').innerText = "Enter a valid email address.";
        isValid = false;
    } else {
        document.getElementById('emailError').innerText = "";
    }

    // Phone Number
    const phone = document.getElementById('phone').value;
    if (phone === "123456789" || phone.length !== 10 || isNaN(phone)) {
        document.getElementById('phoneError').innerText = "Enter a valid 10-digit phone number.";
        isValid = false;
    } else {
        document.getElementById('phoneError').innerText = "";
    }

    // Password
    const password = document.getElementById('password').value;
    if (password === "password" || password.toLowerCase() === fullName.toLowerCase() || password.length < 8) {
        document.getElementById('passwordError').innerText = "Password is not strong enough.";
        isValid = false;
    } else {
        document.getElementById('passwordError').innerText = "";
    }

    // Confirm Password
    const confirmPassword = document.getElementById('confirmPassword').value;
    if (confirmPassword !== password) {
        document.getElementById('confirmPasswordError').innerText = "Passwords do not match.";
        isValid = false;
    } else {
        document.getElementById('confirmPasswordError').innerText = "";
    }

    // Successful submit
    if (isValid) {
        alert("Form submitted successfully!");
        // You can add code here to submit the form to a server if needed
    }
});

// onChange
document.getElementById('fullName').addEventListener('change', function() {
    if (this.value.length < 5) {
        document.getElementById('fullNameError').innerText = "Name must be at least 5 characters.";
    } else {
        document.getElementById('fullNameError').innerText = "";
    }
});

