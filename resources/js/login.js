document.addEventListener("DOMContentLoaded", () => {
  const passwordInput = document.getElementById('password');
  const togglePassword = document.getElementById('toggle-password');

  if (passwordInput && togglePassword) {
    togglePassword.addEventListener('click', () => {
      const isHidden = passwordInput.type === 'password';
      passwordInput.type = isHidden ? 'text' : 'password';
      togglePassword.textContent = isHidden ? '🙈' : '👁️';
    });
  }
});