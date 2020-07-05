import React, { useState } from "react";
import * as Icon from "react-feather";
import Img from 'gatsby-image';
import ModalContainer from './Modal/ModalContainer';

function ProjectPreview(props) {
  const { projectTitle, projectImage, projectClient, projectLink } = props.content;
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => setShowModal(!showModal);

  return (
    <>
      <div className="mi-portfolio mi-portfolio-visible">
      <div className="mi-portfolio mi-portfolio-visible">
        <div className="mi-portfolio-image">
          <Img fluid={projectImage} />
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
      <ModalContainer showModal={showModal} projectLink={projectLink} projectImage={projectImage} />
    </>
  );
}

export default ProjectPreview;
