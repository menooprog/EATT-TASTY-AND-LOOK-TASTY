// Recipe Database

const recipes = {

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
}

};



// Recipe Search

function searchRecipe(){

let search =
document.getElementById("searchBox").value.toLowerCase();


let result =
document.getElementById("result");


if(recipes[search]){


let food=recipes[search];


result.innerHTML=

`
<h3>${food.name}</h3>

<p>Calories: ${food.calories}</p>

<p>Protein: ${food.protein}</p>

<p>Carbohydrates: ${food.carbs}</p>

<p>Fat: ${food.fat}</p>

<h4>Recipe:</h4>

<p>${food.recipe}</p>
`;

}

else{

result.innerHTML=
"Recipe not found. Try banana shake, chicken rice, oats, omelette or salad.";

}

}



// Personal Plan Calculator


function calculatePlan(){


let name =
document.getElementById("name").value;


let age =
document.getElementById("age").value;


let height =
document.getElementById("height").value;


let weight =
document.getElementById("weight").value;


let goal =
document.getElementById("goal").value;



let calories;


let advice;



if(goal=="gain"){


calories = Number(weight)*35;


advice=

`
<h3>Hello ${name} ❤️</h3>

<p>
Your goal is weight gain.
</p>

<p>
Daily calories target:
${calories} kcal
</p>

<p>
Eat more protein, healthy fats,
milk, eggs, rice, nuts and smoothies.
</p>

<p>
Follow this plan consistently for 3 months.
</p>
`;



}

else{


calories = Number(weight)*25;


advice=

`
<h3>Hello ${name} ❤️</h3>

<p>
Your goal is weight loss.
</p>

<p>
Daily calories target:
${calories} kcal
</p>

<p>
Eat vegetables, lean protein,
fruits, oats and stay hydrated.
</p>

<p>
Follow this plan consistently for 3 months.
</p>
`;

}



document.getElementById("plan").innerHTML=advice;



saveHistory(name,age,weight,goal);


}




// History Saving


function saveHistory(name,age,weight,goal){


let history =
JSON.parse(localStorage.getItem("history")) || [];


history.push({

name:name,
age:age,
weight:weight,
goal:goal

});


localStorage.setItem(
"history",
JSON.stringify(history)
);


showHistory();

}



function showHistory(){


let history =
JSON.parse(localStorage.getItem("history")) || [];


let box =
document.getElementById("history");


if(history.length==0){

box.innerHTML="No history yet.";

return;

}


box.innerHTML="";


history.forEach((item)=>{


box.innerHTML +=

`
<p>

<b>${item.name}</b>

<br>

Age: ${item.age}

<br>

Weight: ${item.weight} kg

<br>

Goal: ${item.goal}

</p>

<hr>

`;

});


}


showHistory();



// Buttons

function showGain(){

document.getElementById("gain")
.scrollIntoView();

}


function showLoss(){

document.getElementById("loss")
.scrollIntoView();

}
