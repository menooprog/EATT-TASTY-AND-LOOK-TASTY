function searchFood(){


let input=document
.getElementById("searchBox")
.value
.toLowerCase();



let result=document
.getElementById("result");



let food = DATABASE.gainFoods.find(item =>
item.name.toLowerCase()
.includes(input)
);



if(food){


result.innerHTML=`

<div class="foodCard">

<h2>${food.name}</h2>

<p>Calories: ${food.calories} kcal</p>

<p>Protein: ${food.protein} g</p>

<p>Carbs: ${food.carbs} g</p>

<p>Fat: ${food.fat} g</p>

<p>Fiber: ${food.fiber} g</p>

<p>Vitamins: ${food.vitamins}</p>

<p>Recipe: ${food.recipe}</p>

<p>Alternative: ${food.alternative}</p>


</div>


`;

}

else{


result.innerHTML=
"<h3>Food not found</h3>";

}



}