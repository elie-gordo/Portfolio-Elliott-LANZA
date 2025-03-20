
// Initialize Lucide icons
document.addEventListener('DOMContentLoaded', () => {
  lucide.createIcons();
  
  // Update current time
  function updateTime() {
    const timeElement = document.getElementById('current-time');
    const now = new Date();
    timeElement.textContent = now.toLocaleTimeString();
  }
  
  // Update the time immediately and then every second
  updateTime();
  setInterval(updateTime, 1000);
});
