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
            projectClient
            projectDescription
            projectLink
            projectName
            projectImage {
              localFile {
                childImageSharp {
                  fluid(maxWidth: 640) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
            projectDate
            projectType {
              name
              slug
            }
            projectSkills {
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
    portfolios = [...portfolios,
    {
      id: id,
      projectTitle: project.projectName,
      projectDescription: project.projectDescription,
      projectImage: project.projectImage.localFile.childImageSharp.fluid,
      projectLink: project.projectLink,
      projectClient: project.projectClient,
      projectDate: project.projectDate,
      projectType: project.projectType.slug,
      projectSkills: project.projectSkills.map(skill => `${skill.name}, `),
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
