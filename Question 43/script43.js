document.getElementById('regForm').addEventListener('submit', function (e) {
  e.preventDefault(); // Stop form submission to run JS validation

  let isValid = true;

  // Clear all previous errors and success messages
  document.querySelectorAll('.error-msg').forEach(el => el.textContent = '');
  document.getElementById('successMessage').textContent = '';

  // Fetching values
  const name = document.getElementById('name').value.trim();
  const address = document.getElementById('address').value.trim();
  const username = document.getElementById('username').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;
  const phone = document.getElementById('phone').value.trim();
  const genderChecked = document.querySelector('input[name="gender"]:checked');
  const course = document.getElementById('course').value;

  // b. Name Validation: Not empty, no numbers
  const nameRegex = /^[^0-9]+$/;
  if (name === '') {
    showError('nameError', 'Name field cannot be empty.');
    isValid = false;
  } else if (!nameRegex.test(name)) {
    showError('nameError', 'Name must not contain any numbers.');
    isValid = false;
  }

  // f. Address Validation: Not empty
  if (address === '') {
    showError('addressError', 'Address field cannot be empty.');
    isValid = false;
  }

  // c. Username Validation: Not empty, no spaces or special chars except underscore (_)
  const usernameRegex = /^[a-zA-Z0-9_]+$/;
  if (username === '') {
    showError('usernameError', 'Username field cannot be empty.');
    isValid = false;
  } else if (!usernameRegex.test(username)) {
    showError('usernameError', 'No spaces or special characters allowed (except _).');
    isValid = false;
  }

  // g. Email Validation: Not empty, must include "@"
  if (email === '') {
    showError('emailError', 'Email field cannot be empty.');
    isValid = false;
  } else if (!email.includes('@')) {
    showError('emailError', 'Email must include the "@" symbol.');
    isValid = false;
  }

  // h. Password Validation: Not empty, min 8 chars, 1 digit, 1 upper, 1 lower, 1 special
  const passRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,}$/;
  if (password === '') {
    showError('passwordError', 'Password field cannot be empty.');
    isValid = false;
  } else if (!passRegex.test(password)) {
    showError('passwordError', 'Min 8 characters, with at least 1 uppercase, 1 lowercase, 1 digit, and 1 special character.');
    isValid = false;
  }

  // d. Phone Validation: Not empty, strictly digits, starts with 98, 97, or 96
  const phoneRegex = /^(98|97|96)\d+$/;
  const digitsOnlyRegex = /^\d+$/;
  if (phone === '') {
    showError('phoneError', 'Phone field cannot be empty.');
    isValid = false;
  } else if (!digitsOnlyRegex.test(phone)) {
    showError('phoneError', 'Phone number must contain numbers only.');
    isValid = false;
  } else if (!phoneRegex.test(phone)) {
    showError('phoneError', 'Phone number must start with 98, 97, or 96.');
    isValid = false;
  }

  // e. Gender Validation: Not empty (one radio button selected)
  if (!genderChecked) {
    showError('genderError', 'Please select a gender.');
    isValid = false;
  }

  // i. Course Selection Validation: Select from dropdown
  if (course === '') {
    showError('courseError', 'Please select a course from the list.');
    isValid = false;
  }

  // Final Action if form passes all validations
  if (isValid) {
    document.getElementById('successMessage').textContent = 'Registration successful!';
    // Form can be submitted here -> : this.submit();
  }
});

// Helper Function to display error message
function showError(elementId, message) {
  document.getElementById(elementId).textContent = message;
}