document.addEventListener('DOMContentLoaded', function () {
    const map = L.map('map').setView([20, 0], 2);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);

    L.marker([48.8566, 2.3522]).addTo(map).bindPopup("Paris, France");
    L.marker([-8.4095, 115.1889]).addTo(map).bindPopup("Bali, Indonesia");
    L.marker([39.5501, -105.7821]).addTo(map).bindPopup("Rocky Mountains, USA");

    const continentFilter = document.getElementById('continent-filter');
    const typeFilter = document.getElementById('type-filter');
    const cards = document.querySelectorAll('.card');

    function applyFilters() {
        const selectedContinent = continentFilter.value;
        const selectedType = typeFilter.value;

        cards.forEach(card => {
            const continent = card.dataset.continent;
            const type = card.dataset.type;

            const show = (selectedContinent === 'all' || selectedContinent === continent) &&
                         (selectedType === 'all' || selectedType === type);

            card.style.display = show ? 'block' : 'none';
        });
    }

    continentFilter.addEventListener('change', applyFilters);
    typeFilter.addEventListener('change', applyFilters);

    const nav = document.querySelector('nav');
    const targetElement = document.getElementById('this');

    nav.addEventListener('mouseenter', function() {
        targetElement.style.color = 'white';
    });

    nav.addEventListener('mouseleave', function() {
        targetElement.style.color = 'rgb(255, 128, 0)';
    });
});