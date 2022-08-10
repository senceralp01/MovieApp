import { elements } from "../base";

export const clearInput = () => {
    elements.searchInput.value = '';
}

export const clearResults = () => {
    elements.searchResult.innerHTML = '';
}

export const displayResults = data => {
    data.results.forEach(movie => {
        console.log(movie);
        const html = `
        <li class="media mb-3">
            <img src="https://www.themoviedb.org/t/p/w92${movie.poster_path}" onerror="this.src='https://via.placeholder.com/92x138';" class="mr-3" alt="${movie.title}">
            <div class="media-body">
                <h5 class="mt-0 mb-1">
                <span class="badge badge-primary">${movie.vote_average}</span> ${movie.title}
                </h5>
                <p>${movie.overview}</p>
            </div>
        </li>
        `;
        elements.searchResult.insertAdjacentHTML('beforeend', html);
    });
}