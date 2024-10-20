
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
    <title>Step Counter</title>
    <link rel="stylesheet" href="step_counter1.css">
</head>
<body>

<section>
        <nav class="navbar">
            <div class="logo">Zenfit</div>
            <ul class="nav-links">
                <li><a href="index.php">Home</a></li>
                <li><a href="#">Daily Challenges</a></li>
                <li><a href="workout.php">Workout</a></li>
                <li><a href="step_counter.php#leaderboardBody">Leaderboard</a></li>
                <li><a href="home.php">Profile</a></li>
            </ul>
        </nav>
</section>
    <h1>Step Counter</h1>
    <div class="login-container">
        <input type="email" id="email" placeholder="Enter your email" required>
        
        <input type="text" id="username" placeholder="Enter your username" required>
        <button id="loginBtn">Login</button>
    </div>
    <div id="stepCounter" class="hidden">
        <h2 id="userName"></h2>
        <p>Current Steps: <span id="currentSteps">0</span></p>
        <button id="startBtn">Start</button>
        <button id="stopBtn">Stop</button>
        <button id="updateBtn">Update Leaderboard</button>
    </div>
    <h3>Leaderboard</h3>
    <table>
        <thead>
            <tr>
                <th>Rank</th>
                <th>Username</th>
                <th>Steps</th>
            </tr>
        </thead>
        <tbody id="leaderboardBody">
        </tbody>
    </table>

    <button id="resetBtn">Reset Leaderboard</button>
    <script src="step_counter.js"></script>
</body>
</html>
