// Function to create day bars and exercise boxes
function createDayBars() {
    const dayBarsContainer = document.getElementById("dayBars");

    for (let day = 1; day <= 30; day++) {
        const dayBar = document.createElement("div");
        dayBar.classList.add("day-bar");
        dayBar.innerText = `Day ${day}`;
        dayBar.addEventListener("click", () => toggleExercises(day));

        // Create exercise boxes for each day
        const exerciseBox = document.createElement("div");
        exerciseBox.classList.add("exercise-box");
        exerciseBox.innerHTML = `<h3>Exercises for Day ${day}</h3><p>Exercise 1, Exercise 2, Exercise 3</p>`;
        
        dayBar.appendChild(exerciseBox);
        dayBarsContainer.appendChild(dayBar);
    }
}

// Function to toggle exercise boxes visibility
function toggleExercises(day) {
    const exerciseBoxes = document.querySelectorAll(`.exercise-box`);

    exerciseBoxes.forEach((box, index) => {
        if (index === day - 1) {
            box.style.display = box.style.display === "none" || box.style.display === "" ? "block" : "none";
        } else {
            box.style.display = "none"; // Hide other boxes
        }
    });
}

// Initialize the day bars
createDayBars();
