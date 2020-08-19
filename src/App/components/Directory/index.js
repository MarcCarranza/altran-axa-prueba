// Dependencies
import { useState, useEffect } from 'react'
import { connect } from 'react-redux'

// Components
import { GnomeCard } from '../GnomeCard'

// Helpers
import { filterGnomeData } from '../../helpers/filterGnomeData'

// Style
import './directory.css'
import { Loading } from '../common/Loading'


function DirectoryComponent({ data, filter, searchTerm, isLoading }) {
    const filteredData = filterGnomeData({ data, filter, searchTerm })

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

export const Directory = connect(mapStateToProps, null)(DirectoryComponent)