
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
    <title>Customize Your Workout</title>
    <link rel="stylesheet" href="selection.css">
</head>
<body>
    <nav class="navbar">
        <div class="logo">
            <img src="logo.png" alt="LegFit Logo" /> <!-- Add your logo here -->
            <span>LegFit</span>
        </div>
        <ul class="nav-links">
            <li><a href="workout.php">Back</a></li> <!-- Add actual back link -->
            <li><a href="#">Go to Leaderboard</a></li> <!-- Add leaderboard link -->
        </ul>
    </nav>
    
    <header>
        <h1>Customize Your Workout Plan</h1>
    </header>
    <div class="exercise-container">
        <!-- Workout selection boxes will be generated here -->
    </div>
    <button id="load-more">Load More</button>
    <a href="selected.php" id="view-selected">View Selected Workouts</a>
    

    
    <script src="ownplan.js"></script>
</body>
</html>
