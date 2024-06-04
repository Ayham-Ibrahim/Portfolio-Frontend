// import React from 'react'
import { useState } from "react";
import image from "./../../assets/images/bg_1.png"
import "./ContactForm.css"
import axios from "axios";
// import axios from "axios";
const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        subject: '',
        email: '',
        body: '',
      });
      const [isSubmitted, setIsSubmitted] = useState(false);

      const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await axios.post('http://127.0.0.1:8000/api/messages', formData);
          setIsSubmitted(true); // Mark as submitted after successful post
        } catch (error) {
          console.error(error);
        }
      };


    return (
    <>
        <div className="col-md-6 order-md-last d-flex pl-0 form">
            <form action="#" className="bg-light p-4 p-md-5 contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <input type="text" className="form-control" name="name" placeholder="Your Name" onChange={handleChange}/>
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" name="email" placeholder="Your Email" onChange={handleChange}/>
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" name="subject" placeholder="Subject" onChange={handleChange}/>
                </div>
                <div className="form-group">
                    <textarea name="body" id="" cols="30" rows="7" className="form-control" placeholder="Message" onChange={handleChange}></textarea>
                </div>
                <div className="form-group">
                    <button type="submit" className={`btn btn-primary py-3 px-5 ${isSubmitted? 'disabled' : ''}`}>Send Message</button>
                </div>
            </form>
        </div>
        <div className="col-md-6 d-flex img">
            <img className="form-image" src={image}></img>
        </div>
    </>
    );
}

export default ContactForm


