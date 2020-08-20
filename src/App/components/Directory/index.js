// Dependencies
import { useEffect, useState } from 'react'
import { connect } from 'react-redux'

// Components
import { GnomeCard } from '../GnomeCard'
import { Loading } from '../common/Loading'
import { Button } from '../common/Button'
import { NoResults } from '../common/NoResults'

// Helpers
import { filterGnomeData } from '../../helpers/filterGnomeData'

// Style
import './directory.css'


function DirectoryComponent({ data, filter, searchTerm, isLoading, fetchGnomeData }) {
    const [selectedPage, setSelectedPage] = useState(0)
    const filteredData = _.chunk(filterGnomeData({ data, filter, searchTerm }), 96)

    useEffect(() => {
        fetchGnomeData()
    }, [])

    function previousPage() {
        if (selectedPage > 0) {
            setSelectedPage(selectedPage - 1)
        }
    }

    function nextPage() {
        if (selectedPage <= filteredData.length) {
            setSelectedPage(selectedPage + 1)
        }
    }

    function getPages() {
        const pagesArray = []

        if (window.innerWidth < 1000) {
            pagesArray.push(
                <Button
                    key={'previous'}
                    label={'<'}
                    onClick={previousPage}
                    btnClass='page'
                />
            )

            for (let i = selectedPage; i < selectedPage + 3; i++) {
                pagesArray.push(
                    <Button
                        key={i}
                        label={i + 1}
                        onClick={() => setSelectedPage(i)}
                        btnClass={`page ${i === selectedPage && 'page-selected'}`}
                    />
                )
            }

            pagesArray.push(
                <Button
                    key={'next'}
                    label={'>'}
                    onClick={nextPage}
                    btnClass='page'
                />
            )

        } else {
            for (let i = 0; i < filteredData.length; i++) {
                pagesArray.push(
                    <Button
                        key={i}
                        label={i + 1}
                        onClick={() => setSelectedPage(i)}
                        btnClass={`page ${i === selectedPage && 'page-selected'}`}
                    />
                )
            }
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
                        ? filteredData[selectedPage]
                            .map(gnome => (
                                <GnomeCard
                                    key={gnome.id}
                                    gnomeData={gnome}
                                />
                            ))
                        : <NoResults />
                }
            </div>
            <div className='gnome-directory__pagination'>
                {filteredData.length > 0 && getPages()}
            </div>
        </>
    )
}

const mapStateToProps = ({ data, filter, searchTerm, isLoading }) => ({
    data, filter, searchTerm, isLoading
})

const mapDispatchToProps = dispatch => ({
    fetchGnomeData: () => dispatch({ type: 'FETCH' })
})

export const Directory = connect(mapStateToProps, mapDispatchToProps)(DirectoryComponent)