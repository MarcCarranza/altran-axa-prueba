// Styles
import './searchinput.css'

function SearchInputComponent({ label, onChange }) {
    return (
        <div className='search__input-wrapper'>
            <label className='search__input-label'>
                {label}
            </label>
            <input
                className='search__input-input'
                onChange={onChange}
            />
        </div>
    )
}

export const SearchInput = SearchInputComponent