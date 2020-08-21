// Components
import Select from 'react-select'

// Styles
import './filterselect.css'


function FilterSelectComponent({ label, options, onSelect, value }) {
    return (
        <div className='filter__select'>
            <label className='filter__select-label'>{label}</label>
            <div className='filter__select-wrapper'>
                <Select
                    options={options}
                    isMulti
                    onChange={(values) => onSelect(values)}
                    value={value}
                />
            </div>
        </div>
    )
}

export const FilterSelect = FilterSelectComponent