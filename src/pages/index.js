import React from "react";
import { StyledParticles, paramConfig } from '../components/StyledParticles';
import { useStaticQuery, graphql } from "gatsby";

function Home() {
  const data = useStaticQuery(graphql`
  {
    wordpressSiteMetadata {
      description
      name
    }
  }
`)
const { name, description } = data.wordpressSiteMetadata;
  return (
    <>
      {/* <StyledParticles params={paramConfig} /> */}
      <div className="mi-home-area mi-padding-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 col-12">
              <div className="mi-home-content">
                <h1>
                  Hi, I am <span className="color-theme">{name}</span>
                </h1>
                <p>{description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
