
function findTag() {
    let find = document.getElementById("findTagsInput").value.toUpperCase();
    let filterItem = document.querySelectorAll(".filterClass");
    let filterName = document.getElementsByTagName("h4");
    for (let i = 0; i < filterName.length; i++){
        let result = filterItem[i].getElementsByTagName("h4")[0];

        if(result){
            let value = result.innerHTML || result.textContent;
            if(value.toUpperCase().indexOf(find) > -1){
                filterItem[i].style.display="";
            }else{
                filterItem[i].style.display="none";
            }
        }
    }
}

const favoriteFilter = document.querySelector(".favoriteTags");
let favoritesContainer = []; //Acts as a nodelist (not to be confused with an array) to contain div elements created by the following for-loop
for (let i = 0; i < 2; i++) {
    favoritesContainer[i] = document.createElement("div");
    favoritesContainer[i].classList.add("filterClass", "favoriteFilterClass");
    favoritesContainer[i].innerHTML += "<h4>Favorite " + (1 + i) + "</h4>" + "<button class=\"includeBtn\">Include</button>" + "<button class=\"excludeBtn\">Exclude</button>" + "<button>Remove from Favorites</button>";
    favoriteFilter.appendChild(favoritesContainer[i]); 
    //Each element in the "-container" nodelist is appended into the html file, inside the div with the class selected by the querySelector at the initial line of this chunk of code
}

const applianceFilter = document.querySelector(".applianceTags");
let applianceContainer = []; //Acts as a nodelist (not to be confused with an array) to contain div elements created by the following for-loop
let appliances = ['Oven', 'Oventop', 'Microwave', 'Airfryer', 'Steamer', 'Pressure Cooker', 'Rice Cooker', 'Toaster'];
for (let i = 0; i < appliances.length; i++) {
    applianceContainer[i] = document.createElement("div");
    applianceContainer[i].classList.add("filterClass", "applianceFilterClass");
    applianceContainer[i].innerHTML += "<h4>" + appliances[i] + "</h4>" + "<button class=\"includeBtn\">Include</button>" + "<button class=\"excludeBtn\">Exclude</button>" /*+ "<button>Add to Favorites</button>"*/;
    applianceFilter.appendChild(applianceContainer[i]);
    //Each element in the "-container" nodelist is appended into the html file, inside the div with the class selected by the querySelector at the initial line of this chunk of code
}

const ingredientFilter = document.querySelector(".ingredientTags");
let ingredientContainer = []; //Acts as a nodelist (not to be confused with an array) to contain div elements created by the following for-loop
let ingredients = ['Sugar', 'Milk', 'Salt', 'Chicken', 'Olive Oil', 'Soy Sauce', 'Vinegar', 'Eggs', 'Flour', 'Veggies', 'Rice', 'Water', 'Chili Flakes', 'Black Pepper', 'Seaweed', 'Veggies'];
for (let i = 0; i < ingredients.length; i++) {
    ingredientContainer[i] = document.createElement("div");
    ingredientContainer[i].classList.add("filterClass", "ingredientFilterClass");
    ingredientContainer[i].innerHTML += "<h4>" + ingredients[i] + "</h4>" + "<button class=\"includeBtn\">Include</button>" + "<button class=\"excludeBtn\">Exclude</button>" /*+ "<button>Add to Favorites</button>"*/;
    ingredientFilter.appendChild(ingredientContainer[i]);
    //Each element in the "-container" nodelist is appended into the html file, inside the div with the class selected by the querySelector at the initial line of this chunk of code
}
const cuisineFilter = document.querySelector(".cuisineTags");
let cuisineContainer = []; //Acts as a nodelist (not to be confused with an array) to contain div elements created by the following for-loop
let cuisines = ['American', 'Chinese', 'Filipino', 'French', 'Greek', 'Hawaiian', 'Indian', 'Italian', 'Japanese', 'Korean', 'Spanish'];
for (let i = 0; i < cuisines.length; i++) {
    cuisineContainer[i] = document.createElement("div");
    cuisineContainer[i].classList.add("filterClass", "cuisineFilterClass");
    cuisineContainer[i].innerHTML += "<h4>" + cuisines[i] + "</h4>" + "<button class=\"includeBtn\">Include</button>" + "<button class=\"excludeBtn\">Exclude</button>" /*+ "<button>Add to Favorites</button>"*/;
    cuisineFilter.appendChild(cuisineContainer[i]);
    //Each element in the "-container" nodelist is appended into the html file, inside the div with the class selected by the querySelector at the initial line of this chunk of code
}

let allFilters = appliances.concat(ingredients, cuisines); 

function addNewTag() {
    let addedTag = document.getElementById("addTagsInput");
    let selectedCategory = document.getElementById("tagCategories");
    addedTag.addEventListener("keydown", (e) => {
        if (e.key == "Enter" && addedTag.value != ""){
            switch (selectedCategory.value) { 
            //adds the new tag to the category determined by the <select> element, which has the id of "tagCategories"
            //switch cases match the option chosen in the tagCategories <select> element
                case "appliance":
                    appliances.unshift(addedTag.value); //unshift adds the input value into the associated array
                    applianceContainer[0] = document.createElement("div");
                    applianceContainer[0].classList.add("filterClass", "applianceFilterClass");
                    applianceContainer[0].innerHTML += "<h4 style=\"font-weight: bold\">" + appliances[0] + "</h4>" + "<button>Include</button>" + "<button>Exclude</button>" /*+ "<button>Add to Favorites</button>"*/;
                    applianceFilter.appendChild(applianceContainer[0]);
                    break;
                case "ingredient":
                    ingredients.unshift(addedTag.value);
                    ingredientContainer[0] = document.createElement("div");
                    ingredientContainer[0].classList.add("filterClass", "ingredientFilterClass");
                    ingredientContainer[0].innerHTML += "<h4 style=\"font-weight: bold\">" + ingredients[0] + "</h4>" + "<button>Include</button>" + "<button>Exclude</button>" /*+ "<button>Add to Favorites</button>"*/;
                    ingredientFilter.appendChild(ingredientContainer[0]);
                    break;
                case "cuisine":
                    cuisines.unshift(addedTag.value);
                    cuisineContainer[0] = document.createElement("div");
                    cuisineContainer[0].classList.add("filterClass", "cuisineFilterClass");
                    cuisineContainer[0].innerHTML += "<h4 style=\"font-weight: bold\">" + cuisines[0] + "</h4>" + "<button>Include</button>" + "<button>Exclude</button>" /*+ "<button>Add to Favorites</button>"*/;
                    cuisineFilter.appendChild(cuisineContainer[0]);
                    break;
            }
            addedTag.value = null;
        }
    });
}

// Event listener for the include button in appliance filters
applianceFilter.addEventListener("click", function(event) {
    if (event.target.classList.contains("includeBtn")) {
        let clickedTag = event.target.previousElementSibling.innerText;
        useFilter(clickedTag, false); // Include recipes with the clicked tag
    } else if (event.target.classList.contains("excludeBtn")) {
        let clickedTag = event.target.previousElementSibling.previousElementSibling.innerText;
        useFilter(clickedTag, true); // Exclude recipes with the clicked tag
    }
})
  // Event listener for the include button in ingredient filters
ingredientFilter.addEventListener("click", function(event) {
    if (event.target.classList.contains("includeBtn")) {
        let clickedTag = event.target.previousElementSibling.innerText;
        useFilter(clickedTag, false); // Include recipes with the clicked tag
    } else if (event.target.classList.contains("excludeBtn")) {
        let clickedTag = event.target.previousElementSibling.previousElementSibling.innerText;
        useFilter(clickedTag, true); // Exclude recipes with the clicked tag
    }
})
  // Event listener for the include button in cuisine filters
  cuisineFilter.addEventListener("click", function(event) {
    if (event.target.classList.contains("includeBtn")) {
        let clickedTag = event.target.previousElementSibling.innerText;
        useFilter(clickedTag, false); // Include recipes with the clicked tag
    } else if (event.target.classList.contains("excludeBtn")) {
        let clickedTag = event.target.previousElementSibling.previousElementSibling.innerText;
        useFilter(clickedTag, true); // Exclude recipes with the clicked tag
    }
})
function applyFilter(input, exclude) {
    let recipeItems = document.querySelectorAll(".recipe");
    for (let i = 0; i < recipeItems.length; i++) {
        let tagWasFound = recipeArticles[i].filterTags.includes(input);
        // Edited version: adds applied tags to respective arrays
        if (tagWasFound && exclude) {
            recipeItems[i].style.display = "none";
        }
        if (!tagWasFound && !exclude) {
            recipeItems[i].style.display = "none";
        }
    }
}
let inTags = document.querySelector(".inTags");
let exTags = document.querySelector(".exTags");
let includedTagsList = []; //Contains all selected tags that filter to include recipes
let excludedTagsList = []; //Contains all selected tags that filter to exclude recipes

//Revised version of Sai's useFilter method to include functionality by multiple filters simultaneously
function useFilter(input, exclude) {
    displayAsSelectedTag(input, exclude);
    hideSelectedTagHome(input, true);
    applyFilter(input, exclude);
}
//Connects the filters to the recipes
function applyFilter(input, exclude) {
    let recipeItems = document.querySelectorAll(".recipe");
    for (let i = 0; i < recipeItems.length; i++) {
        let tagWasFound = recipeArticles[i].filterTags.includes(input);
        // Edited version: adds applied tags to respective arrays
        if (tagWasFound && exclude) {
            recipeItems[i].style.display = "none";
        }
        if (!tagWasFound && !exclude) {
            recipeItems[i].style.display = "none";
        }
    }
}
//Shows the selected tag in a separate div in the filter section for easier tracking
function displayAsSelectedTag(input, condition) { 
    if (condition == false) {
        includedTagsList.push(input);
        includedTag = document.createElement("div");
        includedTag.classList.add("selectedTag", "includedTag");
        includedTag.innerHTML += "<h5>" + input + "</h5>" + "<button class=\"removeBtn\">Remove</button>";
        inTags.appendChild(includedTag);
    } else {
        excludedTagsList.push(input);
        excludedTag = document.createElement("div");
        excludedTag.classList.add("selectedTag", "excludedTag");
        excludedTag.innerHTML += "<h5>" + input + "</h5>" + "<button class=\"removeBtn\">Remove</button>";
        exTags.appendChild(excludedTag);
    }
}
//Hides the original tag in which the selected tag was found while it remains in the selected tags div, shows it if the selected tag was removed
function hideSelectedTagHome(input, shouldHide) { 
    let filterItem = document.querySelectorAll(".filterClass");
    let filterName = document.getElementsByTagName("h4");
    for (let i = 0; i < filterName.length; i++){
        let result = filterItem[i].getElementsByTagName("h4")[0];
        if (result.innerText == input && shouldHide){
            filterItem[i].style.display="none";
        } 
        if (result.innerText == input && !shouldHide) {
            filterItem[i].style.display="";
        }
    }
}
//Functionality for removing selected include tags
function clearTags() {
    let selectedTags = document.querySelectorAll(".selectedTag");
    let filterItem = document.querySelectorAll(".filterClass");
    let recipes = document.querySelectorAll(".recipe");
    for (let i = selectedTags.length - 1; i >= 0; i--) {
        selectedTags[i].remove();
    }
    for (let i = 0; i < filterItem.length; i++) {
        filterItem[i].style.display="";
    }
    for (let i = 0; i < recipes.length; i++) {
        recipes[i].style.display="";
    }
}
inTags.addEventListener("click", function(event) { 
    if (event.target.classList.contains("removeBtn")) {
        let clickedTagDiv = event.target.parentElement;
        let clickedTag = event.target.previousElementSibling.innerText;
        clickedTagDiv.remove();
        hideSelectedTagHome(clickedTag, false);
        removeFilter(clickedTag, false);
    }
})
exTags.addEventListener("click", function(event) {
    if (event.target.classList.contains("removeBtn")) {
        let clickedTagDiv = event.target.parentElement;
        let clickedTag = event.target.previousElementSibling.innerText;
        clickedTagDiv.remove();
        hideSelectedTagHome(clickedTag, false);
        removeFilter(clickedTag, true);
    }
})
function alanRemoveButton(input, exclude) {
    if (!exclude) {
        let includedTags = document.querySelectorAll(".includedTag");
        for (let i = 0; i < includedTags.length; i++) {
            if (includedTags[i].innerText.indexOf(input) > -1) {
                includedTags[i].remove();
                break;
            }
        }
    }
    if (exclude) {
        let excludedTags = document.querySelectorAll(".excludedTag");
        for (let i = 0; i < excludedTags.length; i++) {
            if (excludedTags[i].innerText.indexOf(input) > -1) {
                excludedTags[i].remove();
                break;
            }
        }
    }
}
function removeFilter(input, exclude) {
    let recipeItems = document.querySelectorAll(".recipe");
    for (let i = 0; i < recipeItems.length; i++) {
        //Returns an array with all the values the recipe tags and the current included tags have in common
        let connectedInTags = recipeArticles[i].filterTags.filter(value => includedTagsList.includes(value)); 
        //Returns an array with all the values the recipe tags and the current excluded tags have in common
        let connectedExTags = recipeArticles[i].filterTags.filter(value => excludedTagsList.includes(value));
        console.log(connectedInTags, connectedExTags);
        //Check if the recipe contains the clicked tag
        let tagWasFound = recipeArticles[i].filterTags.includes(input);
        if (!tagWasFound && !exclude) {
            if (connectedInTags.length === 0) { //Checks if there is no other tags currently filtering this recipe before revealing it again
                recipeItems[i].style.display = "";
            }
        }
        if (tagWasFound && exclude) {
            if (connectedExTags.length === 0) { //Checks if there is no other tags currently filtering this recipe before revealing it again
                recipeItems[i].style.display = "";
            }
        }
        let inTagIndex = includedTagsList.indexOf(input);
        includedTagsList.splice(inTagIndex, inTagIndex + 1); //Removes the removed tag from includedTagsList
        let exTagIndex = excludedTagsList.indexOf(input);
        excludedTagsList.splice(exTagIndex, exTagIndex + 1); //Removes the removed tag from excludedTagsList
    }
}
