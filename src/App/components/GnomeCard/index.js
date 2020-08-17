// Styles
import './gnomecard.css'

export function GnomeCard({ gnomeData }) {
    return (
        <div className='gnome-card'>
            <img src={gnomeData.thumbnail} className='gnome-card__img'/>
            <p className='gnome-card__name'>{gnomeData.name}</p>
            {gnomeData.professions
                ? gnomeData.professions.join(', ')
                : <p>No professions</p>
            }
        </div>
    )
}