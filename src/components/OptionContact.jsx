const OptionContact = () => {
return (
    <div className="OptionContact">
            <div className="contactText">
                <h3>Name<span>*</span>:</h3>
                <input type="text" placeholder="Write your name..." /><br /><br />
                <h3>Email<span>*</span>:</h3>
                <input type="text" placeholder="Write your Email..." /><br /><br />
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
        </div>
    )
}

export default OptionContact;