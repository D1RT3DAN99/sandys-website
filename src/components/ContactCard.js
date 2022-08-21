import React from 'react';
import './ContactCard.css';

const h1Style = {
    margin: '2rem 0' 
}


//onSubmit={sendEmail} add this to the fom tag once the email backend is done
function ContactCard() {
  return (
    <div className = "background">
    <div className="user-form">
            <form id="email-form">
                <h1 style={h1Style}>Contact Us</h1>
                <input type="text" id="name" name="name" placeholder="Please Enter Your Name" size="50" required></input>
                <br></br>
                <br></br>
                <input type="email" id="email" name="email" placeholder="Please Enter Your Email" size="50" required></input>
                <br></br>
                <br></br>
                <input type="text" id="subject" name="subject" placeholder="Please Enter the Subject of the Matter" size="50" required></input>
                <br></br>
                <br></br>
                <textarea id="complaint" name="complaint" placeholder="Please Tell Us What Was Wrong" rows="4" required></textarea>
                <br></br>
                <br></br>
                <button type="submit" className="submit">Send</button>
            </form>
    </div>
</div>
  )
}

export default ContactCard