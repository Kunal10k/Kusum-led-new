
  AOS.init();


document.addEventListener("DOMContentLoaded", () => {
    // ===========================
    // 1. Hero Autoplay Slider
    // ===========================
    const slides = document.querySelectorAll('.hero-slide');
    let index = 0;

    function showNextSlide() {
        slides[index].classList.remove('active');
        index = (index + 1) % slides.length;
        slides[index].classList.add('active');
    }

    if (slides.length > 0) {
        setInterval(showNextSlide, 5000);
    }

    // ===========================
    // 2. Counter Animation on Load
    // ===========================
    const counters = document.querySelectorAll('.counter');
    counters.forEach(counter => {
        ScrollTrigger.create({
            trigger: counter,
            start: "top 80%",
            once: true,
            onEnter: () => {
                const target = +counter.getAttribute('data-target');
                gsap.fromTo(counter, {
                    innerText: 0
                }, {
                    innerText: target,
                    duration: 2,
                    ease: 'power1.out',
                    snap: {
                        innerText: 1
                    },
                    onUpdate: () => {
                        counter.innerText = Math.ceil(counter.innerText);
                    }
                });
            }
        });
    });

    // ===========================
    // 3. Owl Carousels Init
    // ===========================
    $('.testimonial-carousel').owlCarousel({
        items: 1,
        loop: true,
        nav: false,
        dots: false,
        margin: 20
    });

    $('.product-grid').owlCarousel({
        items: 3,
        margin: 30,
        loop: true,
        nav: false,
        dots: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        smartSpeed: 600,
        navText: [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    });

    $('.lamp-carousel').owlCarousel({
        loop: true,
        margin: 20,
        autoplay: true,
        autoplayTimeout: 2500,
        autoplayHoverPause: true,
        smartSpeed: 600,
        dots: false,
        nav: true,
        navText: [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ],
        responsive: {
            0: {
                items: 2
            },
            576: {
                items: 3
            },
            768: {
                items: 4
            },
            992: {
                items: 5
            }
        }
    });

    // ===========================
    // 4. Background Video Toggle
    // ===========================
    const video = document.getElementById("bgVideo");
    const toggleBtn = document.getElementById("videoToggle");
    if (video && toggleBtn) {
        const icon = toggleBtn.querySelector("i");
        toggleBtn.addEventListener("click", () => {
            if (video.paused) {
                video.play();
                icon.classList.replace("fa-play", "fa-pause");
            } else {
                video.pause();
                icon.classList.replace("fa-pause", "fa-play");
            }
        });
    }

    // ===========================
    // 5. GSAP Scroll Animations
    // ===========================
    gsap.registerPlugin(ScrollTrigger);

    const scroller = document.querySelector('.scroller');
    const scrollContainer = document.querySelector('.scroll-container');
    const stickyContent = document.querySelector('.sticky-content');

    if (scroller && scrollContainer) {
        const scrollLength = scroller.scrollWidth - window.innerWidth;
        if (scrollLength > 0) {
            gsap.to(scroller, {
                x: () => -scrollLength,
                ease: "none",
                scrollTrigger: {
                    trigger: scrollContainer,
                    start: "top top",
                    end: () => "+=" + scrollLength,
                    scrub: true,
                    pin: scrollContainer,
                    anticipatePin: 1
                }
            });

            if (stickyContent) {
                gsap.to(stickyContent, {
                    y: -500,
                    ease: "none",
                    scrollTrigger: {
                        trigger: scrollContainer,
                        start: "top top",
                        end: () => "+=" + scrollLength,
                        scrub: true
                    }
                });
            }
        }
    }

    gsap.utils.toArray(".service-item").forEach(item => {
        gsap.fromTo(item, {
            y: 30,
            opacity: 0
        }, {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
                trigger: item,
                start: "top 85%",
                toggleActions: "play none none none"
            }
        });
    });

    // ===========================
    // 6. Back to Top
    // ===========================
    const backToTopBtn = document.getElementById("backToTopBtn");
    if (backToTopBtn) {
        window.addEventListener("scroll", () => {
            backToTopBtn.classList.toggle("show", window.scrollY > 300);
        });

        backToTopBtn.addEventListener("click", () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }

    // ===========================
    // 7. Parallax Section
    // ===========================
    function animateParallax() {
        const section = document.querySelector('.who-we-are');
        const left = document.querySelector('.parallax-left img');
        const right = document.querySelector('.parallax-right img');
        if (!section || !left || !right) return;
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const scrollY = window.scrollY;
        const windowH = window.innerHeight;

        if (scrollY + windowH > sectionTop && scrollY < sectionTop + sectionHeight) {
            const relativeY = (scrollY + windowH - sectionTop) / (sectionHeight + windowH);
            const moveY = (relativeY - 0.5) * 250;
            left.style.transform = `translateY(${moveY}px) rotate(-8deg)`;
            right.style.transform = `translateY(${-moveY}px) rotate(8deg)`;
        }
    }

    let ticking = false;
    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(() => {
                animateParallax();
                ticking = false;
            });
            ticking = true;
        }
    });

    // ===========================
    // 8. Zoom Section Scroll Scaling
    // ===========================
    const zoomLeft = document.getElementById("zoom-box-left");
    const zoomRight = document.getElementById("zoom-box-right");
    const sectionLeft = document.getElementById("zoom-section-left");
    const sectionRight = document.getElementById("zoom-section-right");
    let targetScaleLeft = 0.05,
        targetScaleRight = 0.05;
    let currentScaleLeft = 0.05,
        currentScaleRight = 0.05;

    function smoothScale(current, target, factor = 0.07) {
        return current + (target - current) * factor;
    }

    function updateScrollZoom() {
        const winH = window.innerHeight;

        if (sectionLeft && zoomLeft) {
            const leftRect = sectionLeft.getBoundingClientRect();
            const progressLeft = Math.min(1, Math.max(0, (winH - leftRect.top) / winH));
            targetScaleLeft = Math.pow(progressLeft, 1.2);
            currentScaleLeft = smoothScale(currentScaleLeft, targetScaleLeft);
            zoomLeft.style.transform = `scale(${Math.max(0.05, currentScaleLeft)})`;
        }

        if (sectionRight && zoomRight) {
            if (currentScaleLeft >= 0.99) {
                const rightRect = sectionRight.getBoundingClientRect();
                const progressRight = Math.min(1, Math.max(0, (winH - rightRect.top) / winH));
                targetScaleRight = Math.pow(progressRight, 1.2);
            } else {
                targetScaleRight = 0.05;
            }
            currentScaleRight = smoothScale(currentScaleRight, targetScaleRight);
            zoomRight.style.transform = `scale(${Math.max(0.05, currentScaleRight)})`;
        }

        requestAnimationFrame(updateScrollZoom);
    }

    requestAnimationFrame(updateScrollZoom);

    // ===========================
    // 9. GSAP Text Animations
    // ===========================
    new SplitType('[animate]', {
        types: 'lines, words, chars',
        tagName: 'span'
    });

    gsap.from('[animate] .line', {
        y: '100%',
        opacity: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: 'power1.out',
        scrollTrigger: {
            trigger: '[animate]',
            start: 'top 80%',
            toggleActions: 'play none none none'
        }
    });

    gsap.from('.zoom-img', {
        scale: 1.2,
        opacity: 0,
        duration: 1.5,
        ease: 'power2.out',
        scrollTrigger: {
            trigger: '.zoom-img',
            start: 'top 80%',
            toggleActions: 'play none none none'
        }
    });

    ['.animate-text-1', '.animate-text-2', '.animate-text-3'].forEach((selector, idx) => {
        new SplitType(selector, {
            types: 'lines',
            tagName: 'span'
        });
        gsap.from(`${selector} .line`, {
            scrollTrigger: {
                trigger: selector,
                start: 'top 85%',
            },
            opacity: 0,
            duration: 0.6 + (idx * 0.2),
            ease: 'power2.out',
            y: idx === 0 ? '100%' : '0%',
            x: idx === 1 ? '-100%' : '0%',
            stagger: 0.1,
        });
    });

    new SplitType('.text-animate', {
        types: 'lines, words, chars',
        tagName: 'span'
    });

    gsap.from('.text-animate .word', {
        opacity: 0.3,
        duration: 0.5,
        ease: 'power3.inOut',
        stagger: 0.1,
        scrollTrigger: {
            trigger: '.text-animate',
            start: 'top center',
            scrub: true
        }
    });




    // Menu toggle
    const menuToggle = document.getElementById('menu-toggle');
    const overlayMenu = document.getElementById('overlayMenu');
    const menuClose = document.getElementById('menuClose');

    menuToggle.addEventListener('click', () => {
        overlayMenu.classList.add('active');
    });
    menuClose.addEventListener('click', () => {
        overlayMenu.classList.remove('active');
    });

    // Header scroll behavior
    window.addEventListener("scroll", function () {
        const header = document.querySelector("header");
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });

    // Swiper setup
    const slideIndicators = document.getElementById('slideIndicators');
    const totalSlides = document.querySelectorAll('.swiper-slide').length;
    for (let i = 0; i < totalSlides; i++) {
        const num = i + 1;
        const span = document.createElement('span');
        span.textContent = num < 10 ? `0${num}` : `${num}`;
        if (i === 0) span.classList.add('active');
        slideIndicators.appendChild(span);
    }

    const indicatorSpans = slideIndicators.querySelectorAll('span');

    const swiper = new Swiper('.swiper', {
        loop: true,
        speed: 1200,
        parallax: true,
        autoplay: {
            delay: 6000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
        on: {
            slideChangeTransitionStart: () => {
                animateText();
                updateIndicators();
            },
            init: () => {
                animateText();
            }
        }
    });

    function animateText() {
        const currentSlide = document.querySelector('.swiper-slide-active');
        const textElems = currentSlide.querySelectorAll('.anim-text');
        gsap.set(textElems, {
            opacity: 0,
            y: 40
        });
        textElems.forEach(el => {
            gsap.to(el, {
                opacity: 1,
                y: 0,
                delay: parseFloat(el.dataset.delay),
                duration: 0.8,
                ease: 'power3.out'
            });
        });
    }

    function updateIndicators() {
        const realIndex = swiper.realIndex;
        indicatorSpans.forEach((span, i) => {
            span.classList.toggle('active', i === realIndex);
        });
    }










    let typeSplit = new SplitType('[animate]', {
        types: 'lines, words, chars',
        tagName: 'span'
    })

    gsap.from('[animate] .word', {
        y: '100%',
        opacity: 0,
        duration: 0.5,
        ease: 'power1.out',
        stagger: 0.1,

    })

    // Split each element into words
    const title = new SplitType('.slide-title', {
        types: 'words'
    });
    const subtitle = new SplitType('.slide-sub', {
        types: 'words'
    });
    const desc = new SplitType('.slide-desc', {
        types: 'words'
    });

    // Animate title
    gsap.to('.slide-title .word', {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power2.out'
    });

    // Animate subtitle after title
    gsap.to('.slide-sub .word', {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        delay: 0.5,
        ease: 'power2.out'
    });

    // Animate description after subtitle
    gsap.to('.slide-desc .word', {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.05,
        delay: 1,
        ease: 'power2.out'
    });



});



const stats = document.querySelectorAll('.stat-count');
const speed = 200;

stats.forEach(stat => {
    const updateCount = () => {
        const target = +stat.getAttribute('data-target');
        const current = +stat.innerText;
        const increment = Math.ceil(target / speed);

        if (current < target) {
            stat.innerText = current + increment;
            setTimeout(updateCount, 10);
        } else {
            stat.innerText = target;
        }
    };

    updateCount();
});



const wrapper = document.getElementById("logoWrapper");
const track = document.getElementById("logoTrack");

function cloneUntilFilled() {
    const wrapperWidth = wrapper.offsetWidth;
    let trackWidth = track.scrollWidth;

    const items = Array.from(track.children);
    let i = 0;

    while (trackWidth < wrapperWidth * 2) {
        const clone = items[i % items.length].cloneNode(true);
        track.appendChild(clone);
        i++;
        trackWidth = track.scrollWidth;
    }
}

window.addEventListener("load", cloneUntilFilled);
window.addEventListener("resize", () => {
    // Optional: reset and refill on resize if needed
    const clones = Array.from(track.children).slice(track.children.length / 2);
    clones.forEach(el => el.remove());
    cloneUntilFilled();
});




$(document).ready(function () {
    $(".collection-grid").owlCarousel({
        loop: true,
        margin: 30,
        nav: false,
        dots: false,
        autoplay: true,
        autoplayTimeout: 4000,
        smartSpeed: 700,
        navText: [
            '<i class="fa fa-chevron-left"></i>',
            '<i class="fa fa-chevron-right"></i>'
        ],
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    });
});















const tabs = document.querySelectorAll(".year-tab");
const contents = document.querySelectorAll(".timeline-content");

tabs.forEach(tab => {
    tab.addEventListener("click", () => {
        const year = tab.getAttribute("data-year");

        tabs.forEach(t => t.classList.remove("active"));
        contents.forEach(c => c.classList.remove("active"));

        tab.classList.add("active");
        document
            .querySelector(`.timeline-content[data-content="${year}"]`)
            .classList.add("active");
    });
});