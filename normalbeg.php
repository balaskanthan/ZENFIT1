

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
    <title>Workout Tracker</title>
    <link rel="stylesheet" href="normalbeg1.css">

    <nav class="navbar">
        <div class="logo">
            <img src="logo.png" alt="LegFit Logo" /> <!-- Add your logo here -->
            <span></span>
        </div>
        <ul class="nav-links">
            <li><a href="workout.html">Back</a></li> <!-- Add actual back link -->
            <li><a href="">Go to Leaderboard</a></li> <!-- Add leaderboard link -->
        </ul>
    </nav>
</head>
<body>
    
    
    <div class="container">
        <h1>Workout Tracker - Day <span id="currentDay">1</span></h1>
        <div id="exerciseContainer">
        </div>
        <button id="nextDay" disabled>Go to Next Day</button>
        <div id="dailyReport">
            <h2>Daily Report</h2>
            <p id="dailyWorkoutTime">Total Workout Time: 0 seconds</p>
            <p id="dailyCaloriesBurned">Total Calories Burned: 0.00</p>
        </div>
        <div id="totalReport">
            <h2>Total Report</h2>
            <p>Total Workout Time: <span id="totalTime">0 seconds</span></p>
            <p>Total Calories Burned: <span id="totalCalories">0.00</span></p>
        </div>
    </div>
    
    <div id="exerciseCompletionModal" class="modal">
        <div class="modal-content">
            <span class="close" id="modalClose">&times;</span>
            <p id="modalMessage"></p>
        </div>
    </div>
    <audio id="completionSound" src="relax.mp3"></audio>

    <script src="normalbeg1.js"></script>
</body>
</html>



