

// Recipe Database

const recipes = {

"omelette":{
name:"Vegetable Omelette",
calories:"220 kcal",
protein:"14 g",
carbs:"3 g",
fat:"17 g",
fiber:"1 g",
vitamins:"Vitamin A, D, B12",
recipe:"Beat 2 eggs, add chopped onion, tomato and capsicum. Cook in 1 tsp olive oil for 3-4 minutes.",
alternative:"Use spinach, mushrooms or cheese instead of capsicum."
},

"omelet":{
name:"Vegetable Omelette",
calories:"220 kcal",
protein:"14 g",
carbs:"3 g",
fat:"17 g",
fiber:"1 g",
vitamins:"Vitamin A, D, B12",
recipe:"Beat 2 eggs, add chopped onion, tomato and capsicum. Cook in 1 tsp olive oil.",
alternative:"Use spinach or mushrooms."
},

"protein shake":{
name:"Protein Shake",
calories:"320 kcal",
protein:"30 g",
carbs:"18 g",
fat:"8 g",
fiber:"3 g",
vitamins:"Calcium, Vitamin D",
recipe:"Blend 1 scoop protein powder, 250 ml milk and 1 banana.",
alternative:"Use yogurt instead of milk."
},

"banana shake":{
name:"Banana Shake",
calories:"350 kcal",
protein:"12 g",
carbs:"55 g",
fat:"10 g",
fiber:"4 g",
vitamins:"Vitamin B6, C",
recipe:"Blend 2 bananas with milk and honey.",
alternative:"Use dates instead of honey."
},

"oats":{
name:"Oats Bowl",
calories:"300 kcal",
protein:"12 g",
carbs:"45 g",
fat:"8 g",
fiber:"7 g",
vitamins:"B Vitamins",
recipe:"Cook oats in milk. Add fruits and nuts.",
alternative:"Use almond milk."
},

"chicken rice":{
name:"Chicken Rice",
calories:"550 kcal",
protein:"35 g",
carbs:"70 g",
fat:"15 g",
fiber:"4 g",
vitamins:"Vitamin B6",
recipe:"Cook grilled chicken with steamed rice.",
alternative:"Use brown rice."
},

"grilled chicken":{
name:"Grilled Chicken",
calories:"240 kcal",
protein:"38 g",
carbs:"0 g",
fat:"8 g",
fiber:"0 g",
vitamins:"Vitamin B6",
recipe:"Season chicken and grill for 15 minutes.",
alternative:"Use turkey breast."
},

"salad":{
name:"Garden Salad",
calories:"150 kcal",
protein:"5 g",
carbs:"18 g",
fat:"4 g",
fiber:"6 g",
vitamins:"Vitamin A, C, K",
recipe:"Mix lettuce, cucumber, tomato and carrots.",
alternative:"Add broccoli or spinach."
},

"biryani":{
name:"Chicken Biryani",
calories:"480 kcal",
protein:"22 g",
carbs:"55 g",
fat:"18 g",
fiber:"3 g",
vitamins:"Iron, B Vitamins",
recipe:"Cook rice with chicken, spices and yogurt.",
alternative:"Use brown rice."
},

"pasta":{
name:"Chicken Pasta",
calories:"430 kcal",
protein:"24 g",
carbs:"52 g",
fat:"12 g",
fiber:"4 g",
vitamins:"Vitamin B",
recipe:"Cook pasta and mix with grilled chicken and vegetables.",
alternative:"Use whole wheat pasta."
},

"pizza":{
name:"Healthy Pizza",
calories:"310 kcal",
protein:"15 g",
carbs:"34 g",
fat:"12 g",
fiber:"3 g",
vitamins:"Calcium",
recipe:"Use whole wheat base, cheese and vegetables.",
alternative:"Use chicken instead of pepperoni."
},

"apple":{
name:"Apple",
calories:"95 kcal",
protein:"0.5 g",
carbs:"25 g",
fat:"0.3 g",
fiber:"4.4 g",
vitamins:"Vitamin C",
recipe:"Wash and eat fresh.",
alternative:"Pear."
},

"milk":{
name:"Whole Milk",
calories:"150 kcal",
protein:"8 g",
carbs:"12 g",
fat:"8 g",
fiber:"0 g",
vitamins:"Calcium, Vitamin D",
recipe:"Serve chilled.",
alternative:"Soy milk."
},

"egg sandwich":{
name:"Egg Sandwich",
calories:"320 kcal",
protein:"18 g",
carbs:"28 g",
fat:"14 g",
fiber:"3 g",
vitamins:"A, D, B12",
recipe:"Toast two slices of bread. Add boiled eggs, lettuce and tomato.",
alternative:"Use whole wheat bread or avocado."
},

"peanut butter toast":{
name:"Peanut Butter Toast",
calories:"340 kcal",
protein:"13 g",
carbs:"30 g",
fat:"18 g",
fiber:"5 g",
vitamins:"Vitamin E",
recipe:"Spread peanut butter on toasted bread.",
alternative:"Use almond butter."
},

"avocado toast":{
name:"Avocado Toast",
calories:"290 kcal",
protein:"8 g",
carbs:"28 g",
fat:"16 g",
fiber:"8 g",
vitamins:"K, C, E",
recipe:"Mash avocado on whole wheat toast and sprinkle black pepper.",
alternative:"Add boiled egg."
},

"grilled fish":{
name:"Grilled Fish",
calories:"220 kcal",
protein:"30 g",
carbs:"0 g",
fat:"9 g",
fiber:"0 g",
vitamins:"Omega-3, D",
recipe:"Season fish and grill for 10 minutes.",
alternative:"Use salmon or tuna."
},

"brown rice":{
name:"Brown Rice",
calories:"216 kcal",
protein:"5 g",
carbs:"45 g",
fat:"2 g",
fiber:"3.5 g",
vitamins:"B Vitamins",
recipe:"Cook brown rice until soft.",
alternative:"Use quinoa."
},

"lentil soup":{
name:"Lentil Soup",
calories:"180 kcal",
protein:"12 g",
carbs:"28 g",
fat:"2 g",
fiber:"9 g",
vitamins:"Iron, Folate",
recipe:"Cook lentils with onion, garlic and spices.",
alternative:"Use chickpeas."
},

"fruit salad":{
name:"Fruit Salad",
calories:"180 kcal",
protein:"2 g",
carbs:"45 g",
fat:"1 g",
fiber:"6 g",
vitamins:"A, C",
recipe:"Mix apple, banana, orange and grapes.",
alternative:"Add berries."
},

"greek yogurt":{
name:"Greek Yogurt",
calories:"120 kcal",
protein:"17 g",
carbs:"6 g",
fat:"3 g",
fiber:"0 g",
vitamins:"Calcium",
recipe:"Serve chilled with honey.",
alternative:"Add fruits."
},

"boiled eggs":{
name:"Boiled Eggs",
calories:"155 kcal",
protein:"13 g",
carbs:"1 g",
fat:"11 g",
fiber:"0 g",
vitamins:"A, D, B12",
recipe:"Boil eggs for 8-10 minutes.",
alternative:"Poached eggs."
},

"vegetable soup":{
name:"Vegetable Soup",
calories:"110 kcal",
protein:"4 g",
carbs:"18 g",
fat:"2 g",
fiber:"5 g",
vitamins:"A, C",
recipe:"Boil mixed vegetables with herbs.",
alternative:"Add beans."
},

"chickpea salad":{
name:"Chickpea Salad",
calories:"260 kcal",
protein:"12 g",
carbs:"35 g",
fat:"7 g",
fiber:"9 g",
vitamins:"Folate",
recipe:"Mix chickpeas with cucumber, tomato and lemon.",
alternative:"Use kidney beans."
},

"mango shake":{
name:"Mango Shake",
calories:"370 kcal",
protein:"10 g",
carbs:"60 g",
fat:"11 g",
fiber:"4 g",
vitamins:"A, C",
recipe:"Blend mango with milk and honey.",
alternative:"Use yogurt."
},

"dates shake":{
name:"Dates Shake",
calories:"410 kcal",
protein:"12 g",
carbs:"65 g",
fat:"12 g",
fiber:"5 g",
vitamins:"Potassium",
recipe:"Blend dates with milk.",
alternative:"Add almonds."
},

"chicken sandwich":{
name:"Chicken Sandwich",
calories:"390 kcal",
protein:"28 g",
carbs:"34 g",
fat:"13 g",
fiber:"4 g",
vitamins:"B6",
recipe:"Fill whole wheat bread with grilled chicken and vegetables.",
alternative:"Use turkey."
},

"smoothie bowl":{
name:"Smoothie Bowl",
calories:"310 kcal",
protein:"11 g",
carbs:"48 g",
fat:"8 g",
fiber:"8 g",
vitamins:"A, C",
recipe:"Blend frozen fruits and yogurt. Top with oats.",
alternative:"Add chia seeds."
},

"banana pancakes":{
name:"Banana Pancakes",
calories:"360 kcal",
protein:"12 g",
carbs:"55 g",
fat:"10 g",
fiber:"4 g",
vitamins:"B6",
recipe:"Mix banana, egg and oats. Cook on a pan.",
alternative:"Use blueberries."
},

"banana shake":
{
name:"Banana Shake",
calories:"350 kcal",
protein:"12g",
carbs:"55g",
fat:"10g",
recipe:"Blend 2 bananas + 1 glass milk + 1 spoon peanut butter."
},

"chicken rice":
{
name:"Chicken Rice",
calories:"550 kcal",
protein:"35g",
carbs:"70g",
fat:"15g",
recipe:"Cook rice with grilled chicken and vegetables."
},

"oats":
{
name:"Oats Bowl",
calories:"300 kcal",
protein:"12g",
carbs:"45g",
fat:"8g",
recipe:"Mix oats with milk, fruits and nuts."
},

"omelette":
{
name:"Omelette",
calories:"220 kcal",
protein:"14g",
carbs:"3g",
fat:"17g",
recipe:"Cook 2 eggs with vegetables."
},

"salad":
{
name:"Healthy Salad",
calories:"150 kcal",
protein:"5g",
carbs:"20g",
fat:"4g",
recipe:"Mix cucumber, tomato, lettuce and yogurt dressing."
},
"banana shake":{
category:"Weight Gain",
name:"Banana Shake",
calories:"350 kcal",
protein:"12 g",
carbs:"55 g",
fat:"10 g",
fiber:"4 g",
vitamins:"B6, C",
ingredients:["2 Bananas","250ml Milk","1 tbsp Honey"],
recipe:"Blend all ingredients until smooth.",
alternative:"Use dates instead of honey."
},

"protein shake":{
category:"Weight Gain",
name:"Protein Shake",
calories:"320 kcal",
protein:"30 g",
carbs:"18 g",
fat:"8 g",
fiber:"2 g",
vitamins:"D, Calcium",
ingredients:["1 Scoop Protein","250ml Milk","1 Banana"],
recipe:"Blend all ingredients together.",
alternative:"Use yogurt instead of milk."
},

"mango shake":{
category:"Weight Gain",
name:"Mango Shake",
calories:"370 kcal",
protein:"10 g",
carbs:"60 g",
fat:"11 g",
fiber:"4 g",
vitamins:"A,C",
ingredients:["1 Mango","250ml Milk","Honey"],
recipe:"Blend until creamy.",
alternative:"Add ice cream."
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
ingredients:["8 Dates","250ml Milk"],
recipe:"Blend dates with milk.",
alternative:"Add almonds."
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
ingredients:["2 Bread Slices","2 tbsp Peanut Butter"],
recipe:"Toast bread and spread peanut butter.",
alternative:"Use almond butter."
},

"egg sandwich":{
category:"Weight Gain",
name:"Egg Sandwich",
calories:"320 kcal",
protein:"18 g",
carbs:"28 g",
fat:"14 g",
fiber:"3 g",
vitamins:"A,D",
ingredients:["2 Eggs","Bread","Tomato"],
recipe:"Fill bread with cooked eggs.",
alternative:"Use cheese."
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
ingredients:["Chicken","Bread","Lettuce"],
recipe:"Fill bread with grilled chicken.",
alternative:"Use turkey."
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
recipe:"Cook chicken and serve over rice.",
alternative:"Use brown rice."
},

"chicken biryani":{
category:"Weight Gain",
name:"Chicken Biryani",
calories:"480 kcal",
protein:"22 g",
carbs:"55 g",
fat:"18 g",
fiber:"3 g",
vitamins:"Iron",
ingredients:["Rice","Chicken","Yogurt","Spices"],
recipe:"Cook rice with marinated chicken.",
alternative:"Use brown rice."
},

"pasta":{
category:"Weight Gain",
name:"Chicken Pasta",
calories:"430 kcal",
protein:"24 g",
carbs:"52 g",
fat:"12 g",
fiber:"4 g",
vitamins:"B",
ingredients:["Pasta","Chicken","Sauce"],
recipe:"Cook pasta and mix with chicken.",
alternative:"Whole wheat pasta."
},

"pizza":{
category:"Weight Gain",
name:"Healthy Pizza",
calories:"310 kcal",
protein:"15 g",
carbs:"34 g",
fat:"12 g",
fiber:"3 g",
vitamins:"Calcium",
ingredients:["Pizza Base","Cheese","Vegetables"],
recipe:"Bake until cheese melts.",
alternative:"Whole wheat base."
},

"banana pancakes":{
category:"Weight Gain",
name:"Banana Pancakes",
calories:"360 kcal",
protein:"12 g",
carbs:"55 g",
fat:"10 g",
fiber:"4 g",
vitamins:"B6",
ingredients:["Banana","Egg","Oats"],
recipe:"Cook pancake batter on pan.",
alternative:"Add blueberries."
},

"mixed nuts":{
category:"Weight Gain",
name:"Mixed Nuts",
calories:"607 kcal",
protein:"20 g",
carbs:"21 g",
fat:"54 g",
fiber:"8 g",
vitamins:"E",
ingredients:["Almonds","Walnuts","Cashews"],
recipe:"Eat as a snack.",
alternative:"Add raisins."
},

"oats":{
category:"Weight Loss",
name:"Oats Bowl",
calories:"300 kcal",
protein:"12 g",
carbs:"45 g",
fat:"8 g",
fiber:"7 g",
vitamins:"B",
ingredients:["Oats","Milk","Fruits"],
recipe:"Cook oats and top with fruits.",
alternative:"Use almond milk."
},

"greek yogurt":{
category:"Weight Loss",
name:"Greek Yogurt",
calories:"120 kcal",
protein:"17 g",
carbs:"6 g",
fat:"3 g",
fiber:"0 g",
vitamins:"Calcium",
ingredients:["Greek Yogurt","Honey"],
recipe:"Serve chilled.",
alternative:"Add berries."
},

"grilled chicken":{
category:"Weight Loss",
name:"Grilled Chicken",
calories:"240 kcal",
protein:"38 g",
carbs:"0 g",
fat:"8 g",
fiber:"0 g",
vitamins:"B6",
ingredients:["Chicken","Pepper","Salt"],
recipe:"Grill chicken until cooked.",
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
vitamins:"Omega-3",
ingredients:["Fish","Lemon","Salt"],
recipe:"Grill fish for 10 minutes.",
alternative:"Salmon."
},

"salad":{
category:"Weight Loss",
name:"Garden Salad",
calories:"150 kcal",
protein:"5 g",
carbs:"18 g",
fat:"4 g",
fiber:"6 g",
vitamins:"A,C,K",
ingredients:["Lettuce","Tomato","Cucumber"],
recipe:"Mix vegetables together.",
alternative:"Add spinach."
},

"vegetable soup":{
category:"Weight Loss",
name:"Vegetable Soup",
calories:"110 kcal",
protein:"4 g",
carbs:"18 g",
fat:"2 g",
fiber:"5 g",
vitamins:"A,C",
ingredients:["Mixed Vegetables","Water"],
recipe:"Boil vegetables for 20 minutes.",
alternative:"Add beans."
},

"lentil soup":{
category:"Weight Loss",
name:"Lentil Soup",
calories:"180 kcal",
protein:"12 g",
carbs:"28 g",
fat:"2 g",
fiber:"9 g",
vitamins:"Iron",
ingredients:["Lentils","Onion","Garlic"],
recipe:"Cook lentils until soft.",
alternative:"Use chickpeas."
},

"fruit salad":{
category:"Weight Loss",
name:"Fruit Salad",
calories:"180 kcal",
protein:"2 g",
carbs:"45 g",
fat:"1 g",
fiber:"6 g",
vitamins:"A,C",
ingredients:["Apple","Orange","Banana"],
recipe:"Mix fruits together.",
alternative:"Add berries."
},

"brown rice":{
category:"Weight Loss",
name:"Brown Rice",
calories:"216 kcal",
protein:"5 g",
carbs:"45 g",
fat:"2 g",
fiber:"3.5 g",
vitamins:"B",
ingredients:["Brown Rice"],
recipe:"Cook until soft.",
alternative:"Quinoa."
},

"boiled eggs":{
category:"Weight Loss",
name:"Boiled Eggs",
calories:"155 kcal",
protein:"13 g",
carbs:"1 g",
fat:"11 g",
fiber:"0 g",
vitamins:"A,D",
ingredients:["Eggs"],
recipe:"Boil eggs for 10 minutes.",
alternative:"Poached eggs."
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
ingredients:["Chickpeas","Tomato","Onion"],
recipe:"Mix all ingredients.",
alternative:"Kidney beans."
},
"avocado toast":{
category:"Weight Loss",
name:"Avocado Toast",
calories:"290 kcal",
protein:"8 g",
carbs:"28 g",
fat:"16 g",
fiber:"8 g",
vitamins:"A, E, K",
ingredients:["Whole Wheat Bread","Avocado","Black Pepper"],
recipe:"Toast bread, mash avocado on top and sprinkle black pepper.",
alternative:"Add boiled egg."
},

"spinach smoothie":{
category:"Weight Loss",
name:"Spinach Smoothie",
calories:"160 kcal",
protein:"6 g",
carbs:"28 g",
fat:"3 g",
fiber:"5 g",
vitamins:"A, C, K",
ingredients:["Spinach","Banana","Milk"],
recipe:"Blend all ingredients until smooth.",
alternative:"Use almond milk."
},

"cucumber sandwich":{
category:"Weight Loss",
name:"Cucumber Sandwich",
calories:"210 kcal",
protein:"8 g",
carbs:"30 g",
fat:"5 g",
fiber:"4 g",
vitamins:"K",
ingredients:["Bread","Cucumber","Yogurt"],
recipe:"Fill bread with cucumber slices and yogurt spread.",
alternative:"Use lettuce."
},

"tuna sandwich":{
category:"Weight Loss",
name:"Tuna Sandwich",
calories:"310 kcal",
protein:"26 g",
carbs:"29 g",
fat:"9 g",
fiber:"3 g",
vitamins:"D, B12",
ingredients:["Bread","Tuna","Lettuce"],
recipe:"Mix tuna with yogurt and make a sandwich.",
alternative:"Use chicken."
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
alternative:"Use brown rice."
},

"apple oatmeal":{
category:"Weight Loss",
name:"Apple Oatmeal",
calories:"260 kcal",
protein:"9 g",
carbs:"46 g",
fat:"5 g",
fiber:"6 g",
vitamins:"C",
ingredients:["Oats","Apple","Milk"],
recipe:"Cook oats and add apple pieces.",
alternative:"Use pear."
},

"vegetable wrap":{
category:"Weight Loss",
name:"Vegetable Wrap",
calories:"290 kcal",
protein:"9 g",
carbs:"38 g",
fat:"8 g",
fiber:"7 g",
vitamins:"A,C",
ingredients:["Whole Wheat Wrap","Vegetables"],
recipe:"Fill wrap with vegetables.",
alternative:"Add grilled chicken."
},

"stir fry vegetables":{
category:"Weight Loss",
name:"Stir Fry Vegetables",
calories:"180 kcal",
protein:"6 g",
carbs:"24 g",
fat:"6 g",
fiber:"8 g",
vitamins:"A,C,K",
ingredients:["Broccoli","Carrot","Beans"],
recipe:"Cook vegetables in olive oil.",
alternative:"Add tofu."
},

"cottage cheese bowl":{
category:"Weight Loss",
name:"Cottage Cheese Bowl",
calories:"210 kcal",
protein:"22 g",
carbs:"10 g",
fat:"8 g",
fiber:"1 g",
vitamins:"Calcium",
ingredients:["Cottage Cheese","Tomatoes"],
recipe:"Serve chilled with vegetables.",
alternative:"Greek yogurt."
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
recipe:"Blend until creamy.",
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
ingredients:["Chocolate Syrup","Milk"],
recipe:"Blend with ice.",
alternative:"Cocoa powder."
},

"nut smoothie":{
category:"Weight Gain",
name:"Nut Smoothie",
calories:"460 kcal",
protein:"18 g",
carbs:"42 g",
fat:"24 g",
fiber:"6 g",
vitamins:"Vitamin E",
ingredients:["Almonds","Cashews","Milk"],
recipe:"Blend nuts with milk.",
alternative:"Walnuts."
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
ingredients:["Rice","Vegetables","Egg"],
recipe:"Stir fry cooked rice.",
alternative:"Chicken fried rice."
},

"beef burger":{
category:"Weight Gain",
name:"Beef Burger",
calories:"620 kcal",
protein:"32 g",
carbs:"46 g",
fat:"34 g",
fiber:"3 g",
vitamins:"Iron,B12",
ingredients:["Beef Patty","Bun","Cheese"],
recipe:"Grill patty and assemble burger.",
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
ingredients:["Chicken Patty","Bun"],
recipe:"Grill chicken patty and serve.",
alternative:"Turkey burger."
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
recipe:"Prepare white sauce and mix pasta.",
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
recipe:"Cook pasta in creamy Alfredo sauce.",
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
recipe:"Cook macaroni and add cheese sauce.",
alternative:"Whole wheat macaroni."
},

"dry fruit mix":{
category:"Weight Gain",
name:"Dry Fruit Mix",
calories:"590 kcal",
protein:"16 g",
carbs:"34 g",
fat:"44 g",
fiber:"8 g",
vitamins:"Vitamin E",
ingredients:["Almonds","Walnuts","Dates","Raisins"],
recipe:"Mix and enjoy as a snack.",
alternative:"Add pistachios."
},

"homemade granola":{
category:"Weight Loss",
name:"Homemade Granola",
calories:"240 kcal",
protein:"8 g",
carbs:"34 g",
fat:"8 g",
fiber:"5 g",
vitamins:"B Vitamins",
ingredients:["Oats","Honey","Nuts"],
recipe:"Bake oats, honey and nuts until golden.",
alternative:"Add pumpkin seeds."
},
"chicken tikka":{
category:"Weight Gain",
name:"Chicken Tikka",
calories:"360 kcal",
protein:"42 g",
carbs:"4 g",
fat:"18 g",
fiber:"1 g",
vitamins:"B6, B12",
ingredients:["Chicken","Yogurt","Tikka Masala"],
recipe:"Marinate chicken for 2 hours and grill until cooked.",
alternative:"Use turkey breast."
},

"beef steak":{
category:"Weight Gain",
name:"Beef Steak",
calories:"420 kcal",
protein:"40 g",
carbs:"2 g",
fat:"28 g",
fiber:"0 g",
vitamins:"Iron, B12",
ingredients:["Beef","Black Pepper","Butter"],
recipe:"Season steak and grill for 8-10 minutes.",
alternative:"Use chicken breast."
},

"chicken karahi":{
category:"Weight Gain",
name:"Chicken Karahi",
calories:"470 kcal",
protein:"35 g",
carbs:"10 g",
fat:"30 g",
fiber:"2 g",
vitamins:"A, C",
ingredients:["Chicken","Tomatoes","Green Chilies"],
recipe:"Cook chicken with tomatoes and spices.",
alternative:"Use less oil for a lighter version."
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
recipe:"Cook minced beef with onions and spices.",
alternative:"Chicken keema."
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
ingredients:["Chicken","Yogurt","Cream"],
recipe:"Cook chicken in creamy qorma gravy.",
alternative:"Use low-fat yogurt."
},

"lassi":{
category:"Weight Gain",
name:"Sweet Lassi",
calories:"260 kcal",
protein:"9 g",
carbs:"36 g",
fat:"8 g",
fiber:"0 g",
vitamins:"Calcium",
ingredients:["Yogurt","Milk","Sugar"],
recipe:"Blend until smooth.",
alternative:"Add mango."
},

"almond milkshake":{
category:"Weight Gain",
name:"Almond Milkshake",
calories:"420 kcal",
protein:"15 g",
carbs:"38 g",
fat:"22 g",
fiber:"5 g",
vitamins:"Vitamin E",
ingredients:["Milk","Almonds","Honey"],
recipe:"Blend everything together.",
alternative:"Use dates."
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
ingredients:["Nuts","Seeds","Raisins"],
recipe:"Mix all ingredients.",
alternative:"Add dark chocolate."
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

"chicken shawarma":{
category:"Weight Gain",
name:"Chicken Shawarma",
calories:"510 kcal",
protein:"30 g",
carbs:"48 g",
fat:"20 g",
fiber:"4 g",
vitamins:"B6",
ingredients:["Chicken","Pita Bread","Garlic Sauce"],
recipe:"Fill pita bread with grilled chicken.",
alternative:"Whole wheat pita."
},

"broccoli":{
category:"Weight Loss",
name:"Steamed Broccoli",
calories:"35 kcal",
protein:"3 g",
carbs:"7 g",
fat:"0 g",
fiber:"3 g",
vitamins:"A, C, K",
ingredients:["Broccoli"],
recipe:"Steam for 5 minutes.",
alternative:"Cauliflower."
},

"spinach salad":{
category:"Weight Loss",
name:"Spinach Salad",
calories:"120 kcal",
protein:"5 g",
carbs:"10 g",
fat:"5 g",
fiber:"4 g",
vitamins:"A, C, K",
ingredients:["Spinach","Tomatoes","Cucumber"],
recipe:"Mix fresh vegetables together.",
alternative:"Add boiled egg."
},

"caesar salad":{
category:"Weight Loss",
name:"Caesar Salad",
calories:"210 kcal",
protein:"14 g",
carbs:"12 g",
fat:"10 g",
fiber:"3 g",
vitamins:"A",
ingredients:["Lettuce","Chicken","Parmesan"],
recipe:"Mix all ingredients with light dressing.",
alternative:"Skip cheese for fewer calories."
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
alternative:"Add celery."
},

"tofu stir fry":{
category:"Weight Loss",
name:"Tofu Stir Fry",
calories:"240 kcal",
protein:"18 g",
carbs:"14 g",
fat:"12 g",
fiber:"4 g",
vitamins:"Calcium",
ingredients:["Tofu","Broccoli","Carrots"],
recipe:"Stir fry tofu with vegetables.",
alternative:"Use paneer."
},

"grilled shrimp":{
category:"Weight Loss",
name:"Grilled Shrimp",
calories:"180 kcal",
protein:"34 g",
carbs:"2 g",
fat:"3 g",
fiber:"0 g",
vitamins:"B12",
ingredients:["Shrimp","Lemon","Garlic"],
recipe:"Grill shrimp for 5 minutes.",
alternative:"Use fish."
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

"mint tea":{
category:"Weight Loss",
name:"Mint Tea",
calories:"2 kcal",
protein:"0 g",
carbs:"0 g",
fat:"0 g",
fiber:"0 g",
vitamins:"Antioxidants",
ingredients:["Mint Leaves","Water"],
recipe:"Boil mint leaves for 5 minutes.",
alternative:"Green tea."
},

"air popped popcorn":{
category:"Weight Loss",
name:"Air Popped Popcorn",
calories:"95 kcal",
protein:"3 g",
carbs:"19 g",
fat:"1 g",
fiber:"4 g",
vitamins:"B Vitamins",
ingredients:["Corn Kernels"],
recipe:"Air-pop without butter.",
alternative:"Light seasoning."
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
ingredients:["Chickpeas","Olive Oil","Paprika"],
recipe:"Bake until crispy.",
alternative:"Use black chickpeas."
},

"apple slices peanut butter":{
category:"Weight Loss",
name:"Apple with Peanut Butter",
calories:"220 kcal",
protein:"6 g",
carbs:"24 g",
fat:"11 g",
fiber:"5 g",
vitamins:"Vitamin C",
ingredients:["Apple","Peanut Butter"],
recipe:"Slice apple and spread peanut butter.",
alternative:"Use almond butter."
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

"boiled sweet potato":{
category:"Weight Loss",
name:"Boiled Sweet Potato",
calories:"112 kcal",
protein:"2 g",
carbs:"26 g",
fat:"0 g",
fiber:"4 g",
vitamins:"Vitamin A",
ingredients:["Sweet Potato"],
recipe:"Boil until soft.",
alternative:"Bake it."
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
ingredients:["Eggs","Spinach","Tomato"],
recipe:"Cook eggs with vegetables.",
alternative:"Add mushrooms."
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
recipe:"Soak chia seeds overnight in milk.",
alternative:"Use almond milk."
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
recipe:"Cook beaten eggs on low heat.",
alternative:"Add spinach."
},

"turkey sandwich":{
category:"Weight Loss",
name:"Turkey Sandwich",
calories:"300 kcal",
protein:"24 g",
carbs:"30 g",
fat:"8 g",
fiber:"4 g",
vitamins:"B6",
ingredients:["Turkey","Bread","Lettuce"],
recipe:"Assemble sandwich and serve.",
alternative:"Chicken breast."
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
ingredients:["Oranges"],
recipe:"Blend and strain oranges.",
alternative:"Sweet lime."
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

"carrot juice":{
category:"Weight Loss",
name:"Carrot Juice",
calories:"95 kcal",
protein:"2 g",
carbs:"22 g",
fat:"0 g",
fiber:"2 g",
vitamins:"Vitamin A",
ingredients:["Carrots"],
recipe:"Blend fresh carrots.",
alternative:"Add apple."
},

"boiled chicken":{
category:"Weight Loss",
name:"Boiled Chicken",
calories:"220 kcal",
protein:"40 g",
carbs:"0 g",
fat:"5 g",
fiber:"0 g",
vitamins:"B6",
ingredients:["Chicken Breast"],
recipe:"Boil until cooked.",
alternative:"Turkey."
},

"paneer salad":{
category:"Weight Loss",
name:"Paneer Salad",
calories:"240 kcal",
protein:"18 g",
carbs:"9 g",
fat:"14 g",
fiber:"2 g",
vitamins:"Calcium",
ingredients:["Paneer","Vegetables"],
recipe:"Mix paneer cubes with vegetables.",
alternative:"Tofu."
},

"vegetable noodles":{
category:"Weight Loss",
name:"Vegetable Noodles",
calories:"280 kcal",
protein:"9 g",
carbs:"46 g",
fat:"6 g",
fiber:"5 g",
vitamins:"A,C",
ingredients:["Whole Wheat Noodles","Vegetables"],
recipe:"Cook noodles with vegetables.",
alternative:"Rice noodles."
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
recipe:"Blend until smooth.",
alternative:"Cashews."
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
alternative:"Honey."
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
ingredients:["Oats","Cocoa","Milk"],
recipe:"Cook oats with cocoa.",
alternative:"Dark chocolate."
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
recipe:"Toast and serve.",
alternative:"Mozzarella."
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
ingredients:["Burger Bun","Cheese","Patty"],
recipe:"Assemble and grill.",
alternative:"Chicken burger."
},

"fried chicken":{
category:"Weight Gain",
name:"Fried Chicken",
calories:"590 kcal",
protein:"35 g",
carbs:"20 g",
fat:"40 g",
fiber:"1 g",
vitamins:"B12",
ingredients:["Chicken","Flour","Oil"],
recipe:"Coat and fry until golden.",
alternative:"Air fryer."
},

"bbq chicken":{
category:"Weight Gain",
name:"BBQ Chicken",
calories:"450 kcal",
protein:"38 g",
carbs:"10 g",
fat:"25 g",
fiber:"1 g",
vitamins:"B6",
ingredients:["Chicken","BBQ Sauce"],
recipe:"Grill with BBQ sauce.",
alternative:"Honey mustard."
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

"naan with chicken":{
category:"Weight Gain",
name:"Naan with Chicken",
calories:"620 kcal",
protein:"32 g",
carbs:"66 g",
fat:"24 g",
fiber:"4 g",
vitamins:"B12",
ingredients:["Naan","Chicken Curry"],
recipe:"Serve hot.",
alternative:"Chapati."
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
recipe:"Mix and chill.",
alternative:"Rose milk."
},

"custard":{
category:"Weight Gain",
name:"Fruit Custard",
calories:"350 kcal",
protein:"8 g",
carbs:"52 g",
fat:"12 g",
fiber:"3 g",
vitamins:"A,C",
ingredients:["Milk","Custard Powder","Fruits"],
recipe:"Prepare custard and add fruits.",
alternative:"Mango custard."
},

"rice pudding":{
category:"Weight Gain",
name:"Rice Pudding",
calories:"390 kcal",
protein:"10 g",
carbs:"56 g",
fat:"14 g",
fiber:"1 g",
vitamins:"Calcium",
ingredients:["Rice","Milk","Sugar"],
recipe:"Cook rice in milk.",
alternative:"Brown rice."
},

"milk tea":{
category:"Weight Gain",
name:"Milk Tea",
calories:"130 kcal",
protein:"4 g",
carbs:"16 g",
fat:"5 g",
fiber:"0 g",
vitamins:"Calcium",
ingredients:["Milk","Tea","Sugar"],
recipe:"Boil tea with milk.",
alternative:"Honey."
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
recipe:"Heat milk and cocoa.",
alternative:"Dark chocolate."
}

};



// Recipe Search

function searchRecipe(){

let search = document
.getElementById("searchBox")
.value
.toLowerCase()
.trim();

let result = document.getElementById("result");


if(search === ""){
result.innerHTML = 
"<p>Please type a food name to search.</p>";
return;
}


let foundRecipes = [];


for(let key in recipes){

if(
key.includes(search) ||
recipes[key].name.toLowerCase().includes(search)
){

foundRecipes.push(recipes[key]);

}

}



if(foundRecipes.length > 0){


result.innerHTML = "";


foundRecipes.forEach(food => {


result.innerHTML += `

<div class="recipe-card">

<h2>${food.name}</h2>

<h4>Category:
${food.category}</h4>


<p>🔥 Calories:
${food.calories}</p>

<p>💪 Protein:
${food.protein}</p>

<p>🍚 Carbohydrates:
${food.carbs}</p>

<p>🥑 Fat:
${food.fat}</p>

<p>🌾 Fiber:
${food.fiber}</p>

<p>💊 Vitamins:
${food.vitamins}</p>


<h3>Ingredients</h3>

<ul>

${food.ingredients.map(item =>
`<li>${item}</li>`
).join("")}

</ul>


<h3>Recipe</h3>

<p>${food.recipe}</p>


<h3>Alternative</h3>

<p>${food.alternative}</p>


</div>

`;

});


}

else{


result.innerHTML = `

<h3>No recipe found 😢</h3>

<p>
Try searching:
<br>
Chicken, Rice, Shake, Salad, Egg, Oats, Pasta, Soup, Drink
</p>

`;

}
const weightGainPlan = [

{
day:"Day 1",
breakfast:"Oats + Banana + Milk + Peanut Butter",
brunch:"Dry fruit shake",
lunch:"Chicken rice + Yogurt",
snack:"Dates + Nuts",
dinner:"Chicken curry + Chapati"
},

{
day:"Day 2",
breakfast:"Egg omelette + Toast + Milk",
brunch:"Banana shake",
lunch:"Beef pulao + Salad",
snack:"Peanut butter sandwich",
dinner:"Fish + Rice"
},

{
day:"Day 3",
breakfast:"Paratha + Egg + Yogurt",
brunch:"Mango shake",
lunch:"Chicken karahi + Rice",
snack:"Trail mix",
dinner:"Keema + Chapati"
},

{
day:"Day 4",
breakfast:"Oats smoothie + Nuts",
brunch:"Cheese sandwich",
lunch:"Chicken pasta",
snack:"Milk + Dates",
dinner:"Chicken tikka + Chapati"
},

{
day:"Day 5",
breakfast:"French toast + Milk",
brunch:"Almond shake",
lunch:"Biryani + Raita",
snack:"Peanut butter toast",
dinner:"Beef curry + Rice"
},

{
day:"Day 6",
breakfast:"Egg sandwich + Fruit",
brunch:"Chocolate milkshake",
lunch:"Chicken burger",
snack:"Dry fruits",
dinner:"Pasta + Chicken"
},

{
day:"Day 7",
breakfast:"Omelette + Paratha",
brunch:"Banana oats shake",
lunch:"Pulao + Chicken",
snack:"Nuts",
dinner:"Qorma + Chapati"
},

// Repeat pattern with new meals

{
day:"Day 8",
breakfast:"Milk oats + Banana",
brunch:"Nut smoothie",
lunch:"Chicken shawarma",
snack:"Dates",
dinner:"Rice + Curry"
},

{
day:"Day 9",
breakfast:"Eggs + Toast",
brunch:"Mango shake",
lunch:"Beef steak + Rice",
snack:"Cheese sandwich",
dinner:"Chicken curry"
},

{
day:"Day 10",
breakfast:"Pancakes + Milk",
brunch:"Dry fruit shake",
lunch:"Chicken biryani",
snack:"Nuts",
dinner:"Fish + Chapati"
},

{
day:"Day 11",
breakfast:"Oats bowl",
brunch:"Peanut butter smoothie",
lunch:"Keema rice",
snack:"Fruit shake",
dinner:"Chicken karahi"
},

{
day:"Day 12",
breakfast:"Cheese omelette",
brunch:"Milkshake",
lunch:"Pasta",
snack:"Dates",
dinner:"Beef curry"
},

{
day:"Day 13",
breakfast:"Paratha + Eggs",
brunch:"Almond milkshake",
lunch:"Chicken pulao",
snack:"Trail mix",
dinner:"Chicken tikka"
},

{
day:"Day 14",
breakfast:"French toast",
brunch:"Banana shake",
lunch:"Biryani",
snack:"Dry fruits",
dinner:"Qorma + Rice"
}

];


const weightLossPlan = [

{
day:"Day 1",
breakfast:"Oats + Green Tea",
brunch:"Apple + Yogurt",
lunch:"Grilled Chicken + Salad",
snack:"Roasted Chickpeas",
dinner:"Vegetable Soup"
},

{
day:"Day 2",
breakfast:"Boiled Eggs + Fruit",
brunch:"Green Smoothie",
lunch:"Brown Rice + Fish",
snack:"Nuts",
dinner:"Chicken Salad"
},

{
day:"Day 3",
breakfast:"Greek Yogurt + Oats",
brunch:"Lemon Water + Fruit",
lunch:"Chicken Wrap",
snack:"Popcorn",
dinner:"Soup + Vegetables"
},

{
day:"Day 4",
breakfast:"Vegetable Omelette",
brunch:"Fruit Bowl",
lunch:"Quinoa Bowl",
snack:"Green Tea",
dinner:"Grilled Fish"
},

{
day:"Day 5",
breakfast:"Apple Oatmeal",
brunch:"Yogurt",
lunch:"Chicken Salad",
snack:"Roasted Chickpeas",
dinner:"Vegetable Soup"
},

{
day:"Day 6",
breakfast:"Smoothie Bowl",
brunch:"Green Tea",
lunch:"Brown Rice + Chicken",
snack:"Fruit",
dinner:"Salad"
},

{
day:"Day 7",
breakfast:"Eggs + Toast",
brunch:"Berry Smoothie",
lunch:"Fish + Vegetables",
snack:"Nuts",
dinner:"Soup"
},

{
day:"Day 8",
breakfast:"Chia Pudding",
brunch:"Fruit Bowl",
lunch:"Chicken Salad",
snack:"Green Tea",
dinner:"Vegetable Stir Fry"
},

{
day:"Day 9",
breakfast:"Oats",
brunch:"Apple",
lunch:"Grilled Chicken",
snack:"Popcorn",
dinner:"Soup"
},

{
day:"Day 10",
breakfast:"Boiled Eggs",
brunch:"Smoothie",
lunch:"Tuna Sandwich",
snack:"Yogurt",
dinner:"Salad"
},

{
day:"Day 11",
breakfast:"Greek Yogurt Bowl",
brunch:"Fruit",
lunch:"Quinoa Bowl",
snack:"Nuts",
dinner:"Vegetables"
},

{
day:"Day 12",
breakfast:"Vegetable Omelette",
brunch:"Green Tea",
lunch:"Fish + Rice",
snack:"Chickpeas",
dinner:"Soup"
},

{
day:"Day 13",
breakfast:"Oats + Fruits",
brunch:"Yogurt",
lunch:"Chicken Wrap",
snack:"Fruit",
dinner:"Salad"
},

{
day:"Day 14",
breakfast:"Eggs + Toast",
brunch:"Berry Smoothie",
lunch:"Grilled Protein + Vegetables",
snack:"Green Tea",
dinner:"Soup"
}

];
function calculatePlan(){

let name = document.getElementById("name").value;
let age = document.getElementById("age").value;
let height = document.getElementById("height").value;
let weight = document.getElementById("weight").value;
let goal = document.getElementById("goal").value;

let calories;
let advice;


if(goal === "gain"){

calories = Number(weight) * 35;

advice = `

<div class="plan-card">

<h2>Hello ${name} ❤️</h2>

<p>Age: ${age} years</p>
<p>Height: ${height} cm</p>
<p>Current Weight: ${weight} kg</p>

<h2>💪 Weight Gain Plan (3 Months)</h2>

<h3>Daily Target</h3>
<p>Calories: ${calories} kcal/day</p>
<p>Focus: Protein + Healthy Fats + Complex Carbs</p>


<h3>🍳 Breakfast</h3>
<p>Eggs + Oats + Banana + Milk</p>


<h3>🥪 Brunch</h3>
<p>Peanut Butter Shake + Nuts + Dates</p>


<h3>🍛 Lunch</h3>
<p>Rice + Chicken/Beef + Vegetables + Yogurt</p>


<h3>🥤 Evening Snack</h3>
<p>Dry Fruit Shake or Smoothie Bowl</p>


<h3>🍲 Dinner</h3>
<p>Chapati + Chicken Curry + Salad</p>


<p>
Gain goal: Increase calories gradually and stay consistent for 3 months.
</p>

</div>

`;

}



else if(goal === "loss"){

calories = Number(weight) * 25;


advice = `

<div class="plan-card">

<h2>Hello ${name} ❤️</h2>

<p>Age: ${age} years</p>
<p>Height: ${height} cm</p>
<p>Current Weight: ${weight} kg</p>


<h2>🥗 Weight Loss Plan (3 Months)</h2>


<h3>Daily Target</h3>

<p>Calories: ${calories} kcal/day</p>

<p>Focus: Protein + Fibre + Balanced Meals</p>


<h3>🍳 Breakfast</h3>
<p>Oats + Boiled Eggs + Green Tea</p>


<h3>🥗 Brunch</h3>
<p>Fruit Bowl + Greek Yogurt</p>


<h3>🍱 Lunch</h3>
<p>Grilled Chicken/Fish + Brown Rice + Salad</p>


<h3>☕ Evening Snack</h3>
<p>Green Tea + Roasted Chickpeas</p>


<h3>🍲 Dinner</h3>
<p>Vegetable Soup + Protein Source</p>


<p>
Weight loss goal: Maintain a calorie deficit and stay active for 3 months.
</p>


</div>

`;

}



else{

advice = "<p>Please select a goal.</p>";

}

let selectedPlan;

if(goal=="gain"){
selectedPlan = weightGainPlan;
}
else{
selectedPlan = weightLossPlan;
}


selectedPlan.forEach(item=>{

advice += `

<div class="day-card">

<h3>${item.day}</h3>

<p>🍳 Breakfast: ${item.breakfast}</p>

<p>🥤 Brunch: ${item.brunch}</p>

<p>🍛 Lunch: ${item.lunch}</p>

<p>🍎 Snack: ${item.snack}</p>

<p>🌙 Dinner: ${item.dinner}</p>

</div>

`;

});

document.getElementById("planResult").innerHTML = advice;


}

