// Components
import { CardTextSlider } from '../common/CardTextSlider'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserTie, faUserFriends, faWeight, faArrowsAltV } from '@fortawesome/free-solid-svg-icons'

// Styles
import './gnomecard.css'


export function GnomeCard({ gnomeData: { thumbnail, name, age, professions, height, weight, friends } }) {
    return (
        <div className='gnome-card'>
            <img src={thumbnail} className='gnome-card__img' loading='lazy' alt='gnome avatar'/>
            <div className='gnome-card__data-wrapper'>
                <div className='gnome-card__data'>
                    <p className='gnome-card__name'>
                        {name}
                    </p>
                    <span className='gnome-card__age'>
                        {age}
                    </span>
                </div>
                <div className='gnome-card__measurements'>
                    <div className='measurements__height'>
                        <span className='measurements__icon'>
                            <FontAwesomeIcon
                                icon={faArrowsAltV}
                                color='white'
                            />
                        </span>
                        <span>
                            {height.toFixed(2)} cms
                        </span>
                    </div>
                    <div className='measurements__weight'>
                        <span className='measurements__icon'>
                            <FontAwesomeIcon
                                icon={faWeight}
                                color='white'
                            />
                        </span>
                        <span>
                            {weight.toFixed(2)} kg
                        </span>
                    </div>
                </div>
                <div className='gnome-card__professions'>
                    {professions && professions.length
                        ? <CardTextSlider
                            textArray={professions}
                            icon={faUserTie}
                        />
                        : <div className='professions__no-professions'>
                            <span className='no-professions__icon'>
                                <FontAwesomeIcon
                                    icon={faUserTie}
                                    color='white'
                                />
                            </span>
                            <p className='no-professions__text'>No professions</p>
                        </div>
                    }
                </div>
                <div className='gnome-card__friends'>
                    {friends && friends.length
                        ? <CardTextSlider
                            textArray={friends}
                            icon={faUserFriends}
                        />
                        : <div className='friends__no-friends'>
                            <span className='no-friends__icon'>
                                <FontAwesomeIcon
                                    icon={faUserFriends}
                                    color='white'
                                />
                            </span>
                            <p className='no-friends__text'>No friends</p>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}