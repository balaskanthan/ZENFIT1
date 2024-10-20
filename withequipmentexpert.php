
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
    <link rel="stylesheet" href="withequipmentsbeg.css">
</head>
<body>
    <nav>
        <div class="logo">
        <a href="index.php">
                            <img src="LOGO.png" alt="" height="100px" width="140px">
                        </a>
        </div>
        <ul class="nav-links">
            <li><a href="index.php">Home</a></li>
            <li><a href="workout.php">Workouts</a></li>
            <li><a href="#track-performance">Track Performance</a></li>
        </ul>
    </nav>

    <header class="header-section">
        <h1>Start Strong: A Expert's Path to Fitness</h1>
        <h3>"Welcome to Zenfit! As a beginner, it's important to ease into your fitness journey. Start with simple, enjoyable workouts that build your confidence and strength.</h3>
    </header>

    <section class="workouts-section">
        <div class="workout-box">
            <img src="fullbodybeg.jpg" alt="Leg Workout">
            <h2>Full Body Workout</h2>
            <p>Enhance overall fitness with comprehensive full-body exercises.</p>
            <a href="fullexpert.php" class="start-button">Start Now</a>
        </div>
        
        <div class="workout-box">
            <img src="upperbodybeg.jpg" alt="Arm Workout">
            <h2>Upper Body Workout</h2>
            <p>Enhance your upper body strength with these exercises.</p>
            <a href="upperexpert.php" class="start-button">Start Now</a>
        </div>
        
        <div class="workout-box">
            <img src="lower.jpg" alt="Core Workout">
            <h2>Lower Body Workou</h2>
            <p> Strengthen your legs and glutes with effective lower body workouts.</p>
            <a href="lowerexpert.php" class="start-button">Start Now</a>
        </div>
    </section>

    <section class="workouts-section">
        <div class="workout-box">
            <img src="arm.jpg" alt="Leg Workout">
            <h2>Arm Workout</h2>
            <p>Sculpt and tone your arms with focused bicep and tricep exercises.</p>
            <a href="armexpert.php" class="start-button">Start Now</a>
        </div>
        
        <div class="workout-box">
            <img src="LEG-WORKOUTS.jpg" alt="Arm Workout">
            <h2>Leg Workout</h2>
            <p>Improve leg strength and stability with dedicated lower limb workouts.</p>
            <a href="legexpert.php" class="start-button">Start Now</a>
        </div>
        
        <div class="workout-box">
            <img src="core.jpg" alt="Core Workout">
            <h2>Core Workout</h2>
            <p>Strengthen your core for better stability and posture.</p>
            <a href="coreexpert.php" class="start-button">Start Now</a>
        </div>
    </section>

    <section class="workouts-section">
        <div class="workout-box">
            <img src="back.webp" alt="Leg Workout">
            <h2>Back Workout</h2>
            <p>Strengthen your back and improve posture with targeted exercises.</p>
            <a href="backexpert.php" class="start-button">Start Now</a>
        </div>
        
       
        
        
        <div class="workout-box">
            <img src="cardio.jpg" alt="Leg Workout">
            <h2>Cardio Workout:</h2>
            <p>Boost heart health and endurance with high-energy cardio exercises like running or cycling.</p>
            <a href="cardioexpert.php" class="start-button">Start Now</a>
        </div>
        
    </section>

    <footer>
        <p>&copy; 2024 Your Company Name</p>
    </footer>
</body>
</html>
