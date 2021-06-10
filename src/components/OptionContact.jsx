import React from 'react'
import { useParams } from "react-router-dom";


const OptionContact = () => {
    let { page } = useParams();
    return (
        <div className="OptionContact">
            <h1>{page}</h1>
            <div className="contactText">
                <h3>Name<span>*</span>:</h3> <br />
                <input type="text" placeholder="Write your name..." /><br /><br />
                <h3>Email<span>*</span>:</h3><br />
                <input type="text" placeholder="Write your Email..." /><br /><br />
                <h3>Phone<span>*</span>:</h3><br />
                <input type="text" placeholder="Write your phone number..." />
            </div>
            <div className="contactTextArea">
                <h3>Message<span>*</span>:</h3><br />
                <input type="textarea" placeholder="Write your message..." /><br /><br />
            </div>
            <div className="OptionContactSubmit">
                <input type="submit" id="OptionSubmit" value="Submit" />
            </div>
        </div>
    )
}

export default OptionContact
