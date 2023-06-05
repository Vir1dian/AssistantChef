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
        dish: 'Cheese Pizza',
        time: hMStoSeconds(1,40,0), 
        filterTags: ['Italian', 'Oven', 'Pizza Peel', 'Dough', 'Flour', 'Mozzarella', 'Tomato Sauce', 'Olive Oil', 'Garlic', 'Oregano', 'Salt', 'Black Pepper'],
        thumbnail: 'https://www.foodandwine.com/thmb/4qg95tjf0mgdHqez5OLLYc0PNT4=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/classic-cheese-pizza-FT-RECIPE0422-31a2c938fc2546c9a07b7011658cfd05.jpg',
        ingredients: 'Pizza Dough (1 ball), Flour (for dusting), Mozzarella (low moisture 3 oz), Oregano (garnish), Tomato Sauce (1 can 15 oz), Olive Oil (2 Tbsp), Garlic (2 cloves grated), Oregano (1 1/2 tsp), Salt (3/4 tsp), Black Pepper (1/4 tsp)',
        instructions: '1. Let covered dough stand at room temperature until cool, press the dough. <br> 2. Preheat empty pizza pan inside oven to 400F. <br> 3. In a bowl, stir tomato sauce, olive oil, garlic, oregano, salt, and black pepper to form the pizza sauce. <br> 4. Gently stretch the dough into an even 10-inch circle, place on a pizza peel dusted with flour. <br> 5. Spread pizza sauce and top with mozzarella, unload peel onto the pan in the oven. <br> 6. Bake for 3 to 6 minutes, rotating the pan per minute. <br> 7. Serve.',
        source: 'https://www.foodandwine.com/recipes/classic-cheese-pizza'
    },
    {
        dish: 'Fried Rice',
        time: hMStoSeconds(0,15,0),
        filterTags: ['Chinese', 'Rice Cooker', 'Oventop', 'Saute Pan', 'Wok', 'Rice', 'White Rice', 'Butter', 'Eggs', 'Garlic', 'Soy Sauce', 'Veggies'],
        thumbnail: 'https://hips.hearstapps.com/hmg-prod/images/delish-230313-12-fried-rice-0842-eb-index-64220e8a7fc9a.jpg?crop=0.888888888888889xw:1xh;center,top&resize=1200:*',
        ingredients: 'White Rice (cooked and chilled), Butter (3 tablespoons), Eggs (3), Garlic (6 cloves), Soy Sauce (2 tsp), Carrots, Onions, Green Onions, Peas',
        instructions: '1. Scramble eggs on a saute pan, breaking them into small pieces then set aside. <br> 2. Saute veggies and garlic on the same pan until soft and cooked through. <br> 3. Melt the remaining butter on the pan, then add rice and soy sauce. <br> 4. Remove pan from heat and add green onions and scrambled eggs. <br> 5. Taste, season, serve.',
        source: 'https://www.gimmesomeoven.com/fried-rice-recipe/'
    },
    {
        dish: 'Tteokbokki - Spicy Rice Cakes',
        time: hMStoSeconds(0,35,0),
        filterTags: ['Korean', 'Oventop', 'Water', 'Anchovies', 'Seaweed', 'Gochujang', 'Chili Flakes', 'Sugar', 'Green Onions', 'Eggs', 'Fish Cakes'],
        thumbnail: 'https://i.ytimg.com/vi/TA3Uo3a9674/maxresdefault.jpg',
        ingredients: 'Water (4 cups), Anchovies (7 large, gutted), Dried Kelp/Seaweed, Gochujang (1/3 cups), Chili Flakes (gochugaru, 1 tbsp), Sugar (1 tbsp), Green Onions, Eggs (2 hard boiled and shelled), Fish Cakes (1/2 lbs)',
        instructions: '1. Boil dried anchovies and kelp with the water in a pan for 15 minutes over medium high heat. <br> 2. Combine gochujang, gochugaru, and sugar in a small bowl. <br> 3. Remove anchovies and kelp from pan and add rice cakes, the spice mixture, green onion, and optional fish cakes and hard boiled eggs. <br> 4. Stir gently until boiling, then simmer while stirring until rice cakes turns soft and sauce thickens (10-15 mins). Add more water and continue stirring if not enough. <br> 5. Serve hot.',
        source: 'https://www.maangchi.com/recipe/tteokbokki'
    },
    {
        dish: 'Chicken Adobo',
        time: hMStoSeconds(2,0,0),
        filterTags: ['Filipino', 'Oventop', 'Refrigerator', 'Chicken', 'Vinegar', 'Soy Sauce', 'Garlic', 'Black Pepper', 'Bay Leaves'],
        thumbnail: 'https://christieathome.com/wp-content/uploads/2020/09/Chicken-Adobo-6.jpg',
        ingredients: 'Chicken (4-5 lbs, thighs), Vinegar (1/2 cups), Soy Sauce (1/2 cups), Garlic (4 cloves, crushed), Black Pepper (1 tsp), Bay Leaves (3)',
        instructions: '1. Combine chicken thighs, vinegar, soy sauce, garlic, black pepper, and bay leaves in a large pot. <br> 2. Cover and marinate the chicken in the refrigerator for 1 to 3 hours. <br> 3. Bring chicken to a boil over high heat. Then, lower heat, cover, and simmer for 30 minutes, stirring occasionally. <br> 4. Remove the lid and simmer until the sauce is reduced and thickened and the chicken is tender, in about 20 more minutes. <br> 5. Serve.',
        source: 'https://www.foodnetwork.com/recipes/filipino-chicken-adobo-recipe-1955818'
    },
    {
        dish: 'Paneer Masala',
        time: hMStoSeconds(0,25,0),
        filterTags: ['Indian', 'Oventop', 'Kadai', 'Wok', 'Onion', 'Garlic', 'Ginger', 'Tomato', 'Cumin', 'Garam Masala', 'Chili Powder', 'Cream', 'Coriander', 'Oil', 'Butter', 'Salt'],
        thumbnail: 'https://imagevars.gulfnews.com/2021/08/30/Paneer-Masala-_17b9680cdfb_medium.jpg',
        ingredients: 'Paneer (400 grams, small cubes), Onion (1 red, finely chopped), Ginger-Garlic Paste (2 tsp), Tomato Puree (1 1/2 cups), Cumin Seeds (1/2 tsp), Garam Masala (1 1/2 tsp), Chili Powder (Kashmiri red 1/2), Kasuri Methi (1 1/2 tsp), Thick Cream (2 1/2 tbsp), Coriander (3 tbsp), Oil (2 1/2 tbsp), Butter, Salt',
        instructions: '1. Heat butter and oil in a wok/kadai, add and saute cumin seeds and chopped onion. <br> 2. Add ginger-garlic paste and saute until \"raw\" aroma is gone. <br> 3. Add tomato puree, then cover and simmer (medium heat) until gravy thickens and oil separates, stirring occasionally. Stir in small amounts of water to achieve desired consistency. <br> 4. Stir in garam masala, kashmiri red chili powder, and kasuri methi. Add salt to taste. <br> 5. Increase heat and add paneer cubes, stir to coat with masala. Then, lower heat, cover and cook on low heat for 5 minutes. <br> 6. Turn up heat and QUICKLY stir in thick cream thoroughly. <br> 7. Garnish with coriander and serve with flatbread, naan, or rice.',
        source: 'https://recipesaresimple.com/recipe/easy-paneer-butter-masala/'
    },
    {
        dish: 'Spicy Tuna Sushi Rolls',
        time: hMStoSeconds(0,20,0),
        filterTags: ['Japanese', 'Rice Cooker', 'Rolling Mat', 'Rice', 'Tuna', 'Soy Sauce', 'Cream Cheese', 'Avocado', 'Sriracha', 'Mayonnaise', 'Rice Vinegar', 'Green Onion', 'Sesame Oil', 'Wasabi'],
        thumbnail: 'https://ichisushi.com/wp-content/uploads/2022/07/Best-Spicy-Tuna-Sushi-Recipes.jpg',
        ingredients: 'Sushi Rice (2 cups, cooked), Rice Vinegar (1/4 cup), Seaweed (4 half sheets nori), Tuna (1 can, drained), Mayonnaise (1 1/2 tbsp), Sriracha (1 1/2 tsp), Green Onion, Sesame Oil (1 tsp), Wasabi paste',
        instructions: '1. Allow rice to cool, mix with rice vinegar. <br> 2. In a small bowl, combine tuna, mayo, sriracha, green onion, and sesame oil. <br> 3. Wrap rolling mat with cling wrap, place one nori sheet (rough side up). <br> 4. Spread thin, even layer of rice on the nori. <br> 5. Add a thin line of tuna filling in the center, following the longer side of the sheet. Add a line of small avocado slices adjacent to it, another with cream cheese. <br> 6. Roll the mat over the filling, squeezing down throughout to maintain a tight roll shape. <br> 7. Cut the roll into even portions with a warm, damp knife. Repeat rolling and cutting process for the remaining nori sheets. <br> 8. Serve with wasabi and soy sauce.',
        source: 'None'
    },
    {
        dish: 'Cereal Bowl - Corn Flakes',
        time: hMStoSeconds(0,1,0),
        filterTags: ['Milk', 'Corn'],
        thumbnail: 'https://images.healthshots.com/healthshots/en/uploads/2022/11/23093822/cornflakes-1600x900.jpg',
        ingredients: 'Milk (1 cup), Corn Flakes Cereal (1 1/2 cups)',
        instructions: '1. Add dry corn flakes onto a small bowl. <br> 2. Pour milk onto small bowl. <br> 3. Serve with spoon.',
        source: 'None'
    },
    {
        dish: 'Chicken Gyros with Tzaziki',
        time: hMStoSeconds(0,26,0),
        filterTags: [''],
        thumbnail: '',
        ingredients: 'Chicken (2lbs or )',
        instructions: '',
        source: 'https://www.recipetineats.com/greek-chicken-gyros-with-tzatziki/'
    }/*,
    {
        dish: '',
        time: hMStoSeconds(0,0,0),
        filterTags: [''],
        thumbnail: '',
        ingredients: '',
        instructions: '',
        source: ''
    },*/
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
        "</div><div class=\"articleDetails articleSource\">Source: " + 
        recipeArticles[i].source + 
        "</div>"
        ;
    recipeArticleWebList.appendChild(recipesContainer[i]);
    
    

    let filterTagsCurrent = document.querySelectorAll(".articleFilterTags");
    let filterTagsContainer = [];
    for (let j = 0; j < recipeArticles[i].filterTags.length; j++) {
        filterTagsContainer[j] = document.createElement("div");
        filterTagsContainer[j].classList.add("recipeTag");
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

//VOICE AI FUNCTIONS
function alanSearch(input) {
    let find = input.toUpperCase();
    document.getElementById("searchInput").value = find;
    search();
}

//VOICE AI CONNECTION
var alanBtnInstance = alanBtn({
    key: "5eb422371b89b8438aaeed56891e1b6a2e956eca572e1d8b807a3e2338fdd0dc/stage",
    onCommand: function (commandData) {
        if (commandData.command === "go:back") {
            //call client code that will react on the received command
        }
        if (commandData.command === "alanSearch") {
            alanSearch(commandData.data);
        }
        if (commandData.command === "alanStartTimer") {
            alanStartTimer(commandData.data);
        }
        if (commandData.command === "alanPauseTimer") {
            pauseTimer();
        }
        if (commandData.command === "alanResumeTimer") {
            startTimer();
        }
        if (commandData.command === "alanResetTimer") {
            resetTimer();
        }
        if (commandData.command === "alanInclude") {
            useFilter(commandData.data, false);
        }
        if (commandData.command === "alanExclude") {
            useFilter(commandData.data, true);
        }
        if (commandData.command === "alanRemoveFilter") {
            if (includedTagsList.includes(commandData.data)) {
                removeFilter(commandData.data, false);
                hideSelectedTagHome(commandData.data, false);
                alanRemoveButton(commandData.data, false);
            }
            if (excludedTagsList.includes(commandData.data)) {
                removeFilter(commandData.data, true);
                hideSelectedTagHome(commandData.data, false);
                alanRemoveButton(commandData.data, true);
            }
        }
        if (commandData.command === "alanClearFilters") {
            clearTags();
        }
    },
    onButtonState: async function(status) {
        if (status === 'ONLINE') {
            if (!this.greetingWasSaid) {
                await alanBtnInstance.activate();
                alanBtnInstance.setVisualState({recipeArticles, allFilters});
                this.greetingWasSaid = true
            }
        }
    },
    rootEl: document.getElementById("alan-btn"),
});