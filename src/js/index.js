import '../sass/main.scss'

/**
 * It remove all [data-active] available in the page and
 * adds it to the clicked element (dt).
 * This [data-active] is controlled by CSS to perform an animation
 * control the state open/close of the element content (dd)
 * 
 * @param {MouseEvent} event click event from mouse
 */
const onClick = (event) => {
    const dtActiveElement = document.querySelectorAll('[data-active]')

    // Set new active
    const targetElement = event.target
    if (dtActiveElement[0] !== targetElement) {
        // Clean previously selected
        dtActiveElement.forEach((element) => element.removeAttribute('data-active'))
        targetElement.setAttribute('data-active', 'true')
    }
}

/**
 * Adds the event listener to the element used as a parameter
 * @param {HTMLElement} element target element to set the listener
 */
const setClickListener = (element) =>  element.addEventListener('click', onClick)

/**
 * Sets the listener for the all initial dt
 */
const setClickForAllDt = () => document.querySelectorAll('dt').forEach(setClickListener)

/**
 * Creates a new element in the DOM with the same structure than 
 * the initial ones and the content passed as a parameter.
 * 
 * @param {string} title the text for the dt element
 * @param {string} content the text for the p element inside the dd
 */
const createAndAppendElementInDescriptiveList = (title, content) => {
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

export const HOSTNAME = 'https://api.themoviedb.org'
export const API_KEY = '3a5420a00be0ef520a9a429df97644be'
export const getPopularUrl = () => `${HOSTNAME}/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1&include_adult-false`

/**
 * Calls themoviedb popular movies API and adds the movies returned
 * in the dl list.
 */
const getAndAppendPopularFilms = () => {
    fetch(getPopularUrl())
        .then((res) => res.json())
        .then((json) => json.results)
        .then((movies) => movies.forEach(movie => createAndAppendElementInDescriptiveList(movie.title, movie.overview)))
}

/**
 * Set the click for the initial elements and creates the list of films
 */
const init = () => {
    setClickForAllDt()
    getAndAppendPopularFilms()
}

// main trigger
document.addEventListener('DOMContentLoaded', init)
