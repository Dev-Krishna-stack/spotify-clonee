const hamburger = document.getElementById('hamburger');
const sideMenu = document.getElementById('sideMenu');

hamburger.addEventListener('click', () => {
  sideMenu.classList.toggle('show');
});

function validateForm() {
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  const status = document.getElementById('form-status');

  if (name === "" || email === "" || message === "") {
    status.textContent = "Please fill out all fields.";
    status.style.color = "red";
    return false;
  }

  status.textContent = "Thank you! Your message has been sent.";
  status.style.color = "lightgreen";

  // Clear the form
  document.getElementById('contactForm').reset();
  return false; // Prevent real submission for demo
}