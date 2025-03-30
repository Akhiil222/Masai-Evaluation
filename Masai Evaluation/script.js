document.addEventListener("DOMContentLoaded",() => {loadRecipes();}
);
document,getElementById("recipe-form").addEventListener("submit",function (e){
    e.preventDefault();
    const recipeName=document.getElementById("recipe-name").value.trim();
    const ingredients = document.getElementById("recipe-ingredients").value.trim();
    const category = document.getElementById("recipe-category").value.trim();
    const steps  = document.getElementById("recipe-steps").value.trim();
    if(!recipeName || ingredients || !steps){
        alert("Please fill all required fields.");
        return;
    }
    const recipe={
        name: recipeName,
        ingredients: ingredients.split("\n"),
        category:category,
        steps:formatText(steps),
    };
    saveRecipe(recipe);
    this.reset();
});

function saveRecipe(recipe){
    let recipes=JSON.parset(localStorage.getItem("recipes")) || [];
    recipes.push(recipe);
    localStorage.setItem("recipes",JSON.stringify(recipes));
    loadRecipes();
}
function loadRecipes(category="All"){
    const
}