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

export const DEFAULT_SEARCH = {
    name: '',
    lastname: ''
}

export const STORE_INITIAL_STATE = {
    data: [],
    filter: DEFAULT_FILTER,
    search: DEFAULT_SEARCH
}