import { createAndAppendElementInDescriptiveList } from "../fetch-elements";
import { onClick } from "../events";

describe('events', () => {
    beforeEach(() => {
        document.body.innerHTML = ('<dl></dl>')
        createAndAppendElementInDescriptiveList('Title', 'Content')
        createAndAppendElementInDescriptiveList('Title2', 'Content2')
    })

    const getDataActiveElements = () => document.querySelectorAll('[data-active]')

    test('should set the target element with [data-active]', () => {
        const elements = document.querySelectorAll('dt')
        expect(elements).toHaveLength(2)
        const targetElement = elements[0]
        targetElement.click()
        const activeElements = getDataActiveElements()
        expect(activeElements).toHaveLength(1)
        expect(activeElements[0]).toBe(targetElement)
    })

    test('should deselect all [data-active] when clicking a [data-active] element', () => {
        const elements = document.querySelectorAll('dt')
        expect(elements).toHaveLength(2)
        const targetElement = elements[0]
        targetElement.click()
        targetElement.click()
        const activeElements = getDataActiveElements()
        expect(activeElements).toHaveLength(0)
    })

    test('should change [data-active] when clicking a diferent element', () => {
        const elements = document.querySelectorAll('dt')
        expect(elements).toHaveLength(2)
        const preActiveElement = elements[0]
        preActiveElement.click()
        const preActiveElements = getDataActiveElements()
        expect(preActiveElements).toHaveLength(1)
        expect(preActiveElements[0]).toBe(preActiveElement)

        const targetElement = elements[1]
        targetElement.click()
        const activeElements = getDataActiveElements()
        expect(activeElements).toHaveLength(1)
        expect(activeElements[0]).toBe(targetElement)
    })
})
