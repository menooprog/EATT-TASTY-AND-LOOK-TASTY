const container = document.getElementById("foods");

DATABASE.gainFoods.forEach(food => {
  container.innerHTML += `
    <div class="foodCard">
      <h2>${food.name}</h2>
      <p><strong>Serving:</strong> ${food.serving}</p>
      <p><strong>Calories:</strong> ${food.calories} kcal</p>
      <p><strong>Protein:</strong> ${food.protein} g</p>
      <p><strong>Carbs:</strong> ${food.carbs} g</p>
      <p><strong>Fat:</strong> ${food.fat} g</p>
      <p><strong>Fiber:</strong> ${food.fiber} g</p>
      <p><strong>Vitamins:</strong> ${food.vitamins}</p>
      <p><strong>Recipe:</strong> ${food.recipe}</p>
      <p><strong>Alternative:</strong> ${food.alternative}</p>
    </div>
  `;
});