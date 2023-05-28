//Finds recipes as the user types into the searchbar for specific recipes
function search() { 
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

//Add new recipes HERE
const recipeArticles = [
    {
        dish: 'Corn Flakes Cereal Bowl',
        time: hMStoSeconds(0,1,0),
        filterTags: ['Milk', 'Corn'],
        thumbnail: 'https://images.healthshots.com/healthshots/en/uploads/2022/11/23093822/cornflakes-1600x900.jpg',
        ingredients: 'Milk (1 cup), Corn Flakes Cereal (1 1/2 cups)',
        instructions: '1. Add dry corn flakes onto a small bowl. 2. Pour milk onto small bowl. 3. Serve with spoon.'
    },
    {
        dish: 'Cheese Pizza',
        time: hMStoSeconds(1,40,0), 
        filterTags: ['Italian', 'Oven', 'Dough', 'Flour', 'Mozzarella', 'Tomato Sauce', 'Olive Oil', 'Garlic', 'Oregano', 'Salt', 'Black Pepper'],
        thumbnail: 'https://www.foodandwine.com/thmb/4qg95tjf0mgdHqez5OLLYc0PNT4=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/classic-cheese-pizza-FT-RECIPE0422-31a2c938fc2546c9a07b7011658cfd05.jpg',
        ingredients: 'Pizza Dough (1 ball), Flour (for dusting), Mozzarella (low moisture 3 oz), Oregano (garnish), Tomato Sauce (1 can 15 oz), Olive Oil (2 Tbsp), Garlic (2 cloves grated), Oregano (1 1/2 tsp), Salt (3/4 tsp), Black Pepper (1/4 tsp)',
        instructions: '1. Let covered dough stand at room temperature until cool, press the dough. 2. Preheat empty pizza pan inside oven to 400F. 3. In a bowl, stir tomato sauce, olive oil, garlic, oregano, salt, and black pepper to form the pizza sauce. 3. Gently stretch the dough into an even 10-inch circle, place on a pizza peel dusted with flour. 4. Spread pizza sauce and top with mozzarella, unload peel onto the pan in the oven. 5. Bake for 3 to 6 minutes, rotating the pan per minute.'
    },
    {
        dish: 'Fried Rice',
        time: hMStoSeconds(0,15,0),
        filterTags: ['Chinese', 'Rice Cooker', 'Saute Pan', 'White Rice', 'Butter', 'Eggs', 'Garlic', 'Soy Sauce', 'Veggies'],
        thumbnail: 'https://hips.hearstapps.com/hmg-prod/images/delish-230313-12-fried-rice-0842-eb-index-64220e8a7fc9a.jpg?crop=0.888888888888889xw:1xh;center,top&resize=1200:*',
        ingredients: 'White Rice (cooked and chilled), Butter (3 tablespoons), Eggs (3), Garlic (6 cloves), Soy sauce (2 tsp), Carrots, Onions, Green Onions, Peas',
        instructions: '1. Scramble eggs on a saute pan, breaking them into small pieces then set aside. 2. Saute veggies and garlic on the same pan until soft and cooked through. 3. Melt the remaining butter on the pan, then add rice and soy sauce. 4. Remove pan from heat and add green onions and scrambled eggs. 5. Taste, season, serve.'
    },
]

//Converts recipeArticles array into html elements injected into the recipes section of the website
const recipeArticleWebList = document.querySelector(".recipeList");
let recipesContainer = [];
for (let i = 0; i < recipeArticles.length; i++) {
    recipesContainer[i] = document.createElement("article"); 
    recipesContainer[i].classList.add("recipe"); 

    recipesContainer[i].innerHTML += 
        "<h2>" + recipeArticles[i].dish + 
        "</h2><div class=\"articleDetails articleTime\">" + 
            secondsToHMS(recipeArticles[i].time) + 
        "</div><div class=\"articleDetails articleFilterTags\">" + 
            //recipeArticles[i].filterTags + 
        "</div><img class=\"articleDetails articleThumbmnail\" src=\"" + 
            recipeArticles[i].thumbnail + 
        "\"><div class=\"articleDetails articleIngredients\">" + 
            recipeArticles[i].ingredients + 
        "</div><div class=\"articleDetails articleInstructions\">" + 
            recipeArticles[i].instructions + 
        "</div>"
        ;
    recipeArticleWebList.appendChild(recipesContainer[i]);
    
    

    let filterTagsCurrent = document.querySelectorAll(".articleFilterTags");
    let filterTagsContainer = [];
    for (let j = 0; j < recipeArticles[i].filterTags.length; j++) {
        filterTagsContainer[j] = document.createElement("div");
        filterTagsContainer[j].innerText = recipeArticles[i].filterTags[j];
        filterTagsCurrent[i].appendChild(filterTagsContainer[j]);
    }
}

function secondsToHMS(x) {
    let hours = Math.floor(x/3600);
    let minutes = Math.floor(x/60) % 60;
    let seconds = x % 60;
    let time = "";
    if (hours > 0) {
        if (hours == 1) {
            time += hours + " hour "
        } else {
            time += hours + " hours "
        }
    }
    if (minutes > 0) {
        if (minutes == 1) {
            time += minutes + " minute "
        } else {
            time += minutes + " minutes "
        }
        
    }
    if (seconds > 0) {
        if (seconds == 1) {
            time += seconds + " second "
        } else {
            time += seconds + " seconds "
        }
        
    }
    return time;
}
function hMStoSeconds(hrs,mins,secs) {
    return hrs*3600 + mins*60 + secs;
}