
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
        applyFilter(clickedTag, false); // Include recipes with the clicked tag
    } else if (event.target.classList.contains("excludeBtn")) {
        let clickedTag = event.target.previousElementSibling.previousElementSibling.innerText;
        applyFilter(clickedTag, true); // Exclude recipes with the clicked tag
    }
})
  // Event listener for the include button in ingredient filters
ingredientFilter.addEventListener("click", function(event) {
    if (event.target.classList.contains("includeBtn")) {
        let clickedTag = event.target.previousElementSibling.innerText;
        applyFilter(clickedTag, false); // Include recipes with the clicked tag
    } else if (event.target.classList.contains("excludeBtn")) {
        let clickedTag = event.target.previousElementSibling.previousElementSibling.innerText;
        applyFilter(clickedTag, true); // Exclude recipes with the clicked tag
    }
})
  // Event listener for the include button in cuisine filters
  cuisineFilter.addEventListener("click", function(event) {
    if (event.target.classList.contains("includeBtn")) {
        let clickedTag = event.target.previousElementSibling.innerText;
        applyFilter(clickedTag, false); // Include recipes with the clicked tag
    } else if (event.target.classList.contains("excludeBtn")) {
        let clickedTag = event.target.previousElementSibling.previousElementSibling.innerText;
        applyFilter(clickedTag, true); // Exclude recipes with the clicked tag
    }
})
function applyFilter(tag, exclude) {
    // Loop through all recipe items
    let recipeItems = document.querySelectorAll(".recipe");
    for (let i = 0; i < recipeItems.length; i++) {
        let recipeTags = recipeItems[i].querySelectorAll(".recipeTag");
        let shouldInclude = false;

        // Check if the recipe contains the clicked tag
        for (let j = 0; j < recipeTags.length; j++) {
        if (recipeTags[j].innerText === tag) {
            shouldInclude = true;
            break;
        }
        }

        // Show or hide the recipe item based on the filter result
        if ((shouldInclude && !exclude) || (!shouldInclude && exclude)) {
        recipeItems[i].style.display = "";
        } else {
        recipeItems[i].style.display = "none";
        }
    }
}

function removeClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
         while (arr1.indexOf(arr2[i]) > -1) {
             arr1.splice(arr1.indexOf(arr2[i]), 1);
     }
    }
    element.className = arr1.join(" ");
}
