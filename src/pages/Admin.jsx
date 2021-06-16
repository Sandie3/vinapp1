import React, { useState } from 'react';
import Select from 'react-select';

import AdminBookings from "../components/AdminBookings";
import AdminWineries from "../components/AdminWineries";


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
