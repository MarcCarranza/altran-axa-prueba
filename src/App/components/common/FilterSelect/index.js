// Components
import Select from 'react-select'

function FilterSelectComponent({ options }) {
    return (
        <Select
            options={options}
        />
    )
}

export const FilterSelect = FilterSelectComponent