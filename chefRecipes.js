function search() { //Finds recipes as the user types
    let find = document.getElementById("searchInput").value.toUpperCase();
    let recipeItem = document.querySelectorAll(".recipe");
    let recipeName = document.getElementsByTagName("h2");
    for (let i = 0; i < recipeName.length; i++){
        let result = recipeItem[i].getElementsByTagName("h2")[0];

        if(result){
            let value = result.innerHTML || result.textContent;
            if(value.toUpperCase().indexOf(find) > -1){
                recipeItem[i].style.display="";
            }else{
                recipeItem[i].style.display="none";
            }
        }
    }
}

const recipeArticles = [
    {
        dish: 'Cheese Pizza',
        filterTags: 'American, Oven, Milk, Flour',
        thumbnail: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Question_mark_alternate.svg/591px-Question_mark_alternate.svg.png',
        ingredients: 'x, y, z',
        instructions: 'do a, b, then c'
    },
    {
        dish: 'Cereal',
        filterTags: 'Milk, Corn',
        thumbnail: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Question_mark_alternate.svg/591px-Question_mark_alternate.svg.png',
        ingredients: 'Milk (1 1/2 cups), Corn Flakes (2 cups)',
        instructions: '1. Add dry corn flakes onto a small bowl. 2. Pour milk onto small bowl. 3. Serve with spoon.'
    },
    {
        dish: 'Fried Rice',
        filterTags: 'Chinese, Rice Cooker, Saute Pan, White Rice, Butter, Eggs, Garlic, Soy Sauce, Veggies',
        thumbnail: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Question_mark_alternate.svg/591px-Question_mark_alternate.svg.png',
        ingredients: 'White Rice (cooked and chilled), Butter (3 tablespoons), Eggs (3), Garlic (6 cloves), Soy sauce (2 tsp), Carrots, Onions, Green Onions, Peas',
        instructions: '1. Scramble eggs on a saute pan, breaking them into small pieces then set aside. 2. Saute veggies and garlic on the same pan until soft and cooked through. 3. Melt the remaining butter on the pan, then add rice and soy sauce. 4. Remove pan from heat and add green onions and scrambled eggs. 5. Taste, season, serve.'
    }
]

const recipeArticleWebList = document.querySelector(".recipeList");
let recipesContainer = [];
for (let i = 0; i < recipeArticles.length; i++) {
    recipesContainer[i] = document.createElement("article");
    recipesContainer[i].classList.add("recipe");
    recipesContainer[i].innerHTML += 
        "<h2>" + recipeArticles[i].dish + 
        "</h2><div class=\"articleDetails articleFilterTags\">" + 
            recipeArticles[i].filterTags + 
        "</div><img class=\"articleDetails articleThumbmnail\" src=\"" + 
            recipeArticles[i].thumbnail + 
        "\"><div class=\"articleDetails articleIngredients\">" + 
            recipeArticles[i].ingredients + 
        "</div><div class=\"articleDetails articleInstructions\">" + 
            recipeArticles[i].instructions + 
        "</div>"
        ;
    recipeArticleWebList.appendChild(recipesContainer[i]);
}
