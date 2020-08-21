import { Provider } from 'react-redux'
import renderer from 'react-test-renderer'
import configureMockStore from 'redux-mock-store'

import { App } from '../../src/App'
import { STORE_INITIAL_STATE } from '../../src/App/constants'

const mockStore = configureMockStore([])

describe('Testing App', () => {
    let store
    let component

    beforeEach(() => {
        store = mockStore(STORE_INITIAL_STATE)
    })

    test('snapshot renders', () => {
        const component = renderer.create(
            <Provider store={store}>
                <App />
            </Provider>
        )
        let tree = component.toJSON()
        expect(tree).toMatchSnapshot()
    })
})
