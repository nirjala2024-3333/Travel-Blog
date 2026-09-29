document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const message = document.getElementById("message");

    if (email === "" || password === "") {
      message.textContent = "Please enter both email and password.";
      message.style.color = "red";
      message.classList.remove("hidden");
    } else {
      message.textContent = "Login successful! Redirecting to your favorite travels...";
      message.style.color = "lightgreen";
      message.classList.remove("hidden");

      setTimeout(() => {
        window.location.href = "homePage.html";
      }, 1500);
    }
  });
});