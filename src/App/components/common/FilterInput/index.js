// Styles
import './filterinput.css'

function FilterInputComponent({ label, inputType, type, filter }) {
    function handleInput(e, index) {
        filter[type][index] = e.target.value
    }

    function renderInputs() {
        switch (type) {
            case 'age':
            case 'weight':
            case 'height':
                return (
                    <div className='filter__inputs-wrapper'>
                        <span className='filter__input-wrapper'>
                            <input
                                className='filter__input'
                                type={inputType}
                                onChange={(e) => handleInput(e, 0)}
                                placeholder={'Min'}
                            />
                        </span>
                        <span className='filter__input-wrapper'>
                            <input
                                type={inputType}
                                className='filter__input'
                                onChange={(e) => handleInput(e, 1)}
                                placeholder={'Max'}
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
        <div className='filter__input-container'>
            <label className='filter__inputs-label'>
                {label}
            </label>
            {renderInputs()}
        </div>
    )
}

export const FilterInput = FilterInputComponent