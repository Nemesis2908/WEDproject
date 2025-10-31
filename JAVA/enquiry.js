document.getElementById("enquiryForm").addEventListener("submit", function (e) {
  e.preventDefault(); // stop form from refreshing

  // Get input values
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const type = document.getElementById("type").value;
  const message = document.getElementById("message").value.trim();
  const responseDiv = document.getElementById("response");

  // Basic validation
  if (!name || !email || !type || !message) {
    responseDiv.innerHTML = "<p style='color:red;'>Please fill in all fields.</p>";
    return;
  }

  // Basic email pattern check
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/i;
  if (!emailPattern.test(email)) {
    responseDiv.innerHTML = "<p style='color:red;'>Please enter a valid email address.</p>";
    return;
  }

  // Simulated response based on enquiry type
  let reply = "";
  switch (type) {
    case "products":
      reply = "The products you enquired about are currently in stock!";
      break;
    case "sponsor":
      reply = "Thank you for your interest in sponsoring us. Our team will reach out to you shortly.";
      break;
  }

  responseDiv.innerHTML = `<p style='color:green;'>Thank you, ${name}! ${reply}</p>`;

  // Optionally clear form
  document.getElementById("enquiryForm").reset();
});

