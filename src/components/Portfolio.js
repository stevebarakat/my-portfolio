import React from "react";
import * as Icon from "react-feather";
import Img from 'gatsby-image';
import Modali, { useModali } from './Modali/Modali';

function Portfolio(props) {
  const { projectTitle, projectDescription, projectDate, projectSkills, projectImage, projectClient, projectLink } = props.content;
  const [modal, toggleModal] = useModali({
    animated: true,
    large: true,
    closeButton: true
  });

  return (
    <>
      <div className="mi-portfolio mi-portfolio-visible">
        <div className="mi-portfolio-image">
          <Img fluid={projectImage} style={{ zIndex: "-1", maxHeight: "100%", }} />
          <ul>
            {!projectImage ? null : <li>
              <button onClick={() => toggleModal()}>
                <Icon.ZoomIn />
              </button>
            </li>}
            {projectLink ? <li>
              <a rel="noopener noreferrer" target="_blank" href={projectLink}>
                <Icon.Link />
              </a>
            </li> : null}
          </ul>
        </div>
        <div className="project-titles">
          {!projectLink ? <h5>{projectClient}</h5> : <h5>
            <a rel="noopener noreferrer" target="_blank" href={projectLink}>
              {projectClient}
            </a>
          </h5>}
          {projectTitle ? <h6>{projectTitle}</h6> : null}
        </div>
      </div>

      <Modali.Modal {...modal}>
        <div className="single-project">
          <Img className="single-project-img" fluid={projectImage} />
          <div className="project-description">
            {/* <div className="project-title clearfix"> */}
              <h3>{projectTitle}</h3>
            {/* </div> */}
            <div className="project-info">
              <div><span>Client</span>{projectClient}</div>
              <div><span>Date</span>{projectDate}</div>
              <div><span>Skills</span>{projectSkills}</div>
              <div><span>Link</span><a href={projectLink}>View Project</a></div>
            </div>
            <p>{projectDescription}</p>
          </div>
        </div>
      </Modali.Modal>
    </>
  );
}

export default Portfolio;
