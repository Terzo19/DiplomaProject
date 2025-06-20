document.addEventListener("DOMContentLoaded", () => {
  // Confirmation message logic for each form
  document.querySelectorAll("form").forEach(form => {
    form.addEventListener("submit", e => {
      e.preventDefault();
      const confirmation = form.querySelector(".confirmation-message");
      if (confirmation) {
        confirmation.style.display = "block";
      }
    });
  });
});