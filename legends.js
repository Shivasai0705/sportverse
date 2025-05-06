function showPlayer(playerId) {
    // Hide all player sections
    document.querySelectorAll('.player-section').forEach(section => {
      section.style.display = 'none';
    });
    
    // Show selected player
    document.getElementById(playerId).style.display = 'block';
    
    // Update active tab
    document.querySelectorAll('.player-tab').forEach(tab => {
      tab.classList.remove('active');
    });
    event.currentTarget.classList.add('active');
    
    // Scroll to player section
    document.getElementById(playerId).scrollIntoView({
      behavior: 'smooth'
    });
  }