function generatePlan(){

let name = document.getElementById("userName").value;

let goal = document.getElementById("goal").value;
let bmi = weight / ((height/100)*(height/100));


let calories = 0;


if(activity==="low"){

calories = (10*weight + 6.25*height - 5*age) * 1.2;

}


else if(activity==="medium"){

calories = (10*weight + 6.25*height - 5*age) * 1.55;

}


else{

calories = (10*weight + 6.25*height - 5*age) * 1.725;

}



if(goal==="gain"){

calories += 500;

}

else{

calories -= 500;

}



let protein = weight * 1.6;
let plan = document.getElementById("planResult");

let weight = Number(document.getElementById("weight").value);

let height = Number(document.getElementById("height").value);

let age = Number(document.getElementById("age").value);

let activity = document.getElementById("activity").value;


let mealsGain = [

{
breakfast:"Oats with milk, banana and almonds",
lunch:"Chicken rice with vegetables",
snack:"Peanut butter sandwich",
dinner:"Egg omelette with roti and yogurt",
calories:"2500 kcal"
},

{
breakfast:"Eggs with toast and avocado",
lunch:"Beef/chicken pasta",
snack:"Dates milkshake",
dinner:"Rice with chicken curry",
calories:"2600 kcal"
},

{
breakfast:"Banana smoothie with oats",
lunch:"Potatoes with chicken",
snack:"Nuts and milk",
dinner:"Fish with rice",
calories:"2550 kcal"
}

];


let mealsLoss = [

{
breakfast:"Boiled eggs with fruit",
lunch:"Grilled chicken salad",
snack:"Greek yogurt",
dinner:"Vegetable soup with protein",
calories:"1500 kcal"
},

{
breakfast:"Oats with berries",
lunch:"Chicken wrap with vegetables",
snack:"Apple and nuts",
dinner:"Fish with salad",
calories:"1600 kcal"
},

{
breakfast:"Green smoothie",
lunch:"Brown rice with vegetables",
snack:"Low fat yogurt",
dinner:"Chicken soup",
calories:"1550 kcal"
}

];


let meals;


if(goal==="gain"){

meals = mealsGain;

}

else{

meals = mealsLoss;

}



let output = `

<div class="foodCard">

<h2>${name}'s 90 Day Diet Plan</h2>

<p><b>BMI:</b> ${bmi.toFixed(1)}</p>

<p><b>Daily Calories Target:</b> ${Math.round(calories)} kcal</p>

<p><b>Protein Target:</b> ${protein.toFixed(0)} g/day</p>

for(let day=1; day<=90; day++){


let meal = meals[(day-1)%3];


output += `

<hr>

<h3>Day ${day}</h3>


<p><b>Breakfast:</b> ${meal.breakfast}</p>

<p><b>Lunch:</b> ${meal.lunch}</p>

<p><b>Snack:</b> ${meal.snack}</p>

<p><b>Dinner:</b> ${meal.dinner}</p>

<p><b>Daily Calories:</b> ${meal.calories}</p>


`;

}



output += `</div>`;


plan.innerHTML = output;


}