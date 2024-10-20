
<?php

include 'config.php';
session_start();
$user_id = $_SESSION['user_id'];

if(!isset($user_id)){
   header('location:login.php');
};

if(isset($_GET['logout'])){
   unset($user_id);
   session_destroy();
   header('location:login.php');
}

?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Workout Page</title>
    <link rel="stylesheet" href="workout.css">
</head>
<body>
<section>
    <header>
        <nav class="navbar">
            <div class="logo">
                <img src="" alt="logo"></img>
            </div>
            <ul class="nav-links">
                <li><a href="index.php">Home</a></li>
                <li><a href="#">Daily Challenges</a></li>
                <li><a href="#">Track Performance</a></li>
                <li><a href="step_counter.php">Leaderboard Challenge</a></li>
                <li><a href="step_counter.php#leaderboardBody">Leaderboard</a></li>
                <li><a href="home.php">Profile</a></li>
            </ul>
        </nav>
    </header>
</section>

<!-- Header Section -->
<header class="page-header">
    <h1>Zenfit Workouts</h1>
    <p>Choose your fitness level and start your journey with our guided workout routines!</p>
    
    <!-- Toggle Bar -->
    <div class="toggle-container">
       <button class="toggle-btn active" id="withEquipments">Workout With Equipments</button>
        <button class="toggle-btn" id="withoutEquipments">Workout Without Equipments</button>
    </div>
</header>

<div class="navbar">
    <h1>Your Brand</h1>
    <span class="toggle-menu">&#9776;</span> <!-- Hamburger icon -->
    <ul class="nav-links">
    
            <ul class="nav-links">
                <li><a href="index.php">Home</a></li>
                <li><a href="#">Daily Challenges</a></li>
                <li><a href="#">Track Performance</a></li>
                <li><a href="step_counter.php">Leaderboard Challenge</a></li>
                <li><a href="step_counter.php#leaderboardBody">Leaderboard</a></li>
                <li><a href="home.php">Profile</a></li>
            </ul>
    </ul>
</div>
<script>
    const toggleMenu = document.querySelector('.toggle-menu');
    const navLinks = document.querySelector('.nav-links');

    toggleMenu.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
</script>


<!-- Workout Categories Section -->
<section class="workout-container" id="workoutContainer">
    <!-- Beginner Workout -->
    <div class="workout-box equipment">
        <div class="image-placeholder">
            <img src="beginer.jpg" class="workout-img">
        </div>
        <div class="workout-content">
            <h3 class="level">Beginner</h3>
            <p class="description">Perfect for newcomers. These workouts help you build a strong foundation with simple, low-intensity exercises targeting full-body movements.</p>
            <a href="withequipmentsbeg.php"><button class="start-btn">Start Now</button></a>
        </div>
    </div>

    <!-- Intermediate Workout -->
    <div class="workout-box equipment">
        <div class="image-placeholder">
            <img src="inter.jpg" class="workout-img">
        </div>
        <div class="workout-content">
            <h3 class="level">Intermediate</h3>
            <p class="description">For those who are ready to level up! Our intermediate routines mix cardio and strength training to boost endurance and muscle tone.</p>
            <a href="withequipmentinter.php"><button class="start-btn">Start Now</button></a>
        </div>
    </div>

    <!-- Expert Workout -->
    <div class="workout-box equipment">
        <div class="image-placeholder">
            <img src="expert.jpg" class="workout-img">
        </div>
        <div class="workout-content">
            <h3 class="level">Expert</h3>
            <p class="description">Challenge yourself with high-intensity exercises that push your limits. This workout targets all major muscle groups with advanced techniques.</p>
            <a href="withequipmentexpert.php"><button class="start-btn">Start Now</button></a>
        </div>
    </div>
</section>

<section class="workout-container" id="workoutContainerNoEquip">
    <!-- Beginner Workout -->
    <div class="workout-box no-equipment">
        <div class="image-placeholder">
            <img src="wbeg.jpg" alt="Beginner Workout" class="workout-img">
        </div>
        <div class="workout-content">
            <h3 class="level">Beginner</h3>
            <p class="description">Perfect for newcomers. These workouts help you build a strong foundation with simple, low-intensity exercises targeting full-body movements.</p>
            <a href="withoutbeg.php"><button class="start-btn">Start Now</button></a>
        </div>
    </div>
    
    <!-- Intermediate Workout -->
    <div class="workout-box no-equipment">
        <div class="image-placeholder">
            <img src="winter.jpg" alt="Intermediate Workout" class="workout-img">
        </div>
        <div class="workout-content">
            <h3 class="level">Intermediate</h3>
            <p class="description">For those who are ready to level up! Our intermediate routines mix cardio and strength training to boost endurance and muscle tone.</p>
            <a href="withoutinter.php"><button class="start-btn">Start Now</button></a>
        </div>
    </div>
    <!-- Expert Workout -->
    <div class="workout-box no-equipment">
        <div class="image-placeholder">
            <img src="wexpert.jpg" class="workout-img">
        </div>
        <div class="workout-content">
            <h3 class="level">Expert</h3>
            <p class="description">Challenge yourself with high-intensity exercises that push your limits. This workout targets all major muscle groups with advanced techniques.</p>
            <a href="withoutexpert.php"><button class="start-btn">Start Now</button></a>
        </div>
    </div>
</section>

<div class="btncustomize">
    <a href="ownplan.php"><button id="selection">Customize your own plan</button></a>
</div>

<div class="normal">
    <h1>Normal Daily workouts</h1>
</div>

<section class="workout-container" id="workoutContainerNoEquip">
    
    <!-- Beginner Workout -->
    <div class="workout-box no-equipment">
        <div class="image-placeholder">
            <img src="beginer.jpg" alt="Beginner Workout" class="workout-img">
        </div>
        <div class="workout-content">
            <h3 class="level">Beginner</h3>
            <p class="description">Perfect for newcomers. These workouts help you build a strong foundation with simple, low-intensity exercises targeting full-body movements.</p>
            <a href="normalbeg.php" class="start-btn">Start Now</a>
        </div>
    </div>
    
    <!-- Intermediate Workout -->
    <div class="workout-box no-equipment">
        <div class="image-placeholder">
            <img src="inter.jpg" alt="Intermediate Workout" class="workout-img">
        </div>
        <div class="workout-content">
            <h3 class="level">Intermediate</h3>
            <p class="description">For those who are ready to level up! Our intermediate routines mix cardio and strength training to boost endurance and muscle tone.</p>
            <a href="normalinter.php" class="start-btn">Start Now</a>
        </div>
    </div>
    <!-- Expert Workout -->
    <div class="workout-box no-equipment">
        <div class="image-placeholder">
            <img src="expert.jpg" alt="Expert Workout" class="workout-img">
        </div>
        <div class="workout-content">
            <h3 class="level">Expert</h3>
            <p class="description">Challenge yourself with high-intensity exercises that push your limits. This workout targets all major muscle groups with advanced techniques.</p>
            <a href="normalexpert.php" class="start-btn">Start Now</a>
        </div>
    </div>
</section>

<script src="workout.js"></script>


</body>
</html>
