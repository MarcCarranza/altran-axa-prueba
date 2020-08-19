export const searchGnomeData = ({ data, searchTerm }) => {
    let searchResult = data

    if (searchTerm.length) {
        searchResult = searchResult
            .filter(gnome => gnome.name.toLowerCase().includes(searchTerm))
    }

    return searchResult
}