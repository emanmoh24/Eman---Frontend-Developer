const cursor = document.querySelector('.cursor');

if (cursor) {
    window.addEventListener('pointermove', (event) => {
        cursor.style.left = `${event.clientX}px`;
        cursor.style.top = `${event.clientY}px`;
    });

    document.querySelectorAll('a').forEach((link) => {
        link.addEventListener('mouseenter', () => cursor.classList.add('is-hover'));
        link.addEventListener('mouseleave', () => cursor.classList.remove('is-hover'));
    });
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
    });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));

const clock = document.querySelector('#clock');
const updateClock = () => {
    clock.textContent = new Intl.DateTimeFormat('en-GB', {
        hour: '2-digit', minute: '2-digit', second: '2-digit', timeZone: 'Africa/Cairo'
    }).format(new Date());
};

if (clock) {
    updateClock();
    setInterval(updateClock, 1000);
}

const contactForm = document.querySelector('#contact-form');
const formStatus = document.querySelector('#form-status');

if (contactForm && formStatus) {
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();

        if (!contactForm.checkValidity()) {
            contactForm.reportValidity();
            return;
        }

        formStatus.textContent = 'Thanks, your note is ready to be answered.';
        contactForm.reset();
    });
}
