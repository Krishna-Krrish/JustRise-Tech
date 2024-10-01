// Dropdown toggle
const dropdownBtn = document.querySelector('.dropdown-btn');

dropdownBtn.addEventListener('click', function() {
    this.classList.toggle('active');
    const dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === 'block') {
        dropdownContent.style.display = 'none';
    } else {
        dropdownContent.style.display = 'block';
    }
});
