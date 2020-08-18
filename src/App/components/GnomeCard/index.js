// Helpers
import { displayOnlyName } from '../../helpers/displayOnlyName'

// Styles
import './gnomecard.css'

export function GnomeCard({ gnomeData }) {
    return (
        <div className='gnome-card'>
            <img src={gnomeData.thumbnail} className='gnome-card__img' loading="lazy" />
            <div className='gnome-card__data-wrapper'>
                <div className='gnome-card__data'>
                    <p className='gnome-card__name'>
                        {displayOnlyName(gnomeData.name)}
                    </p>
                    <span className='gnome-card__age'>
                        {gnomeData.age}
                    </span>
                </div>
                <div className='gnome-card__professions'>
                    {gnomeData.professions.length
                        ? gnomeData.professions.join(', ')
                        : <p>No professions</p>
                    }
                </div>
            </div>
        </div>
    )
}