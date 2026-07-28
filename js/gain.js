const container = document.getElementById("foods");

let html = "";

DATABASE.gainFoods.forEach(food => {

html += `
<div class="foodCard">

<h2>${food.name}</h2>

<p><b>Serving:</b> ${food.serving}</p>

<p><b>Calories:</b> ${food.calories} kcal</p>

<p><b>Protein:</b> ${food.protein} g</p>

<p><b>Carbs:</b> ${food.carbs} g</p>

<p><b>Fat:</b> ${food.fat} g</p>

<p><b>Fiber:</b> ${food.fiber} g</p>

<p><b>Vitamins:</b> ${food.vitamins}</p>

<p><b>Recipe:</b> ${food.recipe}</p>

<p><b>Alternative:</b> ${food.alternative}</p>

</div>
`;

});

container.innerHTML = html;