import React from 'react'

const AdminBookings = () => {
    return (
        <>
            <input type="search" name="" id="adminSearch" className="adminSearch"/>
            <div className="adminBookings">
                <div className="adminBook">
                    <input type="text" name="" className="adminBookingNR" placeholder="Booking Number"/>
                    <input type="text" name="" className="adminEmail" placeholder="Email"/>
                    <input type="text" name="" className="adminName" placeholder="Name"/>
                    <input type="text" name="" className="adminDate" placeholder="Date"/>
                    <input type="text" name="" className="adminPhoneNR" placeholder="Phone Number"/>
                    <button className="adminEditBooking">E</button>
                    <button className="adminDelBooking">X</button>
                </div>





                
            </div>
        </>
    )
}

export default AdminBookings
