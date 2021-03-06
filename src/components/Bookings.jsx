import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { postBooking } from "../apicall/bookings"
import { getWinerie } from "../apicall/wineries"


const Bookings = () => {

    //state til svar fra api
    const [bookingData, setBookingData] = useState()
    const [error, setError] = useState()
    const [booking, setBooking] = useState()
    const [date, setDate] = useState(new Date());
    const [isValid, setIsValid] = useState(false);
    const [message, setMessage] = useState('');

    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const validateEmail = (event) => {
        const email = event.target.value;
        if (emailRegex.test(email)) {
            setIsValid(true);
            setMessage('Your email looks good!');
        } else {
            setIsValid(false);
            setMessage('Please enter a valid email!');
        }
        
        if (email === '') setMessage('');
    };

    

    function onChange(nextValue) {
        setDate(nextValue);
    }

    // Funktion som sender input til apikald (som sender til api'et)
    const handleSubmit = (e) => {

        e.preventDefault(); // forhindrer reload af siden 

        //pak todo ind i formdata til api
        const formdata = new FormData(e.target)

        postBooking(formdata).then(data => {
            setBookingData(data);
            setError(); // tøm fejlbesked, hvis der har været en fejl og fejlen nu er løst
            e.target.reset()
        }).catch(err => {
            console.log(err)
            setError("Der er sket en fejl!")
            setBookingData()
        })
    }

    const [win, setWin] = useState()
    const [errorW, setErrorW] = useState()

    useEffect(() => {
        getWinerie().then(data => {
            setWin(data);
            setErrorW()
        }).catch(err => {
            setWin()
            setErrorW(err)
            console.log(err)
        })
    }, [])

    const getRandomInt = (min = 0, max = 100) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    useEffect(() => {
        generateRandom()
    }, [])

    const generateRandom = () => {
        const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        let number = '';
        for (let i = 0; i < 12; i++) {
            number += possible.charAt(getRandomInt(0, possible.length));
        }
        return setBooking(number);
    }

    return (
        <div >
            <form onSubmit={handleSubmit} className="bookingOption">
                <div className="bookingText">
                    <h3>Name<span>*</span>:</h3>
                    <input type="text" placeholder="Write your name..." name="name" /><br /><br />
                    <h3>Email<span>*</span>:</h3>
                    <input type="email" placeholder="Write your Email..." name="email" onChange={validateEmail} /><br /><br />
                    <div className={`message ${isValid ? 'success' : 'error'}`}>
                        {message}
                    </div>
                    <input type="text" name="booking" value={booking} style={{ display: 'none' }} /><br /><br />
                    <input type="text" name="bookingDate" value={date} style={{ display: 'none' }} /><br /><br />

                </div>
                <div className="bookingChoose">
                    <h3>Phone<span>*</span>:</h3>
                    <input type="text" placeholder="Write your phone number..." name="phone" /><br /><br />
                    <h3>Choose winery<span>*</span>:</h3>
                    <select name="winerie" id="selectBooking">
                        {
                            win &&
                            <>
                                {
                                    win.map((w, i) => {
                                        return (
                                            <option key={i} value={w.name} >{w.name}</option>
                                        )
                                    })
                                }
                            </>
                        }
                        {
                            errorW &&
                            <>
                                <option value="0" >{errorW}</option>
                            </>
                        }
                        {/* <option value="0">Winery1</option>
                        <option value="1">Winery2</option>
                        <option value="2">Winery3</option> */}
                    </select><br /><br />
                </div>
                <div className="kalender">
                    <Calendar
                        onChange={onChange}
                        defaultValue={date}
                        // returnValue="range"
                        minDate={new Date()}
                    // name="bookingDate"
                    />
                    {console.log(date)}
                </div>
                <div className="checkboxBook">
                    <input type="checkbox" id="checkBooking" name="Check" />
                    <label htmlFor="checkBooking">Are you sure you want to book this date?</label>
                </div>
                <div className="bookOptionSubmit">
                    <input type="submit" id="OptionSubmit" value="Book" />
                </div>
            </form>
        </div>
    )
}

export default Bookings
