import { useState, useEffect } from 'react'

import OptionContact from '../components/OptionContact'

const Contact = () => {

    const [form, setForm] = useState(0)
    const [showForm1, setShowForm1] = useState(form)
    const [showForm2, setShowForm2] = useState(form +1)
    const [showForm3, setShowForm3] = useState(form +2)


    console.log(form)

    if (form === 0){
        console.log(showForm1)
    }
    else if (form === '1') {
        console.log(showForm2)
    }
    else if (form === '2') {
        console.log(showForm3)
    }
    
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
                    <div onChange={(e) => setForm(e.target.value)} className="searchBarContainer">
                        <select name="" id="searchBarSelect">
                            <option value="0">Contact</option>
                            <option value="1">Booking</option>
                            <option value="2">Cancel</option>
                        </select>
                    </div>
                </div>
                <div>
                    {
                        showForm1 &&
                        <OptionContact />
                    }
                    {
                        showForm2 &&
                        <OptionContact />
                    }
                    {
                        showForm3 &&
                        <OptionContact />
                    }
                </div>
            </div>
        </>
    )
}

export default Contact
