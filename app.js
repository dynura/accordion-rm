document.addEventListener('DOMContentLoaded', () => {
    const headers = document.querySelectorAll('.accordion-header');

    headers.forEach(header => {
        header.addEventListener('click', () => {
            const isExpanded = header.getAttribute('aria-expanded') === 'true';
            const content = header.nextElementSibling;

            // Close other active tabs automatically
            headers.forEach(otherHeader => {
                if (otherHeader !== header && otherHeader.getAttribute('aria-expanded') === 'true') {
                    otherHeader.setAttribute('aria-expanded', 'false');
                    otherHeader.nextElementSibling.setAttribute('aria-hidden', 'true');
                }
            });

            // Toggle state properties on targeted elements
            if (isExpanded) {
                header.setAttribute('aria-expanded', 'false');
                content.setAttribute('aria-hidden', 'true');
            } else {
                header.setAttribute('aria-expanded', 'true');
                content.setAttribute('aria-hidden', 'false');
            }
        });
    });
});