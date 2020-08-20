import './loading.css'

export function Loading ({ label }) {
    return (
        <div className='loading'>
            <p className='loading__label'>{label}</p>
        </div>
    )
}