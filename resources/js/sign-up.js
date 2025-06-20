document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("signup-form");
  const messageEl = document.getElementById("form-message");
  const passwordInput = document.getElementById("password");
  const confirmPasswordInput = document.getElementById("confirm-password");
  const matchMessage = document.getElementById("match-message");

  const strongPassword = /^(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{6,}$/;

  // Toggle password visibility
  document.querySelectorAll(".toggle-password").forEach(button => {
    button.addEventListener("click", () => {
      const targetId = button.getAttribute("data-target");
      const input = document.getElementById(targetId);
      const isPassword = input.type === "password";
      input.type = isPassword ? "text" : "password";
      button.textContent = isPassword ? "🙈" : "👁️";
    });
  });

  // Live password match check
  function checkPasswordMatch() {
    if (confirmPasswordInput.value.length > 0) {
      matchMessage.style.display =
        passwordInput.value !== confirmPasswordInput.value ? "block" : "none";
    } else {
      matchMessage.style.display = "none";
    }
  }

  passwordInput.addEventListener("input", checkPasswordMatch);
  confirmPasswordInput.addEventListener("input", checkPasswordMatch);

  // Form submission validation
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;

    if (!username || !email || !password || !confirmPassword) {
      displayMessage("All fields are required.", "error");
      return;
    }

    if (!strongPassword.test(password)) {
      displayMessage("Password must contain at least 1 capital letter, 1 number, and 1 symbol.", "error");
      return;
    }

    if (password !== confirmPassword) {
      displayMessage("Passwords do not match.", "error");
      return;
    }

    displayMessage("✅ Account created successfully!", "success");
    // Optional: setTimeout(() => form.submit(), 1000);
  });

  function displayMessage(msg, type) {
    messageEl.textContent = msg;
    messageEl.className = `form-message ${type}`;
  }
});