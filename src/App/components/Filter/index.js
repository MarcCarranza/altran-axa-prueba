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
import { FILTER_INPUTS, DEFAULT_FILTER } from '../../constants'


function FilterComponent({ isOpen, colorOptions, professionOptions, onApplyFilter }) {
    let filter = DEFAULT_FILTER

    return (
        <div className={`filter ${isOpen ? 'filter__open' : 'filter__closed'}`}>
            <div className={isOpen ? 'filter__form-open' : 'filter__form-closed'}>
                {FILTER_INPUTS.map((input, index) => (
                    <FilterInput
                        key={index}
                        label={input.label}
                        inputType={input.inputType}
                        type={input.type}
                        filter={filter}
                    />
                ))}
                <FilterSelect
                    label={'Hair Color'}
                    options={colorOptions}
                    filter={filter}
                    type={'hairColor'}
                />
                <FilterSelect
                    label={'Profession'}
                    options={professionOptions}
                    filter={filter}
                    type={'professions'}
                />
                <button onClick={() => onApplyFilter(filter)}>
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

const mapDispatchToProps = dispatch => ({
    onApplyFilter: (filter) => dispatch({ type: 'UPDATE_FILTER', filter })
})

export const Filter = connect(mapStateToProps, mapDispatchToProps)(FilterComponent)