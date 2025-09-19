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

            // console.log ({scrollTop}, {offsetTop},scrollTop > offsetTop)
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

    function hoverMouseSwiper(container,func) {
        func.mousewheel.disable();
        container.addEventListener('mouseenter', () => {
            func.mousewheel.enable();
        });
        container.addEventListener('mouseleave', () => {
            func.mousewheel.disable();
        });
    }

    document.querySelectorAll('.section--slide25')?.forEach(container => {
        const videoSwiper = new Swiper(container.querySelector('.section--slide25-swiper'), {
            slidesPerView: 'auto',
            spaceBetween: 24,
            mousewheel: {
                forceToAxis: true,
                releaseOnEdges: true,
                sensitivity: 1,
            },
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
        hoverMouseSwiper(container, videoSwiper)
    });
    
    let headlineSwiper = document.querySelector('.section--HMovie-swiper')
    if (headlineSwiper) {
        var swiper = new Swiper(headlineSwiper, {
            mousewheel: {
                forceToAxis: true,
                releaseOnEdges: true,
                sensitivity: 1,
            },
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
        });
        hoverMouseSwiper(headlineSwiper, swiper)
    }

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

    // var share25 = document.querySelectorAll('.share25')
    
    // if(share25){
    //     var sharelink = window.location.href;
    //     share25.forEach(function(item){
    //         item.querySelector('.share25-trigger')?.addEventListener('click', async (e)=>{
    //             if (navigator.share) {
    //                 try {
    //                     await navigator.share({
    //                         url: sharelink
    //                     });
    //                     console.log('Content shared successfully');
    //                 } catch (error) {
    //                     console.error('Error sharing content:', error);
    //                 }
    //             } else {
    //                 item.classList.toggle('--collapsed')
    //             }
    //         })
    //         // outside
    //         document.addEventListener('click', function(event) {
    //             if (!item.contains(event.target)) {
    //                 item.classList.remove('--collapsed')
    //             }
    //         });
    //     })
    // }
    const share25 = document.querySelectorAll('.share25')
    if(share25){
        share25.forEach(item => {   
            const shareBtn = item.querySelector('.share25-btn')
            const shareCopy = item.querySelector('.share25-copy')
            const shareCancel = item.querySelector('.share25-cancel')
            let shareTitle = item.closest('.section').querySelector('.section--dt-title')?.textContent || '';
            let shareUrl = window.location.href
            // console.log(item.closest('.section').querySelector('.section--dt-title'));
            
            if (shareBtn) {
                shareBtn.addEventListener('click', () => {
                    
                    
                    // if (navigator.share) {
                    //     try {
                    //         await navigator.share({
                    //             title: shareTitle,
                    //             url: shareUrl // Share the current page URL
                    //         });
                    //         console.log('Content shared successfully!');
                    //     } catch (error) {
                    //         console.log(`Error sharing: ${error.message}`);
                    //     }
                    // } else {
                    //     console.log("Web Share API is not supported in your browser.");
                        item.classList.toggle('--collapsed')
                        // social media share
                        item.querySelector('.share25-social-button--facebook').href = "https://www.facebook.com/sharer/sharer.php?u="+ encodeURIComponent(shareUrl) +"%2F&amp;src=sdkpreparse"
                        item.querySelector('.share25-social-button--x').href = "https://twitter.com/intent/tweet?url=" + encodeURIComponent(shareUrl) + "&text=" + encodeURIComponent(shareTitle)
                        item.querySelector('.share25-social-button--whatsapp').href = "https://wa.me/?text="+ encodeURIComponent(shareTitle + " " + shareUrl)
                        item.querySelector('.share25-social-button--telegram').href = "https://t.me/share/url?url=" + encodeURIComponent(shareUrl) + "&text="+ encodeURIComponent(shareTitle)
                        item.querySelector('.share25-social-button--linkedin').href = "https://www.linkedin.com/sharing/share-offsite/?url=" + encodeURIComponent(shareUrl)
                    // }
                });
                // copy link
                shareCopy.addEventListener('click', (e) => {
                    console.log('copy');
                    navigator.clipboard.writeText(shareUrl);
                    shareCopy.querySelector('span').textContent = 'Link Copied!';
                    setTimeout(() => {
                        shareCopy.querySelector('span').textContent = 'Copy Link';
                    }, 2000);
                    e.preventDefault()
                });
                // click close
                shareCancel.addEventListener('click', (e) => {
                    item.classList.remove('--collapsed')
                    e.preventDefault()
                })
            }else{
                item.querySelector('.share25-item--facebook').href = "https://www.facebook.com/sharer/sharer.php?u="+ encodeURIComponent(shareUrl) + "%2F&amp;src=sdkpreparse"
                item.querySelector('.share25-item--x').href = "https://twitter.com/intent/tweet?url="+shareUrl
                item.querySelector('.share25-item--whatsapp').href = "https://wa.me/?text="+ encodeURIComponent(shareUrl)
                item.querySelector('.share25-item--link').addEventListener('click', (e)=>{
                    if (window.isSecureContext) {
                        navigator.clipboard.writeText(shareUrl);
                    } else {
                        const textarea = document.createElement('textarea');
                        textarea.value = shareUrl;
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
            }
            
            // click outside
            // document.addEventListener('click', (e) => {
            //     if (!item.contains(e.target)) {
            //         item.classList.remove('--collapsed')
            //     }
            // });


        });
        console.groupEnd(); 
        
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
    // if (document.querySelector('.section--cast')) {
    //     const castslide = document.querySelectorAll('.section--cast-swiper .swiper-slide').length;
    //     const castSwiper = new Swiper('.section--cast-swiper', {
    //         slidesPerView: castslide > 4 ? 'auto' : 4,
    //         grid: {
    //             rows: castslide > 4 ? 2 : 1,
    //             fill: 'row',
    //         },
    //         navigation: {
    //             nextEl: '.swiper-button-next',
    //             prevEl: '.swiper-button-prev',
    //         },
    //     });
    // }

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

    const headerTrending = document.querySelector('.header25-trending');
    if (headerTrending) {
        
        const wrapper = headerTrending.querySelector('.header25-trending__wrapper');
        const list = headerTrending.querySelector('.header25-trending__list');
        
        function updateMask() {
            const scrollLeft = list.scrollLeft;
            const maxScroll = list.scrollWidth - list.clientWidth;
            
            // Toleransi pixel kecil untuk menghindari bug float
            const atStart = scrollLeft <= 0;
            const atEnd = scrollLeft >= maxScroll - 1;
            
            wrapper.classList.toggle('mask-left', !atStart);
            wrapper.classList.toggle('mask-right', !atEnd);
        }
        
        list.addEventListener('scroll', updateMask);
        window.addEventListener('resize', updateMask);
        updateMask();
    }
});