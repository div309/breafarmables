// Function to filter blocks by category
function filterBlocks(category) {
    let blocks = document.querySelectorAll('.block');
    blocks.forEach(block => {
        if (category === 'all') {
            block.style.display = 'block';
        } else if (block.classList.contains(category)) {
            block.style.display = 'block';
        } else {
            block.style.display = 'none';
        }
    });
}

// Function to search blocks by name
function searchBlocks() {
    let searchInput = document.getElementById('searchBar').value.toLowerCase();
    let blocks = document.querySelectorAll('.block');
    blocks.forEach(block => {
        if (block.innerText.toLowerCase().includes(searchInput)) {
            block.style.display = 'block';
        } else {
            block.style.display = 'none';
        }
    });
}
