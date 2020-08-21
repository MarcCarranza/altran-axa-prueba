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

    it('rendering App with mockStore', () => {
        expect(component.toJSON()).toMatchSnapshot()
    })

    it('reducer initial test', () => {
        expect(reducer(undefined, {})).toEqual(STORE_INITIAL_STATE)
    })

    it('FETCH_SUCCESS test', () => {
        const mockData = [{
            "id": 0,
            "name": "Nota halfling",
            "thumbnail": "https://pbs.twimg.com/media/EG9MhrVWoAAo29F?format=jpg&name=small",
            "age": 360,
            "weight": 30.123,
            "height": 100.000,
            "hair_color": "RGB",
            "professions": [],
            "friends": []
        }]

        expect(
            reducer({}, { type: 'FETCH_SUCCESS', data: mockData })
        ).toEqual({ data: mockData, isLoading: false })
    })
})
