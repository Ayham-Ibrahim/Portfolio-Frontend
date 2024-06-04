// import React from 'react'
import './AboutMe.css'
import aboutimg from './../../assets/images/bg_1.png'
import { useEffect, useState } from 'react'
import axios from 'axios'
import SectionHeader from '../../components/SectionHeader/SectionHeader'

const AboutMe = () => {

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

  return (
    <div><section className="ftco-about img ftco-section ftco-no-pb" id="about-section">
    <div className="container">
      <div className="row d-flex">
        <div className="col-md-6 col-lg-5 d-flex">
          <div className="img-about img d-flex align-items-stretch">
            <div className="overlay"></div>
            <div className="img d-flex align-self-stretch align-items-center" style={{ backgroundImage: `url(${aboutimg})` }}>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-7 pl-lg-5 pb-3">
          <div className="row justify-content-start pb-3">
            <div className="col-md-12 heading-section ftco-animate fadeInUp ftco-animated">
              <SectionHeader header={"About Me"} desc={"A small river named Duden flows by their place and supplies it with the necessary regelialia."} />
              <ul className="about-info mt-4 px-md-0 px-2">
                <li className="d-flex"><span>Name:</span> <span>{response.name}</span></li>
                <li className="d-flex"><span>Date of birth:</span> <span>{response.birth_date}</span></li>
                <li className="d-flex"><span>Address:</span> <span>{response.address} - {response.city} - {response.country} </span></li>
                <li className="d-flex"><span>Zip code:</span> <span>1000</span></li>
                <li className="d-flex"><span>Email:</span> <span>{response.email}</span></li>
                <li className="d-flex"><span>Phone: </span> <span>{response.phone_number}</span></li>
              </ul>
            </div>
          </div>
          <div className="counter-wrap ftco-animate d-flex mt-md-3 fadeInUp ftco-animated">
            <div className="text">
              <p className="mb-4">
                <span className="number" data-number="120">120</span>
                <span>Project complete</span>
              </p>
              <p><a href={`http://127.0.0.1:8000${response.cv}`} className="btn btn-primary py-3 px-3" download target="_blank">Download CV</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section></div>
  )
}

export default AboutMe

