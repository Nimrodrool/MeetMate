document.addEventListener('DOMContentLoaded', () => {
    const testimonials = [
        {
            name: "Sarah Johnson",
            role: "CEO, TechInnovate",
            company: "TechInnovate",
            image: "/placeholder.svg?height=100&width=100",
            quote: "Meetly transformed our meetings. We've cut meeting times by 50% and seen a 30% boost in team productivity."
        },
        {
            name: "Michael Chen",
            role: "Team Lead, DataDrive",
            company: "DataDrive",
            image: "/placeholder.svg?height=100&width=100",
            quote: "I used to dread meetings, but Meetly has made them focused and productive. Our team morale has significantly improved."
        },
        {
            name: "Emily Rodriguez",
            role: "COO, GrowthGenius",
            company: "GrowthGenius",
            image: "/placeholder.svg?height=100&width=100",
            quote: "The system through Meetly has streamlined our decision-making process. We're now able to tackle challenges more effectively."
        },
        {
            name: "David Patel",
            role: "Project Manager, InnovateCorp",
            company: "InnovateCorp",
            image: "/placeholder.svg?height=100&width=100",
            quote: "Meetly has revolutionized how we run projects. Our meetings are now purpose-driven, and we're seeing results faster than ever."
        },
        {
            name: "Lisa Thompson",
            role: "HR Director, PeopleFirst",
            company: "PeopleFirst",
            image: "/placeholder.svg?height=100&width=100",
            quote: "Implementing Meetly has improved cross-department communication and alignment. It's been a game-changer for our organization."
        }
    ];

    const carouselContent = document.querySelector('.carousel-content');
    let currentIndex = 0;

    function createTestimonialCard(testimonial) {
        const card = document.createElement('div');
        card.className = 'testimonial-card';
        card.innerHTML = `
            <img src="${testimonial.image}" alt="${testimonial.name}" class="testimonial-image">
            <blockquote>${testimonial.quote}</blockquote>
            <p><strong>${testimonial.name}</strong></p>
            <p>${testimonial.role}</p>
        `;
        return card;
    }

    function updateCarousel() {
        carouselContent.innerHTML = '';
        carouselContent.appendChild(createTestimonialCard(testimonials[currentIndex]));
    }

    function nextTestimonial() {
        currentIndex = (currentIndex + 1) % testimonials.length;
        updateCarousel();
    }

    function prevTestimonial() {
        currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
        updateCarousel();
    }

    document.querySelector('.carousel-next').addEventListener('click', nextTestimonial);
    document.querySelector('.carousel-prev').addEventListener('click', prevTestimonial);

    updateCarousel();

    // Form submission
    const form = document.getElementById('cta-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = form.querySelector('input[type="email"]').value;
        alert(`Thank you for your interest! We'll contact you at ${email} soon.`);
        form.reset();
    });
});

document.getElementById('cta-form').addEventListener('submit', function(event) {
    const form = event.target;
    let isValid = true;
    
    form.querySelectorAll('input, select').forEach(input => {
        if (!input.value) {
            isValid = false;
            input.style.border = '2px solid red';
            if (!input.nextElementSibling || input.nextElementSibling.className !== 'error-message') {
                const error = document.createElement('span');
                error.className = 'error-message';
                error.style.color = 'red';
                error.textContent = 'This field is required';
                input.insertAdjacentElement('afterend', error);
            }
        } else {
            input.style.border = '';
            if (input.nextElementSibling && input.nextElementSibling.className === 'error-message') {
                input.nextElementSibling.remove();
            }
        }
    });

    if (!isValid) {
        event.preventDefault();
    }
});


document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("cta-form");
    if (form) {
        form.addEventListener("submit", function (event) {
            const recaptchaResponse = grecaptcha.getResponse();
            if (!recaptchaResponse) {
                alert("Please complete the reCAPTCHA!");
                event.preventDefault();
            }
        });
    } else {
        console.error("Form with ID 'cta-form' not found.");
    }
});
