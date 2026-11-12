// ===== COURSES PAGE FILTERING =====
document.addEventListener('DOMContentLoaded', function() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const searchInput = document.getElementById('courseSearch');
  const coursesGrid = document.getElementById('coursesGrid');
  
  let currentFilter = 'all';
  let currentSearch = '';

  // Filter function
  function filterCourses() {
    const cards = document.querySelectorAll('.course-card');
    let hasVisible = false;

    cards.forEach(card => {
      const category = card.getAttribute('data-category');
      const title = card.getAttribute('data-title').toLowerCase();
      
      const matchesFilter = currentFilter === 'all' || category === currentFilter;
      const matchesSearch = title.includes(currentSearch);
      
      if (matchesFilter && matchesSearch) {
        card.style.display = 'block';
        hasVisible = true;
      } else {
        card.style.display = 'none';
      }
    });

    // Show/hide no results message
    let noResults = document.querySelector('.no-results');
    if (!hasVisible) {
      if (!noResults) {
        noResults = document.createElement('div');
        noResults.className = 'no-results';
        noResults.innerHTML = '<p>😕 No courses found. Try a different search or filter.</p>';
        coursesGrid.appendChild(noResults);
      }
    } else if (noResults) {
      noResults.remove();
    }
  }

  // Filter button click
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentFilter = btn.getAttribute('data-filter');
      filterCourses();
    });
  });

  // Search input
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      currentSearch = e.target.value.toLowerCase();
      filterCourses();
    });
  }
});