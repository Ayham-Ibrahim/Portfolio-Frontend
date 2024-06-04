// import React from 'react'
import "./Contact.css"
import ContactItem from "../../components/ContactItem/ContactItem"
import { FaMapSigns } from "react-icons/fa";
import { FaPhone,FaEarthAmericas  } from "react-icons/fa6";
import { BiLogoTelegram } from "react-icons/bi";
import ContactForm from "../../components/ContactForm/ContactForm";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import { useEffect, useState } from "react";
import axios from "axios";
// import ContactForm from "../../components/ContactForm/ContactForm";
const Contact = () => {

    
    const [response,setResponse] = useState(null);
    useEffect(()=>{
        axios.get('http://127.0.0.1:8000/api/userInfo/1')
        .then(res => {
        setResponse(res.data.data);
        })
    },[])

    if(!response){
        return null;
    }
    const contactInfo = [
        {   title:"Address",
            info:response.address,
            icon:<FaMapSigns />
        },
        {   title:"Contact Number",
            info:response.phone_number,
            icon:<FaPhone />
        },
        {    title:"Email Address",
            info:response.email,
            icon:<BiLogoTelegram />
        },
        {   title:"Website",
            info:response.website,
            icon:<FaEarthAmericas />
        },
    ];

    return (
        <div className="contact-section ftco-section" id="contact-section">
            <div className="container">
            <SectionHeader header={"Contact Me"} desc={"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia"} />
                <div className="row d-flex contact-info mb-5">
                    {contactInfo.map((item,index)=>{
                        return (
                            <ContactItem key={index} title={item.title} info={item.info} icon={item.icon}/>
                        );
                    })}
                </div>
                <div className="row no-gutters block-9 contact-form-section">
                    <ContactForm/>
                </div>
            </div>
        </div>
    )
}

export default Contact
