// Hamburger menu
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('nav ul');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('open');
    hamburger.classList.toggle('active');
});

navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        hamburger.classList.remove('active');
    });
});

// Form validation
const form = document.querySelector('.contact-form');
if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const emailInput = form.querySelector('input[type="email"]');
        const messageInput = form.querySelector('textarea');
        const email = emailInput.value.trim();
        const message = messageInput.value.trim();

        form.querySelectorAll('.form-msg').forEach(el => el.remove());

        const showMsg = (text, type) => {
            const msg = document.createElement('p');
            msg.className = `form-msg ${type}`;
            msg.textContent = text;
            form.appendChild(msg);
            setTimeout(() => msg.remove(), 4000);
        };

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email) { showMsg('Please enter your email.', 'error'); return; }
        if (!emailRegex.test(email)) { showMsg('Please enter a valid email.', 'error'); return; }
        if (!message) { showMsg('Please enter a message.', 'error'); return; }
        showMsg("Message sent! I'll get back to you soon.", 'success');
        form.reset();
    });
}

// Back to top button
const backToTop = document.createElement('button');
backToTop.innerText = '↑';
backToTop.id = 'backToTop';
backToTop.style.cssText = `
    position: fixed; bottom: 30px; right: 30px;
    background: #f97316; color: white; border: none;
    padding: 12px 16px; font-size: 20px; border-radius: 50%;
    cursor: pointer; display: none; z-index: 999; transition: 0.3s;
`;
document.body.appendChild(backToTop);

window.addEventListener('scroll', () => {
    backToTop.style.display = window.scrollY > 300 ? 'block' : 'none';
});

backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
