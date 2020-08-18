// Dependencies
import { useState, useEffect } from 'react'
import { connect } from 'react-redux'

// Components
import { GnomeCard } from '../GnomeCard'

// Helpers
import { filterGnomeData } from '../../helpers/filterGnomeData'

// Style
import './directory.css'


function DirectoryComponent({ data, filter, isLoading }) {
    const [gnomeData, setGnomeData] = useState([])

    useEffect(() => {
        const filteredData = filterGnomeData({ data, filter })
        setGnomeData(filteredData)
    }, [data, filter])

    return (
        <div className="gnome-directory">
            {isLoading
                ? <div>Loading</div>
                : gnomeData.length > 0
                    ? gnomeData.map(gnome => (
                        <GnomeCard
                            key={gnome.id}
                            gnomeData={gnome}
                        />
                    ))
                    : <div>No data or results</div>
            }
        </div>
    )
}

const mapStateToProps = ({ data, filter, isLoading }) => ({
    data, filter, isLoading
})

export const Directory = connect(mapStateToProps, null)(DirectoryComponent)