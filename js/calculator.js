function calculateNutrition(){


let foodName = document
.getElementById("foodName")
.value
.toLowerCase();


let grams = Number(
document.getElementById("amount").value
);



let result = document.getElementById("calculationResult");



let food = DATABASE.gainFoods.find(food =>

food.name.toLowerCase() === foodName

);



if(!food){

result.innerHTML = 
"<div class='foodCard'>Food not found. Try Banana, Egg, Rice or Oats.</div>";

return;

}



if(grams<=0){

result.innerHTML =
"<div class='foodCard'>Enter valid grams.</div>";

return;

}



let multiply = grams / 100;



result.innerHTML = `

<div class="foodCard">

<h2>${food.name}</h2>


<p><b>Quantity:</b> ${grams} g</p>

<p><b>Calories:</b> ${(food.calories*multiply).toFixed(1)} kcal</p>

<p><b>Protein:</b> ${(food.protein*multiply).toFixed(1)} g</p>

<p><b>Carbohydrates:</b> ${(food.carbs*multiply).toFixed(1)} g</p>

<p><b>Fat:</b> ${(food.fat*multiply).toFixed(1)} g</p>

<p><b>Fiber:</b> ${(food.fiber*multiply).toFixed(1)} g</p>


</div>

`;

}