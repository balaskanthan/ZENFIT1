let currentDay = 1; // Start with Day 1
const totalDays = 30; // Total number of days
const exercises = [
    { name: "Jumping Jacks", duration: 30, calories: 5, video: "jumpinghack.mp4" },
    { name: "Squats", duration: 30, calories: 6, video: "squats.mp4" },
    { name: "Push Ups", duration: 30, calories: 4, video: "jumpinghack.mp4" },
    { name: "Squats", duration: 60, calories: 6, video: "squats.mp4" },
    { name: "Jumping Jacks", duration: 60, calories: 4, video: "jumpinghack.mp4" },
    { name: "Plank", duration: 30, calories: 3, video: "planck.mp4" },
    { name: "High Knees", duration: 60, calories: 6, video: "kneeraise.mp4" },
    { name: "Leg Raises", duration: 60, calories: 5, video: "legraise.mp4" },
    { name: "Calf Raises", duration: 60, calories: 5, video: "calfraise.mp4" },
    { name: "Wall Sit", duration: 30, calories: 3, video: "wallsit.mp4" },
    { name: "Russian Twists", duration: 30, calories: 4, video: "russiantiwst.mp4" },
    { name: "Butt Kicks", duration: 30, calories: 4, video: "buttkick.mp4" },
    { name: "Flutter Kicks", duration: 30, calories: 3, video: "flutterkicks.mp4" },
    { name: "Toe Touch", duration: 60, calories: 5, video: "toetouch.mp4" },
    { name: "Jumping Jacks", duration: 60, calories: 6, video: "jumpinghack.mp4" },
];

let totalWorkoutTime = 0;
let totalCaloriesBurned = 0;
let dailyWorkoutTime = 0;
let dailyCaloriesBurned = 0;
let timers = [];
let exerciseCompletionStatus = [];
let shuffledExercises = [];

// Shuffle exercises at the start of each day
// Shuffle exercises at the start of each day
// Shuffle exercises at the start of each day
function shuffleExercises() {
    const topExercises = exercises.slice(0, 2); // First 2 exercises
    const middleExercises = exercises.slice(2, 13); // Middle 6 exercises
    const bottomExercises = exercises.slice(13,15); // Last 2 exercises

    // Shuffle the middle exercises
    const shuffledMiddleExercises = middleExercises.sort(() => Math.random() - 0.5);

    // Combine the fixed top exercises, shuffled middle exercises, and fixed bottom exercises
    shuffledExercises = [...topExercises, ...shuffledMiddleExercises, ...bottomExercises];
}

// Render exercises for the day
function renderExercises() {
    shuffleExercises(); // Shuffle exercises for the current day
    const container = document.getElementById("exerciseContainer");
    container.innerHTML = ""; // Clear previous exercises

    // Properly initialize/reset the exercise completion status and daily metrics
    exerciseCompletionStatus = Array(shuffledExercises.length).fill(false); 
    dailyWorkoutTime = 0; // Reset daily workout time
    dailyCaloriesBurned = 0; // Reset daily calories burned

    shuffledExercises.forEach((exercise, index) => {
        const exerciseBox = document.createElement("div");
        exerciseBox.className = "exercise-box";
        // Immediately display all exercise images
        exerciseBox.innerHTML = `
             <video src="${exercise.video}" class="exercise-video" autoplay loop muted playsinline>
                Your browser does not support the video tag.
            </video>
            <h3>${exercise.name}</h3>
            <p class="timer" id="timer${index}">${exercise.duration} seconds</p>
            <button id="startButton${index}" onclick="startTimer(${index})">Start</button>
        `;
        container.appendChild(exerciseBox);
    });

    document.getElementById("nextDay").disabled = true; // Disable Next Day button at the start of the day
}

// Call this to start the rendering of exercises when the page is loaded
renderExercises(); // Initial render

function startTimer(index) {
    const timerElement = document.getElementById(`timer${index}`);
    const startButton = document.getElementById(`startButton${index}`);
    let timeLeft = shuffledExercises[index].duration;

    const timer = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(timer);
            dailyWorkoutTime += shuffledExercises[index].duration;
            dailyCaloriesBurned += shuffledExercises[index].calories;
            totalWorkoutTime += shuffledExercises[index].duration;
            totalCaloriesBurned += shuffledExercises[index].calories;
            updateDailyReport();
            updateTotalReport();
            timers[index] = null; // Clear timer reference
            exerciseCompletionStatus[index] = true; // Mark exercise as completed
            startButton.innerText = "Completed"; // Change button text to "Completed"
            playCompletionPopup(`You have completed ${shuffledExercises[index].name}!`); // Show popup
            checkCompletion(); // Check if all exercises are completed
        } else {
            timeLeft--;
            timerElement.innerText = `${timeLeft} seconds`;
        }
    }, 1000);
    timers[index] = timer; // Store timer reference
}

function checkCompletion() {
    if (exerciseCompletionStatus.every(status => status === true)) {
        document.getElementById("nextDay").disabled = false; // Enable Next Day button only when all exercises are completed
    }
}

function updateDailyReport() {
    document.getElementById("dailyWorkoutTime").innerText = `Total Workout Time: ${dailyWorkoutTime} seconds`;
    document.getElementById("dailyCaloriesBurned").innerText = `Total Calories Burned: ${dailyCaloriesBurned.toFixed(2)}`;
}

function updateTotalReport() {
    document.getElementById("totalTime").innerText = `${totalWorkoutTime} seconds`;
    document.getElementById("totalCalories").innerText = totalCaloriesBurned.toFixed(2);
}


    function playCompletionPopup(message) {
        const modal = document.getElementById("exerciseCompletionModal");
        const modalMessage = document.getElementById("modalMessage");
        const completionSound = document.getElementById("completionSound");
    
        modalMessage.innerText = message; // Set the message
        modal.style.display = "block"; // Show the modal
    
        // Play sound only after user interaction
        completionSound.play().catch(error => {
            console.error("Playback failed:", error);
            alert("Please enable sound for this page.");
        });
    
        // Keep the popup visible for 10 seconds for all exercises
        document.body.style.pointerEvents = "none";
        setTimeout(() => {
            modal.style.display = "none"; // Hide the modal
            document.body.style.pointerEvents = "auto"; // Enable interactions
        }, 10000); // Duration to keep the popup active
    }
    
document.getElementById("nextDay").onclick = function () {
    currentDay++;
    if (currentDay > totalDays) {
        alert("All days completed!");
        return;
    }
    document.getElementById("currentDay").innerText = currentDay;
    dailyWorkoutTime = 0; // Reset for new day
    dailyCaloriesBurned = 0; // Reset for new day
    renderExercises(); // Render new exercises for the day
};

// Close modal functionality (optional)
document.getElementById("modalClose").onclick = function () {
    const modal = document.getElementById("exerciseCompletionModal");
    modal.style.display = "none"; // Hide the modal
    document.body.style.pointerEvents = "auto"; // Enable interactions
};

// Initially render the exercises at the start of the first day
renderExercises(); 
