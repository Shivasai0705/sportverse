// Function to navigate to different sport activities pages
function navigateTo(sport) {
    window.location.href = `activities/${sport}.html`;
}

// Search functionality
document.getElementById('search').addEventListener('input', function() {
    let searchValue = this.value.toLowerCase();
    let cards = document.querySelectorAll('.sport-card');

    cards.forEach(card => {
        let sportName = card.innerText.toLowerCase();
        if (sportName.includes(searchValue)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
});
