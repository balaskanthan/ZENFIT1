document.addEventListener('DOMContentLoaded', () => {
    const selectedWorkouts = JSON.parse(localStorage.getItem('selectedWorkouts')) || [];
    const container = document.getElementById('selected-workouts');

    if (selectedWorkouts.length === 0) {
        container.innerHTML = '<p>No workouts selected yet.</p>';
        return;
    }

    selectedWorkouts.forEach((workout, index) => {
        const box = document.createElement('div');
        box.classList.add('selected-box');

        const name = document.createElement('h3');
        name.innerText = workout.name;

        const level = document.createElement('p');
        level.innerText = `Level: ${workout.level}`;

        const reps = document.createElement('p');
        reps.innerText = `Reps: ${workout.reps}`;

        const removeButton = document.createElement('button');
        removeButton.classList.add('remove-button');
        removeButton.innerText = 'Remove';
        removeButton.onclick = () => removeWorkout(index);

        box.appendChild(name);
        box.appendChild(level);
        box.appendChild(reps);
        box.appendChild(removeButton);
        container.appendChild(box);
    });

    // Initialize stats
    initializeStats();
});

function removeWorkout(index) {
    let selectedWorkouts = JSON.parse(localStorage.getItem('selectedWorkouts')) || [];
    selectedWorkouts.splice(index, 1);
    localStorage.setItem('selectedWorkouts', JSON.stringify(selectedWorkouts));
    location.reload();
}

let timerInterval;
let totalSeconds = 0;
let todayWorkoutSeconds = 0;
let totalWorkoutTime = localStorage.getItem('totalWorkoutTime') ? parseInt(localStorage.getItem('totalWorkoutTime')) : 0;

document.getElementById('start-timer').addEventListener('click', startTimer);
document.getElementById('pause-timer').addEventListener('click', pauseTimer);
document.getElementById('end-timer').addEventListener('click', endTimer);
document.getElementById('update-stats').addEventListener('click', updateStats);

function initializeStats() {
    const totalTimeDisplay = document.getElementById('total-time');
    const totalCaloriesDisplay = document.getElementById('total-calories');

    totalTimeDisplay.innerText = `Total Time: ${totalWorkoutTime} seconds`;
    totalCaloriesDisplay.innerText = `Total Calories: ${(totalWorkoutTime * 0.2).toFixed(2)} kcal`;
}

function startTimer() {
    if (!timerInterval) {
        timerInterval = setInterval(() => {
            totalSeconds++;
            todayWorkoutSeconds++;
            updateTimerDisplay();
            updateCalories();
        }, 1000);
    }
}

function pauseTimer() {
    clearInterval(timerInterval);
    timerInterval = null;
}

function endTimer() {
    clearInterval(timerInterval);
    timerInterval = null;
    totalSeconds = 0; // Reset timer on end
    updateTimerDisplay();
    updateCalories();
}

function updateTimerDisplay() {
    const timerDisplay = document.getElementById('timer');
    const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, '0');
    const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, '0');
    const seconds = String(totalSeconds % 60).padStart(2, '0');
    timerDisplay.innerText = `${hours}:${minutes}:${seconds}`;
}

function updateCalories() {
    const calories = (totalSeconds * 0.2).toFixed(2);
    document.getElementById('calories-burned').innerText = `Calories Burned: ${calories} kcal`;
}

function updateStats() {
    // Update today's stats
    const totalTimeElement = document.getElementById('today-time');
    totalTimeElement.innerText = `Today's Workout Time: ${todayWorkoutSeconds} seconds`;

    // Update total workout time
    totalWorkoutTime += todayWorkoutSeconds;
    localStorage.setItem('totalWorkoutTime', totalWorkoutTime);
    
    // Refresh displayed stats
    initializeStats();

    // Reset today's workout seconds
    todayWorkoutSeconds = 0; // Reset today's workout time after updating
    totalSeconds = 0; // Reset total seconds for the next session
}

// Display initial stats
updateStats();
