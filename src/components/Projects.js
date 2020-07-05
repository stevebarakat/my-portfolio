import React from "react";
import TrackVisibility from "react-on-screen";
import ProjectPreview from '../components/ProjectPreview';
import FlipMove from 'react-flip-move';

function Projects({ portfolios }) {
  return (
    <div className="row mt-30-reverse">
      {portfolios.map((portfolio, id) => (
        <FlipMove key={id} className="col-lg-4 col-md-6 col-12 mt-30" duration={750} easing="ease-out">
          <TrackVisibility
            once
            offset={200}
            key={portfolio.id}
          >
            <ProjectPreview content={portfolio} />
          </TrackVisibility>
        </FlipMove>
      ))}
    </div>
  );
}

export default Projects;
