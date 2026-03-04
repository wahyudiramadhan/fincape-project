const navHam = document.getElementById('navHam');
const navMobile = document.getElementById('navMobile');

function toggleMobileNav() {
    const isOpen = navMobile.classList.toggle('open');
    navHam.classList.toggle('open', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
}

function closeMobileNav() {
    navMobile.classList.remove('open');
    navHam.classList.remove('open');
    document.body.style.overflow = '';
}

// Close on outside click
document.addEventListener('click', function (e) {
    if (navMobile.classList.contains('open') &&
        !navMobile.contains(e.target) &&
        !navHam.contains(e.target)) {
        closeMobileNav();
    }
});

// Close on resize back to desktop
window.addEventListener('resize', function () {
    if (window.innerWidth > 768) closeMobileNav();
});