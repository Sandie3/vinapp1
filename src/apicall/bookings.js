import axios from 'axios';

const api = {
    baseUrl: 'http://localhost:5001/booking'
}



export const getBooking = () => {
    let response = axios.get(api.baseUrl)
        .then(res => { return res.data })
    return response;
}



export const getBookingFromId = (bookingId) => {
    let response = axios.get(api.baseUrl + '/' + bookingId)
        .then(res => { return res.data })
    return response;
}



export const searchBooking = (bookingId) => {
    let response = axios.get(api.baseUrl + '/search/' + bookingId)
        .then(res => { return res.data })
    return response;
}



export const postBooking = (bookingData) => {
    let response = axios.post(api.baseUrl + '/', bookingData)
        .then(res => { return res.data })
    return response;

}



export const delBooking = (bookingId) => {
    let response = axios.delete(api.baseUrl + '/admin/' + bookingId)
        .then(res => { return res.data })
    return response;

}



export const editBooking = (bookingId, bookingData) => {
    let response = axios.put(api.baseUrl + '/admin/' + bookingId, bookingData)
        .then(res => { return res.data })
    return response;
}