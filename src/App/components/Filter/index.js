// Components
import { FilterInput } from '../common/FilterInput'

// Styles
import './filter.css'
import { FilterSelect } from '../common/FilterSelect'

function FilterComponent({ isOpen }) {
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
                    value={'hair_color'}
                />
            </div>
        </div>
    )
}

export const Filter = FilterComponent