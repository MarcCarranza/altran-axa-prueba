import { DEFAULT_FILTER } from "../../constants"
import { filter } from "lodash"

export default function fifthedition(state = { data: [], filter: DEFAULT_FILTER}, action) {
    switch (action.type) {
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
        case 'UPDATE_FILTER': 
            return {
                ...state,
                filter: {
                    ...filter,
                    ...action.filter
                }
            }
        default:
            return state
    }
}