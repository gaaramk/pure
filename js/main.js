// navbar
const nav = document.querySelector(".nav");
const toggle = document.querySelector(".toggle");

toggle.addEventListener("click", () => {
  nav.style.display === "none"
    ? (nav.style.display = "block")
    : (nav.style.display = "none");
});

function activeLink() {
  const links = document.querySelectorAll(".nav .link");
  links.forEach((link) => {
    link.addEventListener("click", () => {
      links.forEach((link) => {
        link.classList.remove("active");
      });
      link.classList.add("active");
    });
  });
}
activeLink();

// gallery
const gallery = document.querySelector(".gallery");
const galleryImgs = Array.from(
  document.querySelectorAll(".gallery .column img")
);
const overlay = document.querySelector(".overlay");
const overlayImg = document.querySelector(".overlayImg img");
const closeBtn = document.querySelector(".close");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
let index;

gallery.addEventListener("click", (e) => {
  if (e.target.tagName === "IMG") {
    overlay.style.display = "flex";
    overlayImg.src = e.target.src;
    overlayImg.alt = e.target.alt;
  }
});

closeBtn.addEventListener("click", () => {
  overlay.style.display = "none";
});

function slider(step) {
  index = galleryImgs.findIndex((img) => img.src === overlayImg.src);
  if (index === -1) return;
  index += step;
  if (index < 0) index = galleryImgs.length - 1;
  if (index > galleryImgs.length - 1) index = 0;

  overlayImg.src = galleryImgs[index].src;
  overlayImg.alt = galleryImgs[index].alt;
}

prevBtn.addEventListener("click", () => slider(-1));
nextBtn.addEventListener("click", () => slider(1));

// validation contact form
const form = document.querySelector("form");
const firstName = document.querySelector("#firstName");
const lastName = document.querySelector("#lastName");
const email = document.querySelector("#email");
const message = document.querySelector("#message");
const submit = document.querySelector("#submit");
const firstNameError = document.querySelector("#firstNameError");
const lastNameError = document.querySelector("#lastNameError");
const emailError = document.querySelector("#emailError");
const messageError = document.querySelector("#messageError");
const generalError = document.querySelector("#generalError");
const firstNameSuccess = document.querySelector("#firstNameSuccess");
const lastNameSuccess = document.querySelector("#lastNameSuccess");
const emailSuccess = document.querySelector("#emailSuccess");
const messageSuccess = document.querySelector("#messageSuccess");

function validateEmail() {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (regex.test(email.value)) {
    emailError.style.display = "none";
    emailSuccess.style.display = "block";
    return true;
  } else {
    emailError.style.display = "block";
    emailSuccess.style.display = "none";
    return false;
  }
}

function validationFirstName() {
  const regex = /^[a-zA-Z]+$/;
  if (regex.test(firstName.value)) {
    firstNameError.style.display = "none";
    firstNameSuccess.style.display = "block";
    return true;
  } else {
    firstNameError.style.display = "block";
    firstNameSuccess.style.display = "none";
    return false;
  }
}

function validationLastName() {
  const regex = /^[a-zA-Z]+$/;
  if (regex.test(lastName.value)) {
    lastNameError.style.display = "none";
    lastNameSuccess.style.display = "block";
    return true;
  } else {
    lastNameError.style.display = "block";
    lastNameSuccess.style.display = "none";
    return false;
  }
}

function validationMessage() {
  const regex = /^[a-zA-Z]+/;
  if (regex.test(message.value)) {
    messageError.style.display = "none";
    messageSuccess.style.display = "block";
    return true;
  } else {
    messageError.style.display = "block";
    messageSuccess.style.display = "none";
    return false;
  }
}

message.addEventListener("input", () => {
  validationMessage();
});

firstName.addEventListener("input", () => {
  validationFirstName();
});

lastName.addEventListener("input", () => {
  validationLastName();
});

email.addEventListener("input", () => {
  validateEmail();
});

submit.addEventListener("click", () => {
  if (
    validationFirstName() &&
    validationLastName() &&
    validateEmail() &&
    validationMessage()
  ) {
    alert("Form submitted successfully!");
  } else {
    generalError.style.display = "block";
  }
});
