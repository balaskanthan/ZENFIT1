document.addEventListener('DOMContentLoaded', () => {
    const withEquipmentsBtn = document.getElementById('withEquipments');
    const withoutEquipmentsBtn = document.getElementById('withoutEquipments');
    const workoutContainer = document.getElementById('workoutContainer');
    const workoutContainerNoEquip = document.getElementById('workoutContainerNoEquip');

    // Show workouts with equipment by default
    workoutContainer.style.display = 'grid';
    workoutContainerNoEquip.style.display = 'none';

    // Event listeners for toggle buttons
    withEquipmentsBtn.addEventListener('click', () => {
        workoutContainer.style.display = 'grid';
        workoutContainerNoEquip.style.display = 'none';
        withEquipmentsBtn.classList.add('active');
        withoutEquipmentsBtn.classList.remove('active');
    });

    withoutEquipmentsBtn.addEventListener('click', () => {
        workoutContainer.style.display = 'none';
        workoutContainerNoEquip.style.display = 'grid';
        withoutEquipmentsBtn.classList.add('active');
        withEquipmentsBtn.classList.remove('active');
    });
});

