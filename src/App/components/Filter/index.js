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
import { detectEnter } from '../../helpers/detectEnter'

// Constants
import { FILTER_INPUTS, DEFAULT_FILTER } from '../../constants'
import { Button } from '../common/Button'
import { useState, useEffect } from 'react'


function FilterComponent({
    isOpen,
    colorOptions,
    professionOptions,
    onApplyFilter,
    onClearFilter
}) {
    const [colorValues, setColorValues] = useState([])
    const [professionValues, setProfessionValues] = useState([])
    const filter = { ...DEFAULT_FILTER }

    function onClickApply() {
        const updatedFilter = {
            ...filter,
            hairColor: colorValues.map(colorObj => colorObj.value),
            professions: professionValues.map(professionObj => professionObj.value)
        }
        onApplyFilter(updatedFilter)
    }

    function onPressEnter(e) {
        detectEnter({ key: e.key, func: onClickApply })
    }

    function onClickClear() {
        setColorValues([])
        setProfessionValues([])
        onClearFilter()
    }
    

    return (
        <div className={`filter ${isOpen ? 'filter__open' : 'filter__closed'}`}>
            <div
                className={isOpen ? 'filter__form-open' : 'filter__form-closed'}
                onKeyDown={onPressEnter}
            >
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
                    onSelect={(values) => setColorValues(values)}
                    value={colorValues}
                />
                <FilterSelect
                    label={'Profession'}
                    options={professionOptions}
                    onSelect={(values) => setProfessionValues(values)}
                    value={professionValues}
                />
                <div className='filter__buttons'>
                    <Button
                        label={'Clear'}
                        onClick={onClickClear}
                        btnClass='clear'
                    />
                    <Button
                        label={'Apply'}
                        onClick={onClickApply}
                        btnClass='apply'
                    />
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = ({ data }) => ({
    colorOptions: getColorOptions(data),
    professionOptions: getProfessionOptions(data)
})

const mapDispatchToProps = dispatch => ({
    onApplyFilter: (filter) => dispatch({ type: 'UPDATE_FILTER', filter }),
    onClearFilter: () => dispatch({ type: 'CLEAR_FILTER' })
})

export const Filter = connect(mapStateToProps, mapDispatchToProps)(FilterComponent)