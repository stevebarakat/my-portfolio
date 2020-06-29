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
              source_url
            }
            large_image {
              source_url
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
  let largeImageUrl = [];
  largeImageUrl.push(project.large_image.source_url);
    portfolios = [...portfolios,
      {
        id: id,
        title: project.project_name,
        subtitle: project.description,
        imageUrl: project.image.source_url,
        largeImageUrl: largeImageUrl,
        url: 'https://dribbble.com'
      },
    ];
    return(portfolios);
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
    <Layout>
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
    </Layout>
  );
}

export default Portfolios;
