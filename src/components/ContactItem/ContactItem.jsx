// import React from 'react'
import "./ContactItem.css"
// eslint-disable-next-line react/prop-types
const ContactItem = ({title,info,icon}) => {
    return (
        <div className="col-md-3 col-lg-3 ftco-animate fadeInUp ftco-animated">
        <div className="align-self-stretch box p-4 text-center">
            <div className="icon d-flex align-items-center justify-content-center">
                <span className="icon-map-signs">{icon}</span>
            </div>
            <h3 className="mb-4">{title}</h3>
            <p>{info}</p>
        </div>
        </div>
  );
}

export default ContactItem
