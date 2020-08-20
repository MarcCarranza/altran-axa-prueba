// Constants
import { STORE_INITIAL_STATE, DEFAULT_FILTER } from "../../constants"

export default function fifthedition(state = STORE_INITIAL_STATE, action) {
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
                    ...action.filter
                },
                isFiltering: true
            }
        case 'CLEAR_FILTER': 
            return {
                ...state,
                filter: {
                    ...DEFAULT_FILTER
                },
                isFiltering: true
            }
        case 'UPDATE_SEARCH': 
            return {
                ...state,
                searchTerm: action.searchTerm,
                isSearching: true
            }
        case 'CLEAR_SEARCH': 
            return {
                ...state,
                searchTerm: '',
                isSearching: true
            }
        default:
            return state
    }
}