
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
    <link rel="stylesheet" href="selected.css">
    <title>Selected Workouts</title>
</head>
<body>
    <h1>Your Selected Workouts</h1>
    <div id="selected-workouts"></div>

    <div id="timer">00:00:00</div>
    <button id="start-timer">Start</button>
    <button id="pause-timer">Pause</button>
    <button id="end-timer">End</button>
    <button id="update-stats">Update Stats</button>

    <div id="today-time">Today's Workout Time: 0 seconds</div>
    <div id="total-time">Total Time: 0 seconds</div>
    <div id="total-calories">Total Calories: 0 kcal</div>
    <div id="calories-burned">Calories Burned: 0 kcal</div>
<a href="ownplan.php">back</a>
    <script src="selected.js"></script>
</body>
</html>
