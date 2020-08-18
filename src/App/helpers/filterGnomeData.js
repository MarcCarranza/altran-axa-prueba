export const filterGnomeData = ({ data, filter: { age, weight, height, hairColor, professions } }) => {
    let filteredData = data
    
    if (age.length) {

    }

    if (weight.length) {

    }

    if (height.length) {

    }

    if (hairColor && hairColor.length) {
        filteredData = filteredData.filter(gnome => {
            return hairColor.includes(gnome.hair_color)
        })
    }

    if (professions.length) {

    }

    console.log(filteredData)
    return filteredData
}