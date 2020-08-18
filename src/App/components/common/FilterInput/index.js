// Styles
import './filterinput.css'

function FilterInputComponent({ label, inputType, type, dataObj }) {
    function renderInputs() {
        switch (type) {
            case 'AGE':
            case 'WEIGHT':
            case 'HEIGHT':
                return (
                    <div className='filter__inputs-wrapper'>
                        <input type={inputType} className='filter__input' />
                        <input type={inputType} className='filter__input' />
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