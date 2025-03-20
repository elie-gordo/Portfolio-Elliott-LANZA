
// Initialize Lucide icons
document.addEventListener('DOMContentLoaded', () => {
  // Use the correct way to initialize Lucide icons
  if (window.lucide) {
    window.lucide.createIcons();
  } else {
    console.warn('Lucide library not loaded properly');
  }
  
  // Update current time
  function updateTime() {
    const timeElement = document.getElementById('current-time');
    if (timeElement) {
      const now = new Date();
      timeElement.textContent = now.toLocaleTimeString();
    }
  }
  
  // Update the time immediately and then every second
  updateTime();
  setInterval(updateTime, 1000);
});
