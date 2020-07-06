import React, { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import Img from 'gatsby-image';
import { Link } from 'gatsby';
import * as Icon from "react-feather";

const backdrop = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
}

const modal = {
  hidden: { y: "-100vh", opacity: 0 },
  visible: {
    y: "200px",
    opacity: 1,
    transition: { delay: 0.5 }
  },
}

const LightboxModal = ({ 
  toggleModal, 
  modalShowing, 
  projectImage, 
  projectTitle, 
  projectLink, 
  projectDescription, 
  projectDate, 
  projectSkills, 
  projectClient 
}) => {
  
  const handleDocumentClick = e => {
    // return element object or null
    const isClosest = e.target.closest(`[id=lbxMdl]`);
    console.log(isClosest);
    if (modalShowing && !isClosest) {
      toggleModal()
    }
  };
  
  useEffect( () => {
    document.addEventListener('click', e => handleDocumentClick(e));
    return (document.removeEventListener('click', handleDocumentClick));
  },[handleDocumentClick])
  
  return (
    <AnimatePresence>
      { modalShowing && (
        <motion.div className="backdrop"
          variants={backdrop}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <motion.div
            className="modal"
            variants={modal}
          >
            <button onClick={ () => toggleModal() }>&times;</button>
            
            <div id="lbxMdl" className="single-project">
              <Img className="single-project-img" fluid={projectImage} />
              <div className="project-description">
                <h3>{projectTitle}</h3>
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
