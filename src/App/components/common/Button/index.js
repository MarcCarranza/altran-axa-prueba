import './button.css'

export function Button({ label, onClick, btnClass, isDisabled }) {
    return (
        <button
            onClick={onClick}
            className={`btn btn-${btnClass}`}
            disabled={isDisabled}
        >
            {label}
        </button>
    )
}