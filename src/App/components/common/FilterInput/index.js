// Styles
import './filterinput.css'

function FilterInputComponent({ label, inputType, type, filterObj }) {
    function handleInput(e, index) {
        filterObj[type][index] = e.target.value
    }

    function renderInputs() {
        switch (type) {
            case 'age':
            case 'weight':
            case 'height':
                return (
                    <div className='filter__inputs-wrapper'>
                        <span>
                            <input
                                className='filter__input'
                                type={inputType}
                                onChange={(e) => handleInput(e, 0)}
                            />
                        </span>
                        <span>
                            <input
                                type={inputType}
                                className='filter__input'
                                onChange={(e) => handleInput(e, 1)}
                            />
                        </span>
                    </div>
                )
            default:
                return (
                    <input type={inputType} className='filter__input' />
                )
        }
    }

    return (
        <div className='filter__input-wrapper'>
            <label className='filter__inputs-label'>
                {label}
            </label>
            {renderInputs()}
        </div>
    )
}

export const FilterInput = FilterInputComponent