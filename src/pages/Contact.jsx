import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
  } from "react-router-dom";

import { postBooking } from '../apicall/bookings'

import ContactOption from '../components/OptionContact'

const Contact = () => {

    let { path, url } = useRouteMatch();
    
    console.log(path, url)
    
    return (
        <>
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
                            <option value="0"><Link to={`${url}/message`}>Contact...</Link></option>
                            <option value="1"><Link to={`${url}/booking`}>Booking</Link></option>
                            <option value="2"><Link to={`${url}/cancel`}>Cancel</Link></option>
                        </select>
                    </div>

                </div>
                <Switch>
                    <Route exact path={path}>
                        <h3>Yo</h3>
                    </Route>
                    <Route path={`${path}/:page`}>
                        <ContactOption />
                    </Route>
                </Switch>
            </div>
        </>
    )
}

export default Contact
