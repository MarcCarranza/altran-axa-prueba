// Dependencies
import { connect } from 'react-redux'

// Components
import { FilterInput } from '../common/FilterInput'

// Styles
import './filter.css'
import { FilterSelect } from '../common/FilterSelect'

// Helpers
import { getColorOptions } from '../../helpers/getColorOptions'
import { getProfessionOptions } from '../../helpers/getProfessionOptions'

// Constants
import { FILTER_INPUTS } from '../../constants'


function FilterComponent({ isOpen, colorOptions, professionOptions }) {
    const filter = {
        age: [],
        weight: [],
        height: [],
        hairColor: null,
        professions: []
    }

    function testFilter() {
        console.log(filter)
    }

    return (
        <div className={`filter ${isOpen ? 'filter__open' : 'filter__closed'}`}>
            <div className={isOpen ? 'filter__form-open' : 'filter__form'}>
                {FILTER_INPUTS.map((input, index) => (
                    <FilterInput
                        key={index}
                        label={input.label}
                        inputType={input.inputType}
                        type={input.type}
                        filterObj={filter}
                    />
                ))}
                <FilterSelect
                    label={'Hair Color'}
                    options={colorOptions}
                />
                <FilterSelect
                    label={'Profession'}
                    options={professionOptions}
                />
                <button onClick={testFilter}>
                    Apply
                </button>
            </div>
        </div>
    )
}

const mapStateToProps = ({ data }) => ({
    colorOptions: getColorOptions(data),
    professionOptions: getProfessionOptions(data)
})

export const Filter = connect(mapStateToProps, null)(FilterComponent)