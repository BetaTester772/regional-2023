// dark-mode.js

// Wait for the DOM to be fully loaded before accessing elements
document.addEventListener("DOMContentLoaded", function () {
    // Your JavaScript code here
    const darkModeToggle = document.getElementById('dark-mode-toggle');

    // Function to check and update dark mode status
    function updateDarkModeStatus() {
        // Get the current dark mode status from local storage
        const isDarkMode = localStorage.getItem('darkMode') === 'true' || (!('darkMode' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);

        // Apply the current dark mode status to the page
        if (isDarkMode) {
            enableDarkMode();
        } else {
            disableDarkMode();
        }
    }

    // Check and update dark mode status when the page loads
    updateDarkModeStatus();

    // Dark mode toggle button click event
    darkModeToggle.addEventListener('click', () => {
        // Toggle the dark mode status
        const isDarkMode = localStorage.getItem('darkMode') === 'true';
        if (isDarkMode) {
            disableDarkMode();
        } else {
            enableDarkMode();
        }
    });

    // Dark mode enable function
    function enableDarkMode() {
        // Apply dark mode styles
        document.body.classList.add('dark');
        // Update local storage
        localStorage.setItem('darkMode', 'true');
        // Find the logo element with class "logo" and change its src
        const logo = document.querySelector('.logo');
        if (logo) {
            logo.src = './assets/has_logo_gray.svg'; // Dark 모드 이미지 경로로 변경
        }
    }

    // Dark mode disable function
    function disableDarkMode() {
        // Remove dark mode styles
        document.body.classList.remove('dark');
        // Update local storage
        localStorage.setItem('darkMode', 'false');
        // Find the logo element with class "logo" and change its src
        const logo = document.querySelector('.logo');
        if (logo) {
            logo.src = './assets/has_logo_white.svg'; // Light 모드 이미지 경로로 변경
        }
    }

});
    