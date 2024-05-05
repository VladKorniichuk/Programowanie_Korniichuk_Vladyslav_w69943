document.addEventListener("DOMContentLoaded", function() {
  function validateForm() {
      var form = document.getElementById("myForm");
      var firstName = form.elements["firstName"];
      var lastName = form.elements["lastName"];
      var email = form.elements["email"];
      var password = form.elements["password"];
      var confirmPassword = form.elements["confirmPassword"];
      var gender = form.elements["gender"];
      var phone = form.elements["phone"];
      var day = form.elements["day"];
      var province = form.elements["province"];
      var residentialAddress = form.elements["residentialAddress"];
      var sameAddressCheckbox = form.elements["sameAddress"];
      var correspondenceAddress = form.elements["correspondenceAddress"];

      var isValid = true;

      resetErrorMessages();

      if (firstName.value === "") {
          displayErrorMessage(firstName, "First name cannot be empty");
          isValid = false;
      }

      if (lastName.value === "") {
          displayErrorMessage(lastName, "Last name cannot be empty");
          isValid = false;
      }

      if (email.value === "") {
          displayErrorMessage(email, "Email cannot be empty");
          isValid = false;
      } else if (!isValidEmail(email.value)) {
          displayErrorMessage(email, "Invalid email format");
          isValid = false;
      }

      if (password.value.length < 8) {
          displayErrorMessage(password, "Password must be at least 8 characters long");
          isValid = false;
      }

      if (confirmPassword.value !== password.value) {
          displayErrorMessage(confirmPassword, "Passwords do not match");
          isValid = false;
      }

      if (!gender[0].checked && !gender[1].checked) {
          displayErrorMessage(document.getElementById("gender-error"), "Please select your gender");
          isValid = false;
      }

      if (phone.value === "") {
          displayErrorMessage(phone, "Phone number cannot be empty");
          isValid = false;
      }

      if (!isValidDate(day.value)) {
          displayErrorMessage(day, "You must be at least 18 years old");
          isValid = false;
      }

      if (province.value === "") {
          displayErrorMessage(province, "Please select a province");
          isValid = false;
      }

      if (residentialAddress.value === "") {
          displayErrorMessage(residentialAddress, "Address cannot be empty");
          isValid = false;
      }

      if (!sameAddressCheckbox.checked && correspondenceAddress.value === "") {
          displayErrorMessage(correspondenceAddress, "Address cannot be empty");
          isValid = false;
      }

      return isValid;
  }

  function displayErrorMessage(inputField, message) {
      var errorDiv = document.getElementById(inputField.id + "-error");
      errorDiv.textContent = message;
      inputField.classList.add("invalid");
  }

  function resetErrorMessages() {
      var errorDivs = document.querySelectorAll(".error");
      errorDivs.forEach(function(errorDiv) {
          errorDiv.textContent = "";
      });

      var inputFields = document.querySelectorAll("input, select");
      inputFields.forEach(function(inputField) {
          inputField.classList.remove("invalid");
      });
  }

  function updateCorrespondenceAddressVisibility() {
      var correspondenceAddress = document.getElementById("correspondenceAddress");
      correspondenceAddress.style.display = document.getElementById("sameAddress").checked ? "none" : "block";
  }

  function updateProvinceState() {
      var province = document.getElementById("province");
      province.disabled = document.getElementById("country").value === "";
  }

  function restrictToNumbers(inputField) {
      inputField.addEventListener("input", function() {
          this.value = this.value.replace(/\D/g, ''); // Allow only digits
      });
  }

  document.getElementById("sameAddress").addEventListener("change", updateCorrespondenceAddressVisibility);
  document.getElementById("country").addEventListener("change", updateProvinceState);

  document.getElementById("myForm").addEventListener("submit", function(event) {
      if (!validateForm()) {
          event.preventDefault();
      }
  });

  var formInputs = document.querySelectorAll("#myForm input, #myForm select");
  formInputs.forEach(function(input) {
      input.addEventListener("input", function() {
          resetErrorMessages();
          updateCorrespondenceAddressVisibility();
          updateProvinceState();
      });
  });

  function isValidEmail(email) {
      var re = /\S+@\S+\.\S+/;
      return re.test(email);
  }

  function isValidDate(inputDate) {
      var birthday = new Date(inputDate);
      var eighteenYearsAgo = new Date();
      eighteenYearsAgo.setFullYear(eighteenYearsAgo.getFullYear() - 18);
      return birthday <= eighteenYearsAgo;
  }

  updateCorrespondenceAddressVisibility();
  updateProvinceState();

  var phoneInput = document.getElementById("phone");
  restrictToNumbers(phoneInput);
});
