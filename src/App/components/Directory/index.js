// Dependencies
import { connect } from 'react-redux'

// Components
import { GnomeCard } from '../GnomeCard'

// Style
import './directory.css'

function DirectoryComponent({ data }) {
    return (
        <div className="gnome-directory">
            {data.length > 0 && data.map(gnomeData => (
                <GnomeCard
                    key={gnomeData.id} 
                    gnomeData={gnomeData} 
                />
            ))}
        </div>
    )
}

const mapStateToProps = ({ data }) => ({
    data
})

export const Directory = connect(mapStateToProps, null)(DirectoryComponent)