// import React from 'react'
import { useEffect, useState } from 'react';
import SectionHeader from '../../components/SectionHeader/SectionHeader'
import './Skills.css'
import axios from 'axios';
export default function Skills() {
    const [skills, setSkills] = useState([]);
    useEffect(()=>{
        axios.get('http://127.0.0.1:8000/api/skills')
        .then(res => {
            setSkills(res.data.data);
        })
    },[])
    return (
        <section className="ftco-section" id="skills-section">
            <div className="container">
                <SectionHeader header={"Skills"} desc={"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia"} />
                <div className="row">
                    {skills.map((skill,index)=>{
                        return(
                            <div className="col-md-6 animate-box" key={index}>
                                <div className="progress-wrap ftco-animate fadeInUp ftco-animated">
                                    <h3>{skill.title}</h3>
                                    <div className="progress">
                                        <div
                                            className="progress-bar color-1"
                                            role="progressbar"
                                            aria-valuenow={skill.avarage}
                                            aria-valuemin={0}
                                            aria-valuemax={100}
                                            style={{ width: `${skill.avarage}%` }}
                                        >
                                            <span>{skill.avarage}%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    
                    )}
                    
                </div>
            </div>
        </section>

    )
}
