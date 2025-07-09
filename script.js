// Mobile menu toggle
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('show');
    document.body.style.overflow = mobileMenu.classList.contains('show') ? 'hidden' : 'auto';
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!mobileMenu.contains(e.target) && e.target !== menuBtn && !menuBtn.contains(e.target)) {
        mobileMenu.classList.remove('show');
        document.body.style.overflow = 'auto';
    }
});

// Close mobile menu on resize if screen gets larger
window.addEventListener('resize', () => {
    if (window.innerWidth >= 768) {
        mobileMenu.classList.remove('show');
        document.body.style.overflow = 'auto';
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        if (this.getAttribute('href') === '#') return;
        
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            mobileMenu.classList.remove('show');
        }
    });
});

// Back to top button
const topBtn = document.getElementById('top-btn');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        topBtn.classList.add('visible');
    } else {
        topBtn.classList.remove('visible');
    }
});

topBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Donation amount buttons
const amountBtns = document.querySelectorAll('.amount-btn');
const customAmt = document.getElementById('custom-amt');

amountBtns.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        amountBtns.forEach(btn => {
            btn.classList.remove('active');
        });
        
        // Add active class to clicked button
        button.classList.add('active');
        
        // If "Other" was clicked, show the custom amount input
        if (button.textContent === 'Other') {
            customAmt.classList.remove('hidden');
            customAmt.focus();
        } else {
            customAmt.classList.add('hidden');
            customAmt.value = '';
        }
    });
});

// Form submissions
document.getElementById('donate-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for your donation! This is a demo form.');
});

document.getElementById('contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for your message! This is a demo form.');
});