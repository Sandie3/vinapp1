import axios from 'axios';

const api = {
    baseUrl: 'http://localhost:5001/wineries'
}



export const getWinerie = () => {
    let response = axios.get(api.baseUrl)
        .then(res => { return res.data })
    return response;
}



export const getWinerieFromId = (winerieId) => {
    let response = axios.get(api.baseUrl + '/' + winerieId)
        .then(res => { return res.data })
    return response;
}



export const searchWinerie = (winerieId) => {
    let response = axios.get(api.baseUrl + '/search/' + winerieId)
        .then(res => { return res.data })
    return response;
}



export const postWinerie = (winerieData) => {
    let response = axios.post(api.baseUrl + '/admin', winerieData)
        .then(res => { return res.data })
    return response;

}



export const delWinerie = (winerieId) => {
    let response = axios.delete(api.baseUrl + '/admin/' + winerieId)
        .then(res => { return res.data })
    return response;

}



export const editWinerie = (winerieId, winerieData) => {
    let response = axios.put(api.baseUrl + '/admin/' + winerieId, winerieData)
        .then(res => { return res.data })
    return response;
}