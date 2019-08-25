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

function init () {
    setClick()
    createNewElementInDescriptiveList('Section Dynamic', 'Section Dynamic Content...')
    createNewElementInDescriptiveList('Section Dynamic 2', 'Section Dynamic Content 2...')
}

const createNewElementInDescriptiveList = (title, content) => {
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

document.addEventListener('DOMContentLoaded', init)
