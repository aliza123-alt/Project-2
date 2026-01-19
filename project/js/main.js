// Mobile Menu Toggle
const menuToggle = document.querySelector(".menu-toggle");
const headerRight = document.querySelector(".header__right");

menuToggle.addEventListener("click", () => {
  headerRight.classList.toggle("active");
});

// Contact Form Validation
const form = document.getElementById("contactForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");
const errorBox = document.getElementById("formError");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const message = messageInput.value.trim();

  if (!name || !email.includes("@") || message.length < 10) {
    errorBox.textContent = "Please fill the form correctly.";
    return;
  }

  errorBox.textContent = "";
  alert("Message sent successfully!");
  form.reset();
});
