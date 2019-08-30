/**
 * It remove all [data-active] available in the page and
 * adds it to the clicked element (dt).
 * This [data-active] is controlled by CSS to perform an animation
 * control the state open/close of the element content (dd)
 * 
 * @param {MouseEvent} event click event from mouse
 */
export const onClick = (event) => {
    const dtActiveElement = document.querySelectorAll('[data-active]')
    dtActiveElement.forEach((element) => element.removeAttribute('data-active'))

    // Set new active
    const targetElement = event.target
    if (dtActiveElement[0] !== targetElement) {
        // Clean previously selected
        targetElement.setAttribute('data-active', 'true')
    }
}