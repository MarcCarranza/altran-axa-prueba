export default function counter(state = { data: [] }, action) {
    switch (action.type) {
        case 'INCREMENT':
            return {
                ...state,
                count: state.count + 1
            }
        case 'INCREMENT_IF_ODD':
            return (state % 2 !== 0) 
                ? {
                    ...state,
                    count: state.count + 1
                }
                : state
        case 'DECREMENT':
            return {
                ...state,
                count: state.count - 1
            }
        case 'FETCH_LOADING':
            return {
                ...state,
                isLoading: true
            }
        case 'FETCH_SUCCESS':
            return {
                ...state,
                data: action.data,
                isLoading: false
            }
        case 'FETCH_FAIL':
            return {
                ...state,
                isLoading: false,
                error: action.error
            }
        default:
            return state
    }
}