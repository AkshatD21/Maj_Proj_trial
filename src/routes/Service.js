import React from 'react';
import AboutImg from "../assets/night.jpg";
import Footer from '../components/Footer';
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import ServicePage from '../components/ServicePage';

const Service = () => {
  return (
    <div>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={AboutImg}
        title="Service"
        btnClass="hide"
      />
      <ServicePage />
      <Footer />
    </div>
  )
}

export default Service;