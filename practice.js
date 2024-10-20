let totalWorkoutTime = 0; // Total workout time in seconds across all days
let totalCaloriesBurned = 0; // Total calories burned across all days
let day1TotalWorkoutTime = 0; // Total workout time for Day 1
let day1TotalCaloriesBurned = 0; // Total calories burned for Day 1
let day2TotalWorkoutTime = 0; // Total workout time for Day 2
let day2TotalCaloriesBurned = 0; // Total calories burned for Day 2
let exerciseTimers = []; // Array to hold exercise timers
let exerciseDurations = []; // Store the duration for each exercise
let isPaused = []; // Track if each exercise is paused or resumed
let exerciseCalories = []; // Store calories burned for each exercise
let completedExercises = 0; // Track the number of completed exercises

// Function to generate exercise boxes
function generateExerciseBoxes(numBoxes, day) {
    const container = document.getElementById('exerciseContainer');
    container.innerHTML = ''; // Clear the container first

    // Show/hide day stats based on the current day
    if (day === 1) {
        document.getElementById('day1Stats').style.display = 'block'; // Show Day 1 stats
        document.getElementById('day2Stats').style.display = 'none'; // Hide Day 2 stats
    } else if (day === 2) {
        document.getElementById('day1Stats').style.display = 'none'; // Hide Day 1 stats
        document.getElementById('day2Stats').style.display = 'block'; // Show Day 2 stats
    }

    for (let i = 0; i < numBoxes; i++) {
        // Create the exercise box dynamically
        let exerciseBox = document.createElement('div');
        exerciseBox.classList.add('exercise-box');

        exerciseBox.innerHTML = `
            <h3>Exercise ${i + 1 + (day - 1) * numBoxes}</h3>
            <div class="gif-space">
                <img src="exercise${i + 1 + (day - 1) * numBoxes}.gif" alt="Exercise ${i + 1 + (day - 1) * numBoxes} GIF" class="exercise-gif">
            </div>
            <p class="timerDisplay">10 seconds</p>
            <p>Exercise Time: <span class="exerciseDuration">0</span> seconds</p>
            <p>Calories Burned: <span class="exerciseCalories">0</span></p>
            <button class="startBtn">Start Now</button>
            <button class="pauseBtn">Pause</button>
            <button class="completeBtn" disabled>Complete</button>
        `;

        // Append the exercise box to the container
        container.appendChild(exerciseBox);

        // Initialize timer-related variables for each exercise
        exerciseDurations[i] = 0;
        exerciseCalories[i] = 0;
        isPaused[i] = false;

        // Start button functionality
        exerciseBox.querySelector('.startBtn').onclick = function () {
            const timerDisplay = exerciseBox.querySelector('.timerDisplay');
            const exerciseDurationElement = exerciseBox.querySelector('.exerciseDuration');
            const exerciseCaloriesElement = exerciseBox.querySelector('.exerciseCalories');

            let exerciseTimer = 1; // Start from 10 seconds countdown

            clearInterval(exerciseTimers[i]); // Clear any existing timer for this exercise

            timerDisplay.innerText = `${exerciseTimer} seconds`; // Display initial timer

            exerciseTimers[i] = setInterval(() => {
                if (!isPaused[i]) {
                    if (exerciseTimer > 0) {
                        exerciseTimer -= 1; // Decrement timer by 1 second
                        timerDisplay.innerText = `${exerciseTimer} seconds`;
                    } else {
                        clearInterval(exerciseTimers[i]); // Stop the timer
                        exerciseDurations[i] += 10; // Update exercise duration (10 seconds completed)
                        exerciseDurationElement.innerText = exerciseDurations[i]; // Update display

                        // Calculate calories burned for this box (0.5 calories per second)
                        exerciseCalories[i] = exerciseDurations[i] * 0.5;
                        exerciseCaloriesElement.innerText = exerciseCalories[i].toFixed(2);

                        // Update total workout time and calories after completion
                        totalWorkoutTime += exerciseDurations[i];
                        document.getElementById('totalTime').innerText = `${totalWorkoutTime} seconds`;

                        if (day === 1) {
                            day1TotalWorkoutTime += exerciseDurations[i];
                            day1TotalCaloriesBurned += exerciseCalories[i];
                            document.getElementById('day1TotalTime').innerText = `${day1TotalWorkoutTime} seconds`;
                            document.getElementById('day1TotalCalories').innerText = day1TotalCaloriesBurned.toFixed(2);
                        } else if (day === 2) {
                            day2TotalWorkoutTime += exerciseDurations[i];
                            day2TotalCaloriesBurned += exerciseCalories[i];
                            document.getElementById('day2TotalTime').innerText = `${day2TotalWorkoutTime} seconds`;
                            document.getElementById('day2TotalCalories').innerText = day2TotalCaloriesBurned.toFixed(2);
                        }

                        totalCaloriesBurned += exerciseCalories[i];
                        document.getElementById('totalCalories').innerText = totalCaloriesBurned.toFixed(2);

                        completedExercises++; // Increment completed exercises
                        exerciseBox.querySelector('.startBtn').innerText = 'Completed'; // Change Start button to Completed
                        exerciseBox.querySelector('.completeBtn').disabled = false; // Enable Complete button

                        // Enable the "Go to Day 2" button if all exercises are completed
                        if (completedExercises === numBoxes) {
                            document.getElementById('goToDay2').disabled = false;
                        }
                    }
                }
            }, 1000); // Update every second
        };

        // Pause/Resume button functionality
        exerciseBox.querySelector('.pauseBtn').onclick = function () {
            isPaused[i] = !isPaused[i];
            this.innerText = isPaused[i] ? 'Resume' : 'Pause'; // Toggle button text
        };

        // Complete button functionality (remains for consistency)
        exerciseBox.querySelector('.completeBtn').onclick = function () {
            clearInterval(exerciseTimers[i]); // Stop the timer for this exercise
        };
    }
}

// Initial setup
generateExerciseBoxes(10, 1); // Generate Day 1 exercises

// Function to handle Day 2 button click
document.getElementById('goToDay2').onclick = function () {
    this.disabled = true; // Disable the button while generating the new exercises
    generateExerciseBoxes(10, 2); // Generate Day 2 exercises
    document.getElementById('goBackToDay1').disabled = false; // Enable the back button
};

// Function to handle Back to Day 1 button click
document.getElementById('goBackToDay1').onclick = function () {
    this.disabled = true; // Disable the button while generating the new exercises
    generateExerciseBoxes(10, 1); // Generate Day 1 exercises
    document.getElementById('goToDay2').disabled = false; // Enable the Day 2 button
};

// Disable the back button initially
document.getElementById('goBackToDay1').disabled = true;

