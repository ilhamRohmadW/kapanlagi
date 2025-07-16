window.addEventListener('load', () => {

    document.querySelectorAll('[data-target-open]')?.forEach(button => {
        button.addEventListener('click', () => {
            const targetId = button.getAttribute('data-target-open');
            const targetElement = document.getElementById(targetId);
            if (targetElement) 
                targetElement.classList.add('open');
                document.body.classList.add('expand');
            e.preventDefault()
        });
    });

    document.querySelectorAll('[data-target-close]')?.forEach(button => {
        button.addEventListener('click', (e) => {
            const targetId = button.getAttribute('data-target-close');
            const targetElement = document.getElementById(targetId);
            if (targetElement) 
                targetElement.classList.remove('open');
                document.body.classList.remove('expand');
            e.preventDefault()
        });
    });

    
    const headerFixed = document.querySelector('#headerFixed');

    if (headerFixed) {
        window.addEventListener('scroll', () => {
            const rect = headerFixed.getBoundingClientRect();
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const offsetTop = rect.top + scrollTop; // Akurat meskipun layout dinamis
            
            if (scrollTop > offsetTop) {
                headerFixed.classList.add('stick');
            } else {
                headerFixed.classList.remove('stick');
            }
        });
    }

    document.querySelectorAll('.tab25-nav-btn')?.forEach(button => {
        button.addEventListener('click', (e) => {
            const tabId = button.getAttribute('data-tab');

            // Remove active class from all buttons and contents
            document.querySelectorAll('.tab25-nav-btn').forEach(btn => btn.classList.remove('active'));
            document.querySelectorAll('.tab25-content-item').forEach(tab => tab.classList.remove('active'));

            // Add active class to clicked button and corresponding content
            button.classList.add('active');
            document.getElementById(tabId).classList.add('active');

            e.preventDefault()
        });
    });

    document.querySelectorAll('.section--slide25')?.forEach(container => {
        const videoSwiper = new Swiper(container.querySelector('.section--slide25-swiper'), {
            slidesPerView: 'auto',
            spaceBetween: 24,
            // loop: 'true',
            scrollbar: {
                el: ".swiper-scrollbar",
                // hide: true,
            },
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            navigation: {
                nextEl: container.querySelector('.swiper-button-next'),
                prevEl: container.querySelector('.swiper-button-prev'),
            },
        });
    });
    var headlineSwiper = new Swiper(".section--HMovie-swiper", {
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });

    document.querySelector(".btn--PDownSection")?.addEventListener("click", function (e) {
        e.preventDefault();
        const section = e.target.closest("section");
        let targetSection = section?.nextElementSibling;

        while (targetSection && targetSection.tagName !== "SECTION") {
            targetSection = targetSection.nextElementSibling;
        }

        if (!targetSection) return;
        const navbarHeight = document.querySelector(".header25")?.offsetHeight || 0;
        const sectionTop = targetSection.getBoundingClientRect().top + window.pageYOffset;

        window.scrollTo({
            top: sectionTop - navbarHeight,
            behavior: "smooth"
        });
    });
});