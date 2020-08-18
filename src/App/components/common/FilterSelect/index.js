// Dependencies
import { connect } from 'react-redux'

// Components
import Select from 'react-select'

function FilterSelectComponent({ options }) {
    return (
        <Select
            options={options}
        />
    )
}

const mapStateToProps = ({ data }) => {
    const uniqColorsObj = _.uniqBy(data, 'hair_color')
    const options = uniqColorsObj.map(obj => ({ value: obj.hair_color, label: obj.hair_color }))

    return {
        options
    }
}

export const FilterSelect = connect(mapStateToProps, null)(FilterSelectComponent)