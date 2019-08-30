import '../sass/main.scss'
import { setClickForAllDt } from './listeners'
import { getAndAppendPopularFilms } from './fetchElements'

window.onload = () => {
    setClickForAllDt()
    getAndAppendPopularFilms()
}
