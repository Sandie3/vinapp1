import React, { useState } from 'react';
import Select from 'react-select';

import Bookings from "../components/Bookings";
import OptionContact from "../components/OptionContact";
import Cancel from "../components/Cancel";

const customStyles = {
    container: (provided) => ({
        ...provided,
        width: '90%',
        margin: '0 auto',
    }),
    menu: (provided) => ({
        ...provided,
        width: '100%',
        padding: 20,
    }),
    option: (provided) => ({
        ...provided,
        padding: 10
    })
}

const options = [
    { value: <OptionContact />, label: 'Contact' },
    { value: <Bookings />, label: 'Booking' },
    { value: <Cancel />, label: 'Cancel booking' },
]

const Contact = () => {

    const [selectedOption, setSelectedOption] = useState(options[0]);

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
                        <Select
                            styles={customStyles}
                            defaultValue={selectedOption}
                            onChange={setSelectedOption}
                            options={options}
                        />
                        {selectedOption.value}
                    </div>
                </div>
                <div>
                </div>
            </div>
        </>
    )
}

export default Contact
