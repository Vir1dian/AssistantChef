function filterRecipes() {
    let filterItem = document.querySelectorAll(".filterClass");
    let includeButtons = document.querySelectorAll(".includeButton");
    let excludeButtons = document.querySelectorAll(".excludeButton");

    for (let i = 0; i < filterItem.length; i++) {
        let includeMatch = false;
        let excludeMatch = false;

        let tags = filterItem[i].getAttribute("data-tags").toUpperCase();

        for (let i = 0; i < includeButtons.length; i++) {
            let include = includeButtons[i].getAttribute("data-include").toUpperCase();
            if (tags.includes(include)) {
                includeMatch = true;
                break;
            }
        }

        for (let j = 0; j < excludeButtons.length; j++) {
            let exclude = excludeButtons[j].getAttribute("data-exclude").toUpperCase();
            if (tags.includes(exclude)) {
                excludeMatch = true;
                break;
            }
        }

        if (includeMatch && !excludeMatch) {
            filterItem[i].style.display = "";
        } else {
            filterItem[i].style.display = "none";
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
let favoritesContainer = [];
for (let i = 0; i < 2; i++) {
    favoritesContainer[i] = document.createElement("div");
    favoritesContainer[i].classList.add("filterClass", "favoriteFilterClass");
    favoritesContainer[i].innerHTML += "<h4>Favorite " + (1 + i) + "</h4>" + "<button>Include</button>" + "<button>Exclude</button>" + "<button>Remove from Favorites</button>";
    favoriteFilter.appendChild(favoritesContainer[i]);
}

const applianceFilter = document.querySelector(".applianceTags");
let applianceContainer = [];
let appliances = ['Oven', 'Oventop', 'Microwave', 'Airfryer', 'Steamer', 'Pressure Cooker', 'Rice Cooker'];
for (let i = 0; i < appliances.length; i++) {
    applianceContainer[i] = document.createElement("div");
    applianceContainer[i].classList.add("filterClass", "applianceFilterClass");
    applianceContainer[i].innerHTML += "<h4>" + appliances[i] + "</h4>" + "<button>Include</button>" + "<button>Exclude</button>" /*+ "<button>Add to Favorites</button>"*/;
    applianceFilter.appendChild(applianceContainer[i]);
}
/*
applianceContainer[appliances.length] = document.createElement("div");
applianceContainer[appliances.length].classList.add("filterClass", "applianceFilterClass");
applianceContainer[appliances.length].innerHTML += "<h4>" + appliances.length + "</h4>" + "<button>Include</button>" + "<button>Exclude</button>" + "<button>Add to Favorites</button>";
*/

const ingredientFilter = document.querySelector(".ingredientTags");
let ingredientContainer = [];
let ingredients = ['Sugar', 'Milk', 'Salt', 'Chicken', 'Olive Oil', 'Soy Sauce', 'Vinegar', 'Eggs', 'Flour', 'Veggies', 'Rice'];
for (let i = 0; i < ingredients.length; i++) {
    ingredientContainer[i] = document.createElement("div");
    ingredientContainer[i].classList.add("filterClass", "ingredientFilterClass");
    ingredientContainer[i].innerHTML += "<h4>" + ingredients[i] + "</h4>" + "<button>Include</button>" + "<button>Exclude</button>" /*+ "<button>Add to Favorites</button>"*/;
    ingredientFilter.appendChild(ingredientContainer[i]);
}
const cuisineFilter = document.querySelector(".cuisineTags");
let cuisineContainer = [];
let cuisines = ['American', 'Chinese', 'Filipino', 'French', 'Greek', 'Hawaiian', 'Indian', 'Italian', 'Japanese', 'Korean', 'Spanish'];
for (let i = 0; i < cuisines.length; i++) {
    cuisineContainer[i] = document.createElement("div");
    cuisineContainer[i].classList.add("filterClass", "cuisineFilterClass");
    cuisineContainer[i].innerHTML += "<h4>" + cuisines[i] + "</h4>" + "<button>Include</button>" + "<button>Exclude</button>" /*+ "<button>Add to Favorites</button>"*/;
    cuisineFilter.appendChild(cuisineContainer[i]);
}

function addNewTag() {
    let addedTag = document.getElementById("addTagsInput");
    let selectedCategory = document.getElementById("tagCategories");
    addedTag.addEventListener("keydown", (e) => {
        if (e.key == "Enter" && addedTag.value != ""){
            switch (selectedCategory.value) {
                case "appliance":
                    appliances.unshift(addedTag.value);
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