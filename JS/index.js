$(document).ready(function() {
  //-----------------------------------------------------------
  //- Form Submit Logic (for both sign-up and sign-in) -------
  //-----------------------------------------------------------
  $('form').submit(function(event) {
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
        // Display an error message under the input field
        $('#password-error').text('Password must contain at least one capital letter and one number.');
        $('#password').addClass('is-invalid');
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