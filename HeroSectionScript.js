document.getElementById("consultationForm").addEventListener("submit", function (e) {
  const consent = document.getElementById("consent");

  if (!consent.checked) {
    alert("Please agree to the Terms and Privacy Policy.");
    e.preventDefault();
  }
});
