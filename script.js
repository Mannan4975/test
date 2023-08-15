document.addEventListener('DOMContentLoaded', function() {
    const navigationLinks = document.querySelectorAll('.navigation a');
    const tabContents = document.querySelectorAll('.tab-content');

    navigationLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const targetSection = document.querySelector(link.getAttribute('href'));
            tabContents.forEach(content => {
                content.style.display = 'none';
            });
            targetSection.style.display = 'block';
        });
    });
});


// ... Same as before ...

// Show the service content when clicking on the "Our Services" tab
document.querySelector('.navigation a[href="#services"]').addEventListener('click', (event) => {
    event.preventDefault();
    document.querySelector('.tab-content#services').style.display = 'block';
});




document.addEventListener('DOMContentLoaded', () => {
    // Scroll to section when clicking on navigation link
    document.querySelectorAll('.navigation a').forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                const defaultContentHeight = document.querySelector('.default-content').offsetHeight;
                const extraScrollSpace = 50; // Adjust this value as needed
                const targetPosition = targetSection.offsetTop - defaultContentHeight - extraScrollSpace;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});
