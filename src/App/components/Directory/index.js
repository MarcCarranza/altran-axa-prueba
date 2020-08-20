// Dependencies
import { useEffect, useState } from 'react'
import { connect } from 'react-redux'

// Components
import { GnomeCard } from '../GnomeCard'
import { Loading } from '../common/Loading'

// Helpers
import { filterGnomeData } from '../../helpers/filterGnomeData'

// Style
import './directory.css'
import { Button } from '../common/Button'


function DirectoryComponent({ data, filter, searchTerm, isLoading, isFiltering, isSearching, fetchGnomeData }) {
    const [selectedPage, setSelectedPage] = useState(0)

    const filteredData = _.chunk(filterGnomeData({ data, filter, searchTerm }), 96)

    useEffect(() => {
        fetchGnomeData()
    }, [])

    function getPages () {
        const pagesArray = []

        for (let i = 0; i < filteredData.length; i++){
            pagesArray.push(
                <Button
                    label={i + 1}
                    onClick={() => setSelectedPage(i)}
                    btnClass='clear'
                />
            )
        }

        return pagesArray
    }

    return (
        <>
            <div className="gnome-directory">
                {isLoading
                    ? <Loading
                        label={'Loading'}
                    />
                    : filteredData.length > 0
                        ? filteredData[selectedPage].map(gnome => (
                            <GnomeCard
                                key={gnome.id}
                                gnomeData={gnome}
                            />
                        ))
                        : <div>No results</div>
                }
            </div>
            <div className='gnome-directory__pagination'>
                {getPages()}
            </div>
        </>
    )
}

const mapStateToProps = ({ data, filter, searchTerm, isLoading, isFiltering, isSearching }) => ({
    data, filter, searchTerm, isLoading, isFiltering, isSearching
})

const mapDispatchToProps = dispatch => ({
    fetchGnomeData: () => dispatch({ type: 'FETCH' })
})

export const Directory = connect(mapStateToProps, mapDispatchToProps)(DirectoryComponent)