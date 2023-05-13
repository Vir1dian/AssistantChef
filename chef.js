function search() { //Finds recipes as the user types
    let find = document.getElementById("searchHere").value.toUpperCase();
    let recipeItem = document.querySelectorAll(".recipe");
    let recipeName = document.getElementsByTagName("h2");
    for (var i = 0; i < recipeName.length; i++){
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