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
   <meta http-equiv="X-UA-Compatible" content="IE=edge">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <title>home</title>

    <!-- custom css file link  -->
    <link rel="stylesheet" href="style.css">
   
</head>
<body>

<header>
        <nav class="navbar">
            <div class="logo">Zenfit</div>
            <ul class="nav-links">
                <li><a href="index.php">Home</a></li>
                <li><a href="workout.php">workouts</a></li>
                <li><a href="#">daily challenge</a></li>
                <li><a href="#">Leaderboard challenge</a></li>
                <li><a href="login.php" id="login-link">Login</a></li>
                <li><a href="profile.php">Profile</a></li>
            </ul>
            </ul>
        </nav>
    </header>
   
<style>
     .navbar {
    display: flex;
    justify-content: space-between;
    background-color:brown;
    padding: 10px;
    color: white;
  }
  
  .nav-links {
    list-style: none;
    display: flex;
  }
  
  .nav-links li {
    margin: 0 15px;
  }
  
  .nav-links a {
    text-decoration: none;
    color: white;
    font-size: larger;
    padding: 10px;
  }
  .nav-links a:hover {
    text-decoration: none;
    color: white;
    background-color: #bab8b8;
    border-radius: 5px;
  }
  
  
   </style>

<div class="container">

   <div class="profile">
      <?php
         $select = mysqli_query($conn, "SELECT * FROM `user_form` WHERE id = '$user_id'") or die('query failed');
         if(mysqli_num_rows($select) > 0){
            $fetch = mysqli_fetch_assoc($select);
         }
         if($fetch['image'] == ''){
            echo '<img src="images/default-avatar.png">';
         }else{
            echo '<img src="uploaded_img/'.$fetch['image'].'">';
         }
      ?>
      <h3>NAME:<?php echo $fetch['name']; ?></h3>
      <h3>HEIGHT:<?php echo $fetch['height']; ?></h3>
      <h3>WEIGHT:<?php echo $fetch['weight']; ?></h3>
      <a href="update_profile.php" class="btn">update profile</a>
      <a href="home.php?logout=<?php echo $user_id; ?>" class="delete-btn">logout</a>
      <p>new <a href="login.php">login</a> or <a href="register.php">register</a></p>
   </div>

</div>



</body>
</html>