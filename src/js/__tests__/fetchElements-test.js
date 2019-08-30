import { 
    createAndAppendElementInDescriptiveList,
    getAndAppendPopularFilms,
    getPopularUrl 
} from '../fetchElements'
describe('fetchElements', () => {
    beforeEach(() => {
        document.body.innerHTML = ('<dl></dl>')
    })

    describe('createAndAppendElementInDescriptiveList', () => {
        test('should create a new element with the proper content and structure', () => {
            const title = 'foo'
            const content = 'bar'
            createAndAppendElementInDescriptiveList(title, content)
            const dts = document.querySelectorAll('dt')
            const dds = document.querySelectorAll('dd')
            const ps = document.querySelectorAll('p')
            expect(dts).toHaveLength(1)
            expect(dds).toHaveLength(1)
            expect(ps).toHaveLength(1)
            expect(dts[0].innerHTML).toEqual(title)
            expect(ps[0].innerHTML).toEqual(content)
        })
    })

    describe('getAndAppendPopularFilms', () => {
        const mockFetch = (response) => {
            const mockSuccessResponse = response
            const mockFetchPromise = Promise.resolve({
                json: () => Promise.resolve(mockSuccessResponse),
            })

            global.fetch = jest.fn().mockImplementation(() => mockFetchPromise)
        }

        afterEach(() => {
            global.fetch.mockClear();
            delete global.fetch;
        });

        const createMovie = (idx) => ({ title: `foo${idx}`, overview: `bar${idx}` })

        test('should call fetch with the proper URL', () => {
            mockFetch({ results: [] })
            getAndAppendPopularFilms()
            expect(global.fetch).toHaveBeenCalledTimes(1)
            expect(global.fetch).toHaveBeenCalledWith(getPopularUrl())
        })

        test('should create one dt+dd per result', () => {
            const results = [ createMovie(1), createMovie(2) ]
            mockFetch({ results })
            getAndAppendPopularFilms().then(() => {
                const dts = document.querySelectorAll('dt')
                const dds = document.querySelectorAll('dd')
                expect(dts).toHaveLength(results.length)
                expect(dds).toHaveLength(results.length)
            })
        })

        test('should create nothing when results are empty', () => {
            const results = []
            mockFetch({ results })
            getAndAppendPopularFilms().then(() => {
                const dts = document.querySelectorAll('dt')
                const dds = document.querySelectorAll('dd')
                expect(dts).toHaveLength(0)
                expect(dds).toHaveLength(0)
            })
        })
        test('should create nothing when fetch fails', () => {
            const mockFetchPromise = Promise.reject('testing failing call')
            global.fetch = jest.fn().mockImplementation(() => mockFetchPromise)

            getAndAppendPopularFilms().then(() => {
                const dts = document.querySelectorAll('dt')
                const dds = document.querySelectorAll('dd')
                expect(dts).toHaveLength(0)
                expect(dds).toHaveLength(0)
            })
        })
    })
})