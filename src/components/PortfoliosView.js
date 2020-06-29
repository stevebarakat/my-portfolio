import React from "react";
import TrackVisibility from "react-on-screen";
import Portfolio from '../components/Portfolio';
import FlipMove from 'react-flip-move';

function PortfoliosView({ portfolios }) {
  return (
    <div className="row mt-30-reverse">
      {portfolios.map((portfolio, id) => (
        <FlipMove key={id} className="col-lg-4 col-md-6 col-12 mt-30" duration={750} easing="ease-out">
          <TrackVisibility
            once
            offset={200}
            key={portfolio.id}
          >
            <Portfolio content={portfolio} />
          </TrackVisibility>
        </FlipMove>
      ))}
    </div>
  );
}

export default PortfoliosView;
