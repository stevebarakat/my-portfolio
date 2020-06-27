import React from "react";
import Layout from "../components/Layout/Layout";

function Home(){
  return (
    <Layout>
      <div className="mi-home-area mi-padding-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 col-12">
              <div className="mi-home-content">
                <h1>
                  Hi, I am <span className="color-theme">Steve Barakat</span>
                </h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia adipisci iure, quisquam delectus repudiandae nobis libero repellat molestiae? Ipsa quam commodi perferendis molestias maxime esse hic numquam, ut alias et!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Home;
