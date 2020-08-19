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


function DirectoryComponent({ data, filter, isLoading }) {
    return (
        <div className="gnome-directory">
            {isLoading
                ? <Loading />
                : data.length > 0
                    ? filterGnomeData({ data, filter }).map(gnome => (
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

const mapStateToProps = ({ data, filter, isLoading }) => ({
    data, filter, isLoading
})

export const Directory = connect(mapStateToProps, null)(DirectoryComponent)