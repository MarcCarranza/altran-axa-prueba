// Components
import Select from 'react-select'

// Styles
import './filterselect.css'

const selectStyles = {
    // TODO: Select Styles
}

function FilterSelectComponent({ label, options, filter }) {
    return (
        <div className='filter__select'>
            <label className='filter__select-label'>{label}</label>
            <div className='filter__select-wrapper'>
                <Select
                    options={options}
                    isMulti
                    closeMenuOnSelect={false}
                />
            </div>
        </div>
    )
}

export const FilterSelect = FilterSelectComponent