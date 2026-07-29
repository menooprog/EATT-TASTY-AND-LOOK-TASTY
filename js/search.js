function searchFood(){


let input = document
.getElementById("searchBox")
.value
.toLowerCase();



let result =
document.getElementById("result");



let food = ALL_FOODS.find(item =>

item.name
.toLowerCase()
.includes(input)

);



if(food){


result.innerHTML = `

<div class="foodCard">

<h2>${food.name}</h2>

<p><b>Serving:</b> ${food.serving}</p>

<p><b>Calories:</b> ${food.calories} kcal</p>

<p><b>Protein:</b> ${food.protein} g</p>

<p><b>Carbohydrates:</b> ${food.carbs} g</p>

<p><b>Fat:</b> ${food.fat} g</p>

<p><b>Fiber:</b> ${food.fiber} g</p>

<p><b>Vitamins:</b> ${food.vitamins}</p>

<p><b>Recipe:</b> ${food.recipe}</p>

<p><b>Alternative:</b> ${food.alternative}</p>


</div>

`;

}

else{


result.innerHTML =

"<h3>Sorry, food not available yet.</h3>";

}


}