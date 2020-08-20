// Dependencies
import { useState } from 'react'

// Components
import { Filter } from '../Filter'
import { Search } from '../Search'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilter, faSearch } from '@fortawesome/free-solid-svg-icons'

// Styles
import './header.css'

export function Header() {
    const [isFilterOpen, setIsFilterOpen] = useState(false)
    const [isSearchOpen, setIsSearchOpen] = useState(true)

    function onClickSearch () {
        if (isFilterOpen) setIsFilterOpen(false)
        setIsSearchOpen(!isSearchOpen)
    }

    function onClickFilter () {
        if (isSearchOpen) setIsSearchOpen(false)
        setIsFilterOpen(!isFilterOpen)
    }

    return (
        <header className='header'>
            <div className='header__wrapper'>
                <h1 className='header__title'>gnomeet</h1>
                <div className='header__icons'>
                    <FontAwesomeIcon
                        icon={faFilter}
                        onClick={onClickFilter}
                        color="white"
                    />
                    <FontAwesomeIcon
                        icon={faSearch}
                        onClick={onClickSearch}
                        color="white"
                    />
                </div>
            </div>
            <Filter
                isOpen={isFilterOpen}
            />
            <Search
                isOpen={isSearchOpen}
            />
        </header>
    )
}
