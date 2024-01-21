function validateForm(event) {
    event.preventDefault();

    // Basic validation example for each field
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const dob = document.getElementById('dob').value;
    const gender = document.getElementById('gender').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    const occupation = document.getElementById('occupation').value;
    const education = document.getElementById('education').value;

    // Check if any field is empty
    if (!firstName || !lastName || !email || !password || !confirmPassword || !dob || !gender || !phone || !address || !occupation || !education) {
        alert('Please fill in all required fields.');
        return;
    }

    // Additional validation for password and confirm password
   
    if (password !== confirmPassword) {
        alert('Password and Confirm Password do not match.');
        return;
    }

    // Show the custom confirm box
    document.getElementById('customConfirm').style.display = 'block';
}

function confirmRegistration() {
    // Check if the confirm checkbox is checked
    const confirmCheckbox = document.getElementById('confirmCheckbox');

    if (confirmCheckbox.checked) {
        // Submit the form or perform additional actions
        document.getElementById('registrationForm').submit();
        // Hide the custom confirm box
        document.getElementById('customConfirm').style.display = 'none';
    } else {
        alert('Please confirm before submitting the form.');
    }
}

function cancelRegistration() {
    // Hide the custom confirm box
    document.getElementById('customConfirm').style.display = 'none';
}