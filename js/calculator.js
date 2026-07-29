function calculateNutrition(){

let name = document
.getElementById("foodName")
.value
.toLowerCase();


let amount = Number(
document.getElementById("amount").value
);


let food = ALL_FOODS.find(item =>
item.name.toLowerCase().includes(name)
);


let result = document.getElementById("calculationResult");


if(food && amount > 0){


let ratio = amount / 100;


result.innerHTML = `

<div class="foodCard">

<h2>${food.name}</h2>

<p>Amount: ${amount} g</p>

<p>Calories: ${(food.calories * ratio).toFixed(1)} kcal</p>

<p>Protein: ${(food.protein * ratio).toFixed(1)} g</p>

<p>Carbs: ${(food.carbs * ratio).toFixed(1)} g</p>

<p>Fat: ${(food.fat * ratio).toFixed(1)} g</p>

<p>Fiber: ${(food.fiber * ratio).toFixed(1)} g</p>

</div>

`;

}

else{

result.innerHTML =
"Please enter a valid food name and quantity.";

}

}