import { put, takeEvery, all } from 'redux-saga/effects'
import axios from 'axios'

function* watchFetchAsync() {
    yield takeEvery('FETCH', fetchGnomeData)
}

function* fetchGnomeData (){
    yield put({ type: 'FETCH_LOADING' })

    let response = null
    yield apiCallRequest({
        url: 'https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json',
        method: 'GET',
        data: {}
    })
        .then(res => {
            response = {
                type: 'FETCH_SUCCESS',
                data: res.data.Brastlewark // TODO: What about this?
            }
        })
        .catch(error => {
            response = {
                type: 'FETCH_FAIL',
                error
            }
        })

    yield put(response)
}

const apiCallRequest = ({
    url,
    method = "GET",
    data = null,
    endpoint = null
}) => {
    const dataOrParams = ["GET", "DELETE"].includes(method) ? "params" : "data"

    return axios
        .request({
            url: endpoint ? `${url}/${endpoint}` : url,
            method,
            [dataOrParams]: data
        })
}

export default function* rootSaga() {
    yield all([
        watchFetchAsync()
    ])
}