export const MOCK_DATA = [{
    "id": 0,
    "name": "Nota halfling",
    "thumbnail": "https://pbs.twimg.com/media/EG9MhrVWoAAo29F?format=jpg&name=small",
    "age": 360,
    "weight": 30.123,
    "height": 100.000,
    "hair_color": "RGB",
    "professions": [],
    "friends": []
}]

export const MOCK_RESPONSE = {
    status: 200,
    data: {
        Brastlewark: [...MOCK_DATA]
    }
}

export const STORE_INITIAL_STATE = {
    data: [],
    filter: {
        age: [],
        weight: [],
        height: [],
        hairColor: [],
        professions: []
    },
    searchTerm: ''
}