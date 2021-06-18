import { useState, useEffect } from 'react'

import { getBooking, delBooking, searchBooking} from '../apicall/bookings'

const AdminBookings = () => {

    const [booking, setBooking] = useState()
    const [search, setSearch] = useState('test')
    const [error, setError] = useState()
    const [message, setMessage] = useState()

    useEffect(() => {
        searchBookings();
    }, [message])

    const searchBookings = () => {
        searchBooking(search).then(data => {
            setBooking(data)
            setError()
        }).catch(err => {
            setError(err)
            setBooking()
            console.log(err)
        })
    }

    // useEffect(() => {
    //     getBooking().then(data => {
    //         setBooking(data)
    //         setError()
    //     }).catch(err => {
    //         setError(err)
    //         setBooking()
    //         console.log(err)
    //     })
    // }, [message])

    const handleDelete = (bookingId) => {
        if (window.confirm("Are you sure you want to delete")) {
            delBooking(bookingId).then(data => {
                console.log(data)
                setMessage(data)
                setError()
            }).catch(err => {
                console.log(err)
                setError('There was an error!')
                setMessage()
            })
        }
    }

    return (
        <>
        {
            booking &&
            <>
            <input type="search" id="adminSearch" className="adminSearch" placeholder="Search" defaultValue={search} onChange={(e) => setSearch(e.target.value)}/>
            <button onClick={searchBookings} >Search</button>
            <div className="adminBookings">
                {
                    booking.map((b,i) => {
                        return(
                            <div className="adminBook" key={i}>
                                <input type="text" defaultValue={b.booking} name="booking" className="adminBookingNR" placeholder="Booking Number"/>
                                <input type="text" defaultValue={b.email} name="email" className="adminEmail" placeholder="Email"/>
                                <input type="text" defaultValue={b.name} name="name" className="adminName" placeholder="Name"/>
                                <input type="text" defaultValue={b.bookingDate} name="bookingDate" className="adminDate" placeholder="Date"/>
                                <input type="text" defaultValue={b.phone} name="phone" className="adminPhoneNR" placeholder="Phone Number"/>
                                <button className="adminEditBooking"><i className="far fa-edit fa-2x"></i></button>
                                <button className="adminDelBooking" onClick={() => handleDelete(b._id)}><i className="fas fa-trash-alt fa-2x"></i></button>
                                <textarea defaultValue={b.message} name="message" className="adminMessage" ></textarea>
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
