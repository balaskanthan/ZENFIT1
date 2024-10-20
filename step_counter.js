// script.js

const emailInput = document.getElementById('email');
const usernameInput = document.getElementById('username');
const loginBtn = document.getElementById('loginBtn');
const stepCounter = document.getElementById('stepCounter');
const currentStepsDisplay = document.getElementById('currentSteps');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const updateBtn = document.getElementById('updateBtn');
const userNameDisplay = document.getElementById('userName');
const leaderboardBody = document.getElementById('leaderboardBody');

// User data storage
let currentUserEmail = '';
let currentUserName = '';
let stepCount = 0; // Initialize stepCount to 0
let stepInterval;

// Load leaderboard from localStorage
function loadLeaderboard() {
    const users = JSON.parse(localStorage.getItem('users')) || {};
    leaderboardBody.innerHTML = '';

    // Sort users by steps
    const sortedUsers = Object.entries(users).sort((a, b) => b[1].steps - a[1].steps);
    sortedUsers.forEach((user, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `<td>${index + 1}</td><td>${user[1].username}</td><td>${user[1].steps}</td>`;
        leaderboardBody.appendChild(row);
    });
}

// Load user data on login
loginBtn.addEventListener('click', () => {
    const email = emailInput.value.trim();
    const username = usernameInput.value.trim();
    if (email && username) {
        const users = JSON.parse(localStorage.getItem('users')) || {};
        currentUserEmail = email;
        currentUserName = username;

        // Check if the user already exists
        if (users[currentUserEmail]) {
            const userData = users[currentUserEmail];

            // Simulate last update date for testing (for demo purpose only)
            const simulatedDate = new Date();
            simulatedDate.setDate(simulatedDate.getDate() - 29); // Simulate last update to be 29 days ago
            userData.lastUpdated = simulatedDate.toISOString();

            // Check if 30 days have passed since the last update
            const lastUpdated = new Date(userData.lastUpdated);
            const currentDate = new Date();
            const daysDifference = Math.floor((currentDate - lastUpdated) / (1000 * 60 * 60 * 24));

            if (daysDifference >= 30) {
                // Reset steps to 0
                stepCount = 0;
                userData.steps = 0; // Reset steps in user data
            } else {
                stepCount = Number(userData.steps) || 0; // Ensure it's a number
            }
        } else {
            stepCount = 0; // New user starts from 0
        }

        // Display user info and step counter
        userNameDisplay.textContent = `User: ${currentUserName}`;
        currentStepsDisplay.textContent = stepCount; // Show current steps
        stepCounter.classList.remove('hidden');
    }
});

// Start incrementing steps
startBtn.addEventListener('click', () => {
    if (!stepInterval) {
        stepInterval = setInterval(() => {
            stepCount++;
            currentStepsDisplay.textContent = stepCount; // Update display
        }, 1000); // Increment steps every second
    }
});

// Stop incrementing steps
stopBtn.addEventListener('click', () => {
    clearInterval(stepInterval);
    stepInterval = null;
});

// Update leaderboard
updateBtn.addEventListener('click', () => {
    const users = JSON.parse(localStorage.getItem('users')) || {};
    users[currentUserEmail] = { 
        username: currentUserName, 
        steps: stepCount,
        lastUpdated: new Date().toISOString() // Store last updated date
    }; 
    localStorage.setItem('users', JSON.stringify(users));
    loadLeaderboard(); // Refresh leaderboard
});

// Reset all user steps every minute
setInterval(() => {
    const users = JSON.parse(localStorage.getItem('users')) || {};
    Object.keys(users).forEach(email => {
        users[email].steps = 0; // Reset all user steps
        users[email].lastUpdated = new Date().toISOString(); // Update last updated date
    });
    
    // Reset current user's steps to 0
    stepCount = 0; // Reset the current user's step count
    currentStepsDisplay.textContent = stepCount; // Update display for the current user

    localStorage.setItem('users', JSON.stringify(users));
    loadLeaderboard(); // Refresh leaderboard
}, 24 * 60 * 60 * 1000); // Reset after 1 minute (60,000 ms)

function resetLeaderboard() {
    // Remove users data from localStorage
    localStorage.removeItem('users');
    
    // Clear leaderboard display
    const leaderboardBody = document.getElementById('leaderboardBody');
    leaderboardBody.innerHTML = '';
    
    // Optionally reset current steps if necessary (for the logged-in user)
    const currentStepsDisplay = document.getElementById('currentSteps');
    currentStepsDisplay.textContent = '0';

    alert('Leaderboard has been reset!');
}

// Call this function when the reset button is clicked
document.getElementById('resetBtn').addEventListener('click', resetLeaderboard);


// Load leaderboard when page loads
window.onload = () => {
    loadLeaderboard();
};
