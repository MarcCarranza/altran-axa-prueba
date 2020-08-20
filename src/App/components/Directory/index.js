// Dependencies
import { useState, useEffect } from 'react'
import { connect } from 'react-redux'

// Components
import { GnomeCard } from '../GnomeCard'
import { Loading } from '../common/Loading'

// Helpers
import { filterGnomeData } from '../../helpers/filterGnomeData'

// Style
import './directory.css'


function DirectoryComponent({ data, filter, searchTerm, isLoading, fetchGnomeData }) {
    const [filteredData, setFilteredData] = useState([])

    useEffect(() => {
        fetchGnomeData()
    }, [])

    useEffect(() => {
        const newData = filterGnomeData({ data, filter, searchTerm })
        setFilteredData(newData)
    }, [data, filter])

    return (
        <div className="gnome-directory">
            {isLoading
                ? <Loading />
                : filteredData.length > 0
                    ? filteredData.map(gnome => (
                        <GnomeCard
                            key={gnome.id}
                            gnomeData={gnome}
                        />
                    ))
                    : <div>No results</div>
            }
        </div>
    )
}

const mapStateToProps = ({ data, filter, searchTerm, isLoading }) => ({
    data, filter, searchTerm, isLoading
})

const mapDispatchToProps = dispatch => ({
    fetchGnomeData: () => dispatch({ type: 'FETCH'})
})

export const Directory = connect(mapStateToProps, mapDispatchToProps)(DirectoryComponent)