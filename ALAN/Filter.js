let filtersSlot;
onVisualState((p, s) => {
    if (s.allFilters) { //USE AN ARRAY OF THE FILTERS
        p.visual.filterNames = { en: ""};
        p.visual.filterNames.en = s.allFilters.join('|');
        //filtersSlot = p.visual.filterNames.en;
        //console.log(filtersSlot); //causes errors
        console.log(p.visual); 
        console.log(s.allFilters);
        console.log(p.visual.filterNames.en);
    }
});

intent('I (want|need|would like) to (find|search for|cook|make) recipes with $(INCLUDE~ v:filterNames)', 
       'I (currently|already|) have $(INCLUDE~ v:filterNames), what can I (cook|make)?',
       'Include $(INCLUDE~ v:filterNames)', 
       p => {
    p.play(`(Sure|Ok|Alright|Got it), including only recipes with ${capitalizeFirstLetter(p.INCLUDE.value)}`);
    p.play({command: 'alanInclude', data: capitalizeFirstLetter(p.INCLUDE.value)});
    p.then(filterActions);
});
intent('I want $(EXCLUDE~ v:filterNames) free recipes', 
       'I have a $(EXCLUDE~ v:filterNames) free diet', 
       'I don\'t want $(EXCLUDE~ v:filterNames) in my (diet|recipes)', 
       'Exclude $(EXCLUDE~ v:filterNames)', 
       p => {
    p.play(`(Sure|Ok|Alright|Got it), excluding recipes with ${capitalizeFirstLetter(p.EXCLUDE.value)}`);
    p.play({command: 'alanExclude', data: capitalizeFirstLetter(p.EXCLUDE.value)});
    p.then(filterActions);
});
let filterActions = context(() => {
    intent('Remove (filter|tag) (for|of) $(FILTER~ v:filterNames)', 
           'Remove (the|) $(FILTER~ v:filterNames) (tag|filter)',
           p => {
        p.play(`(Ok|Got it|Alright|Sure), removing filter (of|for) ${capitalizeFirstLetter(p.FILTER.value)}`);
        p.play({command: 'alanRemoveFilter', data: capitalizeFirstLetter(p.FILTER.value)});
    });
    intent('(Remove|Clear) all (filters|tags)', p => {
        p.play('(Ok|Got it|Alright|Sure), (clearing|removing) all filters.');
        p.play({command: 'alanClearFilters'});
    })
});


//Helper methods
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}