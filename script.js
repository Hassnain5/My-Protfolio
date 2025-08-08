// Toggle mobile menu
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Smooth scroll for navigation links
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);

    window.scrollTo({
      top: targetSection.offsetTop - 60, // Offset for sticky navbar
      behavior: 'smooth'
    });

    // Close menu on mobile after clicking link
    navLinks.classList.remove('active');
  });
});

// Contact form (frontend-only) alert



function openCertificate(src) {
  document.getElementById("certModal").style.display = "block";
  document.getElementById("certImg").src = src;
}

function closeCertificate() {
  document.getElementById("certModal").style.display = "none";
}

// Close modal if clicked outside image
window.onclick = function(event) {
  const modal = document.getElementById("certModal");
  if (event.target == modal) {
    modal.style.display = "none";
  }
};



// Contact form with EmailJS + Toast Notification
const contactForm = document.getElementById('contactForm');

function showToast(message, isSuccess = true) {
  let toast = document.createElement("div");
  toast.className = "toast";
  toast.style.backgroundColor = isSuccess ? "#16a34a" : "#dc2626"; // green or red
  toast.innerText = message;
  document.body.appendChild(toast);
  setTimeout(() => toast.classList.add("show"), 100);
  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => toast.remove(), 500);
  }, 3000);
}

contactForm.addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !email || !message) {
    showToast("Please fill in all fields", false);
    return;
  }

  emailjs.send("service_kjbud9g", "template_qz69o8i", {
    name: name,
    email: email,
    message: message
  })
  .then(function() {
      showToast("✅ Message sent successfully!");
      contactForm.reset();
  }, function(error) {
      console.error('❌ FAILED...', error);
      showToast("❌ Failed to send. Try again later.", false);
  });
});
