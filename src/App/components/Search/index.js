// Dependencies
import { useState, useRef, useEffect } from 'react'
import { connect } from 'react-redux'

// Components
import { Button } from '../common/Button'

// Helpers
import { detectEnter } from '../../helpers/detectEnter'

// Styles
import './search.css'



function SearchComponent({ isOpen, onApplySearch, clearSearch, onClearSearch }) {
    const [searchTerm, setSearchTerm] = useState('')
    const inputEl = useRef(null)

    useEffect(() => {
        if (isOpen) {
            inputEl.current.focus()
        }
    }, [isOpen])

    function onChangeInput({ target: { value } }) {
        setSearchTerm(value)
    }

    function onClickSearch() {
        onApplySearch(searchTerm.toLowerCase())
        inputEl.current = null
    }

    function onPressEnter(e) {
        detectEnter({ key: e.key, func: onClickSearch })
    }
    
    function onClickClear () {
        setSearchTerm('')
        clearSearch()
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
                        ref={inputEl}
                        value={searchTerm}
                    />
                    <Button
                        onClick={onClickClear}
                        label={'Clear'}
                        btnClass='clear'
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
    onApplySearch: (searchTerm) => dispatch({ type: 'UPDATE_SEARCH', searchTerm }),
    clearSearch: () => dispatch({ type: 'CLEAR_SEARCH' })
})

export const Search = connect(null, mapDispatchToProps)(SearchComponent)