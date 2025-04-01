import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'

const Contact = () => {
    const [result, setResult] = React.useState("");
    const [showResult, setShowResult] = React.useState(false);


    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        setShowResult(true);
        const formData = new FormData(event.target);

        formData.append("access_key", "95864057-83e8-43c0-bf76-901bf2fe0571");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
        setTimeout(() => {
            setShowResult(false);
        }, 3000);
    };


    return (
        <div id='contact' className='contact'>
            <div className="contact-title">
                <h1>Get in touch</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="contact-section">
                <div className="contact-left">
                    <h1>Let's talk</h1>
                    <p>I'm currently available to take on new projects, so feel free to connect</p>
                    <div className="contact-details">
                        <div className="contact-detail">
                            <img src={mail_icon} alt="" /><p>rohitkumar253545@gmail.com</p>
                        </div>
                        <div className="contact-detail">
                            <img src={call_icon
                            } alt="" /><p>+91 9256401314</p>
                        </div>
                    </div>
                    <div className="contact-detail">
                        <img src={location_icon} alt="" /><p>India</p>
                    </div>

                </div>
                <form onSubmit={onSubmit} className="contact-right">
                    <label htmlFor="">Your Name</label>
                    <input type="text" placeholder='Enter your name' name='name' />
                    <label htmlFor="">Your Email</label>
                    <input type="email" placeholder='Enter your email' name='email' />
                    <label htmlFor=""> Write your Message here</label>
                    <textarea name="message" rows="8" placeholder='Enter your message'></textarea>
                    <div className="alert-message">
                        <button type='submit' className="contact-submit">Submit now</button>
                        {
                            showResult &&
                            <span className="result-message">{result}</span>}
                    </div>
                </form>
            </div>

        </div>
    )
}

export default Contact


