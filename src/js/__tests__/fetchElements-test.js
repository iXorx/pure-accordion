var createAndAppendElementInDescriptiveList = require('../fetchElements')

describe('createAndAppendElementInDescriptiveList', () => {
    document.body.innerHTML(
        '<dl></dl>'
    )
    test('should add a new \'dt\' and \'dt\' element', () => {
        createAndAppendElementInDescriptiveList('foo','bar')
        expect(document.querySelectorAll('dt')).toHaveLength(1)
    })
})
