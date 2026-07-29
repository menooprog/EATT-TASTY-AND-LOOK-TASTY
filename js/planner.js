function generatePlan(){

let name =
document.getElementById("userName").value;


let goal =
document.getElementById("goal").value;


let result =
document.getElementById("planResult");


if(name===""){

result.innerHTML =
"Please enter your name.";

return;

}



let plan="";


if(goal==="gain"){


plan=`

<h2>${name}'s Weight Gain Plan</h2>

<h3>Breakfast</h3>
<p>Oats + Milk + Banana + Nuts</p>

<h3>Lunch</h3>
<p>Rice + Chicken + Vegetables</p>

<h3>Snack</h3>
<p>Peanut Butter Sandwich</p>

<h3>Dinner</h3>
<p>Eggs + Roti + Yogurt</p>

`;

}


else{


plan=`

<h2>${name}'s Weight Loss Plan</h2>

<h3>Breakfast</h3>
<p>Eggs + Fruit</p>

<h3>Lunch</h3>
<p>Chicken Salad</p>

<h3>Snack</h3>
<p>Yogurt</p>

<h3>Dinner</h3>
<p>Vegetable Soup</p>

`;

}


result.innerHTML = `

<div class="foodCard">

${plan}

</div>

`;


}