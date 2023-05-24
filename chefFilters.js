////////////////////////////////////////////
//SEARCH FILTERS AKA TAGS
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
/////////////////////////////////////////
//FAVORITES CATEGORY
const favoriteFilters = document.querySelector(".favoriteTags");
let favoritesContainer = [];
for (let i = 0; i < 2; i++) {
    favoritesContainer[i] = document.createElement("div");
    favoritesContainer[i].classList.add("filterClass", "favoriteFilterClass");
    favoritesContainer[i].innerHTML += "<h4>Favorite " + (1 + i) + "</h4>" + "<button>Include</button>" + "<button>Exclude</button>" + "<button>Remove from Favorites</button>";
    favoriteFilters.appendChild(favoritesContainer[i]);
}
////////////////////////////////////////////
//APPLIANCE CATEGORY (WIP)
const applianceFilters = document.querySelector(".applianceTags");
let applianceContainer = [];
let appliances = ['Oven', 'Oventop', 'Microwave', 'Airfryer', 'Steamer', 'Pressure Cooker', 'Rice Cooker'];
for (let i = 0; i < appliances.length; i++) {
    applianceContainer[i] = document.createElement("div");
    applianceContainer[i].classList.add("filterClass", "applianceFilterClass");
    applianceContainer[i].innerHTML += "<h4>" + appliances[i] + "</h4>" + "<button>Include</button>" + "<button>Exclude</button>" + "<button>Add to Favorites</button>";
    applianceFilters.appendChild(applianceContainer[i]);
    if (i >= 5){
        applianceContainer[i].style.display="none";
    }
}
if (appliances.length > 5){
    var unshownAppliancesCount = document.createElement("div");
    applianceFilters.appendChild(unshownAppliancesCount);
    unshownAppliancesCount.innerText = "+ " + (appliances.length - 5) + " more";
    unshownAppliancesCount.style.fontWeight = "bold";
}
////////////////////////////////////////////
//TIME CATEGORY (WIP)

//Something involving numbers instead of strings

////////////////////////////////////////////
//INGREDIENT CATEGORY
const ingredientFilters = document.querySelector(".ingredientTags");
let ingredientContainer = [];
let ingredients = ['Sugar', 'Milk', 'Salt', 'Chicken', 'Olive Oil', 'Soy Sauce', 'Vinegar', 'Eggs', 'Flour'];
for (let i = 0; i < ingredients.length; i++) {
    ingredientContainer[i] = document.createElement("div");
    ingredientContainer[i].classList.add("filterClass", "ingredientFilterClass");
    ingredientContainer[i].innerHTML += "<h4>" + ingredients[i] + "</h4>" + "<button>Include</button>" + "<button>Exclude</button>" + "<button>Add to Favorites</button>";
    ingredientFilters.appendChild(ingredientContainer[i]);
    if (i >= 5){
        ingredientContainer[i].style.display="none";
    }
}
if (ingredients.length > 5){
    var unshownIngredientsCount = document.createElement("div");
    ingredientFilters.appendChild(unshownIngredientsCount);
    unshownIngredientsCount.innerText = "+ " + (ingredients.length - 5) + " more";
    unshownIngredientsCount.style.fontWeight = "bold";
}
////////////////////////////////////////////
//CUISINE CATEGORY
const cuisineFilters = document.querySelector(".cuisineTags");
let cuisineContainer = [];
let cuisines = ['American', 'Chinese', 'Filipino', 'French', 'Greek', 'Hawaiian', 'Indian', 'Japanese', 'Korean', 'Spanish'];
for (let i = 0; i < cuisines.length; i++) {
    cuisineContainer[i] = document.createElement("div");
    cuisineContainer[i].classList.add("filterClass", "cuisineFilterClass");
    cuisineContainer[i].innerHTML += "<h4>" + cuisines[i] + "</h4>" + "<button>Include</button>" + "<button>Exclude</button>" + "<button>Add to Favorites</button>";
    cuisineFilters.appendChild(cuisineContainer[i]);
    if (i >= 5){
        cuisineContainer[i].style.display="none";
    }
}
if (cuisines.length > 5){
    var unshownCuisinesCount = document.createElement("div");
    cuisineFilters.appendChild(unshownCuisinesCount);
    unshownCuisinesCount.innerText = "+ " + (cuisines.length - 5) + " more";
    unshownCuisinesCount.style.fontWeight = "bold";
}



/*
function addTag() {
    let addedTag = document.getElementById("addTagsInput");
    addedTag.addEventListener("keydown", (e) => {
        if (e.key == "Enter"){
            
        }
    });
}

function selectTagCategory() {
    //uses a dropdown (select tag) next to the "Add new TAGS here" input, which has all the given categories in the filter section
    //to be used in tandem with addTag()
}

*/