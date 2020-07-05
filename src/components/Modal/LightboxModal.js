import React from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import Img from 'gatsby-image';
import * as Icon from "react-feather";

const backdrop = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 }
}

const modal = {
  hidden: {
    y: "-100vh",
    opacity: 0
  },
  visible: {
    y: "20%",
    opacity: 1,
    transition: { delay: 0.5 }
  },
}

const LightboxModal = ({ showModal, toggleModal, projectImage, projectTitle, projectLink, projectDescription, projectDate, projectSkills, projectClient }) => {
  return (
    <AnimatePresence exitBeforeEnter>
      {/* <div className="mi-portfolio mi-portfolio-visible">
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
      </div> */}
      {showModal && (
        <motion.div className="backdrop"
          variants={backdrop}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <motion.div
            variants={modal}
            className="modal"
          >
            <button onClick={toggleModal}>&times;</button>
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
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default LightboxModal
