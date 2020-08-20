// Dependencies
import { useEffect } from 'react'
import { connect } from 'react-redux'

// Components
import { GnomeCard } from '../GnomeCard'
import { Loading } from '../common/Loading'

// Helpers
import { filterGnomeData } from '../../helpers/filterGnomeData'

// Style
import './directory.css'


function DirectoryComponent({ data, filter, searchTerm, isLoading, isFiltering, isSearching, fetchGnomeData }) {
    const filteredData = filterGnomeData({ data, filter, searchTerm })

    useEffect(() => {
        fetchGnomeData()
    }, [])

    return (
        <div className="gnome-directory">
            {isLoading
                ? <Loading 
                    label={'Loading'}
                />
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

const mapStateToProps = ({ data, filter, searchTerm, isLoading, isFiltering, isSearching }) => ({
    data, filter, searchTerm, isLoading, isFiltering, isSearching 
})

const mapDispatchToProps = dispatch => ({
    fetchGnomeData: () => dispatch({ type: 'FETCH' })
})

export const Directory = connect(mapStateToProps, mapDispatchToProps)(DirectoryComponent)