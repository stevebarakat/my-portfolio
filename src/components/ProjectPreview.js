import React, { useState } from "react";
import * as Icon from "react-feather";
import Img from 'gatsby-image';
import LightboxModal from './LightboxModal';

function ProjectPreview(props) {
  const { projectTitle, projectImage, projectClient, projectLink, projectDescription, projectDate, projectSkills } = props.content;
  const [modalShowing, setModalShowing] = useState(false);
  const toggleModal = () => setModalShowing(!modalShowing);

  const handleDocumentClick = e => {
    const isClosest = e.target.closest(`[id=lbxMdl]`);
    console.log(isClosest)
    if (modalShowing && !isClosest) {
      toggleModal();
    }
  };

  return (
    <>
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
      <LightboxModal
        toggleModal={toggleModal}
        modalShowing={modalShowing}
        projectLink={projectLink}
        projectImage={projectImage}
        projectTitle={projectTitle}
        projectDescription={projectDescription}
        projectDate={projectDate}
        projectSkills={projectSkills}
        projectClient={projectClient}
      />
    </>
  );
}

export default ProjectPreview;
