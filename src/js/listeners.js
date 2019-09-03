import { onClick } from './events.js'
/**
 * Adds the event listener to the element used as a parameter
 * @param {HTMLElement} element target element to set the listener
 */
export const setClickListener = (element) =>  element.addEventListener('click', onClick)

/**
 * Sets the listener for the all initial dt
 */
export const setClickForAllDt = () => document.querySelectorAll('dt').forEach(setClickListener)