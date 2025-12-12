const genreFilter = document.getElementById('filter__genre'); //Interactions visibel dans http://127.0.0.1:5501/Programme.html
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

  filterMenu.classList.remove('open');
}

genreFilter.addEventListener('change', applyFilters); //en créant et assignant des variables eux différent profils, ca nous permet de caché ceux qui ne contiennet pas les variables recherché.
timeFilter.addEventListener('change', applyFilters);
sceneFilter.addEventListener('change', applyFilters);
