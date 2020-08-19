// Dependencies
import { connect } from 'react-redux'

// Components
import { SearchInput } from '../common/SearchInput'

// Constants
import { DEFAULT_SEARCH } from '../../constants'

// Styles
import './search.css'


function SearchComponent({ isOpen, onApplySearch }) {
    const search = DEFAULT_SEARCH

    return (
        <div className={`search ${isOpen ? 'search__open' : 'search__close'}`}>
            <div className={isOpen ? 'search__input-wrapper-open' : 'search__input-wrapper-closed'}>
                <SearchInput
                    label={'Name'}
                    onChange={(e) => search.name = e.target.value}
                />
                <SearchInput
                    label={'Last name'}
                    onChange={(e) => search.lastname = e.target.value}
                />
                <button onClick={() => onApplySearch(search)}>
                    Apply
                </button>
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    onApplySearch: (search) => dispatch({ type: 'UPDATE_SEARCH', search })
})

export const Search = connect(null, mapDispatchToProps)(SearchComponent)