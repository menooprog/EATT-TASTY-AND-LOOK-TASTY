function saveProgress(){


let name=document
.getElementById("name")
.value;


let weight=document
.getElementById("weight")
.value;



let data={

name:name,

weight:weight,

date:new Date()

};



localStorage.setItem(
"progress",
JSON.stringify(data)
);



document.getElementById("show")
.innerHTML=

`
${name}, your current weight is ${weight} kg.

Your progress is saved ✅

`;



}