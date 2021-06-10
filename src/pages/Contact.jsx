import { Switch, Route, Fragment } from 'react'
import { BrowserRouter, Link } from 'react-router-dom'

import { postBooking } from '../apicall/bookings'

import ContactOption from '../components/OptionContact'

const Contact = () => {
    return (
        <Fragment>
            <div className="Contact">
                <h1>Contact Information</h1><br /><br />

                <p>Contact for booking, canceling, feedback and other. <br /><br />

                Via Messenger: m.me/bookvino<br /><br />

                Christian Kirkegaard:<br />
                ck@bookvino.com<br />
                Mobile: +45 29 87 57 22<br /><br />
                </p>
                <div className="dropDown">
                    <h3>Choose<span>*</span>:</h3>
                    <div className="searchBarContainer">
                        <select name="" id="searchBarSelect">
                            <option value="0"><Link to="/">Contact</Link></option>
                            <option value="0">Booking</option>
                            <option value="0">Cancel</option>
                        </select>
                    </div>
                </div>

            </div>
        </Fragment>
    )
}

export default Contact
