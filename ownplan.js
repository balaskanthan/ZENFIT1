const exercises = [
    { name: 'Push Ups', image: 'pushups.jpg' },
{ name: 'Squats', image: 'squats.jpg' },
{ name: 'Lunges', image: 'lunges.jpg' },
{ name: 'Plank', image: 'plank.jpg' },
{ name: 'Jumping Jacks', image: 'jumpingjacks.jpg' },
{ name: 'Burpees', image: 'burpees.jpg' },
{ name: 'Bicep Curls', image: 'bicepcurls.jpg' },
{ name: 'Tricep Dips', image: 'tricepdips.jpg' },
{ name: 'Mountain Climbers', image: 'mountainclimbers.jpg' },
{ name: 'Deadlifts', image: 'deadlifts.jpg' },
{ name: 'Bench Press', image: 'benchpress.jpg' },
{ name: 'Pull Ups', image: 'pullups.jpg' },
{ name: 'Chin Ups', image: 'chinups.jpg' },
{ name: 'Dumbbell Rows', image: 'dumbbellrows.jpg' },
{ name: 'Russian Twists', image: 'russiantwists.jpg' },
{ name: 'Side Plank', image: 'sideplank.jpg' },
{ name: 'Crunches', image: 'crunches.jpg' },
{ name: 'Sit Ups', image: 'situps.jpg' },
{ name: 'Leg Raises', image: 'legraises.jpg' },
{ name: 'Dumbbell Flyes', image: 'dumbbellflyes.jpg' },
{ name: 'Overhead Press', image: 'overheadpress.jpg' },
{ name: 'Shoulder Press', image: 'shoulderpress.jpg' },
{ name: 'Skull Crushers', image: 'skullcrushers.jpg' },
{ name: 'Lat Pulldown', image: 'latpulldown.jpg' },
{ name: 'Cable Rows', image: 'cablerows.jpg' },
{ name: 'Leg Press', image: 'legpress.jpg' },
{ name: 'Calf Raises', image: 'calfraises.jpg' },
{ name: 'Hamstring Curls', image: 'hamstringcurls.jpg' },
{ name: 'Hip Thrusts', image: 'hipthrusts.jpg' },
{ name: 'Step Ups', image: 'stepups.jpg' },
{ name: 'Kettlebell Swings', image: 'kettlebellswings.jpg' },
{ name: 'Farmer’s Walk', image: 'farmerswalk.jpg' },
{ name: 'Treadmill Running', image: 'treadmillrunning.jpg' },
{ name: 'Elliptical Machine', image: 'ellipticalmachine.jpg' },
{ name: 'Cycling', image: 'cycling.jpg' },
{ name: 'Rowing', image: 'rowing.jpg' },
{ name: 'Battle Ropes', image: 'battleropes.jpg' },
{ name: 'Box Jumps', image: 'boxjumps.jpg' },
{ name: 'Wall Sits', image: 'wallsits.jpg' },
{ name: 'High Knees', image: 'highknees.jpg' },
{ name: 'Butt Kicks', image: 'buttkicks.jpg' },
{ name: 'Plyo Push Ups', image: 'plyopushups.jpg' },
{ name: 'Spider-Man Push Ups', image: 'spidermanpushups.jpg' },
{ name: 'Dumbbell Snatches', image: 'dumbbellsnatches.jpg' },
{ name: 'Thrusters', image: 'thrusters.jpg' },
{ name: 'Renegade Rows', image: 'renegaderows.jpg' },
{ name: 'Clean and Press', image: 'cleanandpress.jpg' },
{ name: 'Boxing Punches', image: 'boxingpunches.jpg' },
{ name: 'Battle Rope Slams', image: 'battleropeslams.jpg' },
{ name: 'Single-Leg Deadlift', image: 'singlelegdeadlift.jpg' },
{ name: 'Reverse Lunges', image: 'reverselunges.jpg' },
{ name: 'Side Lunges', image: 'sidelunges.jpg' },
{ name: 'Bulgarian Split Squats', image: 'bulgariansplitsquats.jpg' },
{ name: 'Glute Bridges', image: 'glutebridges.jpg' },
{ name: 'Standing Calf Raises', image: 'standingcalfraises.jpg' },
{ name: 'Seated Calf Raises', image: 'seatedcalfraises.jpg' },
{ name: 'Hack Squats', image: 'hacksquats.jpg' },
{ name: 'Front Squats', image: 'frontsquats.jpg' },
{ name: 'Zercher Squats', image: 'zerchersquats.jpg' },
{ name: 'Pistol Squats', image: 'pistolsquats.jpg' },
{ name: 'Goblet Squats', image: 'gobletsquats.jpg' },
{ name: 'Sumo Squats', image: 'sumosquats.jpg' },
{ name: 'Dumbbell Lunges', image: 'dumbbelllunges.jpg' },
{ name: 'Weighted Step Ups', image: 'weightedstepups.jpg' },
{ name: 'Incline Push Ups', image: 'inclinepushups.jpg' },
{ name: 'Decline Push Ups', image: 'declinepushups.jpg' },
{ name: 'Diamond Push Ups', image: 'diamondpushups.jpg' },
{ name: 'Clapping Push Ups', image: 'clappingpushups.jpg' },
{ name: 'Dumbbell Chest Press', image: 'dumbbellchestpress.jpg' },
{ name: 'Barbell Chest Press', image: 'barbellchestpress.jpg' },
{ name: 'Incline Bench Press', image: 'inclinebenchpress.jpg' },
{ name: 'Decline Bench Press', image: 'declinebenchpress.jpg' },
{ name: 'Cable Chest Flyes', image: 'cablechestflyes.jpg' },
{ name: 'TRX Rows', image: 'trxrows.jpg' },
{ name: 'TRX Push Ups', image: 'trxpushups.jpg' },
{ name: 'Medicine Ball Slams', image: 'medicineballslams.jpg' },
{ name: 'Medicine Ball Toss', image: 'medicineballtoss.jpg' },
{ name: 'Jump Rope', image: 'jumprope.jpg' },
{ name: 'Rope Climbs', image: 'ropeclimbs.jpg' },
{ name: 'Tire Flips', image: 'tireflips.jpg' },
{ name: 'Sled Push', image: 'sledpush.jpg' },
{ name: 'Sled Pull', image: 'sledpull.jpg' },
{ name: 'Dumbbell Deadlifts', image: 'dumbbelldeadlifts.jpg' },
{ name: 'Trap Bar Deadlifts', image: 'trapbardeadlifts.jpg' },
{ name: 'Romanian Deadlifts', image: 'romaniandeadlifts.jpg' },
{ name: 'Cable Kickbacks', image: 'cablekickbacks.jpg' },
{ name: 'Leg Extensions', image: 'legextensions.jpg' },
{ name: 'Cable Crossovers', image: 'cablecrossovers.jpg' },
{ name: 'Band Pull Aparts', image: 'bandpullaparts.jpg' },
{ name: 'Side Leg Raises', image: 'sidelegraises.jpg' },
{ name: 'Oblique Crunches', image: 'obliquecrunches.jpg' },
{ name: 'Hanging Leg Raises', image: 'hanginglegraises.jpg' },
{ name: 'Cable Crunches', image: 'cablecrunches.jpg' },
{ name: 'Windshield Wipers', image: 'windshieldwipers.jpg' },
{ name: 'Dragon Flags', image: 'dragonflags.jpg' },
{ name: 'Hollow Body Hold', image: 'hollowbodyhold.jpg' },
{ name: 'Superman Hold', image: 'supermanhold.jpg' },
{ name: 'Bird Dog', image: 'birddog.jpg' },
{ name: 'Donkey Kicks', image: 'donkeykicks.jpg' },
{ name: 'Hip Abductions', image: 'hipabductions.jpg' }

];

const levels = ['Beginner', 'Intermediate', 'Expert'];
const reps = [10, 15, 20, 25, 30, 35, 40];

let currentVisibleCount = 20;
let selectedWorkouts = JSON.parse(localStorage.getItem('selectedWorkouts')) || [];

function renderExercises() {
    const container = document.querySelector('.exercise-container');
    container.innerHTML = '';

    exercises.slice(0, currentVisibleCount).forEach((exercise, index) => {
        const box = document.createElement('div');
        box.classList.add('exercise-box');

        const img = document.createElement('img');
        img.src = exercise.image;
        img.alt = exercise.name;

        const name = document.createElement('h3');
        name.classList.add('exercise-name');
        name.innerText = exercise.name;

        const levelSelectBox = createSelectBox(levels, `level-${index}`, 'Select Level');
        const repsSelectBox = createSelectBox(reps, `reps-${index}`, 'Select Reps');

        const addButton = document.createElement('button');
        addButton.classList.add('add-button');
        addButton.innerText = 'Add to Plan';
        addButton.onclick = () => addToPlan(exercise.name, `level-${index}`, `reps-${index}`);

        box.appendChild(img);
        box.appendChild(name);
        box.appendChild(levelSelectBox);
        box.appendChild(repsSelectBox);
        box.appendChild(addButton);

        container.appendChild(box);
    });
}

function createSelectBox(optionsArray, selectId, defaultText) {
    const selectBox = document.createElement('div');
    selectBox.classList.add('select-box');

    const select = document.createElement('select');
    select.id = selectId;

    const defaultOption = document.createElement('option');
    defaultOption.value = '';
    defaultOption.innerText = defaultText;
    select.appendChild(defaultOption);

    optionsArray.forEach(option => {
        const opt = document.createElement('option');
        opt.value = option;
        opt.innerText = option;
        select.appendChild(opt);
    });

    selectBox.appendChild(select);
    return selectBox;
}

function addToPlan(name, levelSelectId, repsSelectId) {
    const level = document.getElementById(levelSelectId).value;
    const reps = document.getElementById(repsSelectId).value;

    if (!level || !reps) {
        alert('Please select both level and reps.');
        return;
    }

    selectedWorkouts.push({ name, level, reps });
    localStorage.setItem('selectedWorkouts', JSON.stringify(selectedWorkouts));

    alert(`${name} added to your plan.`);
}

document.getElementById('load-more').addEventListener('click', () => {
    currentVisibleCount += 5;
    if (currentVisibleCount >= exercises.length) {
        document.getElementById('load-more').style.display = 'none';
    }
    renderExercises();
});

document.addEventListener('DOMContentLoaded', renderExercises);
