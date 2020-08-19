// Components
import { SearchInput } from '../common/SearchInput'

// Styles
import './search.css'

function SearchComponent({ isOpen }) {
    return (
        <div className={`search ${isOpen ? 'search__open' : 'search__close'}`}>
            <div className={isOpen ? 'search__input-wrapper-open' : 'search__input-wrapper-closed'}>
                <SearchInput 
                    label={'Name'}
                    onChange={(e) => console.log(e)}
                />
                <SearchInput 
                    label={'Last name'}
                    onChange={(e) => console.log(e)}
                />
            </div>
        </div>
    )
}

export const Search = SearchComponent