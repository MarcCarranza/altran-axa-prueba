// Dependencies
import { connect } from 'react-redux'

// Components
import { FilterInput } from '../common/FilterInput'

// Styles
import './filter.css'
import { FilterSelect } from '../common/FilterSelect'

// Helpers
import { getUniqOption, getColorOptions } from '../../helpers/getColorOptions'
import { getProfessionOptions } from '../../helpers/getProfessionOptions'

function FilterComponent({ isOpen, colorOptions, professionOptions }) {
    return (
        <div className={`filter ${isOpen ? 'filter__open' : 'filter__closed'}`}>
            <div className={isOpen ? 'filter__form-open' : 'filter__form'}>
                <FilterInput
                    label={'Age'}
                    inputType={'number'}
                    type={'AGE'}
                />
                <FilterInput
                    label={'Weight'}
                    inputType={'number'}
                    type={'WEIGHT'}
                />
                <FilterInput
                    label={'Height'}
                    inputType={'number'}
                    type={'HEIGHT'}
                />
                <FilterSelect
                    options={colorOptions}
                />
                <FilterSelect
                    options={professionOptions}
                />
            </div>
        </div>
    )
}

const mapStateToProps = ({ data }) => ({
    colorOptions: getColorOptions(data),
    professionOptions: getProfessionOptions(data)
})

export const Filter = connect(mapStateToProps, null)(FilterComponent)