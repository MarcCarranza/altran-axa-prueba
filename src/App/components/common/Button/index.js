import './button.css'

export function Button ({ label, onClick, btnClass }) {
    return (
        <button onClick={onClick} className={`btn btn-${btnClass}`}>
            {label}
        </button>
    )
}