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
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Thank you for reaching out! I will get back to you soon.');
  contactForm.reset();
});


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
