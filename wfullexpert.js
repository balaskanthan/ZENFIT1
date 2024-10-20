let totalWorkoutTime = 0;  // Total workout time in seconds
let totalCaloriesBurned = 0;  // Total calories burned
let exerciseTimers = [];  // Array to hold exercise timers
let exerciseDurations = [];  // Store the duration for each exercise
let isPaused = [];  // Track if each exercise is paused or resumed
let exerciseCalories = [];  // Store calories burned for each exercise
const countdownStart = 120;  // Starting countdown time in seconds

const videos = [
    // Upper Body Exercises
    'pushups.mp4',
    'squats.mp4',
    
    // Back Body Exercises
    'burpees.mp4',
    'lunges.mp4',
    
    // Arm Workouts
    'planck.mp4',
    'mountainclimbing.mp4',

    'squats.mp4',
    
    'highknee.mp4',
    'tricepsdips.mp4'
];


function generateExerciseBoxes(numBoxes) {
    const container = document.getElementById('exerciseContainer');
    container.innerHTML = ''; // Clear the container first

    for (let i = 0; i < numBoxes; i++) {
        let exerciseBox = document.createElement('div');
        exerciseBox.classList.add('exercise-box');

        exerciseBox.innerHTML = `
            <h3>Exercise ${i + 1}</h3>
            <div class="videoSpace">
                <video src="${videos[i % videos.length]}" autoplay loop muted width="320" height="240"></video>
            </div>
            <p class="timerDisplay">${countdownStart}s</p>
            <p>Exercise Time: <span class="exerciseDuration">0</span> seconds</p>
            <p>Calories Burned: <span class="exerciseCalories">0</span></p>
            <button class="startBtn">Start Now</button>
            <button class="pauseBtn">Pause</button>
            <button class="completeBtn">Complete</button>
        `;

        container.appendChild(exerciseBox);

        exerciseDurations[i] = 0;
        exerciseCalories[i] = 0;
        isPaused[i] = false;

        // Start button click event
        exerciseBox.querySelector('.startBtn').onclick = function () {
            const timerDisplay = exerciseBox.querySelector('.timerDisplay');
            const exerciseDurationElement = exerciseBox.querySelector('.exerciseDuration');
            const exerciseCaloriesElement = exerciseBox.querySelector('.exerciseCalories');

            let countdownTimer = countdownStart;
            clearInterval(exerciseTimers[i]);

            exerciseTimers[i] = setInterval(() => {
                if (!isPaused[i]) {
                    if (countdownTimer > 0) {
                        countdownTimer -= 1;  // Decrease countdown
                        timerDisplay.innerText = `${countdownTimer}s`;
                        exerciseDurations[i] += 1;  // Count the elapsed seconds
                        exerciseDurationElement.innerText = exerciseDurations[i];  // Update display
                        exerciseCalories[i] = (exerciseDurations[i] * 0.1).toFixed(2);  // Calculate calories burned
                        exerciseCaloriesElement.innerText = exerciseCalories[i];  // Update calories display
                    } else {
                        clearInterval(exerciseTimers[i]);  // Stop the timer when it reaches zero
                        alert(`Exercise ${i + 1} completed! Duration: ${exerciseDurations[i]} seconds`);
                        totalWorkoutTime += exerciseDurations[i];
                        document.getElementById('totalTime').innerText = totalWorkoutTime;

                        // Calculate total calories for the completed exercise
                        exerciseCalories[i] = (exerciseDurations[i] * 0.1).toFixed(2);
                        totalCaloriesBurned += parseFloat(exerciseCalories[i]); // Add the exercise calories to total
                        document.getElementById('totalCalories').innerText = totalCaloriesBurned.toFixed(2); // Update total calories display

                        timerDisplay.innerText = `0s`; // Show 0 when complete

                        // Change button text from Start to Completed
                        const startButton = exerciseBox.querySelector('.startBtn');
                        startButton.innerText = "Completed";
                        startButton.disabled = true; // Optional: disable the button to prevent multiple clicks
                    }
                }
            }, 1000);
        };

        // Pause button click event
        exerciseBox.querySelector('.pauseBtn').onclick = function () {
            isPaused[i] = !isPaused[i];
            const pauseButton = exerciseBox.querySelector('.pauseBtn');
            pauseButton.innerText = isPaused[i] ? "Resume" : "Pause";  // Toggle button text
        };

        // Complete button click event
        exerciseBox.querySelector('.completeBtn').onclick = function () {
            clearInterval(exerciseTimers[i]);
            alert(`Exercise ${i + 1} completed! Duration: ${exerciseDurations[i]} seconds`);
            totalWorkoutTime += exerciseDurations[i];
            document.getElementById('totalTime').innerText = totalWorkoutTime;

            // Calculate total calories for the completed exercise
            exerciseCalories[i] = (exerciseDurations[i] * 0.1).toFixed(2);
            totalCaloriesBurned += parseFloat(exerciseCalories[i]); // Add the exercise calories to total
            document.getElementById('totalCalories').innerText = totalCaloriesBurned.toFixed(2); // Update total calories display

            exerciseCaloriesElement.innerText = exerciseCalories[i];  // Update display for calories burned
            timerDisplay.innerText = `0s`; // Show 0 when complete

            // Change button text from Start to Completed
            const startButton = exerciseBox.querySelector('.startBtn');
            startButton.innerText = "Completed";
            startButton.disabled = true; // Optional: disable the button to prevent multiple clicks

            // Check if all exercises are completed
            if (allExercisesCompleted()) {
                const mainStartButton = document.querySelector('.start-button');  // Adjusted selector
                console.log('All exercises completed!');  // Debugging statement
                mainStartButton.innerText = "Completed";  // Change the button text to "Completed"
                mainStartButton.disabled = true;  // Optionally disable the button
            }
        };
    }
}

function allExercisesCompleted() {
    return exerciseDurations.every((duration, index) => duration > 0 && duration * 0.1 === exerciseCalories[index]);
}

generateExerciseBoxes(27);  // Generate 5 exercises