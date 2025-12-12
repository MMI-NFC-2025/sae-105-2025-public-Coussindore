const genreFilter = document.getElementById('filter__genre');
const timeFilter = document.getElementById('filter__time');
const sceneFilter = document.getElementById('filter__scene');

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
}

genreFilter.addEventListener('change', applyFilters);
timeFilter.addEventListener('change', applyFilters);
sceneFilter.addEventListener('change', applyFilters);


