function openSidebar() {
  document.getElementById("sidebar").classList.add("show");
  document.getElementById("overlay").classList.add("show");
  document.body.style.overflow = "hidden";
}

function closeSidebar() {
  document.getElementById("sidebar").classList.remove("show");
  document.getElementById("overlay").classList.remove("show");
  document.body.style.overflow = "auto";
}

// Close sidebar when window is resized to large screen
window.addEventListener("resize", function () {
  if (window.innerWidth >= 992) {
    closeSidebar();
  }
});

// New one



// Handle location selection
document.addEventListener("DOMContentLoaded", function () {
  const locationCards = document.querySelectorAll(".location-card");
  const selectedLocationSpan = document.getElementById("selectedLocation");
  const locationModal = document.getElementById("locationModal");
  const bootstrapModal = new bootstrap.Modal(locationModal);

  locationCards.forEach((card) => {
    card.addEventListener("click", function () {
      const selectedLocation = this.getAttribute("data-location");
      selectedLocationSpan.textContent = selectedLocation;

      // Close the modal
      bootstrapModal.hide();

      // Optional: Add some visual feedback
      selectedLocationSpan.style.color = "#ffeb3b";
      setTimeout(() => {
        selectedLocationSpan.style.color = "#fff";
      }, 1000);
    });
  });

  // Add hover effect to dropdown arrow
  const locationSelector = document.querySelector(".location");
  const dropdownArrow = document.querySelector(".dropdown-arrow");

  locationSelector.addEventListener("mouseenter", function () {
    dropdownArrow.style.transform = "rotate(180deg)";
  });

  locationSelector.addEventListener("mouseleave", function () {
    dropdownArrow.style.transform = "rotate(0deg)";
  });
});

// Mobile Hamburger Menu Toggle
const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("active");
  mobileMenu.classList.toggle("active");
});

// Close mobile menu when clicking on nav links
const mobileNavLinks = document.querySelectorAll(".mobile-menu .nav-link");
mobileNavLinks.forEach((link) => {
  link.addEventListener("click", function () {
    hamburger.classList.remove("active");
    mobileMenu.classList.remove("active");
  });
});

// Close mobile menu when clicking outside
document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !mobileMenu.contains(e.target)) {
    hamburger.classList.remove("active");
    mobileMenu.classList.remove("active");
  }
});

// Active navigation highlighting
const navLinks = document.querySelectorAll(".nav-link");
navLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    // Remove active class from all links
    navLinks.forEach((l) => l.classList.remove("active"));

    // Add active class to clicked link
    this.classList.add("active");
  });
});

// Search functionality
const searchBtn = document.querySelectorAll(".btn-search");
searchBtn.forEach((btn) => {
  btn.addEventListener("click", function () {
    alert("Search functionality would be implemented here!");
  });
});

// Cart functionality
const cartBtn = document.querySelectorAll(".btn-cart");
cartBtn.forEach((btn) => {
  btn.addEventListener("click", function () {
    alert("Cart functionality would be implemented here!");
  });
});

// Modal switching functionality
const showSignupLink = document.getElementById("showSignup");
const showLoginLink = document.getElementById("showLogin");
const loginModal = new bootstrap.Modal(document.getElementById("loginModal"));
const signupModal = new bootstrap.Modal(document.getElementById("signupModal"));

showSignupLink.addEventListener("click", function (e) {
  e.preventDefault();
  loginModal.hide();
  setTimeout(() => {
    signupModal.show();
  }, 300);
});

showLoginLink.addEventListener("click", function (e) {
  e.preventDefault();
  signupModal.hide();
  setTimeout(() => {
    loginModal.show();
  }, 300);
});

// Form submissions
document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username && password) {
    alert(`Login attempted for: ${username}`);
    loginModal.hide();
  }
});

document.getElementById("signupForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const fullName = document.getElementById("signupFullName").value;
  const email = document.getElementById("signupEmail").value;
  const username = document.getElementById("signupUsername").value;
  const password = document.getElementById("signupPassword").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  if (password !== confirmPassword) {
    alert("Passwords do not match!");
    return;
  }

  if (fullName && email && username && password) {
    alert(`Account created for: ${fullName} (${email})`);
    signupModal.hide();
  }
});

// Social login handlers
document.getElementById("googleLogin").addEventListener("click", function () {
  alert("Google login would be implemented here!");
});

document.getElementById("facebookLogin").addEventListener("click", function () {
  alert("Facebook login would be implemented here!");
});

document.getElementById("googleSignup").addEventListener("click", function () {
  alert("Google signup would be implemented here!");
});

document
  .getElementById("facebookSignup")
  .addEventListener("click", function () {
    alert("Facebook signup would be implemented here!");
  });

// Forgot password handler
document
  .getElementById("forgotPasswordLink")
  .addEventListener("click", function (e) {
    e.preventDefault();
    alert("Forgot password functionality would be implemented here!");
  });

// Smooth scrolling for better UX
window.addEventListener("scroll", function () {
  const header = document.querySelector(".custom-header");
  if (window.scrollY > 50) {
    header.style.boxShadow = "0 2px 20px rgba(0,0,0,0.3)";
  } else {
    header.style.boxShadow = "0 2px 10px rgba(0,0,0,0.1)";
  }
});

// Keyboard accessibility
hamburger.addEventListener("keydown", function (e) {
  if (e.key === "Enter" || e.key === " ") {
    e.preventDefault();
    hamburger.click();
  }
});

// Touch-friendly mobile interactions
let touchStartY = 0;
let touchEndY = 0;

mobileMenu.addEventListener("touchstart", function (e) {
  touchStartY = e.changedTouches[0].screenY;
});

mobileMenu.addEventListener("touchend", function (e) {
  touchEndY = e.changedTouches[0].screenY;

  // Swipe up to close menu
  if (touchStartY - touchEndY > 50) {
    hamburger.classList.remove("active");
    mobileMenu.classList.remove("active");
  }
});

































