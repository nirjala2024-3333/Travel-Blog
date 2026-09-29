 const nav = document.querySelector('nav');
        const targetElement = document.getElementById('this');

        nav.addEventListener('mouseenter', function() {
            targetElement.style.color = 'white';
        });

        nav.addEventListener('mouseleave', function() {
            targetElement.style.color = 'rgb(255, 128, 0)';
        });