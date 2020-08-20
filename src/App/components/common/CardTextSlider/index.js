// Dependencies
import { useState } from 'react'

// Components
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretRight, faCaretLeft } from '@fortawesome/free-solid-svg-icons'

// Styles
import './cardtextslider.css'

export function CardTextSlider({ textArray, icon }) {
    const [arrayIndex, setArrayIndex] = useState(0)
    const isFirst = arrayIndex > 0
    const isLast = arrayIndex < textArray.length - 1

    function onClickPrevious() {
        if (isFirst) {
            setArrayIndex(arrayIndex - 1)
        }
    }

    function onClickNext() {
        if (isLast) {
            setArrayIndex(arrayIndex + 1)
        }
    }

    return (
        <div className='text-slider'>
            <div className='text-slider__icon'>
                <FontAwesomeIcon
                    icon={icon}
                    color='white'
                />
            </div>
            <div className='text-slider__slider'>
                <span>
                    {isFirst && <FontAwesomeIcon
                        icon={faCaretLeft}
                        onClick={onClickPrevious}
                        color='white'
                        style={{ cursor: 'pointer' }}
                    />}
                </span>
                <span>
                    {textArray[arrayIndex]}
                </span>
                <span>
                    {isLast && <FontAwesomeIcon
                        icon={faCaretRight}
                        onClick={onClickNext}
                        color='white'
                        style={{ cursor: 'pointer' }}
                    />}
                </span>
            </div>
        </div>
    )
}