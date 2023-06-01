let recipesList, recipeDishList, recipeTimeList, recipeIngredientsList, recipeInstructionsList, selectedRecipe, selectedRecipeIndex;

onVisualState((p, s) => {
    if (s.recipeArticles) { 
//s.recipeArticles returns an exact copy of the JSON object array, can only be triggered ONCE onVisualState triggers
        p.visual.recipeNames = { en: ""};
        p.visual.recipeNames.en = s.recipeArticles.map((recipe) => {return recipe.dish}).join('|');
        
//Recipe components mapped into separate arrays
        recipesList = s.recipeArticles;
        recipeDishList = recipesList.map((recipe) => {return recipe.dish});
        recipeTimeList = recipesList.map((recipe) => {return recipe.time});
        recipeIngredientsList = recipesList.map((recipe) => {return recipe.ingredients});
        recipeInstructionsList = recipesList.map((recipe) => {return recipe.instructions});
        
//Debug
        console.log(p.visual); 
//recipesList and all of its mapped components are only defined when this function is triggered by its associated intent
        console.log(recipesList);
        console.log(recipeDishList);
        console.log(recipeTimeList); 
        console.log(recipeIngredientsList);
        console.log(recipeInstructionsList);
//p.visual returns a single object, one field contains the JSON array provided by s.recipeArticles 
//while the other field "en", contains a string to be selected by the associated slot "x|y|z|..."
        //
    }
});

intent('(Search for|Look for|Find|) (a recipe|) (of|for|) $(ITEM~ v:recipeNames)', 
       '(Search for|Look for|Find) (a recipe) (of|for) $(UNAVAILABLE_ITEM* .*)',
       p => {
    if (p.UNAVAILABLE_ITEM) {
        p.play('This recipe is unavailable');
    } else {
        p.play(`Found a recipe (of|for) ${p.ITEM.value}`);
        recognizeRecipe(p, p.ITEM.value);
    }
});

intent('What is the time to (cook|make) $(ITEM~ v:recipeNames)?', 
       'How (long|much time) (will it take|does it take|) to (cook|make) $(ITEM~ v:recipeNames)?',
       'What is the time to (cook|make) $(UNAVAILABLE_ITEM* .*)',
       'How (long|much time) (will it take|does it take|) to (cook|make) $(UNAVAILABLE_ITEM* .*)',
       p => {
    if (p.UNAVAILABLE_ITEM) {
        p.play('This recipe is unavailable');
    } else {
        recognizeRecipe(p, p.ITEM.value);
        p.play(`The time it will take to (cook|make) ${p.ITEM.value} is ` + secondsToHMS(recipeTimeList[selectedRecipeIndex]));
    }
});

intent('What (do I need|ingredients should I get) to (make|cook) $(ITEM~ v:recipeNames)?', 
       'What (do I need|ingredients should I get) to (make|cook) $(UNAVAILABLE_ITEM* .*)',
       p => {
    if (p.UNAVAILABLE_ITEM) {
        p.play('This recipe is unavailable');
    } else {
        recognizeRecipe(p, p.ITEM.value);
        p.play(`To (cook|make) ${p.ITEM.value}, (what you'll need is|you should have|you will need) ` + recipeIngredientsList[selectedRecipeIndex]);
    }
});

intent('Read (the|) (instructions|directions) (for|in|of) $(ITEM~ v:recipeNames)', 
       'Read (the|) (instructions|directions) (for|in|of) $(UNAVAILABLE_ITEM* .*)',
       p => {
    if (p.UNAVAILABLE_ITEM) {
        p.play('This recipe is unavailable');
    } else {
        recognizeRecipe(p, p.ITEM.value);
        p.play(`Here are the instructions for ${p.ITEM.value}`);
        p.play(recipeInstructionsList[selectedRecipeIndex].replace(/<br>./g, "")); 
        //replaceAll() was not recognized as a function, used replace() with a regex instead
    }
});

//Helper functions

function recognizeRecipe(p, item) {
    //selectedRecipe saves the ITEM value in upper case
    selectedRecipe = item.toUpperCase(); 
    console.log(selectedRecipe); 
    //forEach method finds the index of ITEM to be used in the mapped arrays
    recipeDishList.forEach((n, i) => {
        if (recipeDishList[i].toUpperCase().indexOf(selectedRecipe) > -1) { 
            selectedRecipeIndex = i;
        }
    });
    console.log(selectedRecipeIndex);
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
        if (minutes > 0) {
            time += "and "
        }
    }
    if (minutes > 0) {
        if (minutes == 1) {
            time += minutes + " minute "
        } else {
            time += minutes + " minutes "
        }
        if (seconds > 0) {
            time += "and "
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