import { elements } from "../base";

export const displayResults = data => {
    data.results.forEach(movie => {
        console.log(movie);
        const html = `
            <p>${movie.title}</p>
        `;
        elements.searchResult.insertAdjacentHTML('beforeend', html);
    });
}