document.addEventListener('DOMContentLoaded', () => {
            const accordionHeaders = document.querySelectorAll('.header');

            // Function to close all accordion items
            const closeAllAccordions = () => {
                accordionHeaders.forEach(header => {
                    const content = header.nextElementSibling;
                    header.classList.remove('active');
                    header.setAttribute('aria-expanded', 'false');
                    content.classList.remove('active');
                });
            };

            // Add click event listeners to all accordion headers
            accordionHeaders.forEach(header => {
                header.addEventListener('click', () => {
                    const content = header.nextElementSibling;
                    const isActive = header.classList.contains('active');

                    // Close all accordions first
                    closeAllAccordions();

                    // If the clicked accordion wasn't active, open it
                    if (!isActive) {
                        header.classList.add('active');
                        header.setAttribute('aria-expanded', 'true');
                        content.classList.add('active');
                    }
                });

                // Add keyboard support
                header.addEventListener('keydown', (e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        header.click();
                    }
                });
            });
        });