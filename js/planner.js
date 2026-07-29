function generatePlan(){


let name =
document.getElementById("userName").value;


let weight =
Number(document.getElementById("weight").value);


let goal =
document.getElementById("goal").value;



let plan =
document.getElementById("planResult");



if(goal==="gain"){


plan.innerHTML = `

<div class="foodCard">

<h2>${name}'s Weight Gain Plan</h2>


<h3>Day 1</h3>


<p><b>Breakfast:</b> Oats + Milk + Banana + Nuts</p>

<p><b>Lunch:</b> Rice + Chicken + Vegetables</p>

<p><b>Snack:</b> Peanut Butter Sandwich</p>

<p><b>Dinner:</b> Eggs + Roti + Yogurt</p>


<p>Target: Increase healthy calories and protein intake.</p>


</div>

`;



}



else{


plan.innerHTML = `

<div class="foodCard">

<h2>${name}'s Weight Loss Plan</h2>


<h3>Day 1</h3>


<p><b>Breakfast:</b> Eggs + Fruit + Green Tea</p>

<p><b>Lunch:</b> Grilled Chicken Salad</p>

<p><b>Snack:</b> Yogurt + Nuts</p>

<p><b>Dinner:</b> Soup + Vegetables</p>


<p>Target: Balanced calories with high nutrition.</p>


</div>

`;

}


}