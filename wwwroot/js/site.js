// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

let timeInterval;

function showCurrentTime() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const timeString = `
        <span style="color: red;">${hours.toString().padStart(2, '0')}</span>:
        <span style="color: green;">${minutes.toString().padStart(2, '0')}</span>:
        <span style="color: blue;">${seconds.toString().padStart(2, '0')}</span>
    `;

    const showTimeElement = document.getElementById('show-time');
    showTimeElement.innerHTML = timeString;
    showTimeElement.style.transition = 'all 0.5s ease-in-out';
    showTimeElement.style.transform = 'scale(1.1)';
    setTimeout(() => {
        showTimeElement.style.transform = 'scale(1)';
    }, 500);
}

function toggleTimeDisplay() {
    const showTimeLink = document.getElementById('show-time-link');
    const showTimeElement = document.getElementById('show-time');

    if (showTimeLink.textContent === 'Show Time') {
        showTimeLink.textContent = 'Hide Time';
        showTimeElement.style.display = 'block';
        showCurrentTime();
        timeInterval = setInterval(showCurrentTime, 1000);
    } else {
        showTimeLink.textContent = 'Show Time';
        showTimeElement.style.display = 'none';
        clearInterval(timeInterval);
    }
}

document.getElementById('show-time-link').addEventListener('click', function(event) {
    event.preventDefault();
    toggleTimeDisplay();
});
