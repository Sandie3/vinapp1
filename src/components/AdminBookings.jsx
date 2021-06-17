import { useState, useEffect } from 'react'

import { getBooking, editBooking, delBooking, searchBooking} from '../apicall/bookings'

const AdminBookings = () => {

    const [booking, setBooking] = useState()
    const [error, setError] = useState()

    useEffect(() => {
        getBooking().then(data => {
            setBooking(data)
            setError()
        }).catch(err => {
            setError(err)
            setBooking()
            console.log(err)
        })
    }, [])

    return (
        <>
        {
            booking &&
            <>
            <input type="search" name="" id="adminSearch" className="adminSearch" placeholder="Search"/>
            <div className="adminBookings">
                {
                    booking.map((b,i) => {
                        return(
                            <div className="adminBook" key={i}>
                                <input type="text" value={b.booking} name="" className="adminBookingNR" placeholder="Booking Number"/>
                                <input type="text" value={b.email} name="" className="adminEmail" placeholder="Email"/>
                                <input type="text" value={b.name} name="" className="adminName" placeholder="Name"/>
                                <input type="text" value={b.bookingDate} name="" className="adminDate" placeholder="Date"/>
                                <input type="text" value={b.phone} name="" className="adminPhoneNR" placeholder="Phone Number"/>
                                <button className="adminEditBooking"><i className="far fa-edit fa-2x"></i></button>
                                <button className="adminDelBooking"><i className="fas fa-trash-alt fa-2x"></i></button>
                                <textarea value={b.message} name="" id="" className="adminMessage" ></textarea>
                            </div>
                        )
                    })
                }

            </div>
            </>
        }
        {
            !booking && !error &&
            <h1>No bookings</h1>
        }
        {
            error &&
            <h1>ERROR: {error}</h1>
        }
        </>
    )
}

export default AdminBookings
