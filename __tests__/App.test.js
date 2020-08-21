import { Provider } from 'react-redux'
import renderer from 'react-test-renderer'
import configureMockStore from 'redux-mock-store'

import { App } from '../src/App'
import { STORE_INITIAL_STATE } from '../src/App/constants'
import reducer from '../src/App/redux/reducers'

const mockStore = configureMockStore([])

describe('Testing Connected App', () => {
    let store
    let component

    beforeEach(() => {
        store = mockStore(STORE_INITIAL_STATE)

        store.dispatch = jest.fn()

        component = renderer.create(
            <Provider store={store}>
                <App />
            </Provider>
        )
    })

    it('rendering with mockStore', () => {
        expect(component.toJSON()).toMatchSnapshot()
    })

    it('reducers test', () => {
        expect(reducer(undefined, {})).toEqual(STORE_INITIAL_STATE)
    })
})
