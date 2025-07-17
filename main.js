// Mobile Menu Toggle
document.querySelector('.mobile-menu-btn').addEventListener('click', function() {
    document.querySelector('.main-nav').classList.toggle('active');
});

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if(targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if(targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            document.querySelector('.main-nav').classList.remove('active');
        }
    });
});

// Testimonial Slider (simple version)
let currentTestimonial = 0;
const testimonials = document.querySelectorAll('.testimonial');

function showTestimonial(index) {
    testimonials.forEach((testimonial, i) => {
        testimonial.style.display = i === index ? 'block' : 'none';
    });
}

// Auto-rotate testimonials every 5 seconds
setInterval(() => {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    showTestimonial(currentTestimonial);
}, 5000);

// Initialize
showTestimonial(0);

// Form Validation Example
const forms = document.querySelectorAll('form');
forms.forEach(form => {
    form.addEventListener('submit', function(e) {
        const emailInput = this.querySelector('input[type="email"]');
        if(emailInput && !emailInput.value.includes('@')) {
            e.preventDefault();
            alert('Please enter a valid email address');
            emailInput.focus();
        }
    });
});

// Sticky Header on Scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('.main-header');
    if(window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

//Password eye 

let inputEl = document.querySelector("input");
let showEl = document.querySelector(".fa-eye");
let hideEl = document.querySelector(".fa-eye-slash");


showEl.addEventListener("click", () =>{
    inputEl.type = "text";
    hideEl.classList.remove("hide");
    showEl.classList.add("hide");
})

showEl.addEventListener("click", () =>{
    inputEl.type = "password";
    hideEl.classList.add("hide");
    showEl.classList.remove("hide");
})

// Add this to your main.js or script section
document.addEventListener('DOMContentLoaded', function() {
    // Animate stats counting
    const statItems = document.querySelectorAll('.stat-item');
    
    statItems.forEach(item => {
        const numberElement = item.querySelector('.stat-number');
        const target = parseInt(numberElement.getAttribute('data-count'));
        const duration = 2000; // Animation duration in ms
        const step = target / (duration / 16); // 60fps
        
        let current = 0;
        const counter = setInterval(() => {
            current += step;
            if (current >= target) {
                clearInterval(counter);
                current = target;
            }
            numberElement.textContent = Math.floor(current);
        }, 16);
    });
    
    // Scroll animations
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.animate__animated');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                element.classList.add('animate__fadeInUp');
            }
        });
    };
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Run once on load
});