// Styles
import './gnomecard.css'
import { CardTextSlider } from '../common/CardTextSlider'

export function GnomeCard({ gnomeData: { thumbnail, name, age, professions, height, weight, friends } }) {
    return (
        <div className='gnome-card'>
            <img src={thumbnail} className='gnome-card__img' loading='lazy' />
            <div className='gnome-card__data-wrapper'>
                <div className='gnome-card__data'>
                    <p className='gnome-card__name'>
                        {name}
                    </p>
                </div>
                <div>
                    <span>Age </span>
                    <span className='gnome-card__age'>
                        {age}
                    </span>
                </div>
                <div className='gnome-card__measurements'>
                    <div className='measurements__height'>
                        <span>H </span>
                        <span>{height.toFixed(2)} cms</span>
                    </div>
                    <div className='measurements__weight'>
                        <span>W </span>
                        <span>{weight.toFixed(2)} kg</span>
                    </div>
                </div>
                <div className='gnome-card__professions'>
                    {professions && professions.length
                        ? <CardTextSlider textArray={professions} />
                        : <p>No professions</p>
                    }
                </div>
                <div className='gnome-card__friends'>
                    {friends && friends.length
                        ? <CardTextSlider textArray={friends} />
                        : <p>No friends</p>
                    }
                </div>
            </div>
        </div>
    )
}