

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
    <title>Leg Workout</title>
    <link rel="stylesheet" href="styles1.css">
</head>
<body>

<!-- Navbar -->
<nav class="navbar">
    <div class="logo">
        <img src="logo.png" alt="LegFit Logo" /> <!-- Add your logo here -->
        <span>LegFit</span>
    </div>
    <ul class="nav-links">
        <li><a href="withequipmentsbeg.php">Back</a></li> <!-- Add actual back link -->
        <li><a href="#">Go to Leaderboard</a></li> <!-- Add leaderboard link -->
    </ul>
</nav>

<!-- Main Content Section -->
<div class="main-content">
    <!-- Day Workout Boxes -->
<div id="dayContainer"></div>

    <h1>Leg Day Workout Routine</h1>
    <p>Strengthen and tone your legs with this powerful workout routine. From squats to lunges, these exercises will help you build strong leg muscles, improve flexibility, and enhance your balance. Follow the routine below and track your progress!</p>
</div>

<!-- Day 1 Section -->
<div class="day-section">
    <h2>Day 1</h2>
    <!-- Exercise Timer Boxes -->
    <div id="exerciseContainer"></div>

    <!-- Total workout data -->
    <div class="total-section">
        <p>Total Time: <span id="totalTime">0</span> seconds</p>
        <p>Total Calories Burned: <span id="totalCalories">0.00</span></p>
    </div>
</div>

<script src="script1.js"></script>
</body>
</html>
