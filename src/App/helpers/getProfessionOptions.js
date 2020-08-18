export const getProfessionOptions = (data) => {
    const allGnomesProfessions = []
    data.forEach(gnome => {
        allGnomesProfessions.push(...gnome.professions)
    })

    const professions = _.uniq(allGnomesProfessions)
    
    return professions.map(profession => ({
        value: profession,
        label: profession
    }))
}