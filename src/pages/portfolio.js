import React, { useState } from "react";
import Sectiontitle from "../components/Sectiontitle";
import { useStaticQuery, graphql } from "gatsby";
import Pagination from "../components/Pagination";
import PortfoliosView from "../components/PortfoliosView";

function Portfolios() {

  const data = useStaticQuery(graphql`
  {
    allWordpressAcfPages {
      nodes {
        acf {
          projects {
            image {
              source_url
              localFile {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
            description
            date
            client
            link
            project_name
            project_type {
              name
              slug
            }
            skills {
              name
              slug
            }
          }
        }
      }
    }
  }
`)

  const projects = data.allWordpressAcfPages.nodes[0].acf.projects;

  console.log(projects);
  let portfolios = [];

  projects.map((project, id) => {
    let largeImage = [];
    largeImage.push(project.image.localFile.childImageSharp.fluid);
    portfolios = [...portfolios,
    {
      id: id,
      title: project.project_name,
      subtitle: project.description,
      image: project.image.source_url,
      largeImage: largeImage,
      url: 'https://dribbble.com'
    },
    ];
    return (portfolios);
  }
  )
  console.log(portfolios);


  const [currentPage, setCurrentPage] = useState(1);
  const [portfoliosPerPage] = useState(3);


  const indexOfLastPortfolios = currentPage * portfoliosPerPage;
  const indexOfFirstPortfolios = indexOfLastPortfolios - portfoliosPerPage;
  const currentPortfolios = portfolios.slice(indexOfFirstPortfolios, indexOfLastPortfolios);

  const paginate = (e, pageNumber) => {
    e.preventDefault();
    setCurrentPage(pageNumber);
  }
  console.log(portfoliosPerPage);
  return (
    <div className="mi-about mi-section mi-padding-top mi-padding-bottom">
      <div className="container">
        <Sectiontitle title="Portfolio" />
        <PortfoliosView portfolios={currentPortfolios} />
        {!(portfolios.length > portfoliosPerPage) ? null : (
          <Pagination
            className="mt-50"
            itemsPerPage={portfoliosPerPage}
            totalItems={portfolios.length}
            paginate={paginate}
            currentPage={currentPage}
          />
        )}
      </div>
    </div>
  );
}

export default Portfolios;
