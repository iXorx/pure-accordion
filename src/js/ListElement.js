class ListElement {
    constructor (htmlElement) {
        this.htmlElement = htmlElement
        this.isSelected = false
    }

    /**
     * It remove all [data-active] available in the page and
     * adds it to the clicked element (dt).
     * This [data-active] is controlled by CSS to perform an animation
     * control the state open/close of the element content (dd)
     * 
     * @param {MouseEvent} event click event from mouse
     */
    onClick = (event) => {
        const dtActiveElement = document.querySelectorAll('[data-active]')

        // Set new active
        const targetElement = event.target
        if (dtActiveElement[0] !== targetElement) {
            // Clean previously selected
            dtActiveElement.forEach((element) => element.removeAttribute('data-active'))
            targetElement.setAttribute('data-active', 'true')
        }
    }

}