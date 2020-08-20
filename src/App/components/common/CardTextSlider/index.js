// Dependencies
import { useState } from 'react'

// Components
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretRight, faCaretLeft } from '@fortawesome/free-solid-svg-icons'


export function CardTextSlider({ textArray }) {
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
        <div>
            <span>
                {isFirst && <FontAwesomeIcon
                    icon={faCaretLeft}
                    onClick={onClickPrevious}
                    color="white"
                />}
            </span>
            <span>
                {textArray[arrayIndex]}
            </span>
            <span>
                {isLast && <FontAwesomeIcon
                    icon={faCaretRight}
                    onClick={onClickNext}
                    color="white"
                />}
            </span>
        </div>
    )
}