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

// Sidebar & Main Section

// Initialize price slider
document.addEventListener("DOMContentLoaded", function () {
  // Desktop slider
  const priceSlider = document.getElementById("price-slider");
  const minPriceInput = document.getElementById("minPrice");
  const maxPriceInput = document.getElementById("maxPrice");

  noUiSlider.create(priceSlider, {
    start: [0, 300],
    connect: true,
    range: {
      min: 0,
      max: 300,
    },
    step: 10,
  });

  priceSlider.noUiSlider.on("update", function (values, handle) {
    const value = values[handle];
    if (handle) {
      maxPriceInput.value = Math.round(value);
    } else {
      minPriceInput.value = Math.round(value);
    }
  });

  minPriceInput.addEventListener("change", function () {
    priceSlider.noUiSlider.set([this.value, null]);
  });

  maxPriceInput.addEventListener("change", function () {
    priceSlider.noUiSlider.set([null, this.value]);
  });

  // Mobile slider
  const mobilePriceSlider = document.getElementById("mobile-price-slider");
  const mobileMinPriceInput = document.getElementById("mobileMinPrice");
  const mobileMaxPriceInput = document.getElementById("mobileMaxPrice");

  noUiSlider.create(mobilePriceSlider, {
    start: [0, 300],
    connect: true,
    range: {
      min: 0,
      max: 300,
    },
    step: 10,
  });

  mobilePriceSlider.noUiSlider.on("update", function (values, handle) {
    const value = values[handle];
    if (handle) {
      mobileMaxPriceInput.value = Math.round(value);
    } else {
      mobileMinPriceInput.value = Math.round(value);
    }
  });

  mobileMinPriceInput.addEventListener("change", function () {
    mobilePriceSlider.noUiSlider.set([this.value, null]);
  });

  mobileMaxPriceInput.addEventListener("change", function () {
    mobilePriceSlider.noUiSlider.set([null, this.value]);
  });

  // Mobile sidebar toggle
  const filterToggle = document.getElementById("filterToggle");
  const mobileSidebar = document.getElementById("mobileSidebar");
  const sidebarOverlay = document.getElementById("sidebarOverlay");
  const closeSidebar = document.getElementById("closeSidebar");

  filterToggle.addEventListener("click", function () {
    mobileSidebar.classList.add("show");
    sidebarOverlay.classList.add("show");
  });

  closeSidebar.addEventListener("click", function () {
    mobileSidebar.classList.remove("show");
    sidebarOverlay.classList.remove("show");
  });

  sidebarOverlay.addEventListener("click", function () {
    mobileSidebar.classList.remove("show");
    this.classList.remove("show");
  });

  // Add to cart functionality
  const addToCartButtons = document.querySelectorAll(".add-to-cart");
  addToCartButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const productTitle =
        this.parentElement.querySelector(".product-title").textContent;
      const productPrice =
        this.parentElement.querySelector(".product-price").textContent;
      alert(`Added to cart: ${productTitle} - ${productPrice}`);
    });
  });

  // View details functionality
  const viewDetailsButtons = document.querySelectorAll(".view-details");
  viewDetailsButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const productTitle =
        this.parentElement.querySelector(".product-title").textContent;
      alert(`Viewing details for: ${productTitle}`);
    });
  });
});

// Testimonial Section

const swiper = new Swiper(".brand-slider", {
  slidesPerView: "auto",
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
  },
  speed: 1000,
  breakpoints: {
    0: { slidesPerView: 2 },
    576: { slidesPerView: 3 },
    768: { slidesPerView: 4 },
    992: { slidesPerView: 5 },
    1200: { slidesPerView: 6 },
  },
});

// Pause on hover
document.querySelectorAll(".brand-slide").forEach((slide) => {
  slide.addEventListener("mouseenter", () => swiper.autoplay.stop());
  slide.addEventListener("mouseleave", () => swiper.autoplay.start());
});

// Optional: Pause on touch (mobile tap)
document.querySelectorAll(".brand-slide").forEach((slide) => {
  slide.addEventListener("touchstart", () => swiper.autoplay.stop(), {
    passive: true,
  });
  slide.addEventListener("touchend", () => swiper.autoplay.start(), {
    passive: true,
  });
});
