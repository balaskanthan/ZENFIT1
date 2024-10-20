// Assuming exerciseDurations is an array holding the durations of each exercise
let exerciseDurations = [60, 120, 180]; // Example durations in seconds

function checkAllExercisesCompleted() {
    const allCompleted = exerciseDurations.every(duration => duration === 0);
    
    if (allCompleted) {
        localStorage.setItem('allExercisesCompleted', 'true');
    }
}

function exerciseCompleted(index) {
    exerciseDurations[index] = 0; // Mark exercise as completed
    alert(`Exercise ${index + 1} completed!`);
    checkAllExercisesCompleted();
}

// Check button status on equipment page load
window.onload = function() {
    const legWorkoutButton = document.querySelector('.workout-box h2:contains("Leg Workout") + .start-button'); // Update selector as needed
    if (localStorage.getItem('allExercisesCompleted') === 'true') {
        legWorkoutButton.innerText = "Completed";
        legWorkoutButton.style.backgroundColor = "gray"; // Optional: Change color
        legWorkoutButton.disabled = true; // Optional: Disable the button
        localStorage.removeItem('allExercisesCompleted'); // Remove flag after checking
    }
};
