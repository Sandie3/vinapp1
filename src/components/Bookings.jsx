import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';



const Bookings = () => {

    const [date, setDate] = useState(new Date())

    const onChange = () => {
        setDate(date)
    }
    return (
        <div className="bookingOption">
            <div className="bookingText">
                <h3>Name<span>*</span>:</h3> <br />
                <input type="text" placeholder="Write your name..." /><br /><br />
                <h3>Email<span>*</span>:</h3><br />
                <input type="text" placeholder="Write your Email..." /><br /><br />

            </div>
            <div className="bookingChoose">
                <h3>Phone<span>*</span>:</h3><br />
                <input type="text" placeholder="Write your phone number..." /><br /><br />
                <h3>Choose winery<span>*</span>:</h3><br />
                <select name="Booking" id="selectBooking">
                    <option value="0">Winery1</option>
                    <option value="1">Winery2</option>
                    <option value="2">Winery3</option>
                </select><br /><br />


            </div>
            <div className="kalender">
                <Calendar onChange={onChange} value={date} />
            </div>
        
            <div className="bookOptionSubmit">
                <input type="submit" id="OptionSubmit" value="Book" />
            </div>
        </div>
    )
}

export default Bookings
