// Dependencies
import { useState } from 'react'

// Components
import { Filter } from '../Filter'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilter } from '@fortawesome/free-solid-svg-icons'

// Styles
import './header.css'

function HeaderComponent() {
    const [isFilterOpen, setIsFilterOpen] = useState(false)

    return (
        <header className='header'>
            <div className='header__wrapper'>
                <h1 className='header__title'>gnomeet</h1>
                <FontAwesomeIcon
                    icon={faFilter}
                    onClick={() => setIsFilterOpen(!isFilterOpen)}
                />
            </div>
            <Filter
                isOpen={isFilterOpen}
            />
        </header>
    )
}

export const Header = HeaderComponent