

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
    <link rel="stylesheet" href="legbeg.css">
</head>
<body>

<!-- Navbar -->
<nav class="navbar">
    <div class="logo">
        <img src="logo.png" alt="LegFit Logo" /> <!-- Add your logo here -->

    </div>
    <ul class="nav-links">
        <li><a href="withoutinter.php">Back</a></li> <!-- Add actual back link -->
        <li><a href="#">Go to Leaderboard</a></li> <!-- Add leaderboard link -->
    </ul>
</nav>



<!-- Main Content Section -->
<div class="main-content">
    <h1>Full Body Day Workout Routine</h1>
    <p>Get a complete workout with this full-body routine designed to strengthen and tone all major muscle groups. From burpees to lunges, these exercises will help you improve strength, endurance, and flexibility. Follow the routine below and track your progress!</p>
</div>

<!-- Exercise Timer Boxes -->
<div id="exerciseContainer"></div>

<!-- Total workout data -->
<div class="total-section">
    <p>Total Time: <span id="totalTime">0</span> seconds</p>
    <p>Total Calories Burned: <span id="totalCalories">0.00</span></p>
</div>


<script src="wfullinter.js"></script>
</body>
</html>
