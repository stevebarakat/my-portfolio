import React, { useState } from "react";
import Slider from "react-slick";
import FsLightbox from "fslightbox-react";
import * as Icon from "react-feather";
import Sectiontitle from "../components/Sectiontitle";
import Service from '../components/Service';
import Layout from "../components/Layout/Layout";
import Testimonial from '../components/Testimonial';
import {IoIosTrendingUp, IoIosColorPalette} from 'react-icons/io';
import { BsCodeSlash } from 'react-icons/bs';
function About(){
  const [toggler, setToggler] = useState(false);
  const information ={
    name: 'Devid Chester',
    aboutContent: "I am a frontend web developer. I can provide clean code and pixel perfect design. I also make website more & more interactive with web animations.",
    age: 24,
    phone: '',
    nationality: 'American',
    language: 'English, French',
    email: '',
    address: '121 King Street, Melbourne, Australia',
    freelanceStatus: 'Available',
    socialLinks: {
      facebook: 'https://facebook.com',
      twitter: 'https://twitter.com',
      pinterest: '',
      behance: '',
      linkedin: '',
      dribbble: '',
      github: 'https://github.com'
    },
    brandImage: '/images/brand-image.jpg',
    aboutImage: '/images/about-image.jpg',
    aboutImageLg: '/images/about-image-lg.jpg',
    cvfile: '/files/empty.pdf'
  };
  const services = [
    {
      title: "Web Design",
      icon: <IoIosColorPalette />,
      details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur ratione quod."
    },
    {
      title: "Web Development",
      icon: <BsCodeSlash />,
      details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur ratione quod."
    },
    {
      title: "Digital Marketing",
      icon: <IoIosTrendingUp />,
      details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur ratione quod."
    }
  ];

  const reviews = [
    {
      id: 1,
      content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita impedit nobis tempore quaerat quibusdam, aliquid maxime tempora.",
      author: {
        name: 'Burdette Turner',
        designation: 'Web Developer, Abc Company'
      }
    },
    {
      id: 2,
      content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita impedit nobis tempore quaerat quibusdam.",
      author: {
        name: 'Susan Yost',
        designation: 'Client'
      }
    },
    {
      id: 3,
      content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
      author: {
        name: 'Irving Feeney',
        designation: 'Fiverr Client'
      }
    }
  ];

  const sliderSettings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 6000,
    pauseOnHover: true,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
    ]
  };

  const handleToggler = (event) => {
    setToggler({
      toggler: event
    })
  }

  return (
    <Layout>
      <div className="mi-about-area mi-section mi-padding-top">
        <div className="container">
          <Sectiontitle title="About Me" />
          <div className="row">
            <div className="col-lg-6">
              <div className="mi-about-image">
                <img
                  src={information.aboutImage}
                  alt="about"
                  onClick={() => handleToggler(!toggler)}
                />
                <span className="mi-about-image-icon">
                  <Icon.ZoomIn />
                </span>
                <FsLightbox
                  toggler={toggler}
                  sources={[information.aboutImageLg]}
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="mi-about-content">
                <h3>
                  I am <span className="color-theme">{information.name}</span>
                </h3>
                <p>
                  I am a frontend web developer. I can provide clean code and
                  pixel perfect design. I also make website more & more
                  interactive with web animations.
                </p>
                <ul>
                  {!information.name ? null : <li>
                    <b>Full Name</b> {information.name}
                  </li>}
                  {!information.age ? null : <li>
                    <b>Age</b> {information.age} Years
                  </li>}
                  {!information.phone ? null : <li>
                    <b>Phone</b> {information.phone}
                  </li>}
                  {!information.nationality ? null : <li>
                    <b>Nationality</b> {information.nationality}
                  </li>}
                  {!information.language ? null : <li>
                    <b>Languages</b> {information.language}
                  </li>}
                  {!information.email ? null : <li>
                    <b>Email</b> {information.email}
                  </li>}
                  {!information.address ? null : <li>
                    <b>Address</b> {information.address}
                  </li>}
                  {!information.freelanceStatus ? null : <li>
                    <b>Freelance</b> {information.freelanceStatus}
                  </li>}
                </ul>
                <a href={information.cvfile} className="mi-button">Download CV</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mi-service-area mi-section mi-padding-top">
        <div className="container">
          <Sectiontitle title="Services" />
          <div className="mi-service-wrapper">
            <div className="row mt-30-reverse">
              {services.map(service => (
                <div className="col-lg-4 col-md-6 col-12 mt-30" key={service.title}>
                  <Service content={service}/>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="mi-review-area mi-section mi-padding-top mi-padding-bottom">
        <div className="container">
          <Sectiontitle title="Reviews" />
          <div className="row justify-content-center">
            <div className="col-12">
              <Slider className="mi-testimonial-slider" {...sliderSettings}>
                {reviews.map(review =>(
                  <Testimonial key={review.id} content={review}/>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default About;
