i$(document).ready(function() {
  $('#contact-form').submit(function(e) {
    var fName    = document.getElementById('inputFName')
    var lName    = document.getElementById('inputLName')
    var phone = document.getElementById('phone')
    var email   = document.getElementById('inputEmail')
    var message = document.getElementById('inputMessage')
    var date = document.getElementById('inputDate')
    var guests = document.getElementById('inputGuests')
    var activity = document.getElementById('inputActivity')

    if (!fName.value || !lName.value || !email.value || !message.value || !phone.value || !date.value || !guests.value || !activity.value) {
      alertify.error("Please check your entries");
      return false;
    } else {
      $.ajax({
        method: 'POST',
        url: '//formspree.io/greekinoutsc@gmail.com',
        data: $('#contact-form').serialize(),
        datatype: 'json'
      });
      e.preventDefault();
      $(this).get(0).reset();
      alertify.success("Message sent");
    }
  });
});
