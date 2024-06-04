import axios from "axios";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import "./Resume.css";
import { useEffect, useState } from "react";
// import SectionHeader from "../../components/SectionHeader/SectionHeader"
const ResumeSection = () => {

  const [resumes, setResumes] = useState([]);
    useEffect(()=>{
        axios.get('http://127.0.0.1:8000/api/resume')
        .then(res => {
          setResumes(res.data.data);
        })
    },[])
  return (
    <section className="ftco-section" id="resume-section">
      <div className="container">
      <SectionHeader header={"Resume"} desc={"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia"} />
        <div className="row">
          {resumes && resumes.map((resume,index)=>  {
            return (
              <div className="col-md-6" key={index}>
                <div className="resume-wrap ftco-animate">
                  <span className="date">{resume['from-date']} to {resume['to-date']}</span>
                  <h2>{resume['title']}</h2>
                  <span className="position">{resume['institute']}</span>
                  <p className="mt-4">
                    {resume['description']}
                  </p>
                </div>
              </div>
              
            )}
          )}
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
