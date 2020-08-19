import { searchGnomeData } from "./searchGnomeData"

export const filterGnomeData = ({ data, filter: { age, weight, height, hairColor, professions }, searchTerm }) => {
    let filteredData = data
    
    if (age.length) {
        filteredData = filteredData.filter(gnome => {
            return (gnome.age >= age[0] && gnome.age <= age[1])
        })
    }

    if (weight.length) {
        filteredData = filteredData.filter(gnome => {
            return (gnome.weight >= weight[0] && gnome.weight <= weight[1])
        })
    }

    if (height.length) {
        filteredData = filteredData.filter(gnome => {
            return (gnome.height >= height[0] && gnome.height <= height[1])
        })
    }

    if (hairColor.length) {
        filteredData = filteredData.filter(gnome => {
            return hairColor.includes(gnome.hair_color)
        })
    }

    if (professions.length) {
        filteredData = filteredData.filter(gnome => {
            return _.intersection(gnome.professions, professions).length
        })
    }

    filteredData = searchGnomeData({ data: filteredData, searchTerm })

    return filteredData
}