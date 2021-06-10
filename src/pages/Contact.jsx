<<<<<<< Updated upstream
import { Switch, Route, Fragment } from 'react'
import { BrowserRouter, Link } from 'react-router-dom'

import { postBooking } from '../apicall/bookings'

import ContactOption from '../components/OptionContact'
=======
import { Switch, Route } from 'react'
import { BrowserRouter as Router, Switch, Route, Link, useParams, useRouteMatch } from "react-router-dom";

import { postBooking } from '../apicall/bookings'

>>>>>>> Stashed changes

const Contact = () => {

    let { path, url } = useRouteMatch();
    
    
    
    return (
<<<<<<< Updated upstream
        <Fragment>
            <div className="Contact">
                <h1>Contact Information</h1><br /><br />
=======
    <Router>
        <div className="Contact">
            <h1>Contact Information</h1><br /><br />
>>>>>>> Stashed changes

                <p>Contact for booking, canceling, feedback and other. <br /><br />

                Via Messenger: m.me/bookvino<br /><br />

                Christian Kirkegaard:<br />
                ck@bookvino.com<br />
<<<<<<< Updated upstream
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
=======
                Mobile: +45 29 87 57 22<br /><br /> 
            </p>
            <div className="dropDown">
                <h3>Choose<span>*</span>:</h3>
                <div className="searchBarContainer">
                    <select name="" id="searchBarSelect">
                        <option value="0"><Link to={`${url}/message`}>Contact...</Link></option>
                        <option value="1"><Link to={`${url}/booking`}>Booking</Link></option>
                        <option value="2"><Link to={`${url}/cancel`}>Cancel</Link>Cancel</option>
                    </select>
>>>>>>> Stashed changes
                </div>

            </div>
<<<<<<< Updated upstream
        </Fragment>
=======
            <Switch>
                <Route path={`${path}/:page`}>
                    <stuff />
                </Route>
            </Switch>
                
        </div>
    </Router>
>>>>>>> Stashed changes
    )
}

export default Contact
