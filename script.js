document.addEventListener('DOMContentLoaded', function() {
    // Ensures the JavaScript runs after the HTML document has fully loaded.
  });
  const form = document.getElementById('registration-form'); // Selects the form element by ID.
  const feedbackDiv = document.getElementById('form-feedback'); // Selects the division where feedback will be displayed.
  const username = document.getElementById('username').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim(); 
  // Retrieves and trims the values from the input fields.
  let isValid = true; // Initializes the validation status.
  const messages = []; // Declares an array to store validation error messages.
  
  // Example of error message addition:
  if (username.length < 3) {
    isValid = false;
    messages.push('Username must be at least 3 characters long.');
  }
  feedbackDiv.style.display = 'block'; // Makes feedbackDiv visible.

  // If isValid is true:
  if (isValid) {
    feedbackDiv.textContent = 'Registration successful!';
    feedbackDiv.style.color = '#28a745';
  } else {
    feedbackDiv.innerHTML = messages.join('<br>'); // Joins error messages with <br>
    feedbackDiv.style.color = '#dc3545';
  }
  if (username.length < 3) {
    isValid = false;
    messages.push('Username must be at least 3 characters long.');
  } // Checks if the username is at least 3 characters long.
  if (password.length < 8) {
    isValid = false;
    messages.push('Password must be at least 8 characters long.');
  } // Checks if the password is at least 8 characters long.
  if (!email.includes('@') || !email.includes('.')) {
    isValid = false;
    messages.push('Please enter a valid email address.');
  } // Checks if the email contains both '@' and '.' characters.
              