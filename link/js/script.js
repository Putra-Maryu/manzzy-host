// JavaScript for animations and other functionalities
document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right');
    elements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
    });

    setTimeout(() => {
        elements.forEach(el => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        });
    }, 100);
});

// Other JavaScript functionalities
document.addEventListener('contextmenu', event => event.preventDefault()); // Nonaktifkan klik kanan

document.addEventListener('keydown', function(event) {
    if (event.ctrlKey && (event.key === 'u' || event.key === 'U')) { // Ctrl + U
        event.preventDefault();
        alert('View Source Dinonaktifkan!');
    }

    if (event.ctrlKey && event.shiftKey && event.key === 'I') { // Ctrl + Shift + I
        event.preventDefault();
        alert('Inspect Element Dinonaktifkan!');
    }

    if (event.ctrlKey && event.shiftKey && event.key === 'C') { 
        event.preventDefault();
        alert('Inspect Element Dinonaktifkan!');
    }

    if (event.ctrlKey && event.shiftKey && event.key === 'J') { 
        event.preventDefault();
        alert('Console Dinonaktifkan!');
    }

    if (event.key === 'F12') { // F12
        event.preventDefault();
        alert('DevTools Dinonaktifkan!');
    }
});

(function() {
    let devtools = false;
    let element = new Image();
    Object.defineProperty(element, 'id', {
        get: function() {
            devtools = true;
            setTimeout(function() {
                window.location.href = 'about:blank'; 
            }, 100);
        }
    });

    console.log('%c', element);
})();

function orderProduct(productName) {
    const phoneNumber = "+6282269162245"; 
    const message = `Halo, saya ingin memesan ${productName}.`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}

function toggleMenu() {
    const navUl = document.querySelector('nav ul');
    navUl.classList.toggle('active');
}

// Filter Products by Category
const filterButtons = document.querySelectorAll('.filter-buttons button');
const productCards = document.querySelectorAll('.product-card');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const category = button.getAttribute('data-category');

        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to the clicked button
        button.classList.add('active');

        // Filter products
        productCards.forEach(card => {
            const cardCategory = card.getAttribute('data-category');
            if (category === 'all' || cardCategory === category) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});