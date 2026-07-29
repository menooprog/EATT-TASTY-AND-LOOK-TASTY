
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



function showRecipe(name){


let allRecipes=[...gainRecipes,...lossRecipes];


let recipe=allRecipes.find(r=>r.name===name);



document.getElementById("recipeName").innerHTML=recipe.name;


document.getElementById("recipeInfo").innerHTML=`

<b>Meal:</b> ${recipe.meal}<br><br>

<b>Ingredients:</b> ${recipe.ingredients.join(", ")}<br><br>

<b>Recipe:</b> ${recipe.recipe}<br><br>

<b>Serving:</b> ${recipe.serving}<br><br>

🔥 Calories: ${recipe.calories} kcal<br>

💪 Protein: ${recipe.protein} g<br>

🍚 Carbohydrates: ${recipe.carbs} g<br>

🥑 Fat: ${recipe.fat} g<br>

🌿 Fibre: ${recipe.fiber} g<br>

🍊 Vitamins: ${recipe.vitamins}<br><br>

✨ Alternative: ${recipe.alternative}

`;


document.getElementById("recipePopup").style.display="block";


}



function closeRecipe(){

document.getElementById("recipePopup").style.display="none";

}



displayRecipes();