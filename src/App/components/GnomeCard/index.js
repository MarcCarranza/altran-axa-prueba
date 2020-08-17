// Styles
import './gnomecard.css'
import { displayOnlyName } from '../../helpers/displayOnlyName'

export function GnomeCard({ gnomeData }) {
    return (
        <div className='gnome-card'>
            <img src={gnomeData.thumbnail} className='gnome-card__img' />
            <div>
                <p className='gnome-card__name'>
                    {displayOnlyName(gnomeData.name)}
                </p>
                {gnomeData.professions
                    ? gnomeData.professions.join(', ')
                    : <p>No professions</p>
                }
            </div>
        </div>
    )
}