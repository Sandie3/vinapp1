import React from 'react'

const Cancel = () => {
    return (
        <div className="CancelOption">
            <div className="cancel1">
                <h3>Name<span>*</span>:</h3>
                <input type="text" placeholder="Write your name..." /><br /><br />
                <h3>Email<span>*</span>:</h3>
                <input type="text" placeholder="Write your Email..." /><br /><br />
            </div>
            <div className="cancel2">
                <h3>Phone<span>*</span>:</h3>
                <input type="text" placeholder="Write your phone number..." /><br /><br />                
                <h3>Write Booking number<span>*</span>:</h3>
                <input type="text" placeholder="Booking number..." /><br /><br />
            </div>
            <div className="checkboxCancel">
                <input type="checkbox" id="checkCancel" />
                <label htmlFor="checkCancel">Are you sure you want to cancel?</label>
            </div>
            <div className="cancelOptionSubmit">
                <input type="submit" id="OptionSubmit" value="Cancel" />
            </div>
        </div>
    )
}

export default Cancel
