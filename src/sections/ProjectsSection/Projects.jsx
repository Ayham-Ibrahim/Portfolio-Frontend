import { useEffect, useState } from "react";
import ProjectCard from "../../components/ProjectCard/ProjectCard"
import "./Projects.css";
import ProjectDetails from "../../components/ProjectDetails/ProjectDetails";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
// import api from "../../api"; 
import axios from "axios";
const Projects = () => {
  const [modal, setModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [projects, setProjects] = useState([]);
  const toggleModal = (project) => {
    setSelectedProject(project)
    setModal(!modal);
  }

  useEffect(()=>{
    axios.get('http://127.0.0.1:8000/api/projects')
    .then(res => {
      setProjects(res.data.data);
    })
  },[])

  return (
    <>
      <div className="project-section ftco-section" id="projects-section">
          <div className="container">
          <SectionHeader header={"Projects"} desc={"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia"} />
              <div className="row"> 
                {projects.map((project,index)=>{
                  return (
                    <ProjectCard key={index} toggleModal={() => toggleModal(project)} project={project}/>
                  );
                })}
              </div>
          </div>
      </div>
      {modal && (
      <ProjectDetails toggleModal={toggleModal} project={selectedProject}/>
      )}
    </>
  )
}

export default Projects
