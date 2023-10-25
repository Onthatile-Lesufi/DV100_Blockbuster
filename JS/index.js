/////////////////////////////////////////////////////////////////////////
///////////sign up page and sign in page//////////
$(document).ready(function() {
  //-----------------------------------------------------------
  //-sign up form------------------------------
  //-----------------------------------------------------------
  $('#sign-up-form').submit(function(event) {
    event.preventDefault();
    if (this.checkValidity() === false) {
      event.stopPropagation();
    } else {
      // Check if the password meets the criteria
      const password = $('#password').val();
      if (isPasswordValid(password)) {
        // Any code that should run when the password is valid
        window.location.href = 'pages/index.html';
      } else {
        // Display an error message or take appropriate action
        alert('Password must contain at least one capital letter and one number.');
      }
    }
    $(this).addClass('was-validated');
  });

  function isPasswordValid(password) {
    // Define a regular expression to check for a capital letter and a number
    const regex = /^(?=.*[A-Z])(?=.*\d)/;
    return regex.test(password);
  }
});