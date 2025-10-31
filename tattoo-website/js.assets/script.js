/* ========================================
   InkHouse Tattoo — script.js
   Handles navigation toggle, cart system, and form validation
   ======================================== */

/* ========== MOBILE NAVIGATION ========== */
const menuToggle = document.querySelector('services'); // or const menuToggle = document.querySelector('services');
const navMenu = document.querySelector('nav ul');

if (menuToggle && navMenu) {
  menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('show');
  });
}

/* ========== BOOKING CART SYSTEM ========== */
const addToCartButtons = document.querySelectorAll('.add-to-cart');
const cartItemsContainer = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');

let total = 0;

function addToCart(name, price) {
  const li = document.createElement('li');
  li.innerHTML = `
    ${name} - R${price.toFixed(2)}
    <button class="remove-item">✖</button>
  `;
  cartItemsContainer.appendChild(li);

  total += price;
  updateTotal();

  // Remove item on click
  li.querySelector('.remove-item').addEventListener('click', () => {
    li.remove();
    total -= price;
    updateTotal();
  });
}

function updateTotal() {
  if (cartTotal) {
    cartTotal.textContent = `Total: R${total.toFixed(2)}`;
  }
}

addToCartButtons.forEach(button => {
  button.addEventListener('click', () => {
    const name = button.dataset.name;
    const price = parseFloat(button.dataset.price);
    addToCart(name, price);
  });
});

/* ========== CONTACT FORM VALIDATION & ERROR HANDLING ========== */
const contactForm = document.querySelector('form#contact-form');

if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const nameField = contactForm.querySelector('input[name="name"]');
    const emailField = contactForm.querySelector('input[name="email"]');
    const messageField = contactForm.querySelector('textarea[name="message"]');

    let hasError = false;

    // Reset previous styles
    [nameField, emailField, messageField].forEach(field => {
      field.style.border = '1px solid #ccc';
    });

    // Validate fields
    if (!nameField.value.trim()) {
      nameField.style.border = '2px solid red';
      hasError = true;
    }
    if (!emailField.value.trim() || !emailField.value.includes('@')) {
      emailField.style.border = '2px solid red';
      hasError = true;
    }
    if (!messageField.value.trim()) {
      messageField.style.border = '2px solid red';
      hasError = true;
    }

    if (hasError) {
      alert("⚠️ Please fill in all required fields correctly before submitting.");
      return;
    }

    alert("✅ Thank you for contacting InkHouse Tattoo! We'll get back to you soon.");
    contactForm.reset();
  });
}

/* ========== BOOKING FORM VALIDATION & ERROR HANDLING ========== */
const bookingForm = document.querySelector('form#booking-form');

if (bookingForm) {
  bookingForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const nameField = bookingForm.querySelector('input[name="name"]');
    const emailField = bookingForm.querySelector('input[name="email"]');
    const serviceField = bookingForm.querySelector('select[name="service"]');
    const dateField = bookingForm.querySelector('input[name="date"]');

    let hasError = false;

    // Reset borders
    [nameField, emailField, serviceField, dateField].forEach(field => {
      field.style.border = '1px solid #ccc';
    });

    // Validation checks
    if (!nameField.value.trim()) {
      nameField.style.border = '2px solid red';
      hasError = true;
    }
    if (!emailField.value.trim() || !emailField.value.includes('@')) {
      emailField.style.border = '2px solid red';
      hasError = true;
    }
    if (!serviceField.value) {
      serviceField.style.border = '2px solid red';
      hasError = true;
    }
    if (!dateField.value) {
      dateField.style.border = '2px solid red';
      hasError = true;
    }

    if (hasError) {
      alert("⚠️ Please complete all booking details before submitting.");
      return;
    }

    alert("✅ Your booking request has been received! We’ll confirm your appointment soon.");
    bookingForm.reset();
  });
}

/* ========== SMOOTH SCROLLING ========== */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
// ==========================================
// PAY NOW BUTTON HANDLER
// ==========================================
const payButton = document.getElementById('pay-button');

if (payButton) {
  payButton.addEventListener('click', () => {
    if (total === 0) {
      alert("🛒 Your cart is empty! Please add a service before paying.");
      return;
    }

    const confirmPayment = confirm(`💳 You are about to pay R${total.toFixed(2)}. Proceed?`);
    if (confirmPayment) {
      alert("✅ Payment successful! Thank you for booking with InkHouse Tattoo.");
      // Clear cart after payment
      if (cartItemsContainer) cartItemsContainer.innerHTML = '';
      total = 0;
      updateTotal();
    }
  });
}
