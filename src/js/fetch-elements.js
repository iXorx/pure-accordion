import { setClickListener } from './listeners'

const HOSTNAME = 'https://api.themoviedb.org'
const API_KEY = '3a5420a00be0ef520a9a429df97644be'
export const getPopularUrl = () => `${HOSTNAME}/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1&include_adult-false`

/**
 * Calls themoviedb popular movies API and adds the movies returned
 * in the dl list.
 */
export const getAndAppendPopularFilms = () => (
    fetch(getPopularUrl())
        .then((res) => res.json())
        .then((json) => json.results)
        .then((movies) => movies.forEach(movie => createAndAppendElementInDescriptiveList(movie.title, movie.overview)))
        .catch((e) => console.error('error getting popular films: ' + e))
)

/**
 * Creates a new element in the DOM with the same structure than 
 * the initial ones and the content passed as a parameter.
 * 
 * @param {string} title the text for the dt element
 * @param {string} content the text for the p element inside the dd
 */
export const createAndAppendElementInDescriptiveList = (title, content) => {
    // create dt
    const newDt = document.createElement('dt')
    setClickListener(newDt)
    const newContentDt = document.createTextNode(title)
    newDt.appendChild(newContentDt)

    // create dd + p
    const newDd = document.createElement('dd')
    const newP = document.createElement('p')
    const newContentDd = document.createTextNode(content)
    newP.appendChild(newContentDd)
    newDd.appendChild(newP)
    
    // append to dl
    const targetDl = document.querySelector('dl')
    targetDl.appendChild(newDt)
    targetDl.appendChild(newDd)
}