$(document).ready(function() {
 $('#contact-form').submit(function(e) {
   var fname    = document.getElementById('FirstName'),
    lname   = document.getElementById('LastName'),
    phone    = document.getElementById('phone'),
    email   = document.getElementById('email'),
    party= document.getElementById('event'),
    guests   = document.getElementById('guests'),
    date   = document.getElementById('date'),
    message = document.getElementById('commentbox');

   if (!fname.value || !lname.value || !phone.value || !email.value || !party.value || !guests.value || !message.value || !date.value) {
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
     alertify.success("Thank You for your message, We'll be intouch very soon!!!");
   };
