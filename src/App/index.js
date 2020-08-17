// Dependencies
import { connect } from 'react-redux'

// Pages
import { Home } from './pages/Home'

// Style
import './app.css'

function AppComponent({}) {
    return (
        <div>
            <Home/>
        </div>
    )
}

const mapStateToProps = ({ count }) => ({
    count
})

const mapDispatchToProps = dispatch => ({
    onIncrement: () => dispatch({ type: 'INCREMENT' }),
    onDecrement: () => dispatch({ type: 'DECREMENT' }),
    onIncrementAsync: () => dispatch({ type: 'INCREMENT_ASYNC' }),
    fetchData: () => dispatch({ type: 'FETCH' })
})

export const App = connect(mapStateToProps, mapDispatchToProps)(AppComponent)