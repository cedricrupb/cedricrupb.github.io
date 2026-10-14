// Decode only when the visitor activates the contact button.
const emailContact = document.querySelector('.email-contact');
emailContact.hidden = false;
emailContact.addEventListener('click', function () {
  window.location.href = 'mailto:' + atob('Y2VkcmljLnJpY2h0ZXJAaHUtYmVybGluLmRl');
});
