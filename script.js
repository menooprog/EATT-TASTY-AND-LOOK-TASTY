
// ================================
// FOOD DISPLAY + RECIPE DETAILS JS
// Works with existing food.js
// ================================


// Make sure food.js loads before script.js
// Example:
// <script src="food.js"></script>
// <script src="script.js"></script>



const gainContainer = document.getElementById("gainRecipes");
const lossContainer = document.getElementById("lossRecipes");

const recipePopup = document.getElementById("recipeDetails");



// DISPLAY ALL FOODS ON HOME PAGE

function displayFoods(){


    gainContainer.innerHTML="";
    lossContainer.innerHTML="";


    foods.forEach((food,index)=>{


        let card = document.createElement("div");

        card.className="food-card";


        card.innerHTML=`

        <h3>${food.name}</h3>

        <p>${food.calories} kcal</p>

        `;


        card.onclick=function(){

            showRecipe(index);

        };



        if(food.category==="gain"){

            gainContainer.appendChild(card);

        }

        else if(food.category==="loss"){

            lossContainer.appendChild(card);

        }


    });


}




// OPEN COMPLETE RECIPE

function showRecipe(index){


let food = foods[index];


recipePopup.innerHTML=`

<div class="recipe-box">


<h2>${food.name}</h2>


<h3>Nutrition Information</h3>

<p>Calories:
${food.calories}</p>


<p>Protein:
${food.protein}</p>


<p>Carbohydrates:
${food.carbs}</p>


<p>Fats:
${food.fats}</p>


<p>Fiber:
${food.fiber}</p>


<h3>Ingredients</h3>

<p>
${food.ingredients}
</p>



<h3>Recipe</h3>

<p>
${food.recipe}
</p>



<h3>Healthy Benefits</h3>

<p>
${food.benefits}
</p>



<button onclick="closeRecipe()">
Close
</button>


</div>

`;


recipePopup.style.display="block";


}




function closeRecipe(){

recipePopup.style.display="none";

}


// 1. Display all foods
function displayFoods(){
   ...
}


// 2. Show recipe popup
function showRecipe(index){
   ...
}


// 3. Close popup
function closeRecipe(){
   ...
}


// 4. Old search function
// DELETE your old searchFood() function
// PASTE the new advanced searchFood() here


// 5. Nutrition calculator
PASTE calculateNutrition() HERE


// ================================
// 3 MONTH PROGRESS PLANNER
// ================================


function generateProgressPlan(){


let name =
document.getElementById("plannerName").value;


let age =
document.getElementById("plannerAge").value;


let weight =
Number(document.getElementById("plannerWeight").value);


let goal =
document.getElementById("plannerGoal").value;


let result =
document.getElementById("plannerResult");



if(!name || !weight){

result.innerHTML=
"Please fill all details";

return;

}



let targetWeight;


if(goal==="gain"){

targetWeight = weight + 6;


result.innerHTML=`

<div class="recipe-box">

<h2>Hello ${name} 💙</h2>

<h3>Weight Gain 3 Month Plan</h3>


<p>
Current Weight:
${weight} kg
</p>


<p>
Target Weight:
${targetWeight} kg
</p>


<h3>Month 1</h3>

<p>
Increase calories gradually.
Eat 5 meals daily with protein-rich foods.
</p>


<h3>Month 2</h3>

<p>
Add calorie-dense foods like nuts,
milk, rice, eggs and healthy fats.
</p>


<h3>Month 3</h3>

<p>
Maintain consistency and focus on
strength building.
</p>


</div>

`;



}



else{


targetWeight = weight - 6;


result.innerHTML=`

<div class="recipe-box">

<h2>Hello ${name} 💙</h2>


<h3>Weight Loss 3 Month Plan</h3>


<p>
Current Weight:
${weight} kg
</p>


<p>
Target Weight:
${targetWeight} kg
</p>


<h3>Month 1</h3>

<p>
Focus on balanced meals and portion control.
</p>


<h3>Month 2</h3>

<p>
Increase daily movement and protein intake.
</p>


<h3>Month 3</h3>

<p>
Maintain healthy habits and avoid extreme diets.
</p>


</div>

`;

}



savePlannerData();

}




// ================================
// SAVE USER HISTORY
// ================================


function savePlannerData(){


let userData={

name:
document.getElementById("plannerName").value,

age:
document.getElementById("plannerAge").value,

weight:
document.getElementById("plannerWeight").value,

goal:
document.getElementById("plannerGoal").value

};


localStorage.setItem(
"weightPlanner",
JSON.stringify(userData)
);


}




// ================================
// LOAD SAVED USER DATA
// ================================


function loadPlannerData(){


let saved =
localStorage.getItem("weightPlanner");


if(saved){


let data =
JSON.parse(saved);



document.getElementById("plannerName").value=data.name;

document.getElementById("plannerAge").value=data.age;

document.getElementById("plannerWeight").value=data.weight;

document.getElementById("plannerGoal").value=data.goal;


}


}


loadPlannerData();


// 6. Load food dropdown

function loadFoodOptions(){
   ...
}


loadFoodOptions();



// PASTE 3 MONTH PLANNER CODE HERE



function generateProgressPlan(){
   ...
}


function savePlannerData(){
   ...
}


function loadPlannerData(){
   ...
}


loadPlannerData();

// 7. Keep this at the very end

window.onload=function(){

    displayFoods();
    loadFoodOptions();

};


