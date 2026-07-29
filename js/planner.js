function generatePlan(){


let name =
document.getElementById("userName").value;


let age =
document.getElementById("age").value;


let weight =
document.getElementById("weight").value;


let height =
document.getElementById("height").value;


let goal =
document.getElementById("goal").value;



let result =
document.getElementById("planResult");



if(name==="" || weight==="" || height===""){

result.innerHTML =

"<div class='foodCard'>Please fill all details.</div>";

return;

}



let bmi =
weight / ((height/100)*(height/100));



let plan;



if(goal==="gain"){


plan = `

<h2>Weight Gain Plan</h2>

<h3>Breakfast</h3>
<p>Oats + Milk + Banana + Nuts</p>

<h3>Lunch</h3>
<p>Rice + Chicken + Vegetables</p>

<h3>Brunch/Snack</h3>
<p>Peanut Butter Sandwich + Milk</p>

<h3>Dinner</h3>
<p>Egg Omelette + Roti + Yogurt</p>

<p>Daily Target: Increase calories with protein-rich foods.</p>

`;

}


else{


plan = `

<h2>Weight Loss Plan</h2>

<h3>Breakfast</h3>
<p>Eggs + Fruits + Green Tea</p>

<h3>Lunch</h3>
<p>Chicken Salad + Brown Rice</p>

<h3>Brunch/Snack</h3>
<p>Greek Yogurt + Nuts</p>

<h3>Dinner</h3>
<p>Soup + Vegetables + Protein</p>

<p>Daily Target: Balanced calories and high nutrition.</p>

`;

}



result.innerHTML = `

<div class="foodCard">

<h2>${name}'s Plan</h2>

<p><b>Age:</b> ${age}</p>

<p><b>BMI:</b> ${bmi.toFixed(1)}</p>

${plan}

</div>

`;

}