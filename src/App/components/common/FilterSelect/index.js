// Components
import Select from 'react-select'

// Styles
import './filterselect.css'


function FilterSelectComponent({ label, options, filter, type, onSelect, value }) {
    function onChangeOption (values) {
        onSelect(values)

        filter[type] = values 
            ? values.map(colorObj => colorObj.value)
            : []
    }

    return (
        <div className='filter__select'>
            <label className='filter__select-label'>{label}</label>
            <div className='filter__select-wrapper'>
                <Select
                    options={options}
                    isMulti
                    onChange={onChangeOption}
                    value={value}
                />
            </div>
        </div>
    )
}

export const FilterSelect = FilterSelectComponent