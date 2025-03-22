// Select elements
const registerButton = document.querySelector('.btn-register');
const passwordToggles = document.querySelectorAll('.password-toggle');
const inputFields = document.querySelectorAll('.input-field');

// Add event listener for registration button
registerButton.addEventListener('click', function(event) {
  event.preventDefault(); // Prevent form submission

  const username = inputFields[0].value.trim();
  const email = inputFields[1].value.trim();
  const password = inputFields[2].value.trim();
  const confirmPassword = inputFields[3].value.trim();

  // Validation checks
  if (!username) {
    alert('Please enter a username.');
    return;
  }

  if (!email) {
    alert('Please enter your email.');
    return;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    alert('Please enter a valid email address.');
    return;
  }

  if (!password) {
    alert('Please enter a password.');
    return;
  }

  if (password.length < 6) {
    alert('Password must be at least 6 characters long.');
    return;
  }

  if (password !== confirmPassword) {
    alert('Passwords do not match. Please re-enter the password.');
    return;
  }

  // Successful registration message
  alert('Registration successful! Redirecting...');
  window.location.href = "../mainpage/index.html";
});

// Add event listeners for password visibility toggle
passwordToggles.forEach((toggle, index) => {
  toggle.addEventListener('click', function() {
    const passwordField = inputFields[index + 2]; // Target password fields
    const eyeIcon = toggle.querySelector('i');

    if (passwordField.type === 'password') {
      passwordField.type = 'text';
      eyeIcon.classList.remove('fa-eye');
      eyeIcon.classList.add('fa-eye-slash');
    } else {
      passwordField.type = 'password';
      eyeIcon.classList.remove('fa-eye-slash');
      eyeIcon.classList.add('fa-eye');
    }
  });
});
