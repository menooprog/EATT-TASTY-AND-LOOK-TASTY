<!DOCTYPE html>
<html>

<head>

<title>Diet Planner</title>

<link rel="stylesheet" href="css/style.css">

</head>


<body>


<header>

<h1>90 Day Diet Planner 🍽️</h1>

</header>



<section class="hero">


<input id="userName" placeholder="Your Name">


<input id="age" type="number" placeholder="Age">


<input id="weight" type="number" placeholder="Weight kg">


<input id="height" type="number" placeholder="Height cm">



<select id="goal">

<option value="gain">
Weight Gain
</option>


<option value="loss">
Weight Loss
</option>


</select>



<button onclick="generatePlan()">

Generate Plan

</button>



<div id="planResult"></div>


</section>



<script src="js/planner.js"></script>


</body>

</html>