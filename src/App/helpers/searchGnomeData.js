export const searchGnomeData = ({ data, search: { name, lastname } }) => {
    let searchResult = data

    if (name.length || lastname.length) {
        searchResult = searchResult.filter(gnome => {
            return gnome.name === name || gnome.lastname == lastname
        })
    }
}