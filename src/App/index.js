import { Counter } from "./components/Counter";
import { connect } from 'react-redux'

function AppComponent({ count, onIncrement, onDecrement, onIncrementAsync, fetchData }) {
    return (
        <div>
            <Counter
                value={count}
                onIncrement={onIncrement}
                onDecrement={onDecrement}
                onIncrementAsync={onIncrementAsync}
                fetch={fetchData}
            />
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