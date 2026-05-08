// ============================================================
// COMPONENTS/CONTACT.JS  —  Contact form logic + toast
// ============================================================

(function initContact() {
  const form      = document.getElementById("contact-form");
  const submitBtn = document.getElementById("submit-btn");
  const toast     = document.getElementById("toast");

  if (!form || !submitBtn || !toast) return;

  // Show toast helper
  function showToast(message) {
    toast.textContent = message;
    toast.classList.add("show");
    setTimeout(() => toast.classList.remove("show"), 3500);
  }

  // Form submit
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Button feedback
    const original = submitBtn.textContent;
    submitBtn.textContent    = "✓ Sent!";
    submitBtn.style.background = "#2d7a4f";
    submitBtn.disabled       = true;

    showToast("✓ Message sent! We'll be in touch soon.");

    // Reset after delay
    setTimeout(() => {
      form.reset();
      submitBtn.textContent    = original;
      submitBtn.style.background = "";
      submitBtn.disabled       = false;
    }, 3200);
  });
})();
