window.onload = function() {
    const legWorkoutButton = document.querySelector('.exerciseBox .startBtn'); // Adjust selector as necessary
    if (localStorage.getItem('allExercisesCompleted') === 'true') {
        if (legWorkoutButton) {
            legWorkoutButton.innerText = "Completed"; // Change button text
            legWorkoutButton.disabled = true; // Optionally disable the button
        }
        localStorage.removeItem('allExercisesCompleted'); // Optional: Clear the flag if you only want it to change once
    }
};
