// Dependencies
import { useState } from 'react'
import { connect } from 'react-redux'

// Components
import { Button } from '../common/Button'

// Helpers
import { detectEnter } from '../../helpers/detectEnter'

// Styles
import './search.css'



function SearchComponent({ isOpen, onApplySearch }) {
    const [searchTerm, setSearchTerm] = useState('')

    function onChangeInput({ target: { value } }) {
        setSearchTerm(value)
    }

    function onClickSearch() {
        onApplySearch(searchTerm.toLowerCase())
    }

    function onPressEnter(e) {
        detectEnter({ key: e.key, func: onClickSearch })
    }

    return (
        <div className={`search ${isOpen ? 'search__open' : 'search__close'}`}>
            <div className={isOpen ? 'search__input-open' : 'search__input-closed'}>
                <div className='search__input-wrapper'>
                    <input
                        className='search__input-input'
                        type='text'
                        onChange={onChangeInput}
                        onKeyDown={onPressEnter}
                    />
                    <Button
                        onClick={onClickSearch}
                        label={'Search'}
                        btnClass='apply'
                    />
                </div>
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    onApplySearch: (searchTerm) => dispatch({ type: 'UPDATE_SEARCH', searchTerm })
})

export const Search = connect(null, mapDispatchToProps)(SearchComponent)