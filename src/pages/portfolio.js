import React, { useState } from "react";
import Sectiontitle from "../components/Sectiontitle";
import { useStaticQuery, graphql } from "gatsby";
import Layout from "../components/Layout/Layout";
import Pagination from "../components/Pagination";
import PortfoliosView from "../components/PortfoliosView";

function Portfolios() {

  const data = useStaticQuery(graphql`
  {
    allWordpressAcfPages {
      nodes {
        acf {
          projects {
            client
            date
            description
            project_name
            link
            image {
              localFile {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
      group(field: id) {
        edges {
          node {
            id
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
    console.log(project.project_name)
    portfolios = [...portfolios,
      {
        id: id,
        title: project.project_name,
        subtitle: project.description,
        imageUrl: "/images/portfolio-image-1.jpg",
        largeImageUrl: ["/images/portfolio-image-1-lg.jpg"],
        url: 'https://dribbble.com'
      },
    ];
    return(portfolios);
  }
  )
console.log(portfolios);


  const [currentPage, setCurrentPage] = useState(1);
  const [portfoliosPerPage] = useState();


  const indexOfLastPortfolios = currentPage * portfoliosPerPage;
  const indexOfFirstPortfolios = indexOfLastPortfolios - portfoliosPerPage;
  const currentPortfolios = portfolios.slice(indexOfFirstPortfolios, indexOfLastPortfolios);

  const paginate = (e, pageNumber) => {
    e.preventDefault();
    setCurrentPage(pageNumber);
  }

  return (
    <Layout>
      <div className="mi-about mi-section mi-padding-top mi-padding-bottom">
        <div className="container">
          <Sectiontitle title="Portfolio" />
          <PortfoliosView portfolios={currentPortfolios} />
          {!(portfolios.length > portfoliosPerPage) ? null : (
            <Pagination
              className="mt-50"
              itemsPerPage={portfoliosPerPage}
              // totalItems={portfolios.length}
              paginate={paginate}
              currentPage={currentPage}
            />
          )}
        </div>
      </div>
    </Layout>
  );
}

export default Portfolios;
