function filterRecipes(c){
    var x; 
    x = document.getElementsByClassName("box"); 
    if (c == all){
        c="";
    }
    for(let i = 0; i < x.length; i++){
        removeClass(x[i], "show");
        if(x[i].className.indexOf(c) > -1) addClass(x[i], "show");

    }
}


function addClass(element, name) {
    var arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 =  name.split(" ");
    for (let i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i])== -1) { 
            element.className + + arr2[i];
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

const favoriteFilters = document.querySelector(".favoriteTags");
let favoritesContainer = [];
for (let i = 0; i < 2; i++) {
    favoritesContainer[i] = document.createElement("div");
    favoritesContainer[i].classList.add("filterClass", "favoriteFilterClass");
    favoritesContainer[i].innerHTML += "<h4>Favorite " + (1 + i) + "</h4>" + "<button>Include</button>" + "<button>Exclude</button>" + "<button>Remove from Favorites</button>";
    favoriteFilters.appendChild(favoritesContainer[i]);
}

const applianceFilters = document.querySelector(".applianceTags");
let applianceContainer = [];
let appliances = ['Oven', 'Oventop', 'Microwave', 'Airfryer', 'Steamer', 'Pressure Cooker', 'Rice Cooker'];
for (let i = 0; i < appliances.length; i++) {
    applianceContainer[i] = document.createElement("div");
    applianceContainer[i].classList.add("filterClass", "applianceFilterClass");
    applianceContainer[i].innerHTML += "<h4>" + appliances[i] + "</h4>" + "<button>Include</button>" + "<button>Exclude</button>" /*+ "<button>Add to Favorites</button>"*/;
    applianceFilters.appendChild(applianceContainer[i]);
}
const ingredientFilters = document.querySelector(".ingredientTags");
let ingredientContainer = [];
let ingredients = ['Sugar', 'Milk', 'Salt', 'Chicken', 'Olive Oil', 'Soy Sauce', 'Vinegar', 'Eggs', 'Flour', 'Veggies', 'Rice'];
for (let i = 0; i < ingredients.length; i++) {
    ingredientContainer[i] = document.createElement("div");
    ingredientContainer[i].classList.add("filterClass", "ingredientFilterClass");
    ingredientContainer[i].innerHTML += "<h4>" + ingredients[i] + "</h4>" + "<button>Include</button>" + "<button>Exclude</button>" /*+ "<button>Add to Favorites</button>"*/;
    ingredientFilters.appendChild(ingredientContainer[i]);
}
const cuisineFilters = document.querySelector(".cuisineTags");
let cuisineContainer = [];
let cuisines = ['American', 'Chinese', 'Filipino', 'French', 'Greek', 'Hawaiian', 'Indian', 'Japanese', 'Korean', 'Spanish'];
for (let i = 0; i < cuisines.length; i++) {
    cuisineContainer[i] = document.createElement("div");
    cuisineContainer[i].classList.add("filterClass", "cuisineFilterClass");
    cuisineContainer[i].innerHTML += "<h4>" + cuisines[i] + "</h4>" + "<button>Include</button>" + "<button>Exclude</button>" /*+ "<button>Add to Favorites</button>"*/;
    cuisineFilters.appendChild(cuisineContainer[i]);
}
function top5TagsOnly(pTagData, pTagList, pTagCategory) {
    if (pTagData.length > 5) {
        for (let i = 5; i < pTagList.length; i++) {
            pTagList[i].style.display="none";
        }

        let unshownTagsCount = document.createElement("div");
        unshownTagsCount.classList.add("unshown");
        pTagCategory.appendChild(unshownTagsCount);
        unshownTagsCount.innerText = "+ " + (pTagData.length - 5) + " more";
        unshownTagsCount.style.fontWeight = "bold";
    }
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