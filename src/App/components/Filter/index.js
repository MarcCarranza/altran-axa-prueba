// Styles
import './filter.css'

function FilterComponent({ isOpen }) {
    return (
        <div className={`filter ${isOpen ? 'filter__open' : 'filter__closed'}`}>
            <div className={isOpen ? 'filter__form-open' : 'filter__form'}>
                Test Animation
            </div>
        </div>
    )
}

export const Filter = FilterComponent