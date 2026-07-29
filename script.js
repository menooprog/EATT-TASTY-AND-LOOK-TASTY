
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
