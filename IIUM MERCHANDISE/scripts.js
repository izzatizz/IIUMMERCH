
const searchInput = document.getElementById('searchInput');

// Detect Enter key press to trigger the search action
searchInput.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    event.preventDefault(); 
    searchInput.value = ''; 
    
  }
});


// Detect click outside the search input to hide the input
document.addEventListener('click', function(event) {
  const isClickInside = searchInput.contains(event.target);
  
  if (!isClickInside) {
    searchInput.value = ''; // Clear the input if clicked outside
  }
});


// Toggle the dropdown menu
function toggleDropdown() {
    const dropdownMenu = document.getElementById('dropdown-menu');
    dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
  }

