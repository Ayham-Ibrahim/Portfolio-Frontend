/* eslint-disable react/prop-types */
import "./ProjectDetails.css"
import { FaGithub } from "react-icons/fa";
import { IoIosLink } from "react-icons/io";


// eslint-disable-next-line react/prop-types
const ProjectDetails = ({toggleModal , project }) => {
  return (
    <div className="modal" id="exampleModalCenter" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered" role="document">
      <div className="modal-content">
        <div className="modal-header">
          {/* <h5 className="modal-title" id="exampleModalLongTitle">Modal title</h5> */}
          <button type="button" className="btn close" onClick={()=>{toggleModal()}}>
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <img className="modal-image" src={`http://127.0.0.1:8000${project.image}`}></img>
        <div className="modal-body">
          <div className="tags">
          {Array.isArray(project.skills) && project.skills.map((skill, index) => (
              <span className="tag" key={index}>{skill.title}</span>
            ))}
          </div>
          <h5 className="card-title">{project.title}</h5>
          <span className="date">{project.date}</span>
          <p className="card-text">
           {project.description}
          </p>
        </div>
        <div className="modal-footer">
          <a className="github-icon" data-dismiss="modal" href={project.github_repo} target="_blank"><FaGithub /></a>
          <a className="link-icon" href={project.link} target="_blank"><IoIosLink /></a>
        </div>
      </div>
    </div>
  </div>
  );
}

export default ProjectDetails
