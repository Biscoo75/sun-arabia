(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();

    // Initiate the wowjs
    new WOW().init();

    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.navbar').addClass('sticky-top shadow-sm');
        } else {
            $('.navbar').removeClass('sticky-top shadow-sm');
        }
    });

    // Dropdown hover for desktop
    $(document).ready(function () {
        const $dropdown = $(".dropdown"); // Adjust the selector to match your dropdown elements
        const $dropdownToggle = ".dropdown-toggle"; // Replace with your actual dropdown toggle selector
        const $dropdownMenu = ".dropdown-menu"; // Replace with your actual dropdown menu selector
        const showClass = "show"; // Define the class you want to use for showing the dropdown


        $(window).on("load resize", function () {
            if (this.matchMedia("(min-width: 992px)").matches) {
                $dropdown.hover(
                    function () {
                        const $this = $(this);
                        $this.addClass(showClass);
                        $this.find($dropdownToggle).attr("aria-expanded", "true");
                        $this.find($dropdownMenu).addClass(showClass);
                    },
                    function () {
                        const $this = $(this);
                        $this.removeClass(showClass);
                        $this.find($dropdownToggle).attr("aria-expanded", "false");
                        $this.find($dropdownMenu).removeClass(showClass);
                    }
                );
            } else {
                $dropdown.off("mouseenter mouseleave");
            }
        });
    });

    // Proper navbar toggle handling
    $(document).on('click', '.navbar-toggler', function () {
        var navbarCollapse = $('#navbarSupportedContent');
        navbarCollapse.toggleClass('show');
    });

    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });

    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
        return false;
    });

    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        dots: true,
        loop: true,
        center: true,
        responsive: {
            0: { items: 1 },
            576: { items: 1 },
            768: { items: 2 },
            992: { items: 3 }
        }
    });

    $('.vendor-carousel').owlCarousel({
        loop: true, // التكرار بعد آخر عنصر
        margin: 25,
        dots: true,
        autoplay: true, // التشغيل التلقائي
        autoplayTimeout: 3000, // تغيير الشرائح كل 3 ثواني
        smartSpeed: 1000,
        responsive: {
            0: { items: 1 },
            576: { items: 5 },
            768: { items: 6 },
            992: { items: 7 }
        }
    });
  $('.strap').owlCarousel({
    loop: true,
    margin: 1,
    dots: false,
    autoplay: true,
    autoplayTimeout: 1000,          // Minimal delay to keep it moving
    autoplaySpeed: 5000,         // Controls scroll speed
    smartSpeed: 5000,
    slideTransition: 'linear',   // Smooth, no easing
    center: false,
    responsive: {
        0: { items: 2 },
        576: { items: 5 },
        768: { items: 6 },
        992: { items: 10}
    }
});
 $('.strap2').owlCarousel({
    loop: true,
    margin: 1,
    dots: false,
    autoplay: true,
    autoplayTimeout: 1000,          // Minimal delay to keep it moving
    autoplaySpeed: 5000,         // Controls scroll speed
    smartSpeed: 5000,
    slideTransition: 'linear',   // Smooth, no easing
    center: false,
    responsive: {
        0: { items: 2 },
        576: { items: 5 },
        768: { items: 6 },
        992: { items: 10}
    }
});
    // Custom carousel
    $(".custom-carousel").owlCarousel({
        autoWidth: true,
        loop: true,
        rtl: true,
        dots: true
    });

    $(".custom-carousel .item").click(function () {
        $(".custom-carousel .item").not($(this)).removeClass("active");
        $(this).toggleClass("active");
    });

    // Date pickers
    document.addEventListener('DOMContentLoaded', function () {
        flatpickr("#datepicker", { dateFormat: "Y-m-d" });
        flatpickr("#another-datepicker", { dateFormat: "Y-m-d" });
        flatpickr("#another-datepicker-two", { dateFormat: "Y-m-d" });
        flatpickr("#datepicker-in-cat", { dateFormat: "Y-m-d" });
    });

    // Share popup functionality
    document.querySelectorAll('.custom-popUpOpen').forEach(function (button) {
        button.addEventListener('click', function (event) {
            event.preventDefault();
            const link = button.getAttribute('data-link');
            document.getElementById('myInput').value = link;

            // Set up share links
            var shareIcons = document.querySelector('.share-icon-ct');
            if (shareIcons) {
                shareIcons.querySelector('.bi-facebook').parentNode.href = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(link)}`;
                shareIcons.querySelector('.bi-whatsapp').parentNode.href = `https://api.whatsapp.com/send?text=${encodeURIComponent(link)}`;
                shareIcons.querySelector('.bi-instagram').parentNode.href = `https://www.instagram.com/?url=${encodeURIComponent(link)}`;
                shareIcons.querySelector('.twit').parentNode.href = `https://twitter.com/intent/tweet?url=${encodeURIComponent(link)}`;
                shareIcons.querySelector('.bi-messenger').parentNode.href = `https://www.messenger.com/t/?link=${encodeURIComponent(link)}`;
            }

            document.getElementById('custom-popup').style.display = 'block';
        });
    });

    function closeCustomPopup() {
        document.getElementById('custom-popup').style.display = 'none';
    }

    // Copy function
    function copyToClipboard() {
        var copyText = document.getElementById("myInput");
        if (copyText) {
            copyText.select();
            copyText.setSelectionRange(0, 99999);
            navigator.clipboard.writeText(copyText.value);
            // Optional: Show a tooltip or notification instead of alert
        }
    }

    // Expose copy function to global scope if needed
    window.copy = copyToClipboard;

})(jQuery);


// Custom scroll-triggered animations
document.addEventListener('DOMContentLoaded', function () {
    // Create intersection observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    // Observe all sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.classList.add('fade-in-scroll');
        observer.observe(section);
    });

    // Observe specific elements
    const animateElements = document.querySelectorAll('.section-title, .section-sec-title, .section-desc, .main-titles, .main-desc');
    animateElements.forEach((element, index) => {
        element.style.transitionDelay = `${index * 0.2}s`;
        element.classList.add('fade-in-scroll');
        observer.observe(element);
    });
});
const panels = document.querySelectorAll('.panel');

panels.forEach(panel => {
    panel.addEventListener('mouseenter', () => {
        removeActiveClasses();
        panel.classList.add('active');
    });

    panel.addEventListener('mouseleave', () => {
        removeActiveClasses();
    });
});

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active');
    });
}