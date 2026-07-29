
document.getElementById("gainBtn").onclick = function(){};

document.getElementById("lossBtn").onclick = function(){};
function displayRecipes(){


let gainBox=document.getElementById("gainRecipes");
let lossBox=document.getElementById("lossRecipes");



gainRecipes.forEach(recipe=>{

gainBox.innerHTML += `

<div class="recipe-card" onclick="showRecipe('${recipe.name}')">

${recipe.name}

</div>

`;

});



lossRecipes.forEach(recipe=>{

lossBox.innerHTML += `

<div class="recipe-card" onclick="showRecipe('${recipe.name}')">

${recipe.name}

</div>

`;

});


}

function generatePlan(){


let name=document.getElementById("userName").value;
let age=document.getElementById("userAge").value;
let weight=document.getElementById("userWeight").value;
let height=document.getElementById("userHeight").value;
let goal=document.getElementById("goal").value;
let target=document.getElementById("targetWeight").value;



let userData={

name:name,
age:age,
weight:weight,
height:height,
goal:goal,
target:target

};


// Save history

localStorage.setItem(
"userFitnessHistory",
JSON.stringify(userData)
);



createPlan(userData);


}



function createPlan(userData){


let bmi=(
userData.weight/
((userData.height/100)*(userData.height/100))
).toFixed(1);



let result=document.getElementById("planResult");



if(userData.goal==="gain"){


result.innerHTML=`

<h2>💪 ${userData.name}'s Weight Gain Plan</h2>

<p>
Age: ${userData.age}<br>
Current Weight: ${userData.weight} kg<br>
Target Weight: ${userData.target} kg<br>
BMI: ${bmi}
</p>


<h3>Month 1 - Healthy Increase</h3>

<p>
Eat 5 meals daily.<br>
Add milk, eggs, rice, nuts and protein foods.
</p>


<h3>Month 2 - Strength Phase</h3>

<p>
Increase calories gradually.
Add protein with every meal.
</p>


<h3>Month 3 - Progress Phase</h3>

<p>
Maintain routine and track weekly changes.
</p>

`;

}



else{


result.innerHTML=`

<h2>🥗 ${userData.name}'s Weight Loss Plan</h2>

<p>
Age: ${userData.age}<br>
Current Weight: ${userData.weight} kg<br>
Target Weight: ${userData.target} kg<br>
BMI: ${bmi}
</p>


<h3>Month 1 - Healthy Routine</h3>

<p>
Reduce processed foods.
Add vegetables, protein and water.
</p>


<h3>Month 2 - Fat Loss Phase</h3>

<p>
Control portions and stay active.
</p>


<h3>Month 3 - Maintenance</h3>

<p>
Maintain balanced meals and habits.
</p>

`;

}


}


function displayRecipes(){

let gainContainer = document.getElementById("gainRecipes");
let lossContainer = document.getElementById("lossRecipes");


// Weight Gain

weightGainRecipes.forEach(recipe => {

gainContainer.innerHTML += `

<div class="recipe-card" onclick="showRecipe(${recipe.id}, 'gain')">

${recipe.name}

</div>

`;

});



// Weight Loss

weightLossRecipes.forEach(recipe => {

lossContainer.innerHTML += `

<div class="recipe-card" onclick="showRecipe(${recipe.id}, 'loss')">

${recipe.name}

</div>

`;

});


}
function searchRecipes(){


let input = document.getElementById("recipeSearch").value.toLowerCase();


let gainContainer = document.getElementById("gainRecipes");

let lossContainer = document.getElementById("lossRecipes");



gainContainer.innerHTML="";

lossContainer.innerHTML="";



// Search weight gain

weightGainRecipes
.filter(recipe => 
recipe.name.toLowerCase().includes(input)
||
recipe.ingredients.join(" ").toLowerCase().includes(input)
)
.forEach(recipe=>{


gainContainer.innerHTML += `

<div class="recipe-card"
onclick="showRecipe(${recipe.id},'gain')">

${recipe.name}

</div>

`;

});




// Search weight loss

weightLossRecipes
.filter(recipe => 
recipe.name.toLowerCase().includes(input)
||
recipe.ingredients.join(" ").toLowerCase().includes(input)
)
.forEach(recipe=>{


lossContainer.innerHTML += `

<div class="recipe-card"
onclick="showRecipe(${recipe.id},'loss')">

${recipe.name}

</div>

`;

});


}



function showRecipe(id,type){


let recipe;


if(type==="gain"){

recipe = weightGainRecipes.find(item=>item.id===id);

}

else{

recipe = weightLossRecipes.find(item=>item.id===id);

}



document.getElementById("recipeName").innerHTML = recipe.name;


document.getElementById("recipeInfo").innerHTML = `


🍽️ <b>Meal:</b> ${recipe.meal}<br><br>


🥘 <b>Ingredients:</b><br>
${recipe.ingredients.join(", ")}
<br><br>


👩‍🍳 <b>Recipe:</b><br>
${recipe.recipe}

<br><br>


🍴 <b>Serving:</b> ${recipe.serving}

<br><br>


🔥 Calories: ${recipe.calories} kcal

<br>

💪 Protein: ${recipe.protein} g

<br>

🍚 Carbohydrates: ${recipe.carbs} g

<br>

🥑 Fat: ${recipe.fat} g

<br>

🌿 Fibre: ${recipe.fiber} g

<br>

🍊 Vitamins: ${recipe.vitamins}

<br><br>

🔄 Alternative:
${recipe.alternative}

`;



document.getElementById("recipePopup").style.display="block";


}




function closeRecipe(){

document.getElementById("recipePopup").style.display="none";

}



displayRecipes();

window.onload=function(){


let savedData=localStorage.getItem("userFitnessHistory");


if(savedData){


let userData=JSON.parse(savedData);



document.getElementById("userName").value=userData.name;

document.getElementById("userAge").value=userData.age;

document.getElementById("userWeight").value=userData.weight;

document.getElementById("userHeight").value=userData.height;

document.getElementById("goal").value=userData.goal;

document.getElementById("targetWeight").value=userData.target;



createPlan(userData);


}


};

const weightGainFoods=[

"Peanut Butter",
"Whole Milk",
"Eggs",
"Chicken Breast",
"Rice",
"Potatoes",
"Sweet Potatoes",
"Avocado",
"Bananas",
"Dates",
"Almonds",
"Walnuts",
"Cashews",
"Cheese",
"Paneer",
"Yogurt",
"Oats",
"Peanut Chikki",
"Olive Oil",
"Butter",
"Salmon",
"Beef",
"Lentils",
"Chickpeas",
"Pasta",
"Whole Wheat Bread"

];


const weightLossFoods=[

"Spinach",
"Broccoli",
"Cucumber",
"Lettuce",
"Tomatoes",
"Carrots",
"Egg Whites",
"Chicken Breast",
"Fish",
"Greek Yogurt",
"Oats",
"Apples",
"Oranges",
"Berries",
"Green Tea",
"Brown Rice",
"Quinoa",
"Lentils",
"Beans",
"Soup",
"Almonds",
"Chia Seeds",
"Flax Seeds",
"Sweet Potato",
"Avocado"

];



function showFoods(){


let gain=document.getElementById("gainFoods");

let loss=document.getElementById("lossFoods");



weightGainFoods.forEach(food=>{

gain.innerHTML +=`

<div class="food-item">
${food}
</div>

`;

});



weightLossFoods.forEach(food=>{

loss.innerHTML +=`

<div class="food-item">
${food}
</div>

`;

});


}


showFoods();
