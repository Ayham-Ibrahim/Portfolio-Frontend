// import React from 'react'
import './Hero.css'
import Button from '../../components/Button/Button'
import { useEffect, useState } from 'react'
import axios from 'axios'

export const Hero = () => {
   const [response , setResponse]=useState(null);

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/userInfo/1`)
      .then(res => {
        setResponse(res.data.data);
      })
      .catch(error => {
        console.error("Failed to load data", error);
    });
    }, [])

    if(!response){
        return null;
    }
  return (

    <>
        <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div style={{backgroundImage: `url(http://127.0.0.1:8000${response.second_image})`}} className="carousel-item carousel-item1 active">
                    <div className='carousel-caption'>
                        <span  className='sp'>
                            HELLO!
                        </span>
                        <h1>I`m <span>{response.name}</span></h1>
                        <h2>A Freelance {response.job_title}</h2>

                        <div className='buttons d-flex'>
                            <button className='btn warning'> her me </button>
                            <button className='btn'>my work</button>
                        </div>
                    </div>
                </div>

                <div style={{backgroundImage: `url(http://127.0.0.1:8000${response.first_image})`}} className="carousel-item carousel-item2">
                    <div className='carousel-caption'>
                        <span className='sp'>HELLO!</span>
                        <h1> I`m a <span>{response.job_title}</span> based in London </h1>
                        <div className='buttons d-flex'>
                            <Button text='her me'/>
                            <button className='btn'>my work</button>
                        </div>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    </>
  )
}
