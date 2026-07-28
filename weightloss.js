const foods=[

{

name:"Broccoli",

calories:"34 kcal /100g",

protein:"2.8g",

carbs:"7g",

fat:"0.4g",

fiber:"2.6g",

vitamins:"Vitamin C, Vitamin K",

recipe:"Steam broccoli and season with black pepper and lemon.",

alternative:"Cauliflower"

},

{

name:"Chicken Breast",

calories:"165 kcal /100g",

protein:"31g",

carbs:"0g",

fat:"3.6g",

fiber:"0g",

vitamins:"Vitamin B6",

recipe:"Grill with herbs and vegetables.",

alternative:"Fish"

},

{

name:"Apple",

calories:"52 kcal /100g",

protein:"0.3g",

carbs:"14g",

fat:"0.2g",

fiber:"2.4g",

vitamins:"Vitamin C",

recipe:"Eat fresh or add to salad.",

alternative:"Pear"

},

{

name:"Greek Yogurt",

calories:"59 kcal /100g",

protein:"10g",

carbs:"3.6g",

fat:"0.4g",

fiber:"0g",

vitamins:"Calcium",

recipe:"Serve with berries.",

alternative:"Low-fat yogurt"

},

{

name:"Cucumber",

calories:"15 kcal /100g",

protein:"0.7g",

carbs:"3.6g",

fat:"0.1g",

fiber:"0.5g",

vitamins:"Vitamin K",

recipe:"Slice into salads.",

alternative:"Lettuce"

}

];

let html="";

foods.forEach(food=>{

html+=`

<div class="foodCard">

<h2>${food.name}</h2>

<p><b>Calories:</b> ${food.calories}</p>

<p><b>Protein:</b> ${food.protein}</p>

<p><b>Carbs:</b> ${food.carbs}</p>

<p><b>Fat:</b> ${food.fat}</p>

<p><b>Fiber:</b> ${food.fiber}</p>

<p><b>Vitamins:</b> ${food.vitamins}</p>

<p><b>Recipe:</b> ${food.recipe}</p>

<p><b>Alternative:</b> ${food.alternative}</p>

</div>

`;

});

document.getElementById("lossFoods").innerHTML=html;