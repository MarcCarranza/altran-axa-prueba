export const FILTER_INPUTS = [{
    label: 'Age',
    inputType: 'number',
    type: 'age',
}, {
    label: 'Height',
    inputType: 'number',
    type: 'height',
}, {
    label: 'Weight',
    inputType: 'number',
    type: 'weight',
}]

export const DEFAULT_FILTER = {
    age: [],
    weight: [],
    height: [],
    hairColor: [],
    professions: []
}

export const STORE_INITIAL_STATE = {
    data: [],
    filter: DEFAULT_FILTER,
    searchTerm: ''
}