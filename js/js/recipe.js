const RECIPES = {

weightGainRecipes: [

{
id:1,
name:"Banana Peanut Butter Smoothie",
meal:"Breakfast",
ingredients:[
"Banana",
"Whole milk",
"Peanut butter",
"Oats",
"Honey"
],
recipe:"Blend banana, milk, peanut butter, oats and honey until smooth.",
serving:"1 large glass",
calories:650,
protein:25,
carbs:80,
fat:25,
fiber:8,
vitamins:"Vitamin B6, Calcium, Vitamin E",
alternative:"Use almond butter instead of peanut butter"
},


{
id:2,
name:"High Protein Oats Bowl",
meal:"Breakfast",
ingredients:[
"Oats",
"Milk",
"Almonds",
"Banana",
"Dates"
],
recipe:"Cook oats in milk and add fruits and nuts on top.",
serving:"1 bowl",
calories:550,
protein:20,
carbs:75,
fat:18,
fiber:10,
vitamins:"Iron, Magnesium, Vitamin B",
alternative:"Use walnuts instead of almonds"
},


{
id:3,
name:"Chicken Rice Bowl",
meal:"Lunch",
ingredients:[
"Rice",
"Chicken breast",
"Vegetables",
"Olive oil"
],
recipe:"Cook rice and serve with grilled chicken and vegetables.",
serving:"1 plate",
calories:700,
protein:45,
carbs:90,
fat:20,
fiber:6,
vitamins:"Vitamin B6, Iron",
alternative:"Use fish instead of chicken"
},


{
id:4,
name:"Egg Cheese Sandwich",
meal:"Breakfast",
ingredients:[
"Whole wheat bread",
"Eggs",
"Cheese",
"Butter"
],
recipe:"Make an omelette and place it inside bread with cheese.",
serving:"2 sandwiches",
calories:600,
protein:30,
carbs:55,
fat:30,
fiber:5,
vitamins:"Vitamin D, Calcium",
alternative:"Use avocado instead of cheese"
},


{
id:5,
name:"Chicken Pasta",
meal:"Lunch",
ingredients:[
"Pasta",
"Chicken",
"Cheese",
"Vegetables"
],
recipe:"Cook pasta with chicken and creamy vegetable sauce.",
serving:"1 bowl",
calories:750,
protein:45,
carbs:95,
fat:25,
fiber:7,
vitamins:"Vitamin A, Calcium",
alternative:"Use tofu instead of chicken"
},


{
id:6,
name:"Dry Fruit Milkshake",
meal:"Snack",
ingredients:[
"Milk",
"Dates",
"Almonds",
"Cashews"
],
recipe:"Blend milk with dates and dry fruits.",
serving:"1 glass",
calories:600,
protein:18,
carbs:70,
fat:28,
fiber:6,
vitamins:"Vitamin E, Calcium",
alternative:"Use peanuts instead of cashews"
},


{
id:7,
name:"Chicken Paratha",
meal:"Breakfast",
ingredients:[
"Whole wheat flour",
"Chicken",
"Egg",
"Oil"
],
recipe:"Fill paratha with cooked chicken and egg.",
serving:"1 large paratha",
calories:650,
protein:35,
carbs:70,
fat:28,
fiber:5,
vitamins:"Iron, Vitamin B12",
alternative:"Use potato filling"
},


{
id:8,
name:"Avocado Toast",
meal:"Breakfast",
ingredients:[
"Whole wheat bread",
"Avocado",
"Egg"
],
recipe:"Spread mashed avocado on toast and add egg.",
serving:"2 slices",
calories:500,
protein:22,
carbs:50,
fat:25,
fiber:9,
vitamins:"Vitamin E, Vitamin K",
alternative:"Use hummus instead of avocado"
},


{
id:9,
name:"Chocolate Oat Smoothie",
meal:"Snack",
ingredients:[
"Oats",
"Milk",
"Cocoa",
"Banana"
],
recipe:"Blend all ingredients until creamy.",
serving:"1 glass",
calories:580,
protein:22,
carbs:85,
fat:18,
fiber:9,
vitamins:"Magnesium, Calcium",
alternative:"Use dates instead of cocoa"
},
{
id:11,
name:"Chicken Cheese Wrap",
meal:"Snack",
ingredients:["Tortilla","Chicken","Cheese","Vegetables"],
recipe:"Fill tortilla with cooked chicken, cheese and vegetables, then grill.",
serving:"2 wraps",
calories:700,
protein:45,
carbs:65,
fat:30,
fiber:6,
vitamins:"Calcium, Vitamin B12",
alternative:"Use paneer instead of chicken"
},


{
id:12,
name:"Mango Milkshake",
meal:"Snack",
ingredients:["Mango","Milk","Honey","Cream"],
recipe:"Blend mango with milk, honey and cream.",
serving:"1 large glass",
calories:550,
protein:15,
carbs:75,
fat:22,
fiber:5,
vitamins:"Vitamin A, Vitamin C",
alternative:"Use banana instead of mango"
},


{
id:13,
name:"Chicken Alfredo Pasta",
meal:"Dinner",
ingredients:["Pasta","Chicken","Milk","Cheese"],
recipe:"Cook pasta with creamy chicken sauce.",
serving:"1 bowl",
calories:850,
protein:50,
carbs:100,
fat:32,
fiber:8,
vitamins:"Calcium, Vitamin B",
alternative:"Use mushrooms instead of chicken"
},


{
id:14,
name:"Peanut Butter Banana Toast",
meal:"Breakfast",
ingredients:["Bread","Peanut Butter","Banana"],
recipe:"Spread peanut butter on toast and add banana slices.",
serving:"2 slices",
calories:520,
protein:18,
carbs:65,
fat:24,
fiber:7,
vitamins:"Vitamin E, Potassium",
alternative:"Use almond butter"
},


{
id:15,
name:"Beef Rice Bowl",
meal:"Lunch",
ingredients:["Rice","Beef","Vegetables"],
recipe:"Serve cooked beef with rice and vegetables.",
serving:"1 plate",
calories:780,
protein:45,
carbs:90,
fat:28,
fiber:6,
vitamins:"Iron, Zinc",
alternative:"Use chicken instead of beef"
},


{
id:16,
name:"Chocolate Peanut Butter Oats",
meal:"Breakfast",
ingredients:["Oats","Milk","Cocoa","Peanut Butter"],
recipe:"Cook oats with milk and mix cocoa and peanut butter.",
serving:"1 bowl",
calories:650,
protein:28,
carbs:80,
fat:28,
fiber:10,
vitamins:"Magnesium, Vitamin E",
alternative:"Use almond butter"
},


{
id:17,
name:"Potato Egg Bowl",
meal:"Lunch",
ingredients:["Potatoes","Eggs","Vegetables"],
recipe:"Cook potatoes and top with scrambled eggs.",
serving:"1 bowl",
calories:600,
protein:25,
carbs:75,
fat:22,
fiber:8,
vitamins:"Vitamin C, Vitamin D",
alternative:"Use sweet potato"
},


{
id:18,
name:"Chicken Mayo Sandwich",
meal:"Snack",
ingredients:["Bread","Chicken","Mayonnaise","Vegetables"],
recipe:"Mix chicken with mayonnaise and place inside bread.",
serving:"2 sandwiches",
calories:650,
protein:40,
carbs:60,
fat:30,
fiber:5,
vitamins:"Vitamin B6",
alternative:"Use yogurt sauce instead of mayonnaise"
},


{
id:19,
name:"Dates Walnut Shake",
meal:"Snack",
ingredients:["Milk","Dates","Walnuts"],
recipe:"Blend all ingredients together.",
serving:"1 glass",
calories:620,
protein:20,
carbs:80,
fat:25,
fiber:7,
vitamins:"Iron, Magnesium",
alternative:"Use almonds instead of walnuts"
},


{
id:20,
name:"Creamy Chicken Soup",
meal:"Dinner",
ingredients:["Chicken","Milk","Vegetables"],
recipe:"Cook chicken with vegetables and creamy milk base.",
serving:"1 bowl",
calories:500,
protein:38,
carbs:45,
fat:20,
fiber:5,
vitamins:"Vitamin A, Calcium",
alternative:"Use tofu instead of chicken"
},


{
id:21,
name:"Paneer Rice",
meal:"Lunch",
ingredients:["Paneer","Rice","Vegetables"],
recipe:"Cook paneer with spices and serve with rice.",
serving:"1 plate",
calories:750,
protein:35,
carbs:90,
fat:28,
fiber:6,
vitamins:"Calcium, Vitamin B",
alternative:"Use chicken instead of paneer"
},


{
id:22,
name:"Nut Energy Balls",
meal:"Snack",
ingredients:["Dates","Nuts","Oats"],
recipe:"Blend ingredients and make small balls.",
serving:"4 pieces",
calories:550,
protein:15,
carbs:70,
fat:25,
fiber:10,
vitamins:"Vitamin E, Magnesium",
alternative:"Use seeds instead of nuts"
},


{
id:23,
name:"Chicken Burger Homemade",
meal:"Dinner",
ingredients:["Bread","Chicken Patty","Cheese","Vegetables"],
recipe:"Prepare chicken patty and assemble burger.",
serving:"1 burger",
calories:700,
protein:45,
carbs:70,
fat:30,
fiber:6,
vitamins:"Iron, Calcium",
alternative:"Use fish patty"
},


{
id:24,
name:"Sweet Potato Chicken Bowl",
meal:"Lunch",
ingredients:["Sweet Potato","Chicken","Vegetables"],
recipe:"Bake sweet potato and serve with grilled chicken.",
serving:"1 bowl",
calories:650,
protein:45,
carbs:75,
fat:18,
fiber:9,
vitamins:"Vitamin A, B6",
alternative:"Use normal potato"
},


{
id:25,
name:"Strawberry Protein Smoothie",
meal:"Breakfast",
ingredients:["Strawberries","Milk","Oats","Yogurt"],
recipe:"Blend all ingredients until smooth.",
serving:"1 glass",
calories:600,
protein:30,
carbs:70,
fat:20,
fiber:8,
vitamins:"Vitamin C, Calcium",
alternative:"Use berries or banana"
},

{
id:10,
name:"Chicken Biryani",
meal:"Lunch",
ingredients:[
"Rice",
"Chicken",
"Yogurt",
"Spices"
],
recipe:"Cook rice with chicken and spices.",
serving:"1 plate",
calories:800,
protein:40,
carbs:100,
fat:30,
fiber:5,
vitamins:"Iron, Vitamin B",
alternative:"Use vegetables instead of chicken"
},
{
id:26,
name:"Chicken Tikka Rice Bowl",
meal:"Lunch",
ingredients:["Rice","Chicken Tikka","Yogurt","Vegetables"],
recipe:"Serve grilled chicken tikka over cooked rice with yogurt.",
serving:"1 bowl",
calories:750,
protein:48,
carbs:90,
fat:25,
fiber:6,
vitamins:"Vitamin B6, Calcium",
alternative:"Use paneer tikka"
},


{
id:27,
name:"Honey Almond Oats",
meal:"Breakfast",
ingredients:["Oats","Milk","Almonds","Honey"],
recipe:"Cook oats with milk and add almonds and honey.",
serving:"1 bowl",
calories:580,
protein:22,
carbs:75,
fat:22,
fiber:9,
vitamins:"Vitamin E, Magnesium",
alternative:"Use walnuts"
},


{
id:28,
name:"Chicken Macaroni",
meal:"Lunch",
ingredients:["Macaroni","Chicken","Cheese","Vegetables"],
recipe:"Mix cooked macaroni with chicken and cheese sauce.",
serving:"1 plate",
calories:800,
protein:45,
carbs:95,
fat:30,
fiber:7,
vitamins:"Calcium, Vitamin B",
alternative:"Use tuna instead of chicken"
},


{
id:29,
name:"Chocolate Banana Shake",
meal:"Snack",
ingredients:["Banana","Milk","Cocoa","Peanut Butter"],
recipe:"Blend all ingredients until creamy.",
serving:"1 glass",
calories:700,
protein:28,
carbs:85,
fat:30,
fiber:8,
vitamins:"Potassium, Vitamin E",
alternative:"Use dates instead of cocoa"
},


{
id:30,
name:"Chicken Stuffed Paratha",
meal:"Breakfast",
ingredients:["Flour","Chicken","Egg","Oil"],
recipe:"Stuff cooked chicken inside dough and cook paratha.",
serving:"1 large paratha",
calories:700,
protein:40,
carbs:75,
fat:28,
fiber:6,
vitamins:"Iron, Vitamin B12",
alternative:"Use minced beef filling"
},


{
id:31,
name:"Tuna Cheese Sandwich",
meal:"Snack",
ingredients:["Bread","Tuna","Cheese","Vegetables"],
recipe:"Mix tuna with cheese and prepare sandwich.",
serving:"2 sandwiches",
calories:620,
protein:42,
carbs:60,
fat:25,
fiber:5,
vitamins:"Omega-3, Calcium",
alternative:"Use chicken instead of tuna"
},


{
id:32,
name:"Chicken Shawarma Wrap",
meal:"Lunch",
ingredients:["Wrap Bread","Chicken","Yogurt Sauce","Vegetables"],
recipe:"Fill wrap with chicken and vegetables.",
serving:"2 wraps",
calories:720,
protein:45,
carbs:80,
fat:26,
fiber:7,
vitamins:"Vitamin B6",
alternative:"Use grilled paneer"
},


{
id:33,
name:"Egg Potato Curry",
meal:"Dinner",
ingredients:["Eggs","Potatoes","Spices"],
recipe:"Cook potatoes with spices and add boiled eggs.",
serving:"1 bowl",
calories:600,
protein:28,
carbs:70,
fat:24,
fiber:8,
vitamins:"Vitamin D, Potassium",
alternative:"Use chicken pieces"
},


{
id:34,
name:"Cashew Date Smoothie",
meal:"Snack",
ingredients:["Cashews","Dates","Milk"],
recipe:"Blend cashews and dates with milk.",
serving:"1 glass",
calories:650,
protein:18,
carbs:85,
fat:28,
fiber:7,
vitamins:"Iron, Magnesium",
alternative:"Use almonds"
},


{
id:35,
name:"Creamy Chicken Rice",
meal:"Dinner",
ingredients:["Rice","Chicken","Cream","Vegetables"],
recipe:"Cook chicken with creamy sauce and serve with rice.",
serving:"1 plate",
calories:820,
protein:50,
carbs:100,
fat:32,
fiber:6,
vitamins:"Vitamin A, Calcium",
alternative:"Use coconut milk instead of cream"
},

{
id:36,
name:"Chicken Fajita Wrap",
meal:"Lunch",
ingredients:["Tortilla","Chicken","Bell Peppers","Cheese"],
recipe:"Cook chicken with peppers and wrap with cheese.",
serving:"2 wraps",
calories:720,
protein:45,
carbs:75,
fat:28,
fiber:6,
vitamins:"Vitamin C, Calcium",
alternative:"Use tofu instead of chicken"
},


{
id:37,
name:"Peanut Butter Oat Cookies",
meal:"Snack",
ingredients:["Oats","Peanut Butter","Egg","Honey"],
recipe:"Mix ingredients, shape cookies and bake.",
serving:"4 cookies",
calories:600,
protein:22,
carbs:70,
fat:28,
fiber:8,
vitamins:"Vitamin E, Magnesium",
alternative:"Use almond butter"
},


{
id:38,
name:"Chicken Fried Rice",
meal:"Dinner",
ingredients:["Rice","Chicken","Egg","Vegetables"],
recipe:"Stir fry rice with chicken, egg and vegetables.",
serving:"1 plate",
calories:780,
protein:45,
carbs:95,
fat:28,
fiber:7,
vitamins:"Vitamin B, Iron",
alternative:"Use shrimp instead of chicken"
},


{
id:39,
name:"Mango Oat Smoothie",
meal:"Breakfast",
ingredients:["Mango","Oats","Milk","Yogurt"],
recipe:"Blend all ingredients until creamy.",
serving:"1 glass",
calories:620,
protein:25,
carbs:85,
fat:20,
fiber:7,
vitamins:"Vitamin A, Calcium",
alternative:"Use banana instead of mango"
},


{
id:40,
name:"Beef Keema With Rice",
meal:"Lunch",
ingredients:["Minced Beef","Rice","Spices"],
recipe:"Cook minced beef with spices and serve with rice.",
serving:"1 plate",
calories:850,
protein:48,
carbs:100,
fat:35,
fiber:5,
vitamins:"Iron, Zinc",
alternative:"Use chicken mince"
},


{
id:41,
name:"Cheese Omelette",
meal:"Breakfast",
ingredients:["Eggs","Cheese","Vegetables"],
recipe:"Prepare omelette and add cheese inside.",
serving:"3 eggs",
calories:550,
protein:35,
carbs:10,
fat:40,
fiber:2,
vitamins:"Vitamin D, Calcium",
alternative:"Use paneer"
},


{
id:42,
name:"Chicken Cream Sandwich",
meal:"Snack",
ingredients:["Bread","Chicken","Cream Cheese","Vegetables"],
recipe:"Prepare sandwich using chicken and cream cheese.",
serving:"2 sandwiches",
calories:680,
protein:42,
carbs:65,
fat:30,
fiber:5,
vitamins:"Vitamin B12",
alternative:"Use yogurt spread"
},


{
id:43,
name:"Nutella Banana Toast",
meal:"Breakfast",
ingredients:["Bread","Banana","Chocolate Spread"],
recipe:"Spread chocolate on toast and add banana slices.",
serving:"2 slices",
calories:580,
protein:12,
carbs:80,
fat:25,
fiber:6,
vitamins:"Potassium, Vitamin E",
alternative:"Use peanut butter"
},


{
id:44,
name:"Chicken Coconut Curry",
meal:"Dinner",
ingredients:["Chicken","Coconut Milk","Spices"],
recipe:"Cook chicken in coconut curry sauce.",
serving:"1 bowl",
calories:750,
protein:45,
carbs:50,
fat:40,
fiber:5,
vitamins:"Vitamin B6",
alternative:"Use yogurt sauce"
},


{
id:45,
name:"Fruit And Nut Yogurt Bowl",
meal:"Snack",
ingredients:["Yogurt","Fruits","Nuts","Honey"],
recipe:"Mix yogurt with fruits and nuts.",
serving:"1 bowl",
calories:520,
protein:25,
carbs:60,
fat:22,
fiber:8,
vitamins:"Calcium, Vitamin C",
alternative:"Use seeds instead of nuts"
},


{
id:46,
name:"Chicken Potato Bake",
meal:"Dinner",
ingredients:["Chicken","Potatoes","Cheese"],
recipe:"Bake chicken and potatoes with cheese topping.",
serving:"1 dish",
calories:800,
protein:50,
carbs:85,
fat:32,
fiber:8,
vitamins:"Vitamin C, Calcium",
alternative:"Use sweet potato"
},


{
id:47,
name:"Almond Butter Smoothie",
meal:"Breakfast",
ingredients:["Milk","Almond Butter","Banana","Oats"],
recipe:"Blend ingredients together.",
serving:"1 glass",
calories:680,
protein:30,
carbs:80,
fat:32,
fiber:9,
vitamins:"Vitamin E, Magnesium",
alternative:"Use peanut butter"
},


{
id:48,
name:"Chicken Lasagna",
meal:"Dinner",
ingredients:["Pasta Sheets","Chicken","Cheese","Sauce"],
recipe:"Layer pasta with chicken sauce and cheese then bake.",
serving:"1 portion",
calories:850,
protein:50,
carbs:90,
fat:35,
fiber:7,
vitamins:"Calcium, Vitamin A",
alternative:"Use vegetables instead of chicken"
},


{
id:49,
name:"Dates Peanut Energy Bar",
meal:"Snack",
ingredients:["Dates","Peanuts","Oats"],
recipe:"Blend ingredients and shape into bars.",
serving:"2 bars",
calories:560,
protein:18,
carbs:75,
fat:22,
fiber:10,
vitamins:"Iron, Magnesium",
alternative:"Use almonds"
},


{
id:50,
name:"Chicken Vegetable Pasta",
meal:"Lunch",
ingredients:["Pasta","Chicken","Vegetables","Olive Oil"],
recipe:"Cook pasta with chicken and vegetables.",
serving:"1 bowl",
calories:760,
protein:45,
carbs:90,
fat:28,
fiber:8,
vitamins:"Vitamin A, Iron",
alternative:"Use tofu instead of chicken"
},
{
id:51,
name:"Chicken Egg Fried Rice",
meal:"Lunch",
ingredients:["Rice","Chicken","Eggs","Vegetables"],
recipe:"Stir fry cooked rice with chicken, eggs and vegetables.",
serving:"1 plate",
calories:790,
protein:48,
carbs:95,
fat:30,
fiber:7,
vitamins:"Vitamin B12, Iron",
alternative:"Use paneer instead of chicken"
},


{
id:52,
name:"Banana Walnut Shake",
meal:"Snack",
ingredients:["Banana","Milk","Walnuts","Honey"],
recipe:"Blend banana, milk, walnuts and honey.",
serving:"1 glass",
calories:630,
protein:20,
carbs:85,
fat:28,
fiber:7,
vitamins:"Potassium, Magnesium",
alternative:"Use almonds instead of walnuts"
},


{
id:53,
name:"Chicken Cheese Pasta Bake",
meal:"Dinner",
ingredients:["Pasta","Chicken","Cheese","Milk"],
recipe:"Mix pasta with chicken and cheese sauce then bake.",
serving:"1 dish",
calories:850,
protein:55,
carbs:100,
fat:35,
fiber:8,
vitamins:"Calcium, Vitamin A",
alternative:"Use mushrooms instead of chicken"
},


{
id:54,
name:"Honey Peanut Butter Toas,
meal:"Breakfast",
ingredients:["Bread","Peanut Butter","Honey"],
recipe:"Spread peanut butter and honey on toasted bread.",
serving:"2 slices",
calories:560,
protein:18,
carbs:70,
fat:25,
fiber:6,
vitamins:"Vitamin E",
alternative:"Use almond butter"
},


{
id:55,
name:"Chicken Lentil Bowl",
meal:"Lunch",
ingredients:["Chicken","Lentils","Rice","Vegetables"],
recipe:"Serve cooked chicken with lentils and rice.",
serving:"1 bowl",
calories:780,
protein:55,
carbs:90,
fat:22,
fiber:12,
vitamins:"Iron, Vitamin B",
alternative:"Use beans instead of lentils"
},


{
id:56,
name:"Chocolate Date Smoothie",
meal:"Snack",
ingredients:["Dates","Milk","Cocoa","Oats"],
recipe:"Blend all ingredients until smooth.",
serving:"1 glass",
calories:670,
protein:24,
carbs:95,
fat:22,
fiber:9,
vitamins:"Magnesium, Calcium",
alternative:"Use banana instead of dates"
},


{
id:57,
name:"Chicken Mayo Pasta",
meal:"Lunch",
ingredients:["Pasta","Chicken","Mayonnaise","Vegetables"],
recipe:"Mix cooked pasta with chicken and creamy sauce.",
serving:"1 bowl",
calories:820,
protein:45,
carbs:100,
fat:32,
fiber:7,
vitamins:"Vitamin B6",
alternative:"Use yogurt sauce"
},


{
id:58,
name:"Egg Avocado Sandwich",
meal:"Breakfast",
ingredients:["Bread","Egg","Avocado"],
recipe:"Add scrambled egg and avocado inside bread.",
serving:"2 sandwiches",
calories:620,
protein:30,
carbs:55,
fat:35,
fiber:9,
vitamins:"Vitamin E, Vitamin D",
alternative:"Use cheese instead of avocado"
},


{
id:59,
name:"Chicken Masala Rice",
meal:"Dinner",
ingredients:["Rice","Chicken","Spices","Yogurt"],
recipe:"Cook chicken masala and serve with rice.",
serving:"1 plate",
calories:800,
protein:50,
carbs:95,
fat:28,
fiber:6,
vitamins:"Iron, Vitamin B12",
alternative:"Use fish instead of chicken"
},


{
id:60,
name:"Oats Banana Pancakes",
meal:"Breakfast",
ingredients:["Oats","Banana","Eggs","Milk"],
recipe:"Blend ingredients and cook pancakes.",
serving:"4 pancakes",
calories:600,
protein:28,
carbs:80,
fat:20,
fiber:10,
vitamins:"Potassium, Calcium",
alternative:"Use apple instead of banana"
},
{
id:61,
name:"Chicken Cheese Roll",
meal:"Snack",
ingredients:["Chicken","Flour Wrap","Cheese","Vegetables"],
recipe:"Fill wrap with cooked chicken and cheese, then grill.",
serving:"2 rolls",
calories:680,
protein:42,
carbs:70,
fat:28,
fiber:6,
vitamins:"Calcium, Vitamin B12",
alternative:"Use paneer instead of chicken"
},


{
id:62,
name:"Mango Oat Bowl",
meal:"Breakfast",
ingredients:["Oats","Mango","Milk","Nuts"],
recipe:"Cook oats with milk and add mango pieces and nuts.",
serving:"1 bowl",
calories:620,
protein:24,
carbs:85,
fat:24,
fiber:10,
vitamins:"Vitamin A, Vitamin E",
alternative:"Use banana instead of mango"
},


{
id:63,
name:"Chicken Burger Bowl",
meal:"Lunch",
ingredients:["Chicken Patty","Rice","Vegetables","Cheese"],
recipe:"Serve grilled chicken patty with rice and vegetables.",
serving:"1 bowl",
calories:750,
protein:50,
carbs:85,
fat:30,
fiber:7,
vitamins:"Iron, Calcium",
alternative:"Use fish patty"
},


{
id:64,
name:"Creamy Mushroom Chicken",
meal:"Dinner",
ingredients:["Chicken","Mushrooms","Cream","Spices"],
recipe:"Cook chicken with creamy mushroom sauce.",
serving:"1 plate",
calories:720,
protein:48,
carbs:45,
fat:35,
fiber:5,
vitamins:"Vitamin B, Calcium",
alternative:"Use tofu instead of chicken"
},


{
id:65,
name:"Peanut Butter Chocolate Oats",
meal:"Breakfast",
ingredients:["Oats","Milk","Peanut Butter","Cocoa"],
recipe:"Cook oats with milk and mix peanut butter and cocoa.",
serving:"1 bowl",
calories:670,
protein:30,
carbs:80,
fat:30,
fiber:11,
vitamins:"Magnesium, Vitamin E",
alternative:"Use almond butter"
},


{
id:66,
name:"Chicken Seekh Kebab Rice",
meal:"Lunch",
ingredients:["Chicken Seekh Kebab","Rice","Yogurt"],
recipe:"Serve chicken kebabs with rice and yogurt.",
serving:"1 plate",
calories:780,
protein:50,
carbs:90,
fat:28,
fiber:5,
vitamins:"Iron, Vitamin B6",
alternative:"Use beef kebab"
},


{
id:67,
name:"Fruit Cream Bowl",
meal:"Snack",
ingredients:["Cream","Fruits","Nuts","Honey"],
recipe:"Mix fruits with cream and top with nuts.",
serving:"1 bowl",
calories:600,
protein:15,
carbs:75,
fat:28,
fiber:8,
vitamins:"Vitamin C, Vitamin E",
alternative:"Use yogurt instead of cream"
},


{
id:68,
name:"Chicken Alfredo Sandwich",
meal:"Dinner",
ingredients:["Bread","Chicken","Cheese Sauce"],
recipe:"Fill bread with creamy chicken filling.",
serving:"2 sandwiches",
calories:700,
protein:45,
carbs:65,
fat:32,
fiber:5,
vitamins:"Calcium, Vitamin B12",
alternative:"Use tuna filling"
},


{
id:69,
name:"Almond Banana Smoothie",
meal:"Snack",
ingredients:["Banana","Milk","Almonds","Oats"],
recipe:"Blend all ingredients until creamy.",
serving:"1 glass",
calories:640,
protein:25,
carbs:85,
fat:27,
fiber:9,
vitamins:"Potassium, Vitamin E",
alternative:"Use peanut butter"
},


{
id:70,
name:"Chicken Baked Potatoes",
meal:"Dinner",
ingredients:["Potatoes","Chicken","Cheese","Vegetables"],
recipe:"Bake potatoes filled with chicken and cheese.",
serving:"2 potatoes",
calories:780,
protein:48,
carbs:90,
fat:30,
fiber:9,
vitamins:"Vitamin C, Calcium",
alternative:"Use sweet potatoes"
},
{
id:71,
name:"Chicken Pesto Pasta",
meal:"Lunch",
ingredients:["Pasta","Chicken","Pesto Sauce","Cheese"],
recipe:"Mix cooked pasta with grilled chicken and pesto sauce.",
serving:"1 bowl",
calories:820,
protein:50,
carbs:95,
fat:32,
fiber:7,
vitamins:"Vitamin B6, Calcium",
alternative:"Use tofu instead of chicken"
},


{
id:72,
name:"Banana Peanut Butter Bowl",
meal:"Breakfast",
ingredients:["Banana","Peanut Butter","Oats","Yogurt"],
recipe:"Mix banana slices with oats, yogurt and peanut butter.",
serving:"1 bowl",
calories:620,
protein:28,
carbs:80,
fat:25,
fiber:9,
vitamins:"Potassium, Vitamin E",
alternative:"Use almond butter"
},


{
id:73,
name:"Chicken Corn Sandwich",
meal:"Snack",
ingredients:["Bread","Chicken","Corn","Cheese"],
recipe:"Mix chicken and corn filling, add cheese and toast.",
serving:"2 sandwiches",
calories:650,
protein:42,
carbs:70,
fat:26,
fiber:6,
vitamins:"Vitamin B12, Calcium",
alternative:"Use tuna instead of chicken"
},


{
id:74,
name:"Beef Pasta",
meal:"Dinner",
ingredients:["Pasta","Minced Beef","Tomato Sauce"],
recipe:"Cook beef sauce and mix with pasta.",
serving:"1 plate",
calories:850,
protein:50,
carbs:100,
fat:35,
fiber:8,
vitamins:"Iron, Zinc",
alternative:"Use chicken mince"
},


{
id:75,
name:"Strawberry Banana Shake",
meal:"Snack",
ingredients:["Strawberries","Banana","Milk","Oats"],
recipe:"Blend all ingredients until smooth.",
serving:"1 glass",
calories:600,
protein:25,
carbs:85,
fat:20,
fiber:8,
vitamins:"Vitamin C, Calcium",
alternative:"Use mango instead of strawberry"
},


{
id:76,
name:"Chicken Shawarma Rice",
meal:"Lunch",
ingredients:["Rice","Chicken","Yogurt Sauce","Vegetables"],
recipe:"Serve seasoned chicken with rice and sauce.",
serving:"1 plate",
calories:780,
protein:48,
carbs:95,
fat:28,
fiber:7,
vitamins:"Vitamin B6",
alternative:"Use grilled fish"
},


{
id:77,
name:"Cheese Potato Omelette",
meal:"Breakfast",
ingredients:["Eggs","Potatoes","Cheese"],
recipe:"Mix cooked potatoes with eggs and cheese.",
serving:"1 plate",
calories:650,
protein:32,
carbs:65,
fat:32,
fiber:7,
vitamins:"Vitamin D, Calcium",
alternative:"Use sweet potato"
},


{
id:78,
name:"Chicken Noodle Bowl",
meal:"Dinner",
ingredients:["Noodles","Chicken","Vegetables"],
recipe:"Cook noodles with chicken and vegetables.",
serving:"1 bowl",
calories:760,
protein:45,
carbs:90,
fat:25,
fiber:6,
vitamins:"Vitamin A, Iron",
alternative:"Use tofu"
},


{
id:79,
name:"Almond Date Energy Shake",
meal:"Snack",
ingredients:["Dates","Almonds","Milk"],
recipe:"Blend dates and almonds with milk.",
serving:"1 glass",
calories:680,
protein:22,
carbs:90,
fat:30,
fiber:8,
vitamins:"Iron, Vitamin E",
alternative:"Use cashews"
},


{
id:80,
name:"Chicken Tikka Sandwich",
meal:"Lunch",
ingredients:["Bread","Chicken Tikka","Cheese","Vegetables"],
recipe:"Fill bread with chicken tikka and cheese.",
serving:"2 sandwiches",
calories:700,
protein:45,
carbs:75,
fat:28,
fiber:6,
vitamins:"Vitamin B12",
alternative:"Use paneer tikka"
},


{
id:81,
name:"Chocolate Protein Oats",
meal:"Breakfast",
ingredients:["Oats","Milk","Cocoa","Protein Powder"],
recipe:"Cook oats with milk and cocoa.",
serving:"1 bowl",
calories:650,
protein:35,
carbs:75,
fat:22,
fiber:10,
vitamins:"Magnesium, Calcium",
alternative:"Use peanut butter"
},


{
id:82,
name:"Chicken Quesadilla",
meal:"Snack",
ingredients:["Tortilla","Chicken","Cheese"],
recipe:"Fill tortilla with chicken and cheese then grill.",
serving:"2 pieces",
calories:720,
protein:48,
carbs:70,
fat:30,
fiber:5,
vitamins:"Calcium, Iron",
alternative:"Use beans instead of chicken"
},


{
id:83,
name:"Creamy Garlic Chicken Rice",
meal:"Dinner",
ingredients:["Rice","Chicken","Cream","Garlic"],
recipe:"Cook chicken in garlic cream sauce and serve with rice.",
serving:"1 plate",
calories:830,
protein:52,
carbs:100,
fat:35,
fiber:6,
vitamins:"Vitamin B6",
alternative:"Use coconut milk"
},


{
id:84,
name:"Apple Peanut Butter Oats",
meal:"Breakfast",
ingredients:["Apple","Oats","Peanut Butter","Milk"],
recipe:"Cook oats and add apple slices with peanut butter.",
serving:"1 bowl",
calories:600,
protein:25,
carbs:80,
fat:24,
fiber:11,
vitamins:"Vitamin C, Vitamin E",
alternative:"Use banana"
},


{
id:85,
name:"Chicken Vegetable Rice",
meal:"Lunch",
ingredients:["Rice","Chicken","Mixed Vegetables"],
recipe:"Cook rice with chicken and vegetables.",
serving:"1 bowl",
calories:760,
protein:48,
carbs:90,
fat:25,
fiber:8,
vitamins:"Vitamin A, Iron",
alternative:"Use fish instead of chicken"
},

{
id:86,
name:"Chicken Cheese Pasta",
meal:"Dinner",
ingredients:["Pasta","Chicken","Cheese","Milk"],
recipe:"Cook pasta with creamy cheese chicken sauce.",
serving:"1 bowl",
calories:850,
protein:52,
carbs:95,
fat:35,
fiber:7,
vitamins:"Calcium, Vitamin B12",
alternative:"Use mushrooms instead of chicken"
},


{
id:87,
name:"Banana Chocolate Smoothie",
meal:"Snack",
ingredients:["Banana","Milk","Cocoa","Peanut Butter"],
recipe:"Blend all ingredients until creamy.",
serving:"1 glass",
calories:680,
protein:28,
carbs:90,
fat:28,
fiber:8,
vitamins:"Potassium, Magnesium",
alternative:"Use dates instead of cocoa"
},


{
id:88,
name:"Chicken Stuffed Bread",
meal:"Breakfast",
ingredients:["Bread","Chicken","Cheese","Egg"],
recipe:"Fill bread with chicken mixture and toast.",
serving:"2 pieces",
calories:650,
protein:40,
carbs:65,
fat:28,
fiber:5,
vitamins:"Vitamin B12, Calcium",
alternative:"Use tuna filling"
},


{
id:89,
name:"Beef Burger Homemade",
meal:"Dinner",
ingredients:["Burger Bun","Beef Patty","Cheese","Vegetables"],
recipe:"Prepare beef patty and assemble burger.",
serving:"1 burger",
calories:800,
protein:45,
carbs:85,
fat:38,
fiber:6,
vitamins:"Iron, Zinc",
alternative:"Use chicken patty"
},


{
id:90,
name:"Mango Yogurt Smoothie",
meal:"Snack",
ingredients:["Mango","Yogurt","Milk","Honey"],
recipe:"Blend mango with yogurt, milk and honey.",
serving:"1 glass",
calories:580,
protein:22,
carbs:80,
fat:18,
fiber:6,
vitamins:"Vitamin A, Calcium",
alternative:"Use banana"
},


{
id:91,
name:"Chicken Biryani Bowl",
meal:"Lunch",
ingredients:["Rice","Chicken","Yogurt","Spices"],
recipe:"Cook chicken biryani and serve as a bowl meal.",
serving:"1 plate",
calories:820,
protein:45,
carbs:105,
fat:30,
fiber:6,
vitamins:"Iron, Vitamin B",
alternative:"Use vegetables instead of chicken"
},


{
id:92,
name:"Peanut Butter Banana Pancakes",
meal:"Breakfast",
ingredients:["Banana","Eggs","Oats","Peanut Butter"],
recipe:"Blend ingredients and cook pancakes.",
serving:"4 pancakes",
calories:700,
protein:32,
carbs:85,
fat:30,
fiber:10,
vitamins:"Vitamin E, Potassium",
alternative:"Use almond butter"
},


{
id:93,
name:"Chicken Corn Pasta",
meal:"Lunch",
ingredients:["Pasta","Chicken","Corn","Cheese"],
recipe:"Mix pasta with chicken, corn and cheese.",
serving:"1 bowl",
calories:780,
protein:48,
carbs:95,
fat:30,
fiber:7,
vitamins:"Calcium, Vitamin B6",
alternative:"Use tofu"
},


{
id:94,
name:"Dry Fruit Oat Bars",
meal:"Snack",
ingredients:["Oats","Dates","Almonds","Honey"],
recipe:"Mix ingredients and bake into bars.",
serving:"3 bars",
calories:620,
protein:20,
carbs:85,
fat:25,
fiber:10,
vitamins:"Iron, Vitamin E",
alternative:"Use seeds instead of almonds"
},


{
id:95,
name:"Chicken Curry With Roti",
meal:"Dinner",
ingredients:["Chicken","Roti","Yogurt","Spices"],
recipe:"Cook chicken curry and serve with rotis.",
serving:"2 rotis + curry",
calories:780,
protein:50,
carbs:85,
fat:30,
fiber:7,
vitamins:"Iron, Vitamin B12",
alternative:"Use paneer curry"
},


{
id:96,
name:"Avocado Chicken Toast",
meal:"Breakfast",
ingredients:["Bread","Chicken","Avocado","Egg"],
recipe:"Top toast with chicken, avocado and egg.",
serving:"2 slices",
calories:650,
protein:38,
carbs:55,
fat:35,
fiber:9,
vitamins:"Vitamin E, Vitamin D",
alternative:"Use cheese instead of avocado"
},


{
id:97,
name:"Chicken Potato Sandwich",
meal:"Snack",
ingredients:["Bread","Chicken","Potato","Cheese"],
recipe:"Prepare chicken potato filling and toast sandwich.",
serving:"2 sandwiches",
calories:720,
protein:42,
carbs:80,
fat:30,
fiber:7,
vitamins:"Vitamin C, Calcium",
alternative:"Use sweet potato"
},


{
id:98,
name:"Chocolate Nut Milkshake",
meal:"Snack",
ingredients:["Milk","Nuts","Cocoa","Honey"],
recipe:"Blend milk with nuts and cocoa.",
serving:"1 glass",
calories:700,
protein:25,
carbs:85,
fat:32,
fiber:7,
vitamins:"Magnesium, Vitamin E",
alternative:"Use peanut butter"
},


{
id:99,
name:"Chicken Rice With Yogurt",
meal:"Lunch",
ingredients:["Rice","Chicken","Yogurt","Vegetables"],
recipe:"Serve chicken rice with yogurt side.",
serving:"1 plate",
calories:760,
protein:50,
carbs:90,
fat:25,
fiber:6,
vitamins:"Vitamin B6, Calcium",
alternative:"Use fish"
},


{
id:100,
name:"High Calorie Fruit Bowl",
meal:"Breakfast",
ingredients:["Banana","Mango","Nuts","Yogurt","Honey"],
recipe:"Mix fruits with yogurt, nuts and honey.",
serving:"1 large bowl",
calories:650,
protein:22,
carbs:95,
fat:25,
fiber:12,
vitamins:"Vitamin A, Vitamin C",
alternative:"Use seasonal fruits"
},

name:"Chocolate Banana Oat Pancakes",
meal:"Breakfast",
ingredients:["Banana","Oats","Eggs","Cocoa"],
recipe:"Blend ingredients and cook pancakes.",
serving:"4 pancakes",
calories:680,
protein:30,
carbs:85,
fat:25,
fiber:10,
vitamins:"Potassium, Magnesium",
alternative:"Use apple"
},

{
id:101,
name:"Chicken Spinach Rice",
meal:"Lunch",
ingredients:["Rice","Chicken","Spinach","Olive Oil"],
recipe:"Cook chicken with spinach and serve with rice.",
serving:"1 plate",
calories:760,
protein:50,
carbs:90,
fat:28,
fiber:8,
vitamins:"Iron, Vitamin A",
alternative:"Use paneer instead of chicken"
},


{
id:102,
name:"Banana Nut Oatmeal",
meal:"Breakfast",
ingredients:["Oats","Banana","Walnuts","Milk"],
recipe:"Cook oats with milk and add banana and walnuts.",
serving:"1 bowl",
calories:620,
protein:24,
carbs:85,
fat:25,
fiber:10,
vitamins:"Potassium, Magnesium",
alternative:"Use almonds instead of walnuts"
},


{
id:103,
name:"Chicken Loaded Fries",
meal:"Snack",
ingredients:["Potatoes","Chicken","Cheese","Sauce"],
recipe:"Bake fries and top with chicken and cheese.",
serving:"1 plate",
calories:850,
protein:45,
carbs:95,
fat:40,
fiber:8,
vitamins:"Vitamin C, Calcium",
alternative:"Use sweet potato fries"
},


{
id:104,
name:"Beef Keema Paratha",
meal:"Breakfast",
ingredients:["Flour","Beef Mince","Egg","Oil"],
recipe:"Fill paratha with cooked beef mince.",
serving:"1 large paratha",
calories:820,
protein:45,
carbs:80,
fat:38,
fiber:6,
vitamins:"Iron, Zinc",
alternative:"Use chicken mince"
},


{
id:105,
name:"Chicken Mushroom Pasta",
meal:"Dinner",
ingredients:["Pasta","Chicken","Mushrooms","Cream"],
recipe:"Cook pasta with creamy chicken mushroom sauce.",
serving:"1 bowl",
calories:800,
protein:50,
carbs:90,
fat:32,
fiber:7,
vitamins:"Vitamin B, Calcium",
alternative:"Use tofu"
},


{
id:106,
name:"Peanut Butter Berry Smoothie",
meal:"Snack",
ingredients:["Berries","Milk","Peanut Butter","Oats"],
recipe:"Blend all ingredients until smooth.",
serving:"1 glass",
calories:650,
protein:30,
carbs:80,
fat:28,
fiber:9,
vitamins:"Vitamin C, Vitamin E",
alternative:"Use banana instead of berries"
},


{
id:107,
name:"Chicken Egg Rice Bowl",
meal:"Lunch",
ingredients:["Rice","Chicken","Egg","Vegetables"],
recipe:"Serve rice with chicken, egg and vegetables.",
serving:"1 bowl",
calories:780,
protein:52,
carbs:95,
fat:28,
fiber:7,
vitamins:"Vitamin B12, Iron",
alternative:"Use fish"
},


{
id:108,
name:"Cheese Garlic Bread With Eggs",
meal:"Breakfast",
ingredients:["Bread","Eggs","Cheese","Butter"],
recipe:"Toast garlic bread and serve with eggs.",
serving:"2 pieces",
calories:620,
protein:32,
carbs:60,
fat:32,
fiber:4,
vitamins:"Calcium, Vitamin D",
alternative:"Use avocado"
},


{
id:109,
name:"Chicken Coconut Rice",
meal:"Dinner",
ingredients:["Rice","Chicken","Coconut Milk"],
recipe:"Cook chicken rice with coconut milk.",
serving:"1 plate",
calories:820,
protein:48,
carbs:100,
fat:35,
fiber:6,
vitamins:"Vitamin B6",
alternative:"Use normal milk"
},


{
id:110,
name:"Dates Almond Oat Cookies",
meal:"Snack",
ingredients:["Dates","Almonds","Oats","Honey"],
recipe:"Mix ingredients and bake cookies.",
serving:"5 cookies",
calories:600,
protein:20,
carbs:85,
fat:24,
fiber:10,
vitamins:"Iron, Vitamin E",
alternative:"Use peanuts"
},


{
id:111,
name:"Chicken Fajita Rice",
meal:"Lunch",
ingredients:["Rice","Chicken","Peppers","Cheese"],
recipe:"Cook chicken fajita mixture and serve with rice.",
serving:"1 bowl",
calories:790,
protein:50,
carbs:95,
fat:30,
fiber:8,
vitamins:"Vitamin C, Iron",
alternative:"Use beans"
},


{
id:112,
name:"Chocolate Banana Oat Pancakes",
meal:"Breakfast",
ingredients:["Banana","Oats","Eggs","Cocoa"],
recipe:"Blend ingredients and cook pancakes.",
serving:"4 pancakes",
calories:680,
protein:30,
carbs:85,
fat:25,
fiber:10,
vitamins:"Potassium, Magnesium",
alternative:"Use apple"
},


{
id:113,
name:"Chicken Alfredo Rice",
meal:"Dinner",
ingredients:["Rice","Chicken","Cream","Cheese"],
recipe:"Mix rice with creamy chicken sauce.",
serving:"1 plate",
calories:840,
protein:52,
carbs:100,
fat:35,
fiber:5,
vitamins:"Calcium, Vitamin A",
alternative:"Use yogurt sauce"
},


{
id:114,
name:"Nutella Peanut Butter Sandwich",
meal:"Snack",
ingredients:["Bread","Nutella","Peanut Butter"],
recipe:"Spread both fillings on bread.",
serving:"2 sandwiches",
calories:720,
protein:20,
carbs:90,
fat:35,
fiber:6,
vitamins:"Vitamin E",
alternative:"Use honey"
},


{
id:115,
name:"Chicken Lentil Curry",
meal:"Lunch",
ingredients:["Chicken","Lentils","Spices","Rice"],
recipe:"Cook chicken with lentils and serve with rice.",
serving:"1 plate",
calories:800,
protein:55,
carbs:95,
fat:25,
fiber:12,
vitamins:"Iron, Folate",
alternative:"Use beans"
},


{
id:116,
name:"Mango Peanut Smoothie",
meal:"Snack",
ingredients:["Mango","Milk","Peanut Butter"],
recipe:"Blend ingredients together.",
serving:"1 glass",
calories:630,
protein:25,
carbs:90,
fat:25,
fiber:6,
vitamins:"Vitamin A, Potassium",
alternative:"Use banana"
},


{
id:117,
name:"Chicken Cheese Pizza Homemade",
meal:"Dinner",
ingredients:["Pizza Base","Chicken","Cheese","Vegetables"],
recipe:"Add toppings and bake pizza.",
serving:"2 slices",
calories:750,
protein:45,
carbs:85,
fat:30,
fiber:6,
vitamins:"Calcium, Vitamin B12",
alternative:"Use vegetable toppings"
},


{
id:118,
name:"Egg Chicken Roll",
meal:"Breakfast",
ingredients:["Wrap","Egg","Chicken","Vegetables"],
recipe:"Fill wrap with egg and chicken mixture.",
serving:"2 rolls",
calories:700,
protein:45,
carbs:70,
fat:30,
fiber:6,
vitamins:"Vitamin D, Iron",
alternative:"Use paneer"
},


{
id:119,
name:"Cashew Banana Shake",
meal:"Snack",
ingredients:["Banana","Cashews","Milk"],
recipe:"Blend all ingredients.",
serving:"1 glass",
calories:670,
protein:22,
carbs:90,
fat:30,
fiber:7,
vitamins:"Magnesium, Vitamin E",
alternative:"Use almonds"
},


{
id:120,
name:"Chicken Vegetable Noodles",
meal:"Dinner",
ingredients:["Noodles","Chicken","Vegetables"],
recipe:"Stir fry noodles with chicken and vegetables.",
serving:"1 bowl",
calories:780,
protein:45,
carbs:95,
fat:28,
fiber:8,
vitamins:"Vitamin A, Iron",
alternative:"Use tofu"
},

{
id:121,
name:"Chicken Tandoori Rice Bowl",
meal:"Lunch",
ingredients:["Rice","Tandoori Chicken","Yogurt","Vegetables"],
recipe:"Serve tandoori chicken with rice and yogurt.",
serving:"1 bowl",
calories:800,
protein:52,
carbs:95,
fat:28,
fiber:7,
vitamins:"Vitamin B6, Calcium",
alternative:"Use grilled fish"
},


{
id:122,
name:"Honey Banana Milkshake",
meal:"Snack",
ingredients:["Banana","Milk","Honey","Oats"],
recipe:"Blend all ingredients until creamy.",
serving:"1 glass",
calories:620,
protein:24,
carbs:90,
fat:22,
fiber:8,
vitamins:"Potassium, Calcium",
alternative:"Use dates instead of honey"
},


{
id:123,
name:"Chicken White Sauce Pasta",
meal:"Dinner",
ingredients:["Pasta","Chicken","Milk","Cheese"],
recipe:"Prepare creamy white sauce pasta with chicken.",
serving:"1 bowl",
calories:850,
protein:55,
carbs:100,
fat:35,
fiber:7,
vitamins:"Calcium, Vitamin B12",
alternative:"Use mushrooms"
},


{
id:124,
name:"Egg Cheese Paratha",
meal:"Breakfast",
ingredients:["Flour","Eggs","Cheese","Oil"],
recipe:"Prepare paratha filled with egg and cheese.",
serving:"1 large paratha",
calories:720,
protein:35,
carbs:75,
fat:35,
fiber:6,
vitamins:"Vitamin D, Calcium",
alternative:"Use paneer filling"
},


{
id:125,
name:"Chicken Burger Meal",
meal:"Lunch",
ingredients:["Burger Bun","Chicken Patty","Cheese","Potatoes"],
recipe:"Prepare homemade chicken burger with side potatoes.",
serving:"1 meal",
calories:850,
protein:50,
carbs:100,
fat:38,
fiber:7,
vitamins:"Iron, Calcium",
alternative:"Use fish patty"
},


{
id:126,
name:"Almond Chocolate Smoothie",
meal:"Snack",
ingredients:["Milk","Almonds","Cocoa","Banana"],
recipe:"Blend everything together.",
serving:"1 glass",
calories:680,
protein:28,
carbs:85,
fat:30,
fiber:9,
vitamins:"Vitamin E, Magnesium",
alternative:"Use peanuts"
},


{
id:127,
name:"Chicken Kebab Wrap",
meal:"Lunch",
ingredients:["Wrap","Chicken Kebab","Vegetables","Sauce"],
recipe:"Fill wrap with chicken kebab and vegetables.",
serving:"2 wraps",
calories:740,
protein:48,
carbs:80,
fat:30,
fiber:7,
vitamins:"Vitamin B6",
alternative:"Use beef kebab"
},


{
id:128,
name:"Oats Egg Pancake",
meal:"Breakfast",
ingredients:["Oats","Eggs","Milk"],
recipe:"Mix ingredients and cook pancakes.",
serving:"4 pancakes",
calories:580,
protein:30,
carbs:70,
fat:22,
fiber:9,
vitamins:"Iron, Calcium",
alternative:"Use banana"
},


{
id:129,
name:"Chicken Baked Pasta",
meal:"Dinner",
ingredients:["Pasta","Chicken","Cheese","Tomato Sauce"],
recipe:"Bake pasta with chicken and cheese.",
serving:"1 dish",
calories:820,
protein:52,
carbs:95,
fat:32,
fiber:8,
vitamins:"Vitamin A, Calcium",
alternative:"Use vegetables"
},


{
id:130,
name:"Dry Fruit Yogurt Bowl",
meal:"Snack",
ingredients:["Yogurt","Dates","Nuts","Honey"],
recipe:"Mix yogurt with dry fruits and honey.",
serving:"1 bowl",
calories:600,
protein:25,
carbs:80,
fat:25,
fiber:8,
vitamins:"Calcium, Iron",
alternative:"Use seeds"
},


{
id:131,
name:"Chicken Masala Sandwich",
meal:"Breakfast",
ingredients:["Bread","Chicken","Spices","Cheese"],
recipe:"Prepare spicy chicken filling and toast sandwich.",
serving:"2 sandwiches",
calories:680,
protein:45,
carbs:70,
fat:28,
fiber:6,
vitamins:"Vitamin B12",
alternative:"Use tuna"
},


{
id:132,
name:"Beef Rice Platter",
meal:"Lunch",
ingredients:["Rice","Beef","Vegetables"],
recipe:"Serve cooked beef with rice.",
serving:"1 plate",
calories:850,
protein:50,
carbs:100,
fat:35,
fiber:7,
vitamins:"Iron, Zinc",
alternative:"Use chicken"
},


{
id:133,
name:"Banana Nutella Oats",
meal:"Breakfast",
ingredients:["Oats","Banana","Chocolate Spread","Milk"],
recipe:"Cook oats and add banana with chocolate spread.",
serving:"1 bowl",
calories:700,
protein:25,
carbs:95,
fat:30,
fiber:10,
vitamins:"Potassium, Magnesium",
alternative:"Use peanut butter"
},


{
id:134,
name:"Chicken Corn Soup",
meal:"Dinner",
ingredients:["Chicken","Corn","Milk","Vegetables"],
recipe:"Cook creamy chicken corn soup.",
serving:"1 bowl",
calories:550,
protein:40,
carbs:60,
fat:20,
fiber:6,
vitamins:"Vitamin A",
alternative:"Use mushrooms"
},


{
id:135,
name:"Peanut Butter Date Balls",
meal:"Snack",
ingredients:["Dates","Peanut Butter","Oats"],
recipe:"Mix ingredients and make energy balls.",
serving:"5 balls",
calories:650,
protein:22,
carbs:90,
fat:28,
fiber:10,
vitamins:"Vitamin E, Iron",
alternative:"Use almond butter"
},


{
id:136,
name:"Chicken Pulao",
meal:"Lunch",
ingredients:["Rice","Chicken","Spices"],
recipe:"Cook chicken pulao with spices.",
serving:"1 plate",
calories:780,
protein:45,
carbs:100,
fat:25,
fiber:6,
vitamins:"Vitamin B",
alternative:"Use vegetables"
},


{
id:137,
name:"Cheesy Chicken Toast",
meal:"Breakfast",
ingredients:["Bread","Chicken","Cheese"],
recipe:"Toast bread with chicken and cheese topping.",
serving:"2 slices",
calories:620,
protein:42,
carbs:55,
fat:30,
fiber:5,
vitamins:"Calcium",
alternative:"Use egg topping"
},


{
id:138,
name:"Mango Coconut Shake",
meal:"Snack",
ingredients:["Mango","Milk","Coconut","Honey"],
recipe:"Blend ingredients until smooth.",
serving:"1 glass",
calories:650,
protein:18,
carbs:95,
fat:25,
fiber:7,
vitamins:"Vitamin A, Vitamin C",
alternative:"Use banana"
},


{
id:139,
name:"Chicken Thai Rice",
meal:"Dinner",
ingredients:["Rice","Chicken","Vegetables","Coconut Milk"],
recipe:"Cook rice with chicken and coconut flavors.",
serving:"1 bowl",
calories:820,
protein:48,
carbs:100,
fat:32,
fiber:8,
vitamins:"Vitamin B6",
alternative:"Use tofu"
},


{
id:140,
name:"Egg Potato Sandwich",
meal:"Snack",
ingredients:["Bread","Eggs","Potatoes"],
recipe:"Prepare egg potato filling and toast sandwich.",
serving:"2 sandwiches",
calories:650,
protein:30,
carbs:80,
fat:25,
fiber:7,
vitamins:"Vitamin D, Potassium",
alternative:"Use sweet potato"
},

{
id:141,
name:"Chicken Hummus Wrap",
meal:"Lunch",
ingredients:["Wrap","Chicken","Hummus","Vegetables"],
recipe:"Fill wrap with chicken, hummus and vegetables.",
serving:"2 wraps",
calories:720,
protein:48,
carbs:75,
fat:28,
fiber:8,
vitamins:"Vitamin B6, Iron",
alternative:"Use falafel instead of chicken"
},


{
id:142,
name:"Chocolate Peanut Butter Shake",
meal:"Snack",
ingredients:["Milk","Peanut Butter","Cocoa","Banana"],
recipe:"Blend all ingredients until creamy.",
serving:"1 large glass",
calories:750,
protein:30,
carbs:95,
fat:35,
fiber:9,
vitamins:"Vitamin E, Magnesium",
alternative:"Use almond butter"
},


{
id:143,
name:"Chicken Stuffed Bread Rolls",
meal:"Breakfast",
ingredients:["Bread","Chicken","Cheese","Egg"],
recipe:"Fill bread rolls with chicken mixture and bake.",
serving:"4 rolls",
calories:700,
protein:45,
carbs:80,
fat:30,
fiber:6,
vitamins:"Calcium, Vitamin B12",
alternative:"Use vegetable filling"
},


{
id:144,
name:"Beef Steak With Potatoes",
meal:"Dinner",
ingredients:["Beef Steak","Potatoes","Vegetables"],
recipe:"Grill steak and serve with baked potatoes.",
serving:"1 plate",
calories:850,
protein:55,
carbs:80,
fat:40,
fiber:8,
vitamins:"Iron, Zinc",
alternative:"Use chicken steak"
},


{
id:145,
name:"Banana Almond Pancakes",
meal:"Breakfast",
ingredients:["Banana","Almonds","Eggs","Oats"],
recipe:"Blend ingredients and cook pancakes.",
serving:"5 pancakes",
calories:680,
protein:32,
carbs:85,
fat:28,
fiber:10,
vitamins:"Vitamin E, Potassium",
alternative:"Use walnuts"
},


{
id:146,
name:"Chicken Chilli Rice",
meal:"Lunch",
ingredients:["Rice","Chicken","Peppers","Sauce"],
recipe:"Cook spicy chicken and serve with rice.",
serving:"1 bowl",
calories:790,
protein:50,
carbs:95,
fat:28,
fiber:7,
vitamins:"Vitamin C, Iron",
alternative:"Use tofu"
},


{
id:147,
name:"Fruit Nut Milkshake",
meal:"Snack",
ingredients:["Milk","Banana","Nuts","Honey"],
recipe:"Blend fruits and nuts with milk.",
serving:"1 glass",
calories:670,
protein:25,
carbs:90,
fat:30,
fiber:8,
vitamins:"Calcium, Vitamin E",
alternative:"Use seeds"
},


{
id:148,
name:"Chicken Lasagna Roll",
meal:"Dinner",
ingredients:["Pasta Sheets","Chicken","Cheese","Sauce"],
recipe:"Roll pasta sheets with chicken filling and bake.",
serving:"2 rolls",
calories:820,
protein:50,
carbs:90,
fat:35,
fiber:7,
vitamins:"Calcium, Vitamin A",
alternative:"Use spinach filling"
},


{
id:149,
name:"Oats Peanut Butter Cookies",
meal:"Snack",
ingredients:["Oats","Peanut Butter","Egg","Honey"],
recipe:"Mix ingredients and bake cookies.",
serving:"5 cookies",
calories:620,
protein:24,
carbs:75,
fat:28,
fiber:10,
vitamins:"Magnesium, Vitamin E",
alternative:"Use almond butter"
},


{
id:150,
name:"Chicken Karahi With Rice",
meal:"Lunch",
ingredients:["Chicken","Rice","Tomatoes","Spices"],
recipe:"Cook chicken karahi and serve with rice.",
serving:"1 plate",
calories:850,
protein:55,
carbs:100,
fat:32,
fiber:6,
vitamins:"Vitamin B6, Iron",
alternative:"Use paneer karahi"
},


{
id:151,
name:"Cheese Egg Burrito",
meal:"Breakfast",
ingredients:["Tortilla","Eggs","Cheese","Vegetables"],
recipe:"Fill tortilla with eggs and cheese.",
serving:"2 burritos",
calories:720,
protein:38,
carbs:70,
fat:35,
fiber:6,
vitamins:"Calcium, Vitamin D",
alternative:"Use chicken filling"
},


{
id:152,
name:"Chicken Peanut Noodles",
meal:"Dinner",
ingredients:["Noodles","Chicken","Peanut Sauce"],
recipe:"Cook noodles with chicken and peanut sauce.",
serving:"1 bowl",
calories:820,
protein:50,
carbs:95,
fat:35,
fiber:7,
vitamins:"Vitamin E",
alternative:"Use tofu"
},


{
id:153,
name:"Mango Oat Milkshake",
meal:"Snack",
ingredients:["Mango","Oats","Milk","Honey"],
recipe:"Blend ingredients together.",
serving:"1 glass",
calories:640,
protein:24,
carbs:95,
fat:20,
fiber:8,
vitamins:"Vitamin A, Calcium",
alternative:"Use banana"
},


{
id:154,
name:"Chicken Alfredo Wrap",
meal:"Lunch",
ingredients:["Wrap","Chicken","Cream Sauce","Cheese"],
recipe:"Fill wrap with creamy chicken mixture.",
serving:"2 wraps",
calories:760,
protein:50,
carbs:80,
fat:32,
fiber:6,
vitamins:"Calcium",
alternative:"Use mushrooms"
},


{
id:155,
name:"Dates Walnut Oat Bowl",
meal:"Breakfast",
ingredients:["Oats","Dates","Walnuts","Milk"],
recipe:"Cook oats and add dates and walnuts.",
serving:"1 bowl",
calories:650,
protein:25,
carbs:90,
fat:28,
fiber:12,
vitamins:"Iron, Magnesium",
alternative:"Use almonds"
},


{
id:156,
name:"Chicken Fried Noodles",
meal:"Dinner",
ingredients:["Noodles","Chicken","Egg","Vegetables"],
recipe:"Stir fry noodles with chicken and vegetables.",
serving:"1 plate",
calories:800,
protein:48,
carbs:95,
fat:30,
fiber:7,
vitamins:"Vitamin A",
alternative:"Use shrimp"
},

{
id:157,
name:"Peanut Butter Banana Roll",
meal:"Snack",
ingredients:["Tortilla","Banana","Peanut Butter"],
recipe:"Roll banana with peanut butter inside tortilla.",
serving:"2 rolls",
calories:600,
protein:20,
carbs:80,
fat:25,
fiber:9,
vitamins:"Potassium, Vitamin E",
alternative:"Use almond butter"
},


{
id:158,
name:"Chicken Cheese Rice Bake",
meal:"Dinner",
ingredients:["Rice","Chicken","Cheese","Vegetables"],
recipe:"Bake rice with chicken and cheese topping.",
serving:"1 dish",
calories:830,
protein:52,
carbs:100,
fat:34,
fiber:7,
vitamins:"Calcium, Iron",
alternative:"Use paneer"
},


{
id:159,
name:"High Calorie Trail Mix",
meal:"Snack",
ingredients:["Nuts","Seeds","Dates","Raisins"],
recipe:"Mix all dry ingredients together.",
serving:"1 cup",
calories:700,
protein:22,
carbs:85,
fat:35,
fiber:12,
vitamins:"Vitamin E, Magnesium",
alternative:"Use dried fruits"
},


{
id:160,
name:"Chicken Pesto Sandwich",
meal:"Lunch",
ingredients:["Bread","Chicken","Pesto","Cheese"],
recipe:"Prepare sandwich with chicken and pesto.",
serving:"2 sandwiches",
calories:730,
protein:48,
carbs:75,
fat:32,
fiber:6,
vitamins:"Vitamin B12, Calcium",
alternative:"Use tuna"
},
{
id:161,
name:"Chicken Cheese Quesadilla",
meal:"Snack",
ingredients:["Tortilla","Chicken","Cheese","Vegetables"],
recipe:"Fill tortilla with chicken and cheese, then grill.",
serving:"2 pieces",
calories:740,
protein:50,
carbs:75,
fat:32,
fiber:6,
vitamins:"Calcium, Vitamin B12",
alternative:"Use beans instead of chicken"
},


{
id:162,
name:"Banana Oat Protein Bowl",
meal:"Breakfast",
ingredients:["Oats","Banana","Milk","Nuts"],
recipe:"Cook oats with milk and top with banana and nuts.",
serving:"1 bowl",
calories:650,
protein:28,
carbs:90,
fat:25,
fiber:10,
vitamins:"Potassium, Magnesium",
alternative:"Use seeds instead of nuts"
},


{
id:163,
name:"Chicken Mexican Rice",
meal:"Lunch",
ingredients:["Rice","Chicken","Beans","Vegetables"],
recipe:"Cook rice with chicken, beans and spices.",
serving:"1 bowl",
calories:820,
protein:52,
carbs:105,
fat:28,
fiber:10,
vitamins:"Iron, Vitamin B6",
alternative:"Use tofu instead of chicken"
},


{
id:164,
name:"Chocolate Avocado Smoothie",
meal:"Snack",
ingredients:["Avocado","Milk","Cocoa","Honey"],
recipe:"Blend all ingredients until smooth.",
serving:"1 glass",
calories:700,
protein:20,
carbs:75,
fat:38,
fiber:10,
vitamins:"Vitamin E, Potassium",
alternative:"Use banana instead of avocado"
},


{
id:165,
name:"Chicken Mayo Wrap",
meal:"Lunch",
ingredients:["Wrap","Chicken","Mayonnaise","Vegetables"],
recipe:"Fill wrap with creamy chicken mixture.",
serving:"2 wraps",
calories:720,
protein:45,
carbs:80,
fat:30,
fiber:6,
vitamins:"Vitamin B12",
alternative:"Use yogurt sauce"
},


{
id:166,
name:"Egg Cheese Rice Bowl",
meal:"Dinner",
ingredients:["Rice","Eggs","Cheese","Vegetables"],
recipe:"Serve rice topped with eggs and cheese.",
serving:"1 bowl",
calories:700,
protein:35,
carbs:90,
fat:28,
fiber:7,
vitamins:"Vitamin D, Calcium",
alternative:"Use chicken instead of egg"
},


{
id:167,
name:"Peanut Butter Granola Bowl",
meal:"Breakfast",
ingredients:["Granola","Peanut Butter","Milk","Fruits"],
recipe:"Mix granola with milk, fruits and peanut butter.",
serving:"1 bowl",
calories:680,
protein:25,
carbs:95,
fat:30,
fiber:10,
vitamins:"Vitamin E, Vitamin C",
alternative:"Use almond butter"
},


{
id:168,
name:"Chicken Honey Garlic Rice",
meal:"Dinner",
ingredients:["Rice","Chicken","Honey","Garlic"],
recipe:"Cook honey garlic chicken and serve with rice.",
serving:"1 plate",
calories:800,
protein:50,
carbs:100,
fat:25,
fiber:6,
vitamins:"Vitamin B6",
alternative:"Use fish"
},


{
id:169,
name:"Dry Fruit Banana Bowl",
meal:"Snack",
ingredients:["Banana","Dates","Almonds","Yogurt"],
recipe:"Mix banana with yogurt and dry fruits.",
serving:"1 bowl",
calories:620,
protein:22,
carbs:90,
fat:25,
fiber:9,
vitamins:"Potassium, Calcium",
alternative:"Use apples"
},


{
id:170,
name:"Chicken Stuffed Potato",
meal:"Dinner",
ingredients:["Potato","Chicken","Cheese"],
recipe:"Bake potato and fill with chicken and cheese.",
serving:"2 potatoes",
calories:780,
protein:48,
carbs:95,
fat:30,
fiber:10,
vitamins:"Vitamin C, Calcium",
alternative:"Use sweet potato"
},


{
id:171,
name:"Oats Chocolate Muffins",
meal:"Breakfast",
ingredients:["Oats","Eggs","Cocoa","Milk"],
recipe:"Mix ingredients and bake muffins.",
serving:"4 muffins",
calories:620,
protein:30,
carbs:80,
fat:22,
fiber:8,
vitamins:"Iron, Magnesium",
alternative:"Use banana instead of cocoa"
},


{
id:172,
name:"Chicken Creamy Rice Bowl",
meal:"Lunch",
ingredients:["Rice","Chicken","Cream","Vegetables"],
recipe:"Mix creamy chicken with cooked rice.",
serving:"1 bowl",
calories:820,
protein:52,
carbs:100,
fat:35,
fiber:7,
vitamins:"Vitamin A, Calcium",
alternative:"Use yogurt sauce"
},


{
id:173,
name:"Almond Butter Toast",
meal:"Breakfast",
ingredients:["Bread","Almond Butter","Banana"],
recipe:"Spread almond butter on toast and add banana.",
serving:"2 slices",
calories:600,
protein:20,
carbs:70,
fat:30,
fiber:8,
vitamins:"Vitamin E, Potassium",
alternative:"Use peanut butter"
},


{
id:174,
name:"Chicken BBQ Wrap",
meal:"Lunch",
ingredients:["Wrap","BBQ Chicken","Cheese","Vegetables"],
recipe:"Fill wrap with BBQ chicken and cheese.",
serving:"2 wraps",
calories:750,
protein:50,
carbs:85,
fat:30,
fiber:7,
vitamins:"Vitamin B6",
alternative:"Use grilled vegetables"
},


{
id:175,
name:"Mango Nut Yogurt Bowl",
meal:"Snack",
ingredients:["Mango","Yogurt","Nuts","Honey"],
recipe:"Combine yogurt with mango and nuts.",
serving:"1 bowl",
calories:600,
protein:25,
carbs:85,
fat:24,
fiber:7,
vitamins:"Vitamin A, Calcium",
alternative:"Use banana"
},


{
id:176,
name:"Chicken Spaghetti",
meal:"Dinner",
ingredients:["Spaghetti","Chicken","Tomato Sauce","Cheese"],
recipe:"Cook spaghetti with chicken sauce.",
serving:"1 plate",
calories:830,
protein:50,
carbs:105,
fat:32,
fiber:8,
vitamins:"Vitamin A, Iron",
alternative:"Use minced beef"
},


{
id:177,
name:"Egg Peanut Butter Sandwich",
meal:"Breakfast",
ingredients:["Bread","Eggs","Peanut Butter"],
recipe:"Prepare sandwich with egg and peanut butter.",
serving:"2 sandwiches",
calories:650,
protein:32,
carbs:70,
fat:30,
fiber:7,
vitamins:"Vitamin D, Vitamin E",
alternative:"Use almond butter"
},


{
id:178,
name:"Chicken Vegetable Curry",
meal:"Dinner",
ingredients:["Chicken","Vegetables","Spices","Rice"],
recipe:"Cook chicken curry with vegetables.",
serving:"1 plate",
calories:760,
protein:50,
carbs:90,
fat:25,
fiber:9,
vitamins:"Vitamin A, Iron",
alternative:"Use paneer"
},


{
id:179,
name:"Chocolate Date Energy Shake",
meal:"Snack",
ingredients:["Dates","Milk","Cocoa","Oats"],
recipe:"Blend ingredients until creamy.",
serving:"1 glass",
calories:690,
protein:25,
carbs:100,
fat:22,
fiber:10,
vitamins:"Magnesium, Calcium",
alternative:"Use banana"
},


{
id:180,
name:"Chicken Rice Burrito",
meal:"Lunch",
ingredients:["Tortilla","Rice","Chicken","Cheese"],
recipe:"Fill tortilla with rice, chicken and cheese.",
serving:"2 burritos",
calories:850,
protein:55,
carbs:110,
fat:30,
fiber:8,
vitamins:"Iron, Calcium",
alternative:"Use beans instead of chicken"
},

{
id:181,
name:"Chicken Cheese Rice Bowl",
meal:"Lunch",
ingredients:["Rice","Chicken","Cheese","Vegetables"],
recipe:"Mix cooked rice with chicken, vegetables and cheese.",
serving:"1 bowl",
calories:820,
protein:52,
carbs:100,
fat:32,
fiber:8,
vitamins:"Calcium, Vitamin B6",
alternative:"Use paneer instead of chicken"
},


{
id:182,
name:"Banana Peanut Butter Overnight Oats",
meal:"Breakfast",
ingredients:["Oats","Milk","Banana","Peanut Butter"],
recipe:"Mix ingredients and keep overnight in refrigerator.",
serving:"1 jar",
calories:680,
protein:30,
carbs:90,
fat:30,
fiber:10,
vitamins:"Potassium, Vitamin E",
alternative:"Use almond butter"
},


{
id:183,
name:"Chicken Tikka Pasta",
meal:"Dinner",
ingredients:["Pasta","Chicken Tikka","Cheese","Sauce"],
recipe:"Mix pasta with chicken tikka and creamy sauce.",
serving:"1 bowl",
calories:830,
protein:55,
carbs:95,
fat:34,
fiber:7,
vitamins:"Calcium, Iron",
alternative:"Use paneer tikka"
},


{
id:184,
name:"Beef Cheese Sandwich",
meal:"Snack",
ingredients:["Bread","Beef","Cheese","Vegetables"],
recipe:"Prepare sandwich with cooked beef and cheese.",
serving:"2 sandwiches",
calories:750,
protein:45,
carbs:70,
fat:38,
fiber:6,
vitamins:"Iron, Zinc",
alternative:"Use chicken"
},


{
id:185,
name:"Mango Banana Power Shake",
meal:"Snack",
ingredients:["Mango","Banana","Milk","Oats"],
recipe:"Blend all ingredients together.",
serving:"1 large glass",
calories:700,
protein:28,
carbs:100,
fat:22,
fiber:10,
vitamins:"Vitamin A, Potassium",
alternative:"Use berries"
},


{
id:186,
name:"Chicken Pita Pocket",
meal:"Lunch",
ingredients:["Pita Bread","Chicken","Vegetables","Sauce"],
recipe:"Fill pita bread with chicken and vegetables.",
serving:"2 pockets",
calories:720,
protein:48,
carbs:85,
fat:28,
fiber:7,
vitamins:"Vitamin B6",
alternative:"Use falafel"
},


{
id:187,
name:"Egg Chicken Breakfast Bowl",
meal:"Breakfast",
ingredients:["Eggs","Chicken","Potatoes","Vegetables"],
recipe:"Cook ingredients together as a breakfast bowl.",
serving:"1 bowl",
calories:700,
protein:50,
carbs:75,
fat:30,
fiber:8,
vitamins:"Vitamin D, Iron",
alternative:"Use tofu"
},


{
id:188,
name:"Chocolate Almond Oat Bars",
meal:"Snack",
ingredients:["Oats","Almonds","Cocoa","Honey"],
recipe:"Mix ingredients and bake into bars.",
serving:"3 bars",
calories:640,
protein:24,
carbs:85,
fat:28,
fiber:10,
vitamins:"Vitamin E, Magnesium",
alternative:"Use peanuts"
},


{
id:189,
name:"Chicken Butter Masala With Rice",
meal:"Dinner",
ingredients:["Chicken","Rice","Butter","Spices"],
recipe:"Cook creamy chicken butter masala and serve with rice.",
serving:"1 plate",
calories:850,
protein:55,
carbs:100,
fat:35,
fiber:6,
vitamins:"Vitamin B12, Iron",
alternative:"Use paneer"
},


{
id:190,
name:"Peanut Butter Banana Muffins",
meal:"Breakfast",
ingredients:["Banana","Peanut Butter","Eggs","Flour"],
recipe:"Mix ingredients and bake muffins.",
serving:"4 muffins",
calories:680,
protein:30,
carbs:85,
fat:32,
fiber:8,
vitamins:"Vitamin E, Potassium",
alternative:"Use almond butter"
},


{
id:191,
name:"Chicken Nachos Bowl",
meal:"Snack",
ingredients:["Nachos","Chicken","Cheese","Vegetables"],
recipe:"Top nachos with chicken and cheese.",
serving:"1 bowl",
calories:780,
protein:45,
carbs:90,
fat:35,
fiber:7,
vitamins:"Calcium, Vitamin A",
alternative:"Use beans"
},


{
id:192,
name:"Chicken Fried Pasta",
meal:"Lunch",
ingredients:["Pasta","Chicken","Egg","Vegetables"],
recipe:"Stir fry pasta with chicken and vegetables.",
serving:"1 plate",
calories:800,
protein:50,
carbs:100,
fat:30,
fiber:8,
vitamins:"Vitamin B",
alternative:"Use shrimp"
},


{
id:193,
name:"Dry Fruit Milk Porridge",
meal:"Breakfast",
ingredients:["Milk","Oats","Dates","Nuts"],
recipe:"Cook oats with milk and add dry fruits.",
serving:"1 bowl",
calories:650,
protein:25,
carbs:90,
fat:28,
fiber:11,
vitamins:"Iron, Calcium",
alternative:"Use seeds"
},


{
id:194,
name:"Chicken Shawarma Bowl",
meal:"Lunch",
ingredients:["Chicken","Rice","Yogurt Sauce","Vegetables"],
recipe:"Serve shawarma chicken with rice bowl.",
serving:"1 bowl",
calories:790,
protein:50,
carbs:95,
fat:28,
fiber:7,
vitamins:"Vitamin B6",
alternative:"Use beef"
},


{
id:195,
name:"Chocolate Banana Oat Shake",
meal:"Snack",
ingredients:["Banana","Milk","Oats","Cocoa"],
recipe:"Blend all ingredients.",
serving:"1 glass",
calories:670,
protein:28,
carbs:95,
fat:25,
fiber:9,
vitamins:"Magnesium, Potassium",
alternative:"Use dates"
},


{
id:196,
name:"Chicken Stuffed Omelette",
meal:"Breakfast",
ingredients:["Eggs","Chicken","Cheese","Vegetables"],
recipe:"Make omelette and fill with chicken.",
serving:"1 large omelette",
calories:650,
protein:45,
carbs:15,
fat:40,
fiber:3,
vitamins:"Vitamin D, Calcium",
alternative:"Use mushrooms"
},


{
id:197,
name:"Beef Rice And Egg Bowl",
meal:"Dinner",
ingredients:["Rice","Beef","Egg","Vegetables"],
recipe:"Serve beef and egg over rice.",
serving:"1 bowl",
calories:850,
protein:55,
carbs:100,
fat:38,
fiber:7,
vitamins:"Iron, Zinc",
alternative:"Use chicken"
},


{
id:198,
name:"Fruit Peanut Butter Toast",
meal:"Breakfast",
ingredients:["Bread","Peanut Butter","Banana","Apple"],
recipe:"Spread peanut butter and add fruits.",
serving:"2 slices",
calories:620,
protein:22,
carbs:85,
fat:28,
fiber:10,
vitamins:"Vitamin E, Vitamin C",
alternative:"Use almond butter"
},


{
id:199,
name:"Chicken Vegetable Pasta Bake",
meal:"Dinner",
ingredients:["Pasta","Chicken","Vegetables","Cheese"],
recipe:"Bake pasta with chicken and cheese topping.",
serving:"1 dish",
calories:840,
protein:55,
carbs:100,
fat:32,
fiber:8,
vitamins:"Calcium, Vitamin A",
alternative:"Use tofu"
},


{
id:200,
name:"Ultimate Weight Gain Smoothie",
meal:"Snack",
ingredients:["Banana","Milk","Oats","Peanut Butter","Dates"],
recipe:"Blend all ingredients into a high calorie smoothie.",
serving:"1 large glass",
calories:900,
protein:35,
carbs:130,
fat:35,
fiber:12,
vitamins:"Potassium, Calcium, Vitamin E",
alternative:"Use almond butter instead of peanut butter"
},

// WEIGHT LOSS RECIPES START

{
id:201,
name:"Oats Vegetable Bowl",
meal:"Breakfast",
ingredients:["Oats","Carrots","Peas","Spinach"],
recipe:"Cook oats with vegetables and spices.",
serving:"1 bowl",
calories:280,
protein:12,
carbs:45,
fat:6,
fiber:9,
vitamins:"Vitamin A, Vitamin C, Iron",
alternative:"Use any seasonal vegetables"
},


{
id:202,
name:"Greek Yogurt Fruit Bowl",
meal:"Breakfast",
ingredients:["Greek Yogurt","Apple","Berries","Chia Seeds"],
recipe:"Mix yogurt with fruits and chia seeds.",
serving:"1 bowl",
calories:250,
protein:20,
carbs:35,
fat:5,
fiber:8,
vitamins:"Calcium, Vitamin C",
alternative:"Use normal low-fat yogurt"
},


{
id:203,
name:"Grilled Chicken Salad",
meal:"Lunch",
ingredients:["Chicken Breast","Lettuce","Cucumber","Tomato"],
recipe:"Grill chicken and mix with fresh vegetables.",
serving:"1 plate",
calories:320,
protein:45,
carbs:15,
fat:8,
fiber:6,
vitamins:"Vitamin A, Vitamin C",
alternative:"Use grilled fish"
},


{
id:204,
name:"Vegetable Egg Omelette",
meal:"Breakfast",
ingredients:["Eggs","Spinach","Capsicum","Onion"],
recipe:"Cook eggs with vegetables as an omelette.",
serving:"2 eggs",
calories:260,
protein:18,
carbs:10,
fat:16,
fiber:4,
vitamins:"Vitamin D, Iron",
alternative:"Use egg whites"
},


{
id:205,
name:"Chicken Lettuce Wrap",
meal:"Lunch",
ingredients:["Chicken","Lettuce","Yogurt Sauce"],
recipe:"Wrap seasoned chicken inside lettuce leaves.",
serving:"4 wraps",
calories:300,
protein:40,
carbs:12,
fat:9,
fiber:5,
vitamins:"Vitamin B6",
alternative:"Use tofu instead of chicken"
},


{
id:206,
name:"Chia Seed Pudding",
meal:"Breakfast",
ingredients:["Chia Seeds","Milk","Honey","Fruits"],
recipe:"Mix chia seeds with milk and refrigerate overnight.",
serving:"1 cup",
calories:230,
protein:10,
carbs:30,
fat:8,
fiber:12,
vitamins:"Omega-3, Calcium",
alternative:"Use almond milk"
},


{
id:207,
name:"Lentil Vegetable Soup",
meal:"Dinner",
ingredients:["Lentils","Carrots","Tomatoes","Spinach"],
recipe:"Cook lentils with vegetables into soup.",
serving:"1 bowl",
calories:300,
protein:20,
carbs:45,
fat:5,
fiber:12,
vitamins:"Iron, Folate",
alternative:"Use beans"
},


{
id:208,
name:"Grilled Fish With Salad",
meal:"Dinner",
ingredients:["Fish","Cucumber","Lettuce","Lemon"],
recipe:"Grill fish and serve with fresh salad.",
serving:"1 plate",
calories:350,
protein:45,
carbs:10,
fat:14,
fiber:5,
vitamins:"Omega-3, Vitamin D",
alternative:"Use chicken breast"
},


{
id:209,
name:"Apple Cinnamon Oats",
meal:"Breakfast",
ingredients:["Oats","Apple","Cinnamon","Milk"],
recipe:"Cook oats with apple and cinnamon.",
serving:"1 bowl",
calories:290,
protein:12,
carbs:50,
fat:6,
fiber:8,
vitamins:"Vitamin C, Calcium",
alternative:"Use banana"
},


{
id:210,
name:"Chicken Quinoa Bowl",
meal:"Lunch",
ingredients:["Chicken","Quinoa","Vegetables"],
recipe:"Combine grilled chicken with quinoa and vegetables.",
serving:"1 bowl",
calories:380,
protein:45,
carbs:40,
fat:10,
fiber:8,
vitamins:"Iron, Magnesium",
alternative:"Use brown rice"
},

w



};