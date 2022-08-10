// api: 586f5bbdeee5ac30f77aa82dddefa74f
// url: https://api.themoviedb.org/3
// https://api.themoviedb.org/3/search/movie?api_key=586f5bbdeee5ac30f77aa82dddefa74f&language=en-US&query=a&page=1&include_adult=false


// Model View Controller (MVC)

import Search from './models/Search';
import { elements } from './base';
import * as searchView from './views/searchView';

const state = {};

const searchController = async () => {

    const keyword = elements.searchInput.value;

    if (keyword){
        state.search = new Search(keyword);

        await state.search.getResults();
        // console.log(state.search.data);
        
        searchView.clearInput();
        searchView.clearResults();
        searchView.displayResults(state.search.data);
        

    }else{
        alert('Type keyword please.')
    }

}

elements.searchForm.addEventListener('submit', function(e){
    console.log('form-submitted');
    searchController();
    e.preventDefault();
});