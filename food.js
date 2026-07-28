const foods=[

{

name:"Oats",

calories:"389 kcal /100g",

protein:"17g",

carbs:"66g",

fat:"7g",

fiber:"10g",

vitamins:"Vitamin B1, Magnesium",

recipe:"Cook oats in milk. Add honey, banana and almonds.",

alternative:"Cornflakes or Muesli"

},

{

name:"Banana",

calories:"89 kcal /100g",

protein:"1.1g",

carbs:"23g",

fat:"0.3g",

fiber:"2.6g",

vitamins:"Vitamin B6, Vitamin C",

recipe:"Eat fresh or blend into a milkshake.",

alternative:"Mango"

},

{

name:"Eggs",

calories:"155 kcal /100g",

protein:"13g",

carbs:"1g",

fat:"11g",

fiber:"0g",

vitamins:"Vitamin D, B12",

recipe:"Boiled, scrambled or omelette.",

alternative:"Chicken Breast"

},

{

name:"Rice",

calories:"130 kcal /100g cooked",

protein:"2.7g",

carbs:"28g",

fat:"0.3g",

fiber:"0.4g",

vitamins:"B Vitamins",

recipe:"Serve with chicken and vegetables.",

alternative:"Potatoes"

},

{

name:"Peanut Butter",

calories:"588 kcal /100g",

protein:"25g",

carbs:"20g",

fat:"50g",

fiber:"6g",

vitamins:"Vitamin E",

recipe:"Spread on whole wheat bread.",

alternative:"Almond Butter"

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

document.getElementById("foods").innerHTML=html;