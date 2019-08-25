import '../sass/main.scss'

function onClick (event) {
    const activeElement = document.querySelectorAll('[data-active]')
    activeElement.forEach(e => e.removeAttribute('data-active'))
    if(activeElement[0] !== event.target) {
        event.target.setAttribute('data-active', 'true')
    }
}

const setClickListener = (element) =>  element.addEventListener('click', onClick)

function setClick () {
    document.querySelectorAll('dt').forEach(setClickListener)
}

const createAndAppendElementInDescriptiveList = (title, content) => {
    const newDt = document.createElement('dt')
    setClickListener(newDt)
    const newContentDt = document.createTextNode(title)
    newDt.appendChild(newContentDt)
    const newDd = document.createElement('dd')
    const newP = document.createElement('p')
    const newContentDd = document.createTextNode(content)
    newP.appendChild(newContentDd)
    newDd.appendChild(newP)
    const targetDl = document.querySelector('dl')
    targetDl.appendChild(newDt)
    targetDl.appendChild(newDd)
}

export const HOSTNAME = 'https://api.themoviedb.org'
export const API_KEY = '3a5420a00be0ef520a9a429df97644be'
export const getPopularUrl = () => `${HOSTNAME}/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1&include_adult-false`

const getAndAppendPopularFilms = () => {
    fetch(getPopularUrl())
        .then((res) => res.json())
        .then((json) => json.results)
        .then((movies) => movies.forEach(movie => createAndAppendElementInDescriptiveList(movie.title, movie.overview)))
}


function init () {
    setClick()
    getAndAppendPopularFilms()
}

document.addEventListener('DOMContentLoaded', init)
