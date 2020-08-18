// Dependencies
import { useState } from 'react'

// Components
import { Filter } from '../Filter'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilter, faSearch } from '@fortawesome/free-solid-svg-icons'

// Styles
import './header.css'

function HeaderComponent() {
    const [isFilterOpen, setIsFilterOpen] = useState(true)
    const [isSearchOpen, setIsSearchOpen] = useState(false)

    return (
        <header className='header'>
            <div className='header__wrapper'>
                <h1 className='header__title'>gnomeet</h1>
                <div className='header__icons'>
                    <FontAwesomeIcon
                        icon={faFilter}
                        onClick={() => setIsFilterOpen(!isFilterOpen)}
                    />
                    <FontAwesomeIcon
                        icon={faSearch}
                        onClick={() => setIsSearchOpen(!isSearchOpen)}
                    />
                </div>
            </div>
            <Filter
                isOpen={isFilterOpen}
            />
        </header>
    )
}

export const Header = HeaderComponent