export const getColorOptions = (data) => {
    const uniqColorsObj = _.uniqBy(data, 'hair_color')

    return uniqColorsObj.map(obj => ({ value: obj.hair_color, label: obj.hair_color }))
}