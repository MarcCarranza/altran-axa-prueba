// Helpers
import { displayOnlyName } from '../../helpers/displayOnlyName'

// Styles
import './gnomecard.css'

export function GnomeCard({ gnomeData: { thumbnail, name, age, professions } }) {
    return (
        <div className='gnome-card'>
            <img src={thumbnail} className='gnome-card__img' loading="lazy" />
            <div className='gnome-card__data-wrapper'>
                <div className='gnome-card__data'>
                    <p className='gnome-card__name'>
                        {displayOnlyName(name)}
                    </p>
                    <span className='gnome-card__age'>
                        {age}
                    </span>
                </div>
                <div className='gnome-card__professions'>
                    {professions && professions.length
                        ? professions.join(', ')
                        : <p>No professions</p>
                    }
                </div>
            </div>
        </div>
    )
}