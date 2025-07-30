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
            button.closest('.tab25').querySelectorAll('.tab25-nav-btn').forEach(btn => btn.classList.remove('active'));
            button.closest('.tab25').querySelectorAll('.tab25-content-item').forEach(tab => tab.classList.remove('active'));

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

    var share25 = document.querySelectorAll('.share25')
    
    if(share25){
        var sharelink = window.location.href;
        share25.forEach(function(item){
            item.querySelector('.share25-item--link').addEventListener('click', (e)=>{
                if (window.isSecureContext) {
                    navigator.clipboard.writeText(sharelink);
                } else {
                    const textarea = document.createElement('textarea');
                    textarea.value = sharelink;
                    textarea.setAttribute('readonly', '')
                    textarea.style.cssText = "position: fixed; left: -999px;";
                    document.body.appendChild(textarea);
                    textarea.select();
                    document.execCommand('copy');
                    document.body.removeChild(textarea);
                }
                
                e.target.classList.add('--show')
                setTimeout(() => {
                    e.target.classList.remove('--show')
                }, 3000);
                e.preventDefault()
            })
            item.querySelector('.share25-item--facebook').href = "https://www.facebook.com/sharer/sharer.php?u="+ encodeURIComponent(sharelink) + "%2F&amp;src=sdkpreparse"
            item.querySelector('.share25-item--x').href = "https://twitter.com/intent/tweet?url="+sharelink
        })
    }

    const readmore25 = document.querySelectorAll(".readmore25");
    readmore25.forEach(function(item){
        const fullText = item.textContent.trim();
        const maxLength = 200;
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

    var animationContainer = document.querySelector('.section--DTMovie-showing-icon');
    if (animationContainer) {
        var anim = lottie.loadAnimation({
            container: animationContainer,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            path: 'assets/images/icon-movie.json'
        });
    }

    let popupTrigger = document.querySelectorAll('[data-popup]')
    if (popupTrigger){
        popupTrigger?.forEach(item => {
            item.addEventListener("click", (e) => {
                let popup = document.querySelector('[data-popup-open="'+item.dataset.popup+'"]')
                let popupVideo = popup.querySelector('.popup-iframe')
                popup.classList.add('--open')
                if (popupVideo) {
                    popupVideo.src = popupVideo.dataset.src
                }
                e.preventDefault()
            })
        })
        let popupClose = document.querySelectorAll('[data-popup-close]')
        popupClose?.forEach(item => {
            item.addEventListener("click", (e) => {
            let popup = document.querySelector('[data-popup-open].--open')
            let popupVideo = popup.querySelector('.popup-iframe')
            popup.classList.remove('--open')
            if (popupVideo) {
                popupVideo.src = ''
            }
            e.preventDefault()
            })
        })
    }

    let itemCast = document.querySelectorAll('.item25--cast')
    if (itemCast) {
        function hexToRGBA(hex, opacity = 1) {
            const r = parseInt(hex.slice(1, 3), 16);
            const g = parseInt(hex.slice(3, 5), 16);
            const b = parseInt(hex.slice(5, 7), 16);
            return `rgba(${r}, ${g}, ${b}, ${opacity})`;
        }

        const rootStyles = getComputedStyle(document.documentElement);

        const varNames = ['--color-primary', '--color-secondary', '--color-third', '--color-fifth'];
        const totalColors = varNames.length;

        itemCast.forEach((item, index) => {
            const colorVar = varNames[index % totalColors];
            const hexColor = rootStyles.getPropertyValue(colorVar).trim();

            const img = item.querySelector('img');
            const figure = item.querySelector('.item25-image');
            const nameEl = item.querySelector('.item25-name');
            const name = nameEl?.textContent.trim() || 'U';
            const firstLetter = name.charAt(0).toUpperCase();
            const bgColor = hexToRGBA(hexColor, 0.2);

            // figure.classList.add('fallback');
            function applyInitial() {
                figure.querySelector('.item25-initial').textContent = firstLetter
                // figure.style.setProperty('--letter', `"${firstLetter}"`);
                figure.style.setProperty('--letter-color', hexColor);
                figure.style.setProperty('--bg-color', bgColor);
            }
            if (figure.querySelector('.item25-initial')) {
                applyInitial()
            }

            // img.addEventListener('error', applyFallback);

            // if (!img.complete || img.naturalWidth === 0) {
            // applyFallback();
            // }
        });
    }
});