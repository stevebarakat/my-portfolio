import React, { useState } from "react";
import * as Icon from "react-feather";
import Img from 'gatsby-image';
import Modali, { useModali } from './Modali/Modali';

function Portfolio(props) {
  const [toggler, setToggler] = useState(false);
  const { title, subtitle, image, largeImage, url } = props.content;
  const [modal, toggleModal] = useModali({
    animated: true,
    large: true,
    closeButton: true
  });

  return (
    <>
      <div className="mi-portfolio mi-portfolio-visible">
        <div class="mi-portfolio-image">
          <img src={image} alt={title} />
          <ul>
            {!image ? null : <li>
              <button onClick={() => toggleModal()}>
                <Icon.ZoomIn />
              </button>
            </li>}
            {url ? <li>
              <a rel="noopener noreferrer" target="_blank" href={url}>
                <Icon.Link />
              </a>
            </li> : null}
          </ul>
        </div>
        {!url ? <h5>{title}</h5> : <h5>
          <a rel="noopener noreferrer" target="_blank" href={url}>
            {title}
          </a>
        </h5>}
        {subtitle ? <h6>{subtitle}</h6> : null}

      </div>

      <Modali.Modal {...modal}>
        
        <Img fluid={largeImage} />
      </Modali.Modal>
      </>
  );
}

export default Portfolio;
