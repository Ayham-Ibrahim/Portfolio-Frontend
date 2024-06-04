/* eslint-disable react/prop-types */
import "./ProjectCard.css"
// eslint-disable-next-line react/prop-types
const ProjectCard = ({project,toggleModal}) => {
    if (!project) {
      // console.log(project);
      return <div>Loading...</div>; 
    }
    return (
        <div className="card" style={{ width: "18rem" }}>
          <img className="card-img-top" src={`http://127.0.0.1:8000${project.image}`} alt="Card image cap"></img>
          <div className="card-body">
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
            <div className="col-md-12 text-center card-button">
              <button href="#" className="btn" onClick={() =>toggleModal()}>Show Details</button>
            </div>
          </div>
        </div>
    );
}

export default ProjectCard
