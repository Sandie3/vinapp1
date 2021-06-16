import React, { useState } from 'react';
import Select from 'react-select';

import AdminBookings from "../components/AdminBookings";
import AdminWineries from "../components/AdminWineries";

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
    { value: <AdminBookings />, label: 'View Bookings' },
    { value: <AdminWineries />, label: 'Add Wineries' },
]

const Admin = () => {

    const [selectedOption, setSelectedOption] = useState(options[0]);

    return (
        <>
            <h2 className="adminHeadline">Admin Page</h2>
            <Select
                styles={customStyles}
                defaultValue={selectedOption}
                onChange={setSelectedOption}
                options={options}
            />
            <div className="adminComponents">
                {selectedOption.value}
            </div>
        </>
    )
}

export default Admin
