document.addEventListener("DOMContentLoaded", function () {
    var navbarLinks = document.querySelectorAll(".navbar-nav .nav-link");

    function updateActiveLink() {
        var currentUrl = window.location.href;
        navbarLinks.forEach(function (link) {
            link.classList.remove("active");
            if (link.href === currentUrl) {
                link.classList.add("active");
            }
        });
    }
    updateActiveLink();
    window.addEventListener("hashchange", updateActiveLink);
});

document.addEventListener("DOMContentLoaded", function () {
    const offcanvasLinks = document.querySelectorAll('.offcanvas-body a');

    offcanvasLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            const offcanvas = document.querySelector('.offcanvas');
            const offcanvasBS = bootstrap.Offcanvas.getInstance(offcanvas);
            if (offcanvasBS) {
                offcanvasBS.hide();
            }
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});
