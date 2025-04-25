document.addEventListener("DOMContentLoaded", () => {
    const passwordInput = document.querySelector(".pass-field input");
    const eyeIcon = document.querySelector(".pass-field i");
    const requirementListItems = document.querySelectorAll(".requirement-list li i");
  
    const requirements = [
      { regex: /.{8,}/, index: 0 },       // At least 8 characters
      { regex: /[0-9]/, index: 1 },       // Contains a number
      { regex: /[a-z]/, index: 2 },       // Contains a lowercase letter
      { regex: /[A-Z]/, index: 3 },       // Contains an uppercase letter
    ];
  
    passwordInput.addEventListener("keyup", ({ target: { value } }) => {
      requirements.forEach(({ regex, index }) => {
        const isValid = regex.test(value);
        const requirementIcon = requirementListItems[index];
        requirementIcon.className = isValid ? "fa fa-check" : "fa fa-circle";
      });
    });
  
    eyeIcon.addEventListener("click", () => {
      const isPassword = passwordInput.type === "password";
      passwordInput.type = isPassword ? "text" : "password";
      eyeIcon.className = isPassword ? "fa fa-eye-slash" : "fa fa-eye";
    });
  });
  