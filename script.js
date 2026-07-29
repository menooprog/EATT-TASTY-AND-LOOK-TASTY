
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




// SEARCH FUNCTION

function searchFood(){


let text =
document.getElementById("searchBox").value.toLowerCase();



let results =
document.getElementById("searchResult");


results.innerHTML="";



foods.forEach((food,index)=>{


if(food.name.toLowerCase().includes(text)){


results.innerHTML+=`

<div class="food-card"
onclick="showRecipe(${index})">

<h3>${food.name}</h3>

<p>${food.calories} kcal</p>

</div>

`;

}


});


}





// LOAD FOOD WHEN PAGE OPENS

window.onload=function(){

displayFoods();

};