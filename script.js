document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const FirstName = document.getElementById('FirstName').value;
    const LastName = document.getElementById('LastName').value;
    const Age = document.getElementById('Age').value;
    const CollageName = document.getElementById('CollageName').value;
    const ContactNumber = document.getElementById('ContactNumber').value;
    const email = document.getElementById('email').value;
    const errorMsg = document.getElementById('errorMsg');

    let errors = [];

    // Clear previous error messages
    errorMsg.textContent = '';

    // Empty fields validation
    if (!FirstName || !LastName || !Age || !CollageName || !ContactNumber || !email) {
        errors.push('All fields are required.');
    }

    // Age validation
    if (Age < 18) {
        errors.push('You must be at least 18 years old.');
    }

    // Name validation (only letters)
    const namePattern = /^[A-Za-z]+$/;
    if (!namePattern.test(FirstName)) {
        errors.push('First Name should only contain alphabets.');
    }
    if (!namePattern.test(LastName)) {
        errors.push('Last Name should only contain alphabets.');
    }

   

    // Contact number validation (numeric and length check)
    const contactPattern = /^[0-9]{10}$/;
    if (!contactPattern.test(ContactNumber)) {
        errors.push('Contact number should be 10 digits.');
    }

    // Display errors if any
    if (errors.length > 0) {
        errorMsg.textContent = errors.join(' ');
        return;
    }
    
    
             

       
    // You can add more validations here if needed (e.g., password strength, email format, etc.)

    // If everything is fine, you can proceed to send the form data to the server or store it locally
    alert(`Registration Successful!\nContact Number: ${ContactNumber}\nEmail: ${email}`);

    // Clear form
    document.getElementById('registrationForm').reset();
});
