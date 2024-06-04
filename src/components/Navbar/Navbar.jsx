
import './Navbar.css'

export const Navbar = () => {

  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">CLARK</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="list navbar-nav mb-2 mb-lg-0">
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#about-section" >About</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#skills-section">Skills</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#resume-section"> Resume </a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#services-section">Services  </a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#projects-section">Projects</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#contact-section">Contact</a>
                    </li>
            
                </ul>
                
                </div>
        </div>
    </nav>
    </div>
  )
}
