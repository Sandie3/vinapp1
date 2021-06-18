import React, { useState } from 'react';
import Select from 'react-select';

import AdminBookings from "../components/AdminBookings";
import AdminBookings2 from "../components/AdminBookings2";
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
        padding: 10,
        borderBottom: '1px solid grey'
    })
}

const options = [
    { value: <AdminBookings2 />, label: 'View Bookings' },
    { value: <AdminBookings />, label: 'Search Bookings' },
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
