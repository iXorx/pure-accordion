import '../sass/main.scss'
import { setClickForAllDt } from './listeners'
import { getAndAppendPopularFilms } from './fetch-elements'

window.onload = () => {
    setClickForAllDt()
    getAndAppendPopularFilms()
}
