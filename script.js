// Filter functionality
const filterTags = document.querySelectorAll('.filter-tag');
const searchBtn = document.getElementById('searchBtn');
const searchInput = document.getElementById('searchInput');

filterTags.forEach(tag => {
    tag.addEventListener('click', function() {
        this.classList.toggle('active');
    });
});

searchBtn.addEventListener('click', function() {
    const query = searchInput.value;
    if (query.trim()) {
        console.log('Recherche pour:', query);
        // Ajouter la logique de recherche ici
    }
});

searchInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        searchBtn.click();
    }
});

// Dark mode toggle (optionnel)
const htmlElement = document.documentElement;
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
if (prefersDark) {
    htmlElement.style.colorScheme = 'dark';
}
