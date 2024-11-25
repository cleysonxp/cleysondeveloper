document.addEventListener('DOMContentLoaded', () => {
    let menuIcon = document.querySelector('#menu-icon');
    let navbar = document.querySelector('.navbar');
    let sections = document.querySelectorAll('section');
    let navLinks = document.querySelectorAll('header nav a');

    // Destacar o link ativo no menu ao rolar
    window.onscroll = () => {
        sections.forEach((sec) => {
            let top = window.scrollY;
            let offset = sec.offsetTop - 150;
            let height = sec.offsetHeight;
            let id = sec.getAttribute('id');

            if (top >= offset && top < offset + height) {
                navLinks.forEach((link) => link.classList.remove('active'));
                document
                    .querySelector('header nav a[href*=' + id + ']')
                    ?.classList.add('active');
            }
        });
    };

    // Alternar o menu mobile
    menuIcon.onclick = () => {
        menuIcon.classList.toggle('bx-x');
        navbar.classList.toggle('active');
    };
});

particlesJS('particles-js', {
    particles: {
        number: {
            value: 80,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: "#00ff51"
        },
        shape: {
            type: "circle",
        },
        opacity: {
            value: 0.5,
        },
        size: {
            value: 3,
        },
        move: {
            enable: true,
            speed: 3,
        }
    }
});
