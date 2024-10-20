// Set the date you want to count from
const startDate = new Date('2024-10-20T15:00:00Z'); // Change this date as needed

function updateHoursSince() {
    const now = new Date();
    const hoursSince = Math.floor((now - startDate) / (1000 * 60 * 60));
    document.getElementById('hoursSince').textContent = `${hoursSince} hours `;
}

// Update the hours since every second
setInterval(updateHoursSince, 1000);
updateHoursSince(); // Initial call to display immediately