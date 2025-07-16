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


    document.querySelectorAll('.tab25-nav-btn').forEach(button => {
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
    
    const headerFixed = document.querySelector('#headerFixed');

    if (headerFixed) {
        let lastScrollTop = 0;

        window.addEventListener('scroll', () => {
            const rect = headerFixed.getBoundingClientRect();
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const offsetTop = rect.top + scrollTop;

            const scrollingUp = scrollTop < lastScrollTop;

            if (scrollingUp && scrollTop > offsetTop) {
                headerFixed.classList.add('stick');
            } else {
                headerFixed.classList.remove('stick');
            }

            lastScrollTop = scrollTop;
        });
    }

    
    document.querySelectorAll('.section--slide25').forEach(container => {
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
        const sectionTop = targetSection.getBoundingClientRect().top + window.pageYOffset;

        window.scrollTo({
            top: sectionTop,
            behavior: "smooth"
        });
    });

    var infinites = document.querySelectorAll(".infinite");
    if (infinites) {
        infinites.forEach(infinite =>{
        var infiniteBtn = infinite.querySelector(".infinite-btn");
        var infiniteLength = parseFloat(infinite.dataset.length);
        var infiniteChild = infinite.querySelectorAll(".infinite-list > *");

        for (var i = infiniteLength; i < infiniteChild.length; i++) {
            infiniteChild[i].style.display = "none";
        }

        infiniteBtn.addEventListener("click", function(e) {
            e.preventDefault();
            for (var i = infiniteLength; i < infiniteChild.length; i++) {
                infiniteChild[i].style.display = 'flex';
            }
            infiniteBtn.style.display = 'none';
        });
        })
    }

    const readmore25 = document.querySelectorAll(".readmore25");
    readmore25.forEach(function(item){
        const fullText = item.textContent.trim();
        const maxLength = 100;
        let isTruncated = true;

        const shortText = fullText.length > maxLength
            ? fullText.substring(0, maxLength)
            : fullText;

        const btn = document.createElement("button");
        btn.textContent = "Selengkapnya";
        btn.classList.add('readmore25-btn');
        btn.addEventListener("click", () => {
            isTruncated = !isTruncated;
            item.textContent = isTruncated ? shortText + "..." : fullText;
            btn.textContent = isTruncated ? "Selengkapnya" : "Tutup";
            item.appendChild(btn);
        });

        item.textContent = shortText + "...";
        item.appendChild(btn);
    })
    if (document.querySelector('.section--cast')) {
        const castslide = document.querySelectorAll('.section--cast-swiper .swiper-slide').length;
        const castSwiper = new Swiper('.section--cast-swiper', {
            slidesPerView: castslide > 4 ? 'auto' : 4,
            grid: {
                rows: castslide > 4 ? 2 : 1,
                fill: 'row',
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
    }

});