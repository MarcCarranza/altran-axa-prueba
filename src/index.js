import ReactDOM from 'react-dom'
import { App } from './App'
import store from './App/redux/store'
import { Provider } from 'react-redux'

function AppWrapper () {
    return (
        <Provider store={store}>
            <App/>
        </Provider>
    )
}

const wrapper = document.getElementById("root")
wrapper ? ReactDOM.render(<AppWrapper/>, wrapper) : false