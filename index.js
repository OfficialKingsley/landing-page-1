const toggleNav = (hamburger, navbar) => {
  hamburger.addEventListener("click", () => {
    navbar.classList.toggle("open");
  });
};

document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector("#hamburger");
  const navbar = document.querySelector("#navbar");
  const closeBtn = document.querySelector("#close_icon");
  const signupBtn = document.getElementById("signup_btn");
  const closeSignup = document.querySelector("#close_signup");
  closeSignup.addEventListener("click", () => {
    document.getElementById("signup").classList.remove("open");
  });
  const password = document.getElementById("password");
  const eye1 = document.getElementById("eye1");
  const confirmPassword = document.getElementById("confirm_password");
  const eye2 = document.getElementById("eye2");

  eye1.addEventListener("click", () => {
    if (password.getAttribute("type") === "password") {
      eye1.innerHTML = "hide";
      password.setAttribute("type", "text");
    } else {
      eye1.innerHTML = "show";
      password.setAttribute("type", "password");
    }
  });

  eye2.addEventListener("click", () => {
    if (confirmPassword.getAttribute("type") === "password") {
      eye2.innerHTML = "hide";
      confirmPassword.setAttribute("type", "text");
    } else {
      eye2.innerHTML = "show";
      confirmPassword.setAttribute("type", "password");
    }
  });
  signupBtn.addEventListener("click", (e) => {
    e.preventDefault();
    document.getElementById("signup").classList.add("open");
  });
  toggleNav(closeBtn, navbar);
  toggleNav(hamburger, navbar);
});
