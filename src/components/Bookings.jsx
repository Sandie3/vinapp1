import React from 'react'

const Bookings = () => {
    return (
        <div className="bookingOption">
            <div className="bookingText">
                <h3>Name<span>*</span>:</h3> <br />
                <input type="text" placeholder="Write your name..." /><br /><br />
                <h3>Email<span>*</span>:</h3><br />
                <input type="text" placeholder="Write your Email..." /><br /><br />
                <h3>Phone<span>*</span>:</h3><br />
                <input type="text" placeholder="Write your phone number..." />
            </div>
            <div className="Winery">
                <h3>Choose winery<span>*</span>:</h3><br />
                <select name="Booking" id="selectBooking">
                    <option value="0">Winery1</option>
                    <option value="1">Winery2</option>
                    <option value="2">Winery3</option>
                </select><br /><br />


            </div>
            <div className="OptionBookSubmit">
                <input type="submit" id="OptionSubmit" value="Book" />
            </div>
        </div>
    )
}

export default Bookings
