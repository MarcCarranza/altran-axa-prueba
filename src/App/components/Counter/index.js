function CounterComponent ({ value, onIncrement, onDecrement, onIncrementAsync, fetch }) {
    return (
        <div>
            <button onClick={onIncrementAsync}>
                Increment after 1 second
            </button>
            {' '}
            <button onClick={onIncrement}>
            Increment
            </button>
            {' '}
            <button onClick={onDecrement}>
                Decrement
            </button>
            <button onClick={fetch}>
                Fetch
            </button>
            <hr />
            <div>
                Clicked: {value} times
            </div>
        </div>
    )
}

export const Counter = CounterComponent