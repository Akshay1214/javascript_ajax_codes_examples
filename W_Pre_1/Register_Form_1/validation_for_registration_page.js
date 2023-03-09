const validateFirstName = (firstName) => {
  if (firstName.trim() == "") {
    return { staus: false, message: "First name cannot be empty." };
  }
  if (firstName.length <= 3) {
    return {
      status: false,
      message: "First name length should be greater or equal to 3.",
    };
  }
  if (firstName.length > 50) {
    return {
      status: false,
      message: "First name length should be less or equal to 50.",
    };
  }
  return { status: true };
};

const validateLastName = (lastName) => {
  if (lastName.trim() == "") {
    return { staus: false, message: "Last name cannot be empty." };
  }
  if (lastName.length <= 3) {
    return {
      status: false,
      message: "Last name length should be greater or equal to 3.",
    };
  }
  if (lastName.length > 50) {
    return {
      status: false,
      message: "Last name length should be less or equal to 50.",
    };
  }
  return { status: true };
};

const validateCompanyName = (company) => {
  if (company.trim() == "") {
    return { staus: false, message: "Company name cannot be empty." };
  }
  if (company.length <= 3) {
    return {
      status: false,
      message: "Company name length should be greater or equal to 3.",
    };
  }
  if (company.length > 50) {
    return {
      status: false,
      message: "Company name length should be less or equal to 50.",
    };
  }
  return { status: true };
};

const validateEmail = (email) => {
  if (email.trim() == "") {
    return { staus: false, message: "Email cannot be empty." };
  }
  var atSymbol = email.indexOf("@");

  if (atSymbol < 1) {
    return { staus: false, message: "Enter valid email." };
  }
  var dot = email.indexOf(".");
  if (dot <= atSymbol + 2) {
    return { staus: false, message: "Enter valid email." };
  }
  if (dot === email.length - 1) {
    return { staus: false, message: "Enter valid email." };
  }
  return { status: true };
};

const validateCountryCode = (countryCode) => {
  if (countryCode.trim() == "") {
    return { staus: false, message: "Country code cannot be empty." };
  }
  return { status: true };
};

const validatePhoneNumber = (phoneNumber) => {
  let phoneno = /^\d{10}$/;
  if (phoneNumber.match(phoneno)) {
    return { status: true };
  } else {
    return { staus: false, message: "Enter valid 10 digit phone number." };
  }
};

const validateCountry = (country) => {
  if (country === "") {
    return { staus: false, message: "Select valid country." };
  } else {
    return { status: true };
  }
};

const validateGender = (gender) => {
  let gender_list = ["male", "female"];
  if (gender_list.includes(gender)) {
    return { status: true };
  } else {
    return { staus: false, message: "Select valid gender." };
  }
};

const validateLanguage = (languages) => {
  let languageArray = [];
  for (let i = 0; i < languages.length; i++) {
    languageArray.push(languages[i].checked);
  }
  let status = languageArray.some((language) => language);
  if (status) {
    return { status };
  }
  return { status, message: "Select atleast one language." };
};

const validateComment = (comment) => {
  if (comment.trim() == "") {
    return { staus: false, message: "Comment cannot be empty." };
  }
  if (comment.length <= 3) {
    return {
      status: false,
      message: "Comment length should be greater or equal to 3.",
    };
  }
  if (comment.length > 200) {
    return {
      status: false,
      message: "Comment length should be less or equal to 200.",
    };
  }
  return { status: true };
};

const validateTerms = (terms) => {
  if (terms.checked) {
    return { status: true };
  }
  return { staus: false, message: "Please accept the Terms and Conditions." };
};

const showError = (id, message) => {
  document.getElementById(id).innerHTML = message;
};

const form = document.getElementById("userForm");
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstName = form.elements["firstName"];
  const lastName = form.elements["lastName"];
  const company = form.elements["company"];
  const email = form.elements["email"];
  const countryCode = form.elements["country-code"];
  const phoneNumber = form.elements["phone-number"];
  const country = form.elements["country"];
  const gender = form.elements["gender"];
  const languages = form.elements["languages[]"];
  const comment = form.elements["comment"];
  const terms = form.elements["terms"];

  let validationResults = 0;

  let response = validateFirstName(firstName.value);
  if (!response.status) {
    showError("fn-error", response.message);
    validationResults++;
  } else {
    showError("fn-error", "");
  }

  response = validateLastName(lastName.value);
  if (!response.status) {
    showError("ln-error", response.message);
    validationResults++;
  } else {
    showError("ln-error", "");
  }

  response = validateCompanyName(company.value);
  if (!response.status) {
    showError("company-error", response.message);
    validationResults++;
  } else {
    showError("company-error", "");
  }

  response = validateEmail(email.value);
  if (!response.status) {
    showError("email-error", response.message);
    validationResults++;
  } else {
    showError("email-error", "");
  }

  response = validateCountryCode(countryCode.value);
  if (!response.status) {
    showError("cc-error", response.message);
    validationResults++;
  } else {
    showError("cc-error", "");
  }

  response = validatePhoneNumber(phoneNumber.value);
  if (!response.status) {
    showError("ph-error", response.message);
    validationResults++;
  } else {
    showError("ph-error", "");
  }

  response = validateCountry(country.value);
  if (!response.status) {
    showError("country-error", response.message);
    validationResults++;
  } else {
    showError("country-error", "");
  }

  response = validateGender(gender.value);
  if (!response.status) {
    showError("gender-error", response.message);
    validationResults++;
  } else {
    showError("gender-error", "");
  }

  response = validateLanguage(languages);
  if (!response.status) {
    showError("language-error", response.message);
    validationResults++;
  } else {
    showError("language-error", "");
  }

  response = validateComment(comment.value);
  if (!response.status) {
    showError("comment-error", response.message);
    validationResults++;
  } else {
    showError("comment-error", "");
  }

  response = validateTerms(terms);
  if (!response.status) {
    showError("terms-error", response.message);
    validationResults++;
  } else {
    showError("terms-error", "");
  }

  if (validationResults === 0) {
    form.submit();
    alert("Form submitted successfully!");
  }
});
