/////////////////////////////////////////////////////////////////////////
///////////sign up page and sign in page//////////
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('signup-form');
    const signUpButton = document.getElementById('sign-up-button');
    const signInButton = document.getElementById('sign-in-button');
    
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const username = form.elements.username.value;
      const email = form.elements.email.value;
      const password = form.elements.password.value;
  
      if (!validateEmail(email)) {
        alert('Invalid email address');
        return;
      }
  
      // Save user data to local storage
      const userData = {
        username,
        email,
        password,
      };
      localStorage.setItem('userData', JSON.stringify(userData));
  
      // Clear the form fields
      form.reset();
  
      // You can redirect to the home page or perform other actions here
    });
  
    signUpButton.addEventListener('click', function () {
      // Perform sign-up action here
    });
  
    signInButton.addEventListener('click', function () {
      // Perform sign-in action here
    });
  
    function validateEmail(email) {
      // Basic email validation (customize as needed)
      const emailPattern = /\S+@\S+\.\S+/;
      return emailPattern.test(email);
    }
  });