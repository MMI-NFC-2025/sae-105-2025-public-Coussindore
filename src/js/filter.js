const genreFilter = document.getElementById('filter__genre');
const timeFilter = document.getElementById('filter__time');
const sceneFilter = document.getElementById('filter__scene');

const filterMenu = document.getElementById('filterMenu');
const filterToggle = document.getElementById('filterToggle');

filterToggle.addEventListener('click', () => {
  filterMenu.classList.toggle('open');
});

const profiles = document.querySelectorAll('.profile');

function applyFilters() {
  const genre = genreFilter.value;
  const time = timeFilter.value;
  const scene = sceneFilter.value;

  profiles.forEach(profile => {
    const matchesGenre = !genre || profile.dataset.genre === genre;
    const matchesTime = !time || profile.dataset.time === time;
    const matchesScene = !scene || profile.dataset.scene === scene;

    if (matchesGenre && matchesTime && matchesScene) {
      profile.classList.remove('hidden');
    } else {
      profile.classList.add('hidden');
    }
  });

  // Automatically close filter menu
  filterMenu.classList.remove('open');
}

// Event listeners
genreFilter.addEventListener('change', applyFilters);
timeFilter.addEventListener('change', applyFilters);
sceneFilter.addEventListener('change', applyFilters);
