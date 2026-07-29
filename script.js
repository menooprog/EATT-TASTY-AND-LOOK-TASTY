
// ===================================
// EAT AND LOOK TASTY
// MAIN JAVASCRIPT
// ===================================



// DISPLAY FOODS

function displayFoods(){

let gainBox=document.getElementById("gainFoods");
let lossBox=document.getElementById("lossFoods");


if(!gainBox || !lossBox) return;



weightGainFoods.forEach(food=>{


gainBox.innerHTML += `

<div class="food-card" onclick="showFood('${food.name}')">

${food.name}

</div>

`;

});



weightLossFoods.forEach(food=>{


lossBox.innerHTML += `

<div class="food-card" onclick="showFood('${food.name}')">

${food.name}

</div>

`;

});


}




// DISPLAY RECIPES


function displayRecipes(){


let gainBox=document.getElementById("gainRecipes");

let lossBox=document.getElementById("lossRecipes");


if(!gainBox || !lossBox) return;



weightGainRecipes.forEach(recipe=>{


gainBox.innerHTML +=`

<div class="recipe-card"
onclick="showRecipe(${recipe.id},'gain')">

${recipe.name}

</div>

`;

});




weightLossRecipes.forEach(recipe=>{


lossBox.innerHTML +=`

<div class="recipe-card"
onclick="showRecipe(${recipe.id},'loss')">

${recipe.name}

</div>

`;

});


}




// SHOW FOOD DETAILS


function showFood(name){


let food=[

...weightGainFoods,

...weightLossFoods

].find(item=>item.name===name);



document.getElementById("popupTitle").innerHTML=food.name;


document.getElementById("popupBody").innerHTML=`

🔥 Calories: ${food.calories} kcal

<br>

💪 Protein: ${food.protein} g

<br>

🍚 Carbohydrates: ${food.carbs} g

<br>

🥑 Fat: ${food.fat} g

<br>

🌿 Fibre: ${food.fiber} g

<br>

🍊 Vitamins: ${food.vitamins}

`;



document.getElementById("recipePopup").style.display="block";


}




// SHOW RECIPE DETAILS


function showRecipe(id,type){


let recipe;



if(type==="gain"){

recipe=weightGainRecipes.find(r=>r.id===id);

}

else{

recipe=weightLossRecipes.find(r=>r.id===id);

}



document.getElementById("popupTitle").innerHTML=recipe.name;



document.getElementById("popupBody").innerHTML=`

🍽 Meal:
${recipe.meal}

<br><br>

🥘 Ingredients:

<br>

${recipe.ingredients.join(", ")}


<br><br>


👩‍🍳 Recipe:

<br>

${recipe.recipe}


<br><br>


🔥 Calories:
${recipe.calories} kcal

<br>

💪 Protein:
${recipe.protein} g

<br>

🍚 Carbs:
${recipe.carbs} g

<br>

🥑 Fat:
${recipe.fat} g

<br>

🌿 Fibre:
${recipe.fiber} g

<br>

🍊 Vitamins:
${recipe.vitamins}


<br><br>

🔄 Alternative:
${recipe.alternative}


`;



document.getElementById("recipePopup").style.display="block";


}





// CLOSE POPUP


document.getElementById("closePopup").onclick=function(){

document.getElementById("recipePopup").style.display="none";

};





// SEARCH ENGINE


document.getElementById("searchBtn").onclick=function(){


let search=document
.getElementById("recipeSearch")
.value
.toLowerCase();



let gain=document.getElementById("gainRecipes");

let loss=document.getElementById("lossRecipes");



gain.innerHTML="";

loss.innerHTML="";




weightGainRecipes
.filter(r=>r.name.toLowerCase().includes(search))
.forEach(recipe=>{


gain.innerHTML+=`

<div class="recipe-card"
onclick="showRecipe(${recipe.id},'gain')">

${recipe.name}

</div>

`;

});





weightLossRecipes
.filter(r=>r.name.toLowerCase().includes(search))
.forEach(recipe=>{


loss.innerHTML+=`

<div class="recipe-card"
onclick="showRecipe(${recipe.id},'loss')">

${recipe.name}

</div>

`;

});


};





// PERSONAL PLAN + SAVE HISTORY


document.getElementById("planBtn").onclick=function(){


let data={


name:document.getElementById("name").value,

age:document.getElementById("age").value,

height:document.getElementById("height").value,

weight:document.getElementById("weight").value,

target:
document.getElementById("targetWeight").value,

goal:
document.getElementById("goal").value


};



localStorage.setItem(
"EAT_LOOK_HISTORY",
JSON.stringify(data)
);



generatePlan(data);


};





function generatePlan(data){



let result=document.getElementById("planResult");



let bmi=(data.weight/
((data.height/100)*(data.height/100)))
.toFixed(1);



if(data.goal==="gain"){


result.innerHTML=`

<h2>💪 ${data.name}'s Weight Gain Plan</h2>

<p>

BMI: ${bmi}

</p>


<h3>Month 1</h3>

Eat 5 meals daily.
Add milk, eggs, rice, nuts and protein.


<h3>Month 2</h3>

Increase calories and strength training.


<h3>Month 3</h3>

Maintain routine and track progress.


`;

}


else{


result.innerHTML=`

<h2>🥗 ${data.name}'s Weight Loss Plan</h2>


<p>

BMI: ${bmi}

</p>


<h3>Month 1</h3>

Reduce processed foods and sugary drinks.


<h3>Month 2</h3>

Increase protein and activity.


<h3>Month 3</h3>

Maintain healthy lifestyle.


`;

}


}





// LOAD SAVED DATA


window.onload=function(){


displayFoods();

displayRecipes();



let saved=
localStorage.getItem("EAT_LOOK_HISTORY");



if(saved){


let data=JSON.parse(saved);



document.getElementById("name").value=data.name;

document.getElementById("age").value=data.age;

document.getElementById("height").value=data.height;

document.getElementById("weight").value=data.weight;

document.getElementById("targetWeight").value=data.target;

document.getElementById("goal").value=data.goal;


generatePlan(data);


}


};