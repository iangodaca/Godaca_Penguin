document.addEventListener('DOMContentLoaded', () => {
    const faqSections = document.querySelectorAll('#faq div');
    faqSections.forEach(section => {
        section.querySelector('h3').addEventListener('click', () => {
            section.querySelector('p').classList.toggle('hidden');
        });
    });

    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-img');
    const closeModal = document.getElementsByClassName('close')[0];

    document.querySelectorAll('.service-img').forEach(img => {
        img.addEventListener('click', () => {
            modal.style.display = 'block';
            modalImg.src = img.src;
        });
    });

    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const navItems = document.querySelectorAll('.nav-links li a');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('open');
        hamburger.classList.toggle('is-active');
    });

    navItems.forEach(item => {
        item.addEventListener('click', () => {
            navLinks.classList.remove('open');
            hamburger.classList.remove('is-active');
        });
    });

    const searchBar = document.getElementById('search-bar');
    const searchBtn = document.getElementById('search-btn');

    searchBtn.addEventListener('click', () => {
        const query = searchBar.value.toLowerCase();
        const services = document.querySelectorAll('.service');

        services.forEach(service => {
            const serviceName = service.querySelector('h3').textContent.toLowerCase();
            if (serviceName.includes(query)) {
                service.style.display = 'block';
            } else {
                service.style.display = 'none';
            }
        });
    });

    const faders = document.querySelectorAll('.fade-in');
    const sliders = document.querySelectorAll('.slide-in');

    const appearOptions = {
        threshold: 0,
        rootMargin: "0px 0px -100px 0px"
    };

    const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('appear');
                appearOnScroll.unobserve(entry.target);
            }
        });
    }, appearOptions);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });

    sliders.forEach(slider => {
        appearOnScroll.observe(slider);
    });

    navItems.forEach(item => {
        item.addEventListener('click', () => {
            navItems.forEach(link => link.classList.remove('active'));
            item.classList.add('active');
        });
    });

    const contactForm = document.querySelector(".contact-form");
    contactForm.addEventListener("submit", function(e) {
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (!name || !email || !message) {
            e.preventDefault();
            alert("Please fill in all fields.");
        }
    });

    const backToTopBtn = document.createElement('button');
    backToTopBtn.innerText = 'Top';
    backToTopBtn.classList.add('btn', 'btn-primary', 'back-to-top');
    document.body.appendChild(backToTopBtn);

    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    });

    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
});
