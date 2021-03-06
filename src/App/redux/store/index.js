import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootSaga from '../sagas'
import reducer from '../reducers'

const sagaMiddleware = createSagaMiddleware()

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // For Redux Devtools
const store = createStore(reducer, composeEnhancers(
    applyMiddleware(sagaMiddleware)
))

sagaMiddleware.run(rootSaga)

export default store