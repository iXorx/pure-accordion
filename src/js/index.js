import '../sass/main.scss'

function onClick (event) {
  // Clean
  const dtActiveElement = document.querySelectorAll('[data-active]')
  dtActiveElement.forEach((element) => {
    element.removeAttribute('data-active')
    element.nextElementSibling.style.maxHeight = 0;
  })

  // Set new active
  const targetElement = event.target
  if(dtActiveElement[0] !== targetElement) {
      targetElement.setAttribute('data-active', 'true')
      targetElement.nextElementSibling.style.maxHeight = 500;
  }
}

function growDiv(growDiv) {
  if (growDiv.clientHeight) {
    growDiv.style.height = 0;
  } else {
    var wrapper = growDiv.querySelector('p');
    growDiv.style.height = wrapper.clientHeight + "px";
  }
  document.getElementById("more-button").value = document.getElementById("more-button").value == 'Read more' ? 'Read less' : 'Read more';
}

const setClickListener = (element) =>  element.addEventListener('click', onClick)

function setClick () {
  console.log(document.querySelectorAll('dt'))
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
