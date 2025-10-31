document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault(); // stop normal form submit

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const type = document.getElementById("type").value.trim();
  const message = document.getElementById("message").value.trim();
  const error = document.getElementById("error-message");

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!name || !email || !type || !message) {
    error.textContent = "All fields are required.";
    return;
  }

  if (!emailPattern.test(email)) {
    error.textContent = "Please enter a valid email address.";
    return;
  }

  error.textContent = ""; // clear any previous errors

  // Build the mailto link
  const recipient = "contact@amazinggroceries.com"; 
  const subject = encodeURIComponent(`${type} from ${name}`);
  const body = encodeURIComponent(
    `Name: ${name}\nEmail: ${email}\nType: ${type}\n\nMessage:\n${message}`
  );

  // Open the user's default email client
  window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
});
