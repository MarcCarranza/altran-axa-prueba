// __tests__
import { Provider } from 'react-redux'
import renderer from 'react-test-renderer'
import configureMockStore from 'redux-mock-store'
import { STORE_INITIAL_STATE, MOCK_DATA, MOCK_RESPONSE } from './constants'

// Src
import { App } from '../src/App'
import reducer from '../src/App/redux/reducers'
import { watchFetchAsync, fetchGnomeData } from '../src/App/redux/sagas'
import { takeEvery, put } from 'redux-saga/effects'

const mockStore = configureMockStore([])
const runAllPromises = () => new Promise(setImmediate)

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

    it('Reducer "FETCH_SUCCESS" test', () => {
        expect(
            reducer({}, { type: 'FETCH_SUCCESS', data: MOCK_DATA })
        ).toEqual({ data: MOCK_DATA, isLoading: false })
    })

    it('Sagas dispatch "FETCH"', () => {
        const generator = watchFetchAsync()
        expect(generator.next().value)
            .toEqual(takeEvery('FETCH', fetchGnomeData))

        expect(generator.next().done).toBeTruthy()
    })

    // This test is not correct, it works for FETCH_LOADING but works differently for FETCH_SUCCESS
    it('Sagas dispatch "FETCH_LOADING" then "FETCH_SUCCESS"', async () => {
        const generator = fetchGnomeData()

        await runAllPromises() // Promises have to be executed and .then can't be used

        expect(generator.next(MOCK_RESPONSE).value)
            .toEqual(
                put({ type: 'FETCH_LOADING' })
            )

        generator.next()

        expect(generator.next(MOCK_RESPONSE).value)
            .toEqual(
                put(MOCK_RESPONSE)
            )

        expect(generator.next().done).toBeTruthy()
    })
})
