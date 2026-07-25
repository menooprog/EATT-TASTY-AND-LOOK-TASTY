

// Recipe Database

const recipes = {

"banana shake":{
category:"Weight Gain",
name:"Banana Shake",
calories:"350 kcal",
protein:"12 g",
carbs:"55 g",
fat:"10 g",
fiber:"5 g",
vitamins:"Vitamin B6",
ingredients:["2 Bananas","250ml Milk","1 tbsp Peanut Butter"],
recipe:"Blend all ingredients until smooth.",
alternative:"Use almond butter."
},

"protein shake":{
category:"Weight Gain",
name:"Protein Shake",
calories:"420 kcal",
protein:"30 g",
carbs:"35 g",
fat:"12 g",
fiber:"3 g",
vitamins:"Vitamin D",
ingredients:["Milk","Protein Powder","Banana"],
recipe:"Blend everything together.",
alternative:"Use Greek yogurt."
},

"mango shake":{
category:"Weight Gain",
name:"Mango Shake",
calories:"390 kcal",
protein:"10 g",
carbs:"60 g",
fat:"11 g",
fiber:"3 g",
vitamins:"A, C",
ingredients:["Mango","Milk","Honey"],
recipe:"Blend until creamy.",
alternative:"Use yogurt."
},

"dry fruit shake":{
category:"Weight Gain",
name:"Dry Fruit Shake",
calories:"520 kcal",
protein:"18 g",
carbs:"48 g",
fat:"28 g",
fiber:"6 g",
vitamins:"Vitamin E",
ingredients:["Dates","Almonds","Milk"],
recipe:"Blend everything together.",
alternative:"Use cashews."
},

"oreo milkshake":{
category:"Weight Gain",
name:"Oreo Milkshake",
calories:"520 kcal",
protein:"11 g",
carbs:"70 g",
fat:"20 g",
fiber:"2 g",
vitamins:"Calcium",
ingredients:["Oreos","Milk","Ice Cream"],
recipe:"Blend until smooth.",
alternative:"Chocolate biscuits."
},

"chocolate milkshake":{
category:"Weight Gain",
name:"Chocolate Milkshake",
calories:"480 kcal",
protein:"12 g",
carbs:"58 g",
fat:"18 g",
fiber:"2 g",
vitamins:"Calcium",
ingredients:["Milk","Chocolate Syrup"],
recipe:"Blend with ice.",
alternative:"Cocoa powder."
},

"banana oats shake":{
category:"Weight Gain",
name:"Banana Oats Shake",
calories:"470 kcal",
protein:"16 g",
carbs:"60 g",
fat:"15 g",
fiber:"7 g",
vitamins:"B6",
ingredients:["Banana","Oats","Milk"],
recipe:"Blend together.",
alternative:"Add honey."
},

"peanut butter toast":{
category:"Weight Gain",
name:"Peanut Butter Toast",
calories:"340 kcal",
protein:"13 g",
carbs:"30 g",
fat:"18 g",
fiber:"5 g",
vitamins:"Vitamin E",
ingredients:["Bread","Peanut Butter"],
recipe:"Spread peanut butter on toasted bread.",
alternative:"Almond butter."
},

"egg sandwich":{
category:"Weight Gain",
name:"Egg Sandwich",
calories:"320 kcal",
protein:"18 g",
carbs:"28 g",
fat:"14 g",
fiber:"3 g",
vitamins:"A,D,B12",
ingredients:["Bread","Eggs","Tomato"],
recipe:"Make a sandwich using boiled eggs.",
alternative:"Add cheese."
},

"cheese omelette":{
category:"Weight Gain",
name:"Cheese Omelette",
calories:"340 kcal",
protein:"22 g",
carbs:"4 g",
fat:"26 g",
fiber:"0 g",
vitamins:"A,D",
ingredients:["Eggs","Cheese"],
recipe:"Cook eggs with cheese.",
alternative:"Mozzarella."
},

"french toast":{
category:"Weight Gain",
name:"French Toast",
calories:"390 kcal",
protein:"14 g",
carbs:"42 g",
fat:"17 g",
fiber:"3 g",
vitamins:"B12",
ingredients:["Bread","Egg","Milk"],
recipe:"Dip bread in egg mixture and cook.",
alternative:"Whole wheat bread."
},

"fried rice":{
category:"Weight Gain",
name:"Fried Rice",
calories:"510 kcal",
protein:"18 g",
carbs:"70 g",
fat:"16 g",
fiber:"3 g",
vitamins:"B",
ingredients:["Rice","Egg","Vegetables"],
recipe:"Stir fry cooked rice.",
alternative:"Chicken fried rice."
},

"chicken rice":{
category:"Weight Gain",
name:"Chicken Rice",
calories:"550 kcal",
protein:"35 g",
carbs:"70 g",
fat:"15 g",
fiber:"4 g",
vitamins:"B6",
ingredients:["Rice","Chicken","Vegetables"],
recipe:"Cook grilled chicken with rice.",
alternative:"Brown rice."
},

"beef pulao":{
category:"Weight Gain",
name:"Beef Pulao",
calories:"610 kcal",
protein:"28 g",
carbs:"62 g",
fat:"26 g",
fiber:"3 g",
vitamins:"Iron",
ingredients:["Rice","Beef","Spices"],
recipe:"Cook beef with rice.",
alternative:"Chicken pulao."
},

"chicken pulao":{
category:"Weight Gain",
name:"Chicken Pulao",
calories:"540 kcal",
protein:"30 g",
carbs:"60 g",
fat:"18 g",
fiber:"3 g",
vitamins:"B6",
ingredients:["Rice","Chicken"],
recipe:"Cook chicken with rice.",
alternative:"Brown rice."
},

"white sauce pasta":{
category:"Weight Gain",
name:"White Sauce Pasta",
calories:"540 kcal",
protein:"18 g",
carbs:"62 g",
fat:"24 g",
fiber:"4 g",
vitamins:"Calcium",
ingredients:["Pasta","Milk","Cheese"],
recipe:"Prepare white sauce and mix with pasta.",
alternative:"Whole wheat pasta."
},

"alfredo pasta":{
category:"Weight Gain",
name:"Alfredo Pasta",
calories:"610 kcal",
protein:"22 g",
carbs:"60 g",
fat:"30 g",
fiber:"4 g",
vitamins:"Calcium",
ingredients:["Pasta","Cream","Chicken"],
recipe:"Cook pasta in Alfredo sauce.",
alternative:"Mushroom Alfredo."
},

"mac and cheese":{
category:"Weight Gain",
name:"Mac and Cheese",
calories:"520 kcal",
protein:"17 g",
carbs:"56 g",
fat:"23 g",
fiber:"2 g",
vitamins:"Calcium",
ingredients:["Macaroni","Cheese"],
recipe:"Cook macaroni with cheese sauce.",
alternative:"Whole wheat macaroni."
},

"cheese burger":{
category:"Weight Gain",
name:"Cheese Burger",
calories:"680 kcal",
protein:"34 g",
carbs:"48 g",
fat:"39 g",
fiber:"3 g",
vitamins:"Iron",
ingredients:["Burger Bun","Cheese","Beef Patty"],
recipe:"Assemble and grill.",
alternative:"Chicken burger."
},

"chicken burger":{
category:"Weight Gain",
name:"Chicken Burger",
calories:"560 kcal",
protein:"30 g",
carbs:"45 g",
fat:"24 g",
fiber:"3 g",
vitamins:"B6",
ingredients:["Burger Bun","Chicken Patty"],
recipe:"Grill chicken patty and assemble.",
alternative:"Turkey burger."
},

"vegetable omelette":{
category:"Weight Loss",
name:"Vegetable Omelette",
calories:"210 kcal",
protein:"15 g",
carbs:"5 g",
fat:"14 g",
fiber:"2 g",
vitamins:"A, D",
ingredients:["Eggs","Spinach","Tomato","Onion"],
recipe:"Cook beaten eggs with chopped vegetables.",
alternative:"Add mushrooms."
},

"boiled eggs":{
category:"Weight Loss",
name:"Boiled Eggs",
calories:"155 kcal",
protein:"13 g",
carbs:"1 g",
fat:"11 g",
fiber:"0 g",
vitamins:"A, D, B12",
ingredients:["Eggs"],
recipe:"Boil eggs for 8-10 minutes.",
alternative:"Poached eggs."
},

"grilled chicken":{
category:"Weight Loss",
name:"Grilled Chicken",
calories:"220 kcal",
protein:"40 g",
carbs:"0 g",
fat:"5 g",
fiber:"0 g",
vitamins:"B6",
ingredients:["Chicken Breast","Black Pepper","Olive Oil"],
recipe:"Season and grill chicken.",
alternative:"Turkey breast."
},

"grilled fish":{
category:"Weight Loss",
name:"Grilled Fish",
calories:"220 kcal",
protein:"30 g",
carbs:"0 g",
fat:"9 g",
fiber:"0 g",
vitamins:"Omega-3, D",
ingredients:["Fish","Lemon","Black Pepper"],
recipe:"Grill for 10 minutes.",
alternative:"Salmon or tuna."
},

"brown rice":{
category:"Weight Loss",
name:"Brown Rice",
calories:"216 kcal",
protein:"5 g",
carbs:"45 g",
fat:"2 g",
fiber:"3.5 g",
vitamins:"B Vitamins",
ingredients:["Brown Rice"],
recipe:"Boil until soft.",
alternative:"Quinoa."
},

"quinoa bowl":{
category:"Weight Loss",
name:"Quinoa Bowl",
calories:"270 kcal",
protein:"11 g",
carbs:"42 g",
fat:"6 g",
fiber:"5 g",
vitamins:"B Complex",
ingredients:["Quinoa","Vegetables"],
recipe:"Cook quinoa and mix with vegetables.",
alternative:"Brown rice."
},

"vegetable soup":{
category:"Weight Loss",
name:"Vegetable Soup",
calories:"110 kcal",
protein:"4 g",
carbs:"18 g",
fat:"2 g",
fiber:"5 g",
vitamins:"A, C",
ingredients:["Carrot","Broccoli","Beans","Onion"],
recipe:"Boil vegetables and season lightly.",
alternative:"Add lentils."
},

"lentil soup":{
category:"Weight Loss",
name:"Lentil Soup",
calories:"180 kcal",
protein:"12 g",
carbs:"28 g",
fat:"2 g",
fiber:"9 g",
vitamins:"Iron, Folate",
ingredients:["Lentils","Garlic","Onion"],
recipe:"Cook lentils until soft.",
alternative:"Use chickpeas."
},

"tomato soup":{
category:"Weight Loss",
name:"Tomato Soup",
calories:"90 kcal",
protein:"3 g",
carbs:"16 g",
fat:"2 g",
fiber:"3 g",
vitamins:"Vitamin C",
ingredients:["Tomatoes","Garlic","Onion"],
recipe:"Cook and blend tomatoes.",
alternative:"Add basil."
},

"green salad":{
category:"Weight Loss",
name:"Green Salad",
calories:"120 kcal",
protein:"4 g",
carbs:"12 g",
fat:"5 g",
fiber:"5 g",
vitamins:"A, C, K",
ingredients:["Lettuce","Cucumber","Tomato"],
recipe:"Mix vegetables together.",
alternative:"Add spinach."
},

"chickpea salad":{
category:"Weight Loss",
name:"Chickpea Salad",
calories:"260 kcal",
protein:"12 g",
carbs:"35 g",
fat:"7 g",
fiber:"9 g",
vitamins:"Folate",
ingredients:["Chickpeas","Cucumber","Tomato"],
recipe:"Mix all ingredients.",
alternative:"Kidney beans."
},

"fruit salad":{
category:"Weight Loss",
name:"Fruit Salad",
calories:"180 kcal",
protein:"2 g",
carbs:"45 g",
fat:"1 g",
fiber:"6 g",
vitamins:"A, C",
ingredients:["Apple","Orange","Grapes","Kiwi"],
recipe:"Cut fruits into cubes and mix.",
alternative:"Add berries."
},

"apple oatmeal":{
category:"Weight Loss",
name:"Apple Oatmeal",
calories:"260 kcal",
protein:"9 g",
carbs:"46 g",
fat:"5 g",
fiber:"6 g",
vitamins:"Vitamin C",
ingredients:["Oats","Apple","Milk"],
recipe:"Cook oats and top with apple.",
alternative:"Use pear."
},

"overnight oats":{
category:"Weight Loss",
name:"Overnight Oats",
calories:"270 kcal",
protein:"10 g",
carbs:"42 g",
fat:"7 g",
fiber:"7 g",
vitamins:"B Vitamins",
ingredients:["Oats","Milk","Banana"],
recipe:"Mix ingredients and refrigerate overnight.",
alternative:"Add berries."
},

"chia pudding":{
category:"Weight Loss",
name:"Chia Pudding",
calories:"190 kcal",
protein:"7 g",
carbs:"18 g",
fat:"9 g",
fiber:"10 g",
vitamins:"Omega-3",
ingredients:["Chia Seeds","Milk","Honey"],
recipe:"Soak chia seeds overnight.",
alternative:"Use almond milk."
},

"green tea":{
category:"Weight Loss",
name:"Green Tea",
calories:"2 kcal",
protein:"0 g",
carbs:"0 g",
fat:"0 g",
fiber:"0 g",
vitamins:"Antioxidants",
ingredients:["Green Tea Bag","Water"],
recipe:"Steep for 3 minutes.",
alternative:"Black tea."
},

"lemon water":{
category:"Weight Loss",
name:"Lemon Water",
calories:"8 kcal",
protein:"0 g",
carbs:"2 g",
fat:"0 g",
fiber:"0 g",
vitamins:"Vitamin C",
ingredients:["Lemon","Water"],
recipe:"Mix fresh lemon juice with water.",
alternative:"Add mint."
},

"detox water":{
category:"Weight Loss",
name:"Detox Water",
calories:"6 kcal",
protein:"0 g",
carbs:"1 g",
fat:"0 g",
fiber:"0 g",
vitamins:"Vitamin C",
ingredients:["Water","Lemon","Cucumber","Mint"],
recipe:"Leave ingredients in water for 2 hours.",
alternative:"Add orange slices."
},

"black coffee":{
category:"Weight Loss",
name:"Black Coffee",
calories:"5 kcal",
protein:"0 g",
carbs:"0 g",
fat:"0 g",
fiber:"0 g",
vitamins:"Antioxidants",
ingredients:["Coffee","Water"],
recipe:"Brew coffee without sugar.",
alternative:"Espresso."
},

"berry smoothie":{
category:"Weight Loss",
name:"Berry Smoothie",
calories:"170 kcal",
protein:"8 g",
carbs:"30 g",
fat:"2 g",
fiber:"6 g",
vitamins:"Vitamin C",
ingredients:["Mixed Berries","Greek Yogurt"],
recipe:"Blend until smooth.",
alternative:"Use strawberries."
},

// MORE RECIPES

"boiled potato":{
category:"Weight Gain",
name:"Boiled Potato",
calories:"220 kcal",
protein:"5 g",
carbs:"50 g",
fat:"0 g",
fiber:"4 g",
vitamins:"Vitamin C, B6",
ingredients:["Potatoes","Salt"],
recipe:"Boil potatoes and season lightly.",
alternative:"Sweet potato."
},

"stuffed potato":{
category:"Weight Gain",
name:"Stuffed Potato",
calories:"410 kcal",
protein:"16 g",
carbs:"52 g",
fat:"16 g",
fiber:"5 g",
vitamins:"Vitamin C",
ingredients:["Potato","Cheese","Chicken"],
recipe:"Bake potato and fill with chicken and cheese.",
alternative:"Use vegetables."
},

"potato cheese bake":{
category:"Weight Gain",
name:"Potato Cheese Bake",
calories:"480 kcal",
protein:"18 g",
carbs:"55 g",
fat:"22 g",
fiber:"5 g",
vitamins:"Calcium",
ingredients:["Potato","Cheese","Milk"],
recipe:"Bake potatoes with cheese sauce.",
alternative:"Use low-fat cheese."
},

"chicken biryani":{
category:"Weight Gain",
name:"Chicken Biryani",
calories:"650 kcal",
protein:"32 g",
carbs:"75 g",
fat:"25 g",
fiber:"4 g",
vitamins:"B Vitamins",
ingredients:["Rice","Chicken","Spices"],
recipe:"Cook rice with chicken and spices.",
alternative:"Use brown rice."
},

"vegetable rice":{
category:"Weight Loss",
name:"Vegetable Rice",
calories:"250 kcal",
protein:"6 g",
carbs:"45 g",
fat:"5 g",
fiber:"5 g",
vitamins:"A,C",
ingredients:["Rice","Carrots","Peas","Beans"],
recipe:"Cook rice with vegetables.",
alternative:"Use quinoa."
},

"egg fried rice":{
category:"Weight Gain",
name:"Egg Fried Rice",
calories:"520 kcal",
protein:"20 g",
carbs:"65 g",
fat:"18 g",
fiber:"3 g",
vitamins:"B12",
ingredients:["Rice","Eggs","Vegetables"],
recipe:"Stir fry rice with eggs.",
alternative:"Add chicken."
},

"scrambled eggs":{
category:"Weight Loss",
name:"Scrambled Eggs",
calories:"210 kcal",
protein:"15 g",
carbs:"2 g",
fat:"15 g",
fiber:"0 g",
vitamins:"A,D",
ingredients:["Eggs","Milk"],
recipe:"Cook beaten eggs slowly.",
alternative:"Add spinach."
},

"cheese sandwich":{
category:"Weight Gain",
name:"Cheese Sandwich",
calories:"410 kcal",
protein:"17 g",
carbs:"36 g",
fat:"21 g",
fiber:"3 g",
vitamins:"Calcium",
ingredients:["Bread","Cheese"],
recipe:"Toast bread with cheese filling.",
alternative:"Use mozzarella."
},

"chicken sandwich":{
category:"Weight Gain",
name:"Chicken Sandwich",
calories:"390 kcal",
protein:"28 g",
carbs:"34 g",
fat:"13 g",
fiber:"4 g",
vitamins:"B6",
ingredients:["Bread","Chicken","Vegetables"],
recipe:"Fill bread with grilled chicken.",
alternative:"Use turkey."
},

"vegetable sandwich":{
category:"Weight Loss",
name:"Vegetable Sandwich",
calories:"230 kcal",
protein:"8 g",
carbs:"35 g",
fat:"6 g",
fiber:"5 g",
vitamins:"A,C",
ingredients:["Whole Wheat Bread","Cucumber","Lettuce"],
recipe:"Add vegetables between bread slices.",
alternative:"Add hummus."
},

"chocolate oats":{
category:"Weight Gain",
name:"Chocolate Oats",
calories:"430 kcal",
protein:"15 g",
carbs:"54 g",
fat:"16 g",
fiber:"7 g",
vitamins:"Calcium",
ingredients:["Oats","Milk","Cocoa"],
recipe:"Cook oats with cocoa and milk.",
alternative:"Add dark chocolate."
},

"banana oats":{
category:"Weight Gain",
name:"Banana Oats",
calories:"380 kcal",
protein:"13 g",
carbs:"60 g",
fat:"10 g",
fiber:"8 g",
vitamins:"B6",
ingredients:["Oats","Banana","Milk"],
recipe:"Mix cooked oats with banana.",
alternative:"Add peanut butter."
},

"greek yogurt bowl":{
category:"Weight Loss",
name:"Greek Yogurt Bowl",
calories:"200 kcal",
protein:"18 g",
carbs:"20 g",
fat:"5 g",
fiber:"4 g",
vitamins:"Calcium",
ingredients:["Greek Yogurt","Fruits","Seeds"],
recipe:"Mix yogurt with toppings.",
alternative:"Use plain yogurt."
},

"avocado toast":{
category:"Weight Loss",
name:"Avocado Toast",
calories:"290 kcal",
protein:"8 g",
carbs:"28 g",
fat:"16 g",
fiber:"8 g",
vitamins:"E,K",
ingredients:["Whole Wheat Bread","Avocado"],
recipe:"Mash avocado on toast.",
alternative:"Add boiled egg."
},

"mango":{
category:"Weight Gain",
name:"Mango Fruit",
calories:"135 kcal",
protein:"1 g",
carbs:"35 g",
fat:"0 g",
fiber:"3 g",
vitamins:"Vitamin A,C",
ingredients:["Mango"],
recipe:"Eat fresh mango pieces.",
alternative:"Use peach."
},

"apple":{
category:"Weight Loss",
name:"Apple",
calories:"95 kcal",
protein:"0 g",
carbs:"25 g",
fat:"0 g",
fiber:"4 g",
vitamins:"Vitamin C",
ingredients:["Apple"],
recipe:"Eat fresh.",
alternative:"Pear."
},

"watermelon juice":{
category:"Weight Loss",
name:"Watermelon Juice",
calories:"85 kcal",
protein:"1 g",
carbs:"21 g",
fat:"0 g",
fiber:"1 g",
vitamins:"A,C",
ingredients:["Watermelon"],
recipe:"Blend chilled watermelon.",
alternative:"Add mint."
},

"mango lassi":{
category:"Weight Gain",
name:"Mango Lassi",
calories:"320 kcal",
protein:"10 g",
carbs:"45 g",
fat:"10 g",
fiber:"2 g",
vitamins:"A,C",
ingredients:["Mango","Yogurt","Milk"],
recipe:"Blend all ingredients.",
alternative:"Banana lassi."
},

"almond shake":{
category:"Weight Gain",
name:"Almond Shake",
calories:"420 kcal",
protein:"15 g",
carbs:"38 g",
fat:"22 g",
fiber:"5 g",
vitamins:"Vitamin E",
ingredients:["Almonds","Milk","Honey"],
recipe:"Blend almonds with milk.",
alternative:"Cashew shake."
},

"cucumber mint water":{
category:"Weight Loss",
name:"Cucumber Mint Water",
calories:"5 kcal",
protein:"0 g",
carbs:"1 g",
fat:"0 g",
fiber:"0 g",
vitamins:"Vitamin K",
ingredients:["Cucumber","Mint","Water"],
recipe:"Infuse water with ingredients.",
alternative:"Lemon water."
},

// MORE RECIPES PART 3D

"broccoli salad":{
category:"Weight Loss",
name:"Broccoli Salad",
calories:"140 kcal",
protein:"6 g",
carbs:"18 g",
fat:"5 g",
fiber:"6 g",
vitamins:"A,C,K",
ingredients:["Broccoli","Carrot","Cucumber"],
recipe:"Mix fresh vegetables with light yogurt dressing.",
alternative:"Use cauliflower."
},

"spinach smoothie":{
category:"Weight Loss",
name:"Spinach Smoothie",
calories:"160 kcal",
protein:"6 g",
carbs:"28 g",
fat:"3 g",
fiber:"5 g",
vitamins:"A,C,K",
ingredients:["Spinach","Banana","Milk"],
recipe:"Blend all ingredients together.",
alternative:"Use almond milk."
},

"carrot juice":{
category:"Weight Loss",
name:"Carrot Juice",
calories:"95 kcal",
protein:"2 g",
carbs:"22 g",
fat:"0 g",
fiber:"2 g",
vitamins:"Vitamin A",
ingredients:["Carrots","Water"],
recipe:"Blend fresh carrots and strain.",
alternative:"Add apple."
},

"orange juice":{
category:"Weight Loss",
name:"Fresh Orange Juice",
calories:"110 kcal",
protein:"2 g",
carbs:"26 g",
fat:"0 g",
fiber:"1 g",
vitamins:"Vitamin C",
ingredients:["Orange"],
recipe:"Extract fresh orange juice.",
alternative:"Sweet lime."
},

"dates shake":{
category:"Weight Gain",
name:"Dates Shake",
calories:"410 kcal",
protein:"12 g",
carbs:"65 g",
fat:"12 g",
fiber:"5 g",
vitamins:"Potassium",
ingredients:["Dates","Milk","Almonds"],
recipe:"Blend dates with milk.",
alternative:"Add banana."
},

"peanut butter smoothie":{
category:"Weight Gain",
name:"Peanut Butter Smoothie",
calories:"500 kcal",
protein:"20 g",
carbs:"55 g",
fat:"25 g",
fiber:"6 g",
vitamins:"Vitamin E",
ingredients:["Peanut Butter","Milk","Banana"],
recipe:"Blend until creamy.",
alternative:"Use almond butter."
},

"fruit yogurt bowl":{
category:"Weight Gain",
name:"Fruit Yogurt Bowl",
calories:"350 kcal",
protein:"15 g",
carbs:"45 g",
fat:"12 g",
fiber:"5 g",
vitamins:"A,C,Calcium",
ingredients:["Yogurt","Banana","Fruits","Nuts"],
recipe:"Mix yogurt with fruits and nuts.",
alternative:"Use Greek yogurt."
},

"chicken tikka":{
category:"Weight Gain",
name:"Chicken Tikka",
calories:"360 kcal",
protein:"42 g",
carbs:"4 g",
fat:"18 g",
fiber:"1 g",
vitamins:"B6,B12",
ingredients:["Chicken","Yogurt","Spices"],
recipe:"Marinate chicken and grill.",
alternative:"Chicken breast."
},

"chicken karahi":{
category:"Weight Gain",
name:"Chicken Karahi",
calories:"470 kcal",
protein:"35 g",
carbs:"10 g",
fat:"30 g",
fiber:"2 g",
vitamins:"A,C",
ingredients:["Chicken","Tomatoes","Spices"],
recipe:"Cook chicken with tomatoes and spices.",
alternative:"Use less oil."
},

"chicken qorma":{
category:"Weight Gain",
name:"Chicken Qorma",
calories:"520 kcal",
protein:"32 g",
carbs:"12 g",
fat:"38 g",
fiber:"2 g",
vitamins:"B Vitamins",
ingredients:["Chicken","Yogurt","Spices"],
recipe:"Cook chicken in creamy gravy.",
alternative:"Low-fat yogurt."
},

"keema":{
category:"Weight Gain",
name:"Beef Keema",
calories:"390 kcal",
protein:"28 g",
carbs:"8 g",
fat:"26 g",
fiber:"2 g",
vitamins:"Iron",
ingredients:["Minced Beef","Peas","Spices"],
recipe:"Cook minced meat with spices.",
alternative:"Chicken keema."
},

"chicken soup":{
category:"Weight Loss",
name:"Chicken Soup",
calories:"150 kcal",
protein:"25 g",
carbs:"8 g",
fat:"3 g",
fiber:"2 g",
vitamins:"B6",
ingredients:["Chicken","Vegetables","Broth"],
recipe:"Cook chicken with vegetables.",
alternative:"Add lentils."
},

"cabbage soup":{
category:"Weight Loss",
name:"Cabbage Soup",
calories:"80 kcal",
protein:"2 g",
carbs:"15 g",
fat:"1 g",
fiber:"4 g",
vitamins:"Vitamin C",
ingredients:["Cabbage","Carrot","Onion"],
recipe:"Boil vegetables together.",
alternative:"Add beans."
},

"roasted chickpeas":{
category:"Weight Loss",
name:"Roasted Chickpeas",
calories:"180 kcal",
protein:"9 g",
carbs:"27 g",
fat:"4 g",
fiber:"8 g",
vitamins:"Iron",
ingredients:["Chickpeas","Spices"],
recipe:"Roast chickpeas until crispy.",
alternative:"Roasted peanuts."
},

"air popcorn":{
category:"Weight Loss",
name:"Air Popped Popcorn",
calories:"95 kcal",
protein:"3 g",
carbs:"19 g",
fat:"1 g",
fiber:"4 g",
vitamins:"B Vitamins",
ingredients:["Corn Kernels"],
recipe:"Air pop without butter.",
alternative:"Light seasoning."
},

"trail mix":{
category:"Weight Gain",
name:"Trail Mix",
calories:"560 kcal",
protein:"15 g",
carbs:"42 g",
fat:"36 g",
fiber:"8 g",
vitamins:"Vitamin E",
ingredients:["Almonds","Walnuts","Seeds","Dates"],
recipe:"Mix all ingredients.",
alternative:"Add dark chocolate."
},

"falooda":{
category:"Weight Gain",
name:"Falooda",
calories:"480 kcal",
protein:"9 g",
carbs:"68 g",
fat:"18 g",
fiber:"2 g",
vitamins:"Calcium",
ingredients:["Milk","Ice Cream","Vermicelli"],
recipe:"Mix ingredients and chill.",
alternative:"Rose milk."
},

"hot chocolate":{
category:"Weight Gain",
name:"Hot Chocolate",
calories:"280 kcal",
protein:"8 g",
carbs:"34 g",
fat:"12 g",
fiber:"2 g",
vitamins:"Calcium",
ingredients:["Milk","Cocoa"],
recipe:"Heat milk and add cocoa.",
alternative:"Dark chocolate."
},

// =========================
// ADVANCED RECIPE SEARCH
// =========================

function searchRecipe(){

let search = document
.getElementById("searchBox")
.value
.toLowerCase()
.trim();


let result = document.getElementById("result");


if(search === ""){
result.innerHTML =
"<p>Please enter a recipe name.</p>";
return;
}


let found = "";


for(let key in recipes){

let food = recipes[key];


// checks name, category, ingredients
let searchableText = (

food.name +
" " +
food.category +
" " +
food.ingredients.join(" ")

).toLowerCase();



if(searchableText.includes(search)){


found += `

<div class="recipe-card">

<h2>${food.name}</h2>

<p><b>Category:</b> ${food.category}</p>

<hr>

<p>🔥 Calories: ${food.calories}</p>

<p>💪 Protein: ${food.protein}</p>

<p>🍚 Carbohydrates: ${food.carbs}</p>

<p>🥑 Fat: ${food.fat}</p>

<p>🌾 Fiber: ${food.fiber}</p>

<p>💊 Vitamins: ${food.vitamins}</p>


<h3>🛒 Ingredients</h3>

<ul>

${food.ingredients
.map(item=>`<li>${item}</li>`)
.join("")}

</ul>


<h3>🍳 Recipe</h3>

<p>${food.recipe}</p>


<h3>✨ Alternative</h3>

<p>${food.alternative}</p>


</div>

`;

}

}



if(found === ""){

result.innerHTML =
`
<div class="recipe-card">

<h2>❌ Recipe Not Found</h2>

<p>
Try searching:
rice, egg, chicken, shake,
oats, potato, fruit, vegetable,
weight gain or weight loss
</p>

</div>
`;

}

else{

result.innerHTML = found;

}

}
// =========================
// 14 DAY WEIGHT GAIN PLAN
// =========================

const weightGainPlan = [

{
day:"Day 1",
calories:"2500 kcal",
breakfast:"Oats + Banana + Milk + Peanut Butter",
brunch:"Dry Fruit Shake",
lunch:"Chicken Rice + Yogurt",
snack:"Dates + Nuts",
dinner:"Chicken Curry + Chapati"
},

{
day:"Day 2",
calories:"2600 kcal",
breakfast:"Egg Omelette + Toast + Milk",
brunch:"Mango Shake",
lunch:"Chicken Biryani",
snack:"Peanut Butter Sandwich",
dinner:"Fish + Rice"
},

{
day:"Day 3",
calories:"2550 kcal",
breakfast:"Paratha + Eggs + Yogurt",
brunch:"Banana Oats Shake",
lunch:"Chicken Karahi + Rice",
snack:"Trail Mix",
dinner:"Keema + Chapati"
},

{
day:"Day 4",
calories:"2500 kcal",
breakfast:"French Toast + Milk",
brunch:"Almond Shake",
lunch:"White Sauce Pasta",
snack:"Fruit Yogurt Bowl",
dinner:"Chicken Tikka + Rice"
},

{
day:"Day 5",
calories:"2700 kcal",
breakfast:"Cheese Omelette + Bread",
brunch:"Chocolate Milkshake",
lunch:"Beef Pulao",
snack:"Dry Fruits",
dinner:"Qorma + Chapati"
},

{
day:"Day 6",
calories:"2600 kcal",
breakfast:"Banana Oats Bowl",
brunch:"Protein Shake",
lunch:"Chicken Burger",
snack:"Peanut Butter Toast",
dinner:"Pasta + Chicken"
},

{
day:"Day 7",
calories:"2500 kcal",
breakfast:"Egg Sandwich + Milk",
brunch:"Mango Lassi",
lunch:"Chicken Pulao",
snack:"Nuts",
dinner:"Chicken Curry"
},

{
day:"Day 8",
calories:"2600 kcal",
breakfast:"Chocolate Oats",
brunch:"Dates Shake",
lunch:"Fried Rice + Egg",
snack:"Cheese Sandwich",
dinner:"Chicken Karahi"
},

{
day:"Day 9",
calories:"2500 kcal",
breakfast:"Pancakes + Milk",
brunch:"Dry Fruit Shake",
lunch:"Chicken Shawarma",
snack:"Fruit Bowl",
dinner:"Rice + Curry"
},

{
day:"Day 10",
calories:"2700 kcal",
breakfast:"Paratha + Omelette",
brunch:"Peanut Butter Smoothie",
lunch:"Biryani",
snack:"Trail Mix",
dinner:"Beef Keema"
},

{
day:"Day 11",
calories:"2550 kcal",
breakfast:"Oats + Fruits",
brunch:"Hot Chocolate",
lunch:"Chicken Pasta",
snack:"Dates",
dinner:"Chicken Tikka"
},

{
day:"Day 12",
calories:"2650 kcal",
breakfast:"Cheese Toast + Eggs",
brunch:"Banana Shake",
lunch:"Chicken Rice",
snack:"Nuts",
dinner:"Qorma + Rice"
},

{
day:"Day 13",
calories:"2500 kcal",
breakfast:"French Toast",
brunch:"Mango Shake",
lunch:"Beef Pulao",
snack:"Dry Fruits",
dinner:"Chicken Curry"
},

{
day:"Day 14",
calories:"2700 kcal",
breakfast:"Eggs + Paratha",
brunch:"Protein Shake",
lunch:"Chicken Biryani",
snack:"Peanut Butter Toast",
dinner:"Pasta"
}

];


// =========================
// 14 DAY WEIGHT LOSS PLAN
// =========================

const weightLossPlan = [

{
day:"Day 1",
calories:"1600 kcal",
breakfast:"Oats + Green Tea",
brunch:"Apple + Yogurt",
lunch:"Grilled Chicken + Salad",
snack:"Roasted Chickpeas",
dinner:"Vegetable Soup"
},

{
day:"Day 2",
calories:"1500 kcal",
breakfast:"Boiled Eggs + Fruit",
brunch:"Green Smoothie",
lunch:"Brown Rice + Fish",
snack:"Nuts",
dinner:"Chicken Salad"
},

{
day:"Day 3",
calories:"1550 kcal",
breakfast:"Greek Yogurt + Oats",
brunch:"Lemon Water + Fruit",
lunch:"Chicken Wrap",
snack:"Popcorn",
dinner:"Vegetable Soup"
},

{
day:"Day 4",
calories:"1600 kcal",
breakfast:"Vegetable Omelette",
brunch:"Fruit Bowl",
lunch:"Quinoa Bowl",
snack:"Green Tea",
dinner:"Grilled Fish"
},

{
day:"Day 5",
calories:"1500 kcal",
breakfast:"Apple Oatmeal",
brunch:"Yogurt",
lunch:"Chicken Salad",
snack:"Roasted Chickpeas",
dinner:"Soup"
},

{
day:"Day 6",
calories:"1600 kcal",
breakfast:"Smoothie Bowl",
brunch:"Green Tea",
lunch:"Brown Rice + Chicken",
snack:"Fruit",
dinner:"Vegetable Salad"
},

{
day:"Day 7",
calories:"1550 kcal",
breakfast:"Egg Toast",
brunch:"Berry Smoothie",
lunch:"Fish + Vegetables",
snack:"Yogurt",
dinner:"Soup"
},

{
day:"Day 8",
calories:"1500 kcal",
breakfast:"Chia Pudding",
brunch:"Apple",
lunch:"Grilled Chicken",
snack:"Popcorn",
dinner:"Vegetable Stir Fry"
},

{
day:"Day 9",
calories:"1600 kcal",
breakfast:"Overnight Oats",
brunch:"Fruit Bowl",
lunch:"Tuna Sandwich",
snack:"Green Tea",
dinner:"Salad"
},

{
day:"Day 10",
calories:"1500 kcal",
breakfast:"Boiled Eggs",
brunch:"Smoothie",
lunch:"Quinoa Bowl",
snack:"Nuts",
dinner:"Soup"
},

{
day:"Day 11",
calories:"1550 kcal",
breakfast:"Greek Yogurt Bowl",
brunch:"Fruit",
lunch:"Chicken Wrap",
snack:"Roasted Chickpeas",
dinner:"Vegetables"
},

{
day:"Day 12",
calories:"1600 kcal",
breakfast:"Vegetable Omelette",
brunch:"Green Tea",
lunch:"Grilled Fish",
snack:"Fruit",
dinner:"Soup"
},

{
day:"Day 13",
calories:"1500 kcal",
breakfast:"Oats + Fruits",
brunch:"Yogurt",
lunch:"Chicken Salad",
snack:"Popcorn",
dinner:"Vegetables"
},

{
day:"Day 14",
calories:"1550 kcal",
breakfast:"Eggs + Toast",
brunch:"Berry Smoothie",
lunch:"Protein Bowl",
snack:"Green Tea",
dinner:"Soup"
}

];

// =============================
// PERSONAL DIET PLAN CALCULATOR
// =============================

function calculatePlan(){

let name = document.getElementById("name").value;
let age = Number(document.getElementById("age").value);
let height = Number(document.getElementById("height").value);
let weight = Number(document.getElementById("weight").value);

let goal = document.getElementById("goal").value;

let result = document.getElementById("planResult");


if(name==="" || age==="" || height==="" || weight===""){

result.innerHTML =
`
<div class="recipe-card">
<h2>⚠️ Missing Information</h2>
<p>Please fill all details first.</p>
</div>
`;

return;

}



let calories;


let plan;



if(goal==="gain"){

calories = Math.round(weight * 35);

plan = weightGainPlan;

}


else if(goal==="loss"){

calories = Math.round(weight * 25);

plan = weightLossPlan;

}


else{

result.innerHTML =
`
<div class="recipe-card">
<h2>Select Goal</h2>
<p>Please choose Weight Gain or Weight Loss.</p>
</div>
`;

return;

}




let html = `

<div class="recipe-card">

<h2>Hello ${name} ❤️</h2>

<p>Age: ${age} years</p>

<p>Height: ${height} cm</p>

<p>Current Weight: ${weight} kg</p>


<h3>
Your Goal:
${goal==="gain" ? "💪 Weight Gain" : "🥗 Weight Loss"}
</h3>


<h3>
Daily Calories Target:
🔥 ${calories} kcal
</h3>


<hr>

<h2>14 Day Diet Planner</h2>

`;



plan.forEach(day=>{


html += `

<div class="day-card">

<h3>${day.day}</h3>

<p>
🔥 Calories:
${day.calories}
</p>

<p>
🍳 Breakfast:
${day.breakfast}
</p>

<p>
🥤 Brunch:
${day.brunch}
</p>

<p>
🍛 Lunch:
${day.lunch}
</p>

<p>
🍎 Snack:
${day.snack}
</p>

<p>
🌙 Dinner:
${day.dinner}
</p>


</div>

`;

});



html += `

</div>

`;



result.innerHTML = html;


}
// ============================
// 3 MONTH PROGRESS TRACKER
// ============================


// ============================
// 3 MONTH PROGRESS TRACKER
// WITH LOCAL STORAGE
// ============================


function saveProgress(){


let name =
document.getElementById("historyName").value;


let start =
Number(document.getElementById("startWeight").value);


let current =
Number(document.getElementById("currentWeight").value);


let goal =
document.getElementById("historyGoal").value;



let result =
document.getElementById("historyResult");



if(name==="" || start===0 || current===0 || goal===""){


result.innerHTML=

`
<div class="recipe-card">

<h3>
⚠️ Please fill all details
</h3>

</div>
`;

return;

}



let difference =
current-start;


let progressData = {


name:name,

startWeight:start,

currentWeight:current,

goal:goal,

progress:difference,

date:new Date().toLocaleDateString()


};



// Save data

localStorage.setItem(
"eatTastyProgress",
JSON.stringify(progressData)
);



let message;



if(goal==="gain"){


if(difference>0){

message =
`You gained ${difference.toFixed(1)} kg 🎉
Keep following your calorie surplus plan.`;

}

else{

message =
`Increase protein, healthy fats, milk, nuts and shakes.`;

}


}



else{


if(difference<0){

message =
`You lost ${Math.abs(difference).toFixed(1)} kg 🌿
Keep maintaining your healthy routine.`;

}

else{

message =
`Focus on balanced meals and regular activity.`;

}


}




result.innerHTML=

`

<div class="recipe-card">


<h2>
Hello ${name} 🌙
</h2>


<p>
Starting Weight:
${start} kg
</p>


<p>
Current Weight:
${current} kg
</p>


<p>
Goal:
${goal==="gain" ? "💪 Weight Gain" : "🥗 Weight Loss"}
</p>


<p>
Progress:
${difference.toFixed(1)} kg
</p>


<p>
Saved Date:
${progressData.date}
</p>


<h3>
${message}
</h3>


</div>

`;



}





// ============================
// LOAD SAVED HISTORY
// ============================


window.onload=function(){


let saved =
localStorage.getItem("eatTastyProgress");



if(saved){


let data =
JSON.parse(saved);


console.log(
"Previous Progress:",
data
);


}

};
// =============================
// CALORIE CALCULATOR
// =============================


const nutritionDatabase = {


banana:{
calories:89,
protein:1.1,
carbs:23,
fat:0.3
},


egg:{
calories:155,
protein:13,
carbs:1.1,
fat:11
},


milk:{
calories:60,
protein:3.2,
carbs:5,
fat:3.3
},


rice:{
calories:130,
protein:2.7,
carbs:28,
fat:0.3
},


chicken:{
calories:165,
protein:31,
carbs:0,
fat:3.6
},


oats:{
calories:389,
protein:16.9,
carbs:66,
fat:6.9
},


apple:{
calories:52,
protein:0.3,
carbs:14,
fat:0.2
},


potato:{
calories:77,
protein:2,
carbs:17,
fat:0.1
},


bread:{
calories:265,
protein:9,
carbs:49,
fat:3.2
},


peanutbutter:{
calories:588,
protein:25,
carbs:20,
fat:50
},


almonds:{
calories:579,
protein:21,
carbs:22,
fat:50
}


};

function calculateCalories(){

let food = document
.getElementById("foodName")
.value
.toLowerCase()
.trim()
.replace(/\s+/g,"");


let amount = Number(
document.getElementById("foodAmount").value
);


let result = document.getElementById("calorieResult");


if(!food || !amount){

result.innerHTML = `
<div class="recipe-card">
<h3>⚠️ Enter food name and amount</h3>
</div>
`;

return;

}



if(!nutritionDatabase[food]){

result.innerHTML = `
<div class="recipe-card">

<h3>❌ Food not found</h3>

<p>
Try:
banana, egg, milk, rice, chicken, oats, apple, potato, bread, peanut butter, almonds
</p>

</div>
`;

return;

}



let item = nutritionDatabase[food];


let multiplier = amount / 100;


let calories = 
(item.calories * multiplier).toFixed(1);


let protein = 
(item.protein * multiplier).toFixed(1);


let carbs = 
(item.carbs * multiplier).toFixed(1);


let fat = 
(item.fat * multiplier).toFixed(1);



result.innerHTML = `

<div class="recipe-card">

<h2>${food}</h2>

<p>⚖️ Amount: ${amount} g/ml</p>

<p>🔥 Calories: ${calories} kcal</p>

<p>💪 Protein: ${protein} g</p>

<p>🍚 Carbohydrates: ${carbs} g</p>

<p>🥑 Fat: ${fat} g</p>

</div>

`;

}
// ===============================
// SHOW 14 DAY PLANNERS AUTOMATICALLY
// ===============================


function showDietPlans(){


let gainBox =
document.getElementById("gainPlanner");


let lossBox =
document.getElementById("lossPlanner");



if(gainBox){


gainBox.innerHTML = weightGainPlan.map(day=>`

<div class="day-card">

<h3>${day.day}</h3>

<p>🔥 Calories: ${day.calories}</p>

<p>🍳 Breakfast: ${day.breakfast}</p>

<p>🥤 Brunch: ${day.brunch}</p>

<p>🍛 Lunch: ${day.lunch}</p>

<p>🍎 Snack: ${day.snack}</p>

<p>🌙 Dinner: ${day.dinner}</p>

</div>

`).join("");

}



if(lossBox){


lossBox.innerHTML = weightLossPlan.map(day=>`

<div class="day-card">

<h3>${day.day}</h3>

<p>🔥 Calories: ${day.calories}</p>

<p>🍳 Breakfast: ${day.breakfast}</p>

<p>🥤 Brunch: ${day.brunch}</p>

<p>🍛 Lunch: ${day.lunch}</p>

<p>🍎 Snack: ${day.snack}</p>

<p>🌙 Dinner: ${day.dinner}</p>

</div>

`).join("");

}


}



window.addEventListener("load", showDietPlans);
