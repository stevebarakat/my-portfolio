import React, { useEffect, useState } from 'react'
import LightboxModal from './LightboxModal';
import * as Icon from "react-feather";
import Img from 'gatsby-image';

const ModalContainer = ({ projectLink, projectImage, showModal }) => (
    <>
      <LightboxModal projectImage={projectImage} showModal={showModal} />
    </>
  );

export default ModalContainer;
