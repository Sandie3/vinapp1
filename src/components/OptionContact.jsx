import React, { useState} from 'react';

const OptionContact = () => {

    const [isValid, setIsValid] = useState(false);
    const [message, setMessage] = useState('');

    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const validateEmail = (event) => {
        const email = event.target.value;

        if (emailRegex.test(email)) {
            setIsValid(true);
            setMessage('Your email looks good!');
        } else {
            setIsValid(false);
            setMessage('Please enter a valid email!');
        }

        if (email === '') setMessage('');

    };


    return (
        <div>
            <form action="#" className="OptionContact">
                <div className="contactText">
                    <h3>Name<span>*</span>:</h3>
                    <input type="text" placeholder="Write your name..." /><br /><br />
                    <h3>Email<span>*</span>:</h3>
                    <input type="email" placeholder="Write your Email..." id="email" onChange={validateEmail}/><br /><br />
                    <div className={`message ${isValid ? 'success' : 'error'}`}>
                        {message}
                    </div>
                    <h3>Phone<span>*</span>:</h3>
                    <input type="text" placeholder="Write your number..." />
                </div>
                <div className="contactTextArea">
                    <h3>Message<span>*</span>:</h3>
                    <textarea placeholder="Write your message..." rows="8.5" cols="25"></textarea><br /><br />
                </div>
                <div className="OptionContactSubmit">
                    <input type="submit" id="OptionSubmit" value="Submit" />
                </div>
            </form>
        </div>
    )
}

export default OptionContact;