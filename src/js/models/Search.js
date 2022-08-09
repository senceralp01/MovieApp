export default class Search{
    constructor(keyword){
        this.keyword = keyword;
    }

    async getResults() {
        const api_key = "586f5bbdeee5ac30f77aa82dddefa74f";
        const base_url = "https://api.themoviedb.org/3";
    
        const response = await fetch(`${base_url}/search/movie?api_key=${api_key}&page=1&query=${this.keyword}`);
        this.data = await response.json();
    
    
    }
}